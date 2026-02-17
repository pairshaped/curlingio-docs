---
slug: bilingual-by-design
title: 'Bilingual by Design'
authors: [dave]
tags: [foundation, i18n, gleam, architecture]
---

Curling IO serves hundreds of clubs across Canada, where English and French aren't optional, they're official languages. A club in Quebec needs a fully French experience. A national organization like Curling Canada needs both. Rails has mature i18n support and Version 2 has been fully bilingual from the start, but after a decade of maintaining around 10,000 YAML translation keys, we've hit the limits of what that approach can catch: missing keys, missing translations, and unused keys that accumulate silently over time.

In Version 3, we wanted compile-time guarantees that make those problems impossible. This post covers how we designed the i18n system, why we split it into two layers, and what we changed from Version 2.

<!--truncate-->

## Two Kinds of Text, Two Different Systems

Every bilingual web application has two fundamentally different kinds of text:

1. **App labels**: static UI strings like "Leagues", "Contact", "Email". These are written by developers and change at deploy time.
2. **Content**: user-entered data like league names, summaries, and descriptions. These are entered by club managers and may change at any time.

| | App Labels | Content |
|---|---|---|
| **Who writes it** | Developers | Club managers |
| **When it changes** | At deploy time | At any time |
| **Where it lives** | Compiled code | Database |
| **Scope** | Global (all clubs) | Per-record |

In Version 2, app labels came from Rails i18n YAML files loaded at boot, and content was stored in per-language database columns (`name_en`, `name_fr`, `summary_en`, `summary_fr`). This worked, but had pain points we wanted to address.

## What Version 2 Taught Us

**The YAML files grew unwieldy.** Over the years, our `en.yml` and `fr.yml` files accumulated thousands of keys each. Finding unused keys was a manual process. Ensuring every English key had a French counterpart required discipline that occasionally slipped, resulting in untranslated UI elements showing up in production as blank strings or key paths like `en.registrations.confirm_button`.

**Per-language columns didn't scale.** The `leagues` table in Version 2 has `name_en`, `name_fr`, `summary_en`, `summary_fr`, `description_en`, `description_fr`, `post_registration_message_en`, `post_registration_message_fr`, `required_reading_en`, `required_reading_fr`. That's 10 columns just for translated text on one table. Every new translatable field requires a migration adding two columns. If we ever added a third language, it would mean another column for every translatable field on every table.

**Blank vs. missing was ambiguous.** When `name_fr` was empty, did the manager intentionally leave it blank, or did they just not get around to translating it? The system couldn't tell the difference.

## Version 3: App Label Translations

App labels are compiled directly into the application. No database, no YAML files, no runtime file loading. Just Gleam code.

The structure is simple:

```
translations/keys.gleam   constants for every key
translations/en.gleam     English values
translations/fr.gleam     French values
translations.gleam        builds the lookup, provides t()
```

**Key constants** are `pub const` values in `keys.gleam`. This is extra code we've added specifically to get compile-time correctness. Every key used in a page or language file references these constants, so a misspelled key is a compile error rather than a silent runtime bug:

```gleam
pub const leagues = "leagues"
pub const contact = "contact"
pub const email_label = "email_label"
```

Notice these are flat, no nesting. In Version 2, Rails i18n keys were nested by namespace (`en.registrations.confirm_button`, `en.leagues.index.title`, etc.). In practice, the nesting added complexity without much benefit: keys were harder to grep for, reorganizing namespaces meant touching multiple files, and deeply nested YAML was error-prone to edit. Flat keys are simpler to search, simpler to maintain, and work just as well with thousands of entries.

**Language files** map those constants to translated values:

```gleam
// en.gleam
#(k.leagues, "Leagues"),
#(k.contact, "Contact"),
#(k.email_label, "Email"),

// fr.gleam
#(k.leagues, "Ligues"),
#(k.contact, "Contact"),
#(k.email_label, "Courriel"),
```

