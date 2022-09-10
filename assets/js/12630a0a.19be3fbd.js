"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4713],{3905:function(e,t,o){o.d(t,{kt:function(){return h}});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(o),p=i,m=h["".concat(u,".").concat(p)]||h[p]||l[p]||a;return o?n.createElement(m,r(r({ref:t},d),{},{components:o})):n.createElement(m,r({ref:t},d))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3919:function(e,t,o){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}o.d(t,{b:function(){return n},Z:function(){return i}})},4996:function(e,t,o){o.d(t,{C:function(){return a},Z:function(){return r}});var n=o(2263),i=o(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,o=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,o,n){var a=void 0===n?{}:n,r=a.forcePrependBaseUrl,s=void 0!==r&&r,u=a.absolute,c=void 0!==u&&u;if(!o)return o;if(o.startsWith("#"))return o;if((0,i.b)(o))return o;if(s)return t+o;var l=o.startsWith(t)?o:t+o.replace(/^\//,"");return c?e+l:l}(a,o,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4099:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var n=o(3117),i=o(102),a=(o(7294),o(3905)),r=(o(4996),["components"]),s={id:"discounts",title:"Discounts",slug:"/club-management/discounts"},u=void 0,c={unversionedId:"club-management/discounts",id:"club-management/discounts",isDocsHomePage:!1,title:"Discounts",description:"You can create discounts to reduce the cost of your leagues, competitions, and products when curler's match criteria that you specify.",source:"@site/docs/club-management/discounts.md",sourceDirName:"club-management",slug:"/club-management/discounts",permalink:"/docs/club-management/discounts",tags:[],version:"current",frontMatter:{id:"discounts",title:"Discounts",slug:"/club-management/discounts"},sidebar:"someSidebar",previous:{title:"Fees",permalink:"/docs/club-management/fees"},next:{title:"Club Credits",permalink:"/docs/club-management/club-credits"}},l=[{value:"Walkthrough Video",id:"walkthrough-video",children:[]},{value:"Finding your Discounts",id:"finding-your-discounts",children:[]},{value:"The Basics",id:"the-basics",children:[{value:"Naming your Discount",id:"naming-your-discount",children:[]},{value:"Percent or Fixed Amount",id:"percent-or-fixed-amount",children:[]},{value:"Seasonal per Curler",id:"seasonal-per-curler",children:[]},{value:"Active",id:"active",children:[]}]},{value:"Criteria",id:"criteria",children:[{value:"Min and Max Age",id:"min-and-max-age",children:[]},{value:"Number of Leagues",id:"number-of-leagues",children:[]},{value:"Matching a Custom Field Value",id:"matching-a-custom-field-value",children:[]},{value:"Fee",id:"fee",children:[]},{value:"Product",id:"product",children:[]},{value:"Exclusive of Other Discount",id:"exclusive-of-other-discount",children:[]},{value:"Exclusive of All Other Discounts",id:"exclusive-of-all-other-discounts",children:[]}]},{value:"Troubleshooting Discounts",id:"troubleshooting-discounts",children:[]},{value:"Deleting Discounts",id:"deleting-discounts",children:[]}],d={toc:l};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can create discounts to reduce the cost of your leagues, competitions, and products when curler's match criteria that you specify."),(0,a.kt)("p",null,"For example, you can give curler's a 20% discount on their second league, then 50% off on their third league, or a Junior discount to curlers under the age of 18."),(0,a.kt)("p",null,"There is a ton of flexibility with discounts, but keep in mind that having an excessive number of discounts, can easily make it very hard to verify who should be receiving one."),(0,a.kt)("h2",{id:"walkthrough-video"},"Walkthrough Video"),(0,a.kt)("p",null,"The following video will take you, the curling club manager, through the basics of setting up your discounts.\nIf you're new to Curling I/O, it's worthwhile to watch this before wading through the rest of our documentation."),(0,a.kt)("div",{className:"text--center videoWrapper"},(0,a.kt)("iframe",{width:"100%",src:"https://www.youtube.com/embed/3h7oZzkYfkM",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,a.kt)("h2",{id:"finding-your-discounts"},"Finding your Discounts"),(0,a.kt)("p",null,"Within your admin area, click on the ",(0,a.kt)("strong",{parentName:"p"},"Club")," dropdown menu in the top bar and then click on ",(0,a.kt)("strong",{parentName:"p"},"Discounts"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Navigation",src:o(4387).Z})),(0,a.kt)("p",null,"To create a discount click on the ",(0,a.kt)("strong",{parentName:"p"},"New Discount")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New",src:o(5007).Z})),(0,a.kt)("p",null,"To update an existing discount, click the ",(0,a.kt)("strong",{parentName:"p"},"Edit")," link next to it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Edit",src:o(1436).Z})),(0,a.kt)("h2",{id:"the-basics"},"The Basics"),(0,a.kt)("h3",{id:"naming-your-discount"},"Naming your Discount"),(0,a.kt)("p",null,"This is the name that will be displayed to your members when they see potential discounts during registration and also when a discount is applied."),(0,a.kt)("p",null,"Discounts can and should be reused between seasons, so there's no need to include a year or season in the name unless you specifically do not want to reuse it next year."),(0,a.kt)("h3",{id:"percent-or-fixed-amount"},"Percent or Fixed Amount"),(0,a.kt)("p",null,"You can choose to make your discount a percentage of the amount of the items being discounted (league, product, or competition), or you can make it a fixed amount.\nUsually percentage based discounts are easier to manage, for example if you were running a multiple league discount, but your league had different prices."),(0,a.kt)("p",null,"You can't specify both percent and fixed amount."),(0,a.kt)("h3",{id:"seasonal-per-curler"},"Seasonal per Curler"),(0,a.kt)("p",null,"You can restrict the discount so that it can't be applied more than once per curler per season."),(0,a.kt)("p",null,"For example, you may want a ",(0,a.kt)("em",{parentName:"p"},'"First Time Curler"')," that can only be received the first time the curler purchases a league this season, and not to be applied again if they purchase a second league."),(0,a.kt)("h3",{id:"active"},"Active"),(0,a.kt)("p",null,"If you need to disable a discount temporarily you can uncheck the ",(0,a.kt)("strong",{parentName:"p"},"Active")," box.\nWhen a discount is disabled it cannot be added to leagues, competitions, or products, and will not be applied to your members for anything it is already associated to."),(0,a.kt)("h2",{id:"criteria"},"Criteria"),(0,a.kt)("p",null,"You can (and usually would) specify one or more criteria that the curler must meet in order for the discount to be applied."),(0,a.kt)("p",null,"This allows you to have different discounts apply to your leagues depending on the age and / or number of leagues being purchased for the curler, etc.\nFor example you can have a junior discount based on age, or a discount that is only applied if 2 or more leagues are being purchased within the same season for the same curler."),(0,a.kt)("p",null,"Criteria are cumulative, so if both min AND max ages are specified then both of these conditions must be met by the curler for the discount to be applied."),(0,a.kt)("h3",{id:"min-and-max-age"},"Min and Max Age"),(0,a.kt)("p",null,"These are fairly self-explanatory. If you wanted to apply a junior's discount to curlers 17 and under then you would enter 17 into the Max age field. Keep in mind that age criteria is inclusive in that it's including the age specified.\nAge criteria is evaluated as of July 1st in the current season. If a curler is 18 before July 1st then they wouldn't receive a 17 and under discount."),(0,a.kt)("h3",{id:"number-of-leagues"},"Number of Leagues"),(0,a.kt)("p",null,"This allows you to discount the 2nd, 3rd, 4th, 5th + league that a curler purchases during the current season."),(0,a.kt)("p",null,"You can even have ",(0,a.kt)("em",{parentName:"p"},"stepping")," discounts, where for example the 2nd league is 20% off, the 3rd league is 50% off, and the 4th or higher leagues are 100% off (making them free)."),(0,a.kt)("p",null,"Note, that if your leagues have different prices and the member completes a purchase of a cheaper league, that cheaper league will not count towards a discount on more expensive leagues.\nFor example, if you offer an Open League for $100 and a Men's League for $200, in order to receive a two league discount I would either need to purchase both of these leagues at the same time, or I would need to purchase the Men's (more expensive) league first.\nThe system will not make a retroactive discount to the cheaper leauge."),(0,a.kt)("h3",{id:"matching-a-custom-field-value"},"Matching a Custom Field Value"),(0,a.kt)("p",null,"This is an extremely flexible discount. It allows you to check if the value entered into one of the club's own custom fields matches what the curler entered or selected."),(0,a.kt)("p",null,"A common use for this would be a ",(0,a.kt)("em",{parentName:"p"},'"First Time Curler"'),' discount. You would have a custom field defined, asking your curlers if this is their first time curling with a dropdown to choose "Yes", or "No".\nThen you can apply a discount based on them selecting "Yes" for this custom field.'),(0,a.kt)("p",null,"Another example would be a coupon code. You could have a free text custom field asking for a coupon code, and if it matches the value you specify here they get a discount."),(0,a.kt)("h3",{id:"fee"},"Fee"),(0,a.kt)("p",null,"Allows you to give a discount to curlers who have already paid, or are about to pay a fee.\nFor example, to offer a discount to members on non-member leagues or products."),(0,a.kt)("h3",{id:"product"},"Product"),(0,a.kt)("p",null,"Allows you to give a discount to curlers who have already paid, or are about to pay for a product.\nFor example you can offer an Unlimited Leagues addon product in your leagues and discount their price by 100% if selected."),(0,a.kt)("h3",{id:"exclusive-of-other-discount"},"Exclusive of Other Discount"),(0,a.kt)("p",null,"Prevent a curler from receiving the discount if they are already receiving the discount selected here.\nYou don't want to exclude from both discounts however.\nThe higher discount is typically the one you would select here."),(0,a.kt)("h3",{id:"exclusive-of-all-other-discounts"},"Exclusive of All Other Discounts"),(0,a.kt)("p",null,"If the curler is receiving any other discount for the item being discounted, they won't receive this one.\nIf all discounts they are receiving are exclusive, then the greatest discount among them will be applied."),(0,a.kt)("p",null,"This is useful if you have a large discount that you never want to stack regardless of whether the curler meets the criteria for any other."),(0,a.kt)("h2",{id:"troubleshooting-discounts"},"Troubleshooting Discounts"),(0,a.kt)("p",null,"We highly recommend keeping your discounts as simple as possible, so you know at a glance who will be receiving a discount and under what conditions."),(0,a.kt)("p",null,"For those unavoidably complex setups, here are some pointers:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure your discount is associated with the item that is to be discounted. If you're discounting leagues, then the discount must be associated with each of those leagues. If you are discounting a fee, then the discount must be associated with that fee. You cannot associate a discount to one item and expect it to apply to another it hasn't been associated with."),(0,a.kt)("li",{parentName:"ol"},"Make sure that if your discount eligibility is based on a custom field value, that the custom field is also associated everywhere your discount is associated. If you do not, then the question which the discount is based on will never be asked, and no one will receive the discount. For example, if I want to ask curlers if it's their first season and give them a 5% discount on their membership fee if they are, then I need to associate both the custom field to ask the question and the discount itself to the membership fee."),(0,a.kt)("li",{parentName:"ol"},'If you are using a custom field based discount, you usually do not want to use a checkbox. You would instead use a dropdown with "Yes, No" values so that you can make this custom field required, and to also avoid accidental selection by your curlers.'),(0,a.kt)("li",{parentName:"ol"},"For multiple league discounts, every league that will participate in the discount needs to have it associated."),(0,a.kt)("li",{parentName:"ol"},"If a discount is seasonal per curler (should only be received once per season), then the item being discounted must require a curler profile. Otherwise there's no way for the system to know if a curler has already received it."),(0,a.kt)("li",{parentName:"ol"},"Multi league discounts are based on curler profile (not account) and will only work if the leagues to be discounted are requiring a curler profile."),(0,a.kt)("li",{parentName:"ol"},"Discounts are additive based on the full price of the item being discounted. Discounts do not compound (you never discount a previously discounted price). For example if I apply two 10% discounts to a league that costs $100, then my total potential discounts are $20."),(0,a.kt)("li",{parentName:"ol"},"In general you should avoid mixing both fixed price and percentage based discounts, or it can be very hard to reason about.")),(0,a.kt)("h2",{id:"deleting-discounts"},"Deleting Discounts"),(0,a.kt)("p",null,"To remove a discount, click the ",(0,a.kt)("strong",{parentName:"p"},"Delete")," link next to it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Delete",src:o(4069).Z})))}h.isMDXComponent=!0},4387:function(e,t,o){t.Z=o.p+"assets/images/navigation-c4ee124b5a2edc3315531899464f7084.png"},5007:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAAxCAIAAABh3x2GAAAEzElEQVR4Ae2YgWfsaBDA7+8oAPsX1HMFAQddAFrulBKwCpRFPShQPAoBKZRFqUJXuecsy9XusagorMVStgiLELLJl+TLl1y+yWySbVrbO89mHzPG814ym8zM75uZyfslIdlWITbEhqQONiTEhtiED3+7e0eLnd82qqR7R+H3wRo2iy+/1+Mc6Zc/1rGpzzlSYkNsSIkNsSElNsSG2BAbUmLzv5TYkBIbRYsmZnR1sSA2i11NpNbc9HdXrrvnRno5Old/rNPu2Ug6x5NCbCvqaIWBNoWrU29bEt1kp5p/rNbBRrmOE5DX7++w+db6gXHiY0Fiy5HKEpT5CGEol/xpzLWv9VMp5+f5ppa6QTaSxFV7M2zioZ5fYdooc0A8XG5jg2roMTpcFxsUJ1A+YKNcRq8OWjEzPFWxQZVs2NU4SYK8DbLbWfrA8OA9Nk/X7zS6xGQN6LE85aQtnznKayuejHxwr+KPw0vzyT3tCjtBsczw5BCuH4YTJ61Otwhcly+6lwfC75npreDKwFRwRw48cKxIDofQamBjGXwIoc4H7ls2kC9sRKZYZoSnMe/fyTOF9d7kr2Cz8k/L313HBo3xZIA/aOB+yxqgI57GYh7AcILkNsAfSL14sRIQ0WkjZpD4dbbi6o4asZSikY+x8ov8IVrG83KATfe0L+wgoyXmFj+rhY1tuDutiGdBfn3Dxu9Z8vrtxfJgDoBif7HTkgHzsVfOF8/G+KVAm3VsQP1HB1ePImV4cVl5zXCYkjAY+pPa3OHPj7syBJaGcMiBVKS1i1JGN9TIBpuP2YhbbKpeZ4qNdyt6mg1On/Sxs6WHvWCjRhAw1zT/TPfP0z8xFx6mL5Dn/Qzsn0zM5nEfcX6SzdDB15VT9gAvtk3euWYHeGYxy4lTrkh3v+0pzbRNQQ8oNS48PVNvHRuMGhvmTZw7qaBZzWwgHSbsbH2WzxKIqiJYLjhyzlt+Lw1vxhQ9hsrzOgjpk2yCJ8k43Ed/0KBxUQwVaCywv4E/4HA1lsoZV6GSgmC/ykZ/y0apYsO/bwUbqBLccVfZOOFJyztog7ZcRXWVQ0jfpZCu9+WvXrpyctgp2hGfYHP7BBv0AUuhmgul7X+7i57NZU1n/lh+44N9dz4oswHjGcsKKDFZfutkkPxsbLCiQYANuo5NHLQVPk6j3soKgAbLyoOwb9bt0KAHerZWVXPh3xvRsO8VtRVA/8Q5hLscjjoIQZLAMb7cAFMA2OXC5wBLM+8QW84GzxouMKje1bTMBvYxKeLZ4D0DUlnkl3Vmpf0bJw0O9g/YJMwRL6bUuYPuWnLIv+nvwXN2a8Y7XT7MkJt+ozg98cSIHseCF59HnjaGO4EYGjD8Ck/YvYn78cMgesH3foKNnsceHB9uuG50sTo/cSmaOOX8uiddwZJcxLCL9kiu/IR2xKrb8+qnTFmYE90iZtzXc/C7F5jETGz8WEnVPb4Tdsmfx7vcH4afKZlkIwrLnUNQIEHUk2bxo46LaL5cIA/0Acp3hoy11vb+X6erqFKx0W9Kd1Ucb//Bn2Z2awMh1MCGlNgQG1JiQ0psiM3PrMSGlNgQG1JiQ2x+ParHM9K9ozVswj8HqdGG3SJ1947Cv/6psNlGISE2xIaE2BAbEmJD8i+tczQC3xKzqQAAAABJRU5ErkJggg=="},4069:function(e,t){t.Z="data:image/png;base64,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"},1436:function(e,t){t.Z="data:image/png;base64,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"}}]);