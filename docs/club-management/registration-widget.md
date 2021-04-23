---
id: registration-widget
title: Registration Widget
slug: /club-management/registration-widget
---
import useBaseUrl from '@docusaurus/useBaseUrl';

You can list your leagues, competitions, and products from Curling I/O onto your website using our registration widget.

## Setup

The embed our widget on one of you pages, you simply copy and paste the javascript snippet below.

```
<script src="https://pairshaped.github.io/curlingio-registration-widget/prod.min.js"></script>
<div id="curlingio-[section]"></div>
<script>
  Elm.Main.init({
    node: document.getElementById("curlingio-[section]"),
    flags: { host: "[url]", section: "[section]" }
  })
</script>
```

There are two variables above you must replace for this to work.
- `[url]` is your Curling I/O base URL. For example; `https://club.curling.io`
- `[section]` is the section from Curling I/O you want to display. This must be `leagues`, `competitions`, or `products`. This allows you show different section on different pages of your website.

### WordPress

If you are using WordPress to host your website, you may need to enable javascript code embedding first. There are many different plugins that enable this, for example: https://en-ca.wordpress.org/plugins/simple-embed-code

### Wix

If you are using Wix to host your website, the following article describes how you can embed our widgets: https://support.wix.com/en/article/embedding-custom-code-to-your-site

### Squarespace

If you are using Squarespace to host your website, the following article describes how you can embed our widgets: https://support.squarespace.com/hc/en-us/articles/206543617-Embed-Blocks

### Weebly

If you are using Weebly to host your website, the following article describes how you can embed our widgets: https://www.weebly.com/app/help/us/en/topics/create-widgets-embed-code-and-add-external-content

### Google Sites

If you are using Google Sites to host your website, the following article describes how you can embed our widgets: https://support.google.com/sites/answer/90569

### Other Content Management Systems

For other content management systems (CMS) and platforms not included above, search your documentation looking for "code embed" or "javascript embed".

## Examples

### Leagues

To show the leagues from our demo curling club on our website, the code would be:

```
<script src="https://pairshaped.github.io/curlingio-registration-widget/prod.min.js"></script>
<div id="curlingio-leagues"></div>
<script>
  Elm.Main.init({
    node: document.getElementById("curlingio-leagues"),
    flags: { host: "https://demo.curling.io", section: "leagues" }
  })
</script>
```

### Competitions

To show the competitions from our demo curling club on our website, the code would be:

```
<script src="https://pairshaped.github.io/curlingio-registration-widget/prod.min.js"></script>
<div id="curlingio-competitions"></div>
<script>
  Elm.Main.init({
    node: document.getElementById("curlingio-competitions"),
    flags: { host: "https://demo.curling.io", section: "competitions" }
  })
</script>
```

### Products

To show the products from our demo curling club on our website, the code would be:

```
<script src="https://pairshaped.github.io/curlingio-registration-widget/prod.min.js"></script>
<div id="curlingio-products"></div>
<script>
  Elm.Main.init({
    node: document.getElementById("curlingio-products"),
    flags: { host: "https://demo.curling.io", section: "products" }
  })
</script>
```
