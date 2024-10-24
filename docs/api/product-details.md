---
id: product-details
title: Product Details
slug: /api/product-details
---

## Fetching the product

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/[subdomain]/products/[id]
```

Replacing **[subdomain]** with your clubs Curling IO subdomain, and **[id]** with the products unique identifier.
For example Curling Canada's Curling IO site is at https://canada.curling.io, and the Ice techs, Statisticians, Umpires Registry ID is 2916.
Therefore we replace **[subdomain]** with **canada** and **[id]** with **2916** giving us:

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/canada/products/2916
```

Replacing **en** with **fr** will fetch the french version.


## Payload

```
{
  "id": 2916,
  "name": "Ice techs, Statisticians, Umpires Registry",
  "summary": "A yearly registry for officials, ice techs, and statisticians.",
  "description": "A yearly registry for officials, ice techs, and statisticians.",
  "potential_discounts": [],
  "add_to_cart_url": "https://canada.curling.io/en/products/2916-ice-techs-statisticians-umpires-registry/add_to_cart",
  "add_to_cart_text": "Register"
}
```
