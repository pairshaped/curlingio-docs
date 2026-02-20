# Passwordless Auth, Done Right

February 20, 2026 ·

<!-- -->

11 min read

![Dave Rapin](https://avatars.githubusercontent.com/u/1202?v=4)

Dave Rapin

Founder @ Curling IO

Curling IO has been passwordless since Version 2. No passwords to remember, no passwords to steal, no password reset flows. You enter your email, we send you a short-lived login code, and you're in. It's been working well for over a decade, and for Version 3 we're keeping the same approach while fixing some rough edges and adding multi-email support.

But first, let's talk about why we made this **controversial decision** in the first place.

## Why Not Passwords?[​](#why-not-passwords "Direct link to Why Not Passwords?")

The conventional wisdom is that passwords are the "real" way to authenticate and login links are a shortcut. We think it's the opposite. Passwords are the shortcut, and they create more problems than they solve. We're not alone. Slack, Notion, Medium, and Substack all use passwordless login links as their primary authentication method.

**Passwords get reused.** Study after study shows that most people reuse the same password across multiple sites. When any one of those sites gets breached, attackers try those credentials everywhere else. This isn't a theoretical risk. It happens constantly, and it's the number one way accounts get compromised. As an application developer, you can't control what your users do on other sites, but you inherit the risk.

**Passwords get phished.** A convincing fake login page can harvest credentials at scale. Login links are inherently resistant to phishing because there's no credential to hand over. The code is short-lived and tied to a specific email address.

**Passwords require just as much email verification.** Here's the thing people overlook: even with passwords, you still need to verify the user's email. Otherwise anyone can create an account with someone else's email address. So you end up building the same email verification flow that login links use, plus the password management on top of it. You're not avoiding email. You're adding a password layer on top of it.

**The industry agrees.** Look at what banks and other high-security sites do now: even after you enter your email and password, they send you a one-time code via text or email. Password alone isn't enough anymore, so they've added the exact same verification step we use. Some have a "remember this device for 2 weeks" checkbox, but in practice it rarely works. You log in an hour later after your session times out and they're sending you another code. It's not just frustrating. It reveals that the password itself has become a meaningless step. The one-time code is doing the actual authentication. The password is just theater you have to sit through before you get to the part that matters. We skip it entirely.

**Passwords add surface area.** With passwords, you need: secure hashing (bcrypt/argon2), a "forgot password" flow (which is itself a login link), password strength validation, brute force protection on the login form, and secure storage. Login links need rate limiting and token management too, but the overall surface area is smaller. There's no credential to store long-term, no password policy to enforce, and no "forgot password" flow to build since the login flow *is* the recovery flow.

**"But what about password managers?"** Password managers are great. They solve the reuse and phishing problems for users who use them. But most users don't. And for the curling club use case, where members log in a handful of times per season, asking them to set up and maintain a password manager is unrealistic. Login links meet users where they are.

## How Login Links Are Secure[​](#how-login-links-are-secure "Direct link to How Login Links Are Secure")

A login link is a short-lived code sent to your email. The security model rests on a simple assumption: if you can read email sent to that address, you control that address. This is the same assumption that password reset flows rely on, but we cut out the middleman.

Here's what makes the implementation secure:

**High-entropy tokens.** Each login code is drawn from a high-entropy space, but it doesn't need to be astronomical because of the next two points. The token generator uses Gleam's binary pattern matching to map cryptographically random bytes to an unambiguous alphabet:

```
pub fn generate_token() -> String {
  let alphabet_size = string.length(token_alphabet)
  crypto.strong_random_bytes(token_length)
  |> pick_chars(alphabet_size, "")
}

fn pick_chars(bytes: BitArray, alphabet_size: Int, acc: String) -> String {
  case bytes {
    <<b, rest:bits>> -> {
      let idx = b % alphabet_size
      let ch = string.slice(token_alphabet, idx, 1)
      pick_chars(rest, alphabet_size, acc <> ch)
    }
    _ -> acc
  }
}
```

**Aggressive rate limiting.** Authentication attempts are tightly rate limited across multiple layered time windows. Brute-forcing the token space is completely impractical. Each window is checked in sequence using Gleam's `use` syntax. If any window is exceeded, it short-circuits and returns the retry-after time without checking the rest:

```
pub fn check_verification_attempt(
  limiter: RateLimiter,
  email: String,
  now: Int,
) -> Result(Nil, Int) {
  let key = key_prefix <> string.lowercase(email)
  use _ <- result.try(check(limiter, key, attempts_per_minute, 60, now))
  use _ <- result.try(check(limiter, key, attempts_per_15_minutes, 900, now))
  use _ <- result.try(check(limiter, key, attempts_per_hour, 3600, now))
  check(limiter, key, attempts_per_day, 86_400, now)
}
```

**Short-lived.** Each code expires quickly. After verification, the token hash is cleared from the database. There's no window for replay attacks.

**Constant-time comparison.** We look up the email row first, then compare the submitted token hash against the stored hash using Gleam's `crypto.secure_compare`. This takes the same amount of time regardless of where the first mismatch occurs, preventing timing attacks that could leak information about partial matches. If the current token doesn't match, we check the previous token, not to log them in, but to return a specific error message guiding the user to check for a more recent email:

```
let hashes_match =
  crypto.secure_compare(
    bit_array.from_string(submitted_hash),
    bit_array.from_string(stored_hash),
  )

case hashes_match {
  True ->
    case row.token_expires_at {
      Some(expires_at) if expires_at > now ->
        complete_verification(conn, row, now)
      _ -> Error(ExpiredToken)
    }
  False ->
    case row.previous_token_hash {
      Some(prev_hash) -> {
        let prev_match =
          crypto.secure_compare(
            bit_array.from_string(submitted_hash),
            bit_array.from_string(prev_hash),
          )
        case prev_match {
          True -> Error(SupersededToken)
          False -> Error(InvalidToken)
        }
      }
      None -> Error(InvalidToken)
    }
}
```

Every branch returns a specific error variant, and the compiler ensures we handle all of them. No forgotten edge cases. The previous token never grants access. It only exists to give a better error message than a generic "invalid token."

**No credential storage.** There are no passwords in our database. In a breach scenario, attackers get token hashes that are short-lived. Compare that to a password database where every hash is a target for offline cracking.

It's also worth noting that the main vulnerability of login links is a compromised email account. But if someone's email is compromised, they have much bigger problems than their Curling IO profile. And a password-based system is equally vulnerable in that scenario. The attacker just clicks "forgot password" and they're in.

The bottom line: login links are not a weaker form of authentication. For our use case, they're stronger. They eliminate entire categories of attacks (credential stuffing, phishing, password spraying) while being simpler for both users and developers.

## Takeaways from Version 2[​](#takeaways-from-version-2 "Direct link to Takeaways from Version 2")

Version 2's login link flow is straightforward: enter your email, get a code, enter the code, you're in. It works. But after a decade and hundreds of thousands of users, a few pain points emerged.

**One email, one identity.** In Version 2, your email *is* your identity. Log in with a different email, you get a different account. This has been a real source of confusion. A club manager registers with their work email, then tries to log in from their phone with their personal email, and they're looking at an empty account. We'd get support requests about "missing registrations" that were really just the same person with two accounts.

**Unhelpful error messages.** This one came up a lot. A curler would request a login link, wait a minute or two, not see the email, and request another one. The first email was usually just delayed. Many email clients only check for new mail every 5 to 15 minutes. When the first email finally arrived and they clicked it, they'd get a generic "invalid token" error because the second request had replaced the first. They'd wonder if they mistyped something, try again, get confused, and contact support.

## Version 3 Adds Multiple Email Addresses[​](#version-3-adds-multiple-email-addresses "Direct link to Version 3 Adds Multiple Email Addresses")

This is the big addition. Users can now associate multiple verified email addresses with their account:

**Add an email.** From the account page, enter a new email address. We send a verification code using the same mechanism as login.

**Verify it.** Enter the code. The email is now linked to your account and marked as verified. Unverified emails can't be used for anything.

**Set it as primary.** Any verified email can be promoted to primary. Your primary email is what shows up across the platform, in admin dashboards, on team rosters, in email communications. Changing your primary is a single click.

**Remove it.** Non-primary emails can be removed. You can't remove your primary (switch to a different one first) and you can't remove your last verified email (you need at least one to log in).

**Log in with any of them.** This is the key benefit. Once you've added and verified multiple emails, logging in with *any* of them resolves to the same account, the same registrations, the same history. No more duplicate accounts because you used a different email.

### How It Works Under the Hood[​](#how-it-works-under-the-hood "Direct link to How It Works Under the Hood")

Each email row tracks a few key fields:

```
email               -- globally unique, one owner max
user_id             -- nullable; not set until verified for first-time logins
token_hash          -- pending verification token
previous_token_hash -- the token that was replaced (for superseded detection)
verified_at         -- null until verified
```

This single structure handles both login verification and email ownership.

The design means multi-email support was almost free. The same verification flow used for login handles email verification for logged-in users. The only difference is that the user is already set when you're adding an email to your existing account.

## Superseded Token Detection[​](#superseded-token-detection "Direct link to Superseded Token Detection")

Remember the delayed email problem from Version 2? A curler requests a link, doesn't see it right away, requests another, and then clicks the first one when it finally arrives. Version 3 handles this gracefully.

When a new login link is requested, we don't just overwrite the old token. We move the current `token_hash` to `previous_token_hash` first. If someone then tries the old token, we can tell the difference:

```
pub type AuthError {
  InvalidToken      // not found or already used
  SupersededToken   // replaced by a newer token
  ExpiredToken      // past expiry
  UserDisabled      // account disabled
  DatabaseError(sqlight.Error)
}
```

A `SupersededToken` gets a specific message: "This code has been replaced. Check for a more recent email or request a new link." Instead of leaving users confused, we point them in the right direction.

This is a pattern we use throughout Version 3. Gleam's union types let us model every possible error state explicitly, and the compiler ensures we handle all of them. No forgotten edge cases, no generic catch-all error messages.

## OAuth (Google and Facebook)[​](#oauth-google-and-facebook "Direct link to OAuth (Google and Facebook)")

Login links aren't the only way in. Google and Facebook login work alongside them for users who prefer one-click SSO.

The OAuth flow uses a central auth subdomain (`auth.curling.io`) to handle callbacks, since both providers require a fixed redirect URI. After the provider verifies the user's identity, we look up the email in the same table used for login links. If the email exists with a user, log them in. If not, create the user and a verified email row (OAuth emails are pre-verified by the provider).

The same user resolution logic, regardless of how you authenticate.

## A Note on Rolling Your Own Auth[​](#a-note-on-rolling-your-own-auth "Direct link to A Note on Rolling Your Own Auth")

Writing your own authentication is generally a bad idea. Battle-tested libraries like [Devise](https://github.com/heartcombo/devise) (Ruby), [NextAuth](https://next-auth.js.org) (JavaScript), and [django-allauth](https://django-allauth.readthedocs.io) (Python) exist for good reason. They've been hardened over years of real-world use and security audits. If you're building on a stack that has a mature auth library, use it.

We couldn't find an existing Gleam auth library that was the right fit for our specific needs, but we didn't design in a vacuum. We studied Devise's modules extensively (Lockable, Timeoutable, Trackable, Confirmable) and used them as a checklist for what a production auth system needs to handle. Every security decision we made, from constant-time comparison to layered rate limiting to email enumeration prevention, was informed by what these libraries have learned the hard way over the past decade.

## What's Next[​](#whats-next "Direct link to What's Next")

Authentication is foundational, but the real value of multi-email support shows up when it connects to everything else: registrations, team management, admin permissions, payment history. As we build those features, having clean user resolution across multiple emails will simplify a lot of workflows that were painful in Version 2.

We're also considering optional two-factor authentication for club administrators, via authenticator apps or SMS, for organizations that want to force an extra layer of security on accounts with administrative access.

***

*This is Part 3 of the Curling IO Foundation series. Next up: background jobs on the BEAM, with no Redis, no separate worker, and no additional infrastructure.*

**Tags:**

* [foundation](/blog/tags/foundation.md)
* [authentication](/blog/tags/authentication.md)
* [gleam](/blog/tags/gleam.md)
* [security](/blog/tags/security.md)
