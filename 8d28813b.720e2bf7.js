(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||m[b]||o;return n?a.a.createElement(f,u(u({ref:t},l),{},{components:n})):a.a.createElement(f,u({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},106:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},107:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(106),a=n(108);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},108:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},156:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},157:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},158:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/submitting-a-payment-e9f7c74032d11f4b58cf5435644673c5.png"},159:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/refund-a-payment-472e065a9d7fbc49a0f7ade994e80078.png"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/refund-form-fe18c9792f547244eb26ce5b752851aa.png"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(105)),i=(n(107),{id:"orders",title:"Orders",slug:"/club-management/orders"}),u={unversionedId:"club-management/orders",id:"club-management/orders",isDocsHomePage:!1,title:"Orders",description:"Walkthrough Video",source:"@site/docs/club-management/orders.md",slug:"/club-management/orders",permalink:"/docs/club-management/orders",version:"current",sidebar:"someSidebar",previous:{title:"Discounts",permalink:"/docs/club-management/discounts"},next:{title:"Curlers",permalink:"/docs/club-management/curlers"}},c=[{value:"Walkthrough Video",id:"walkthrough-video",children:[]},{value:"Finding your Orders",id:"finding-your-orders",children:[]},{value:"Submitting Payments",id:"submitting-payments",children:[{value:"Payment Form",id:"payment-form",children:[]}]},{value:"Refunds",id:"refunds",children:[{value:"Refund Form",id:"refund-form",children:[]}]},{value:"Adjustments",id:"adjustments",children:[]},{value:"Deleting Offline Orders",id:"deleting-offline-orders",children:[]},{value:"Transferring Orders",id:"transferring-orders",children:[]}],l={rightToc:c};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"walkthrough-video"},"Walkthrough Video"),Object(o.b)("p",null,"The following video will take you through the basics of handling orders in Curling I/O.\nIf you're new to Curling I/O, it's worthwhile to watch this before wading through the rest of our documentation."),Object(o.b)("div",{className:"text--center videoWrapper"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/VEkkiOkTOGE",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),Object(o.b)("h2",{id:"finding-your-orders"},"Finding your Orders"),Object(o.b)("p",null,"Within your admin area, click on ",Object(o.b)("strong",{parentName:"p"},"Orders")," in the top bar."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Navigation",src:n(156).default})),Object(o.b)("p",null,"You can search and filter your orders by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Keyword"),Object(o.b)("li",{parentName:"ul"},"Order status (Paid, Submitted, Refunded, etc.)"),Object(o.b)("li",{parentName:"ul"},"Date Range")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Filter Orders",src:n(157).default})),Object(o.b)("p",null,"To view and submit a payment for an order, click on the link in the ",Object(o.b)("strong",{parentName:"p"},"Summary")," column."),Object(o.b)("h2",{id:"submitting-payments"},"Submitting Payments"),Object(o.b)("p",null,"If the order has not been fully paid yet (status of ",Object(o.b)("strong",{parentName:"p"},"Submitted")," or ",Object(o.b)("strong",{parentName:"p"},"Partially Paid"),"), you can submit a payment against it by clicking the ",Object(o.b)("strong",{parentName:"p"},"Add a payment")," button near the bottom, or selecting Add a payment in the ",Object(o.b)("strong",{parentName:"p"},"Actions")," dropdown."),Object(o.b)("p",null,"You will then be taken to the payment form."),Object(o.b)("h3",{id:"payment-form"},"Payment Form"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Submitted a Payment",src:n(158).default})),Object(o.b)("p",null,"The amount of the payment will automatically default to the amount owing.\nIf you're accepting a partial payment you can change it to the appropriate amount."),Object(o.b)("p",null,"Optionally you can specify when the payment was or is going to be deposited, and how the payment was made.\nYou can edit these later if you're not sure of the deposit date, or it changed."),Object(o.b)("p",null,"You can also optionally add notes to the payment for your own future reference.\nFor example; ",Object(o.b)("em",{parentName:"p"},"Hurly gave Sue a cheque for $180.80 at the bar.")),Object(o.b)("p",null,"If you're club has online payments set up and enabled, then you'll have the option of using a Credit / Debit card to process the payment.\nThis is useful if a curler calls in with a credit card or brings in a credit card and you don't already have a point of sale system."),Object(o.b)("h2",{id:"refunds"},"Refunds"),Object(o.b)("p",null,"To refund a payment simply click the ",Object(o.b)("strong",{parentName:"p"},"Add a refund")," button next to the payment near the bottom of the order screen.\nRefunds are specific to each payment, so if you submitted partial payments for an order, to fully refund the order you would have to submit a refund for each of the payments separately."),Object(o.b)("p",null,Object(o.b)("img",{alt:"List of Payments",src:n(159).default})),Object(o.b)("p",null,"When you click the ",Object(o.b)("strong",{parentName:"p"},"Add a refund")," button you will be taken to the refund form."),Object(o.b)("h3",{id:"refund-form"},"Refund Form"),Object(o.b)("p",null,"When refunding a payment you can choose which items to refund and specify the amount to refund.\nIf you choose items to refund, by default the system will refund the total amounts of the items selected.\nFor example if you are refunding a Curling Canada Fee because the curler had already paid it at another club this season, you just select the fee and we'll figure out the amount to be refunded."),Object(o.b)("p",null,Object(o.b)("img",{alt:"List of Payments",src:n(160).default})),Object(o.b)("p",null,"You can also perform an ",Object(o.b)("em",{parentName:"p"},"adhoc refund")," by specifying the amount to refund regardless of whether or not you select any items.\nIf you don't select any items, then your reports can't show which items the refund was placed against, only the order and payment itself."),Object(o.b)("p",null,"If the payment you are refunding was made through our online payments (credit or debit card) then the system will automatically send the refund amount back to the member's card used in the purchase.\nThe system will also autofill the time it was withdrawn and how it was refunded."),Object(o.b)("p",null,"You can optionally specify a reason for the refund, and for offline payments, when the funds were withdrawn from the club, how the refund was made."),Object(o.b)("h2",{id:"adjustments"},"Adjustments"),Object(o.b)("p",null,"Coming soon!"),Object(o.b)("h2",{id:"deleting-offline-orders"},"Deleting Offline Orders"),Object(o.b)("p",null,"Coming soon!"),Object(o.b)("h2",{id:"transferring-orders"},"Transferring Orders"),Object(o.b)("p",null,"Coming soon!"))}s.isMDXComponent=!0}}]);