At startup, `translations.build()` assembles these into a nested dictionary (outer key is language code, inner key is translation key). This dictionary gets stored in the application context and threaded into every request. Lookup is two hash table reads, effectively instant.

**In pages**, we partial-apply the lookup function for the current language:

```gleam
let t = t.t(rc.translations, rc.lang, _)

// Then just call t() with key constants
element.text(t(k.leagues))   // "Leagues" or "Ligues"
element.text(t(k.contact))  // "Contact" (same in both languages!)
```

This is clean, type-safe, and impossible to mess up at runtime. If a key is missing from a language file, the UI shows `"[missing: postal_code_label]"` so it's immediately clear something needs to be fixed. Much better than a silent blank.

### Catching Problems at Compile and Test Time

Using constants instead of raw strings means a typo like `t(k.legues)` is a compile error because the constant doesn't exist. That alone eliminates an entire class of bugs we dealt with in Version 2.

We also have a test that verifies every English key has a French counterpart and vice versa:

```gleam
pub fn should_have_same_keys_in_en_and_fr_test() {
  let en_keys = en.all() |> dict.keys() |> set.from_list()
  let fr_keys = fr.all() |> dict.keys() |> set.from_list()
  set.difference(en_keys, fr_keys) |> should.equal(set.new())
  set.difference(fr_keys, en_keys) |> should.equal(set.new())
}
```

Adding a key to English without adding it to French fails the test suite. No more discovering untranslated strings in production.

We also have a script that checks for keys defined but never actually used in any page or template (dead key detection). Between the compiler, the parity test, and the unused key checker, translation problems are caught long before they reach users.

Notice how small the test surface is. Because Gleam's type system handles so much at compile time, our tests focus on validating design decisions and business logic rather than guarding against runtime surprises. In Version 2 with Rails, a lot of test effort goes toward catching things that a type system would prevent: nil values, wrong argument types, missing method calls. In Gleam, the compiler handles all of that, so our translation tests are purely about the logic we actually care about: do all languages have the same keys? Does the fallback behavior work correctly?

## Version 3: Content Translations

Content translations (the user-entered data) take a different approach. Instead of per-language columns, each translatable table has a single `translations` JSON column:

```json
{"fr": {"name": "Ligue du lundi", "summary": "Résumé en français"}}
```

The primary language value lives in the regular column (`name`, `summary`). Only secondary language overrides go in the JSON. This means:

- **Primary language reads are free.** No JSON parsing needed, just read the column.
- **No translations? No overhead.** The column is `NULL`.
- **Adding translatable fields requires zero schema changes.** Just start putting the field name in the JSON.
- **Adding a third language is just another key in the JSON.** No migration needed.

The resolution logic is straightforward: if the user is viewing in the primary language, return the regular column. If they're viewing in a secondary language, look it up in the JSON. If it's not there, fall back to the primary language value. Every field degrades gracefully. A missing French translation shows the English text rather than nothing.

```gleam
// Parse once per record
let parsed = i18n.parse(league.data.translations)

// Resolve each field for the current language
let name = i18n.resolve(league.data.name, parsed, lang, primary_lang, "name")
```

This solves the blank-vs-missing ambiguity from Version 2: if a field isn't in the `translations` JSON, it simply hasn't been translated yet, and the primary language value is shown. No guessing.

## Language Routing

Language selection comes from the URL path, not cookies or browser headers. This keeps things deterministic and shareable. A French URL always shows French content:

- `/leagues` - primary language (no prefix)
- `/fr/leagues` - French (secondary language prefix)
- `/en/leagues` - redirects to `/leagues` (primary language never gets a prefix)

The router extracts the language from the first path segment, stores it in the request context, and every page and API handler downstream uses it. Clean, predictable, and great for SEO.

## What's Next

The i18n foundation is in place. As we build out more features (admin interfaces, registration flows, email notifications) we'll add keys to the app label system and the `translations` JSON column to more tables. The system is designed to scale to thousands of keys without any architectural changes.

---

*This is Part 2 of the Curling IO Foundation series. Next up: passwordless authentication and multi-email support.*

