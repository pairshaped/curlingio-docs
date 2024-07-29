"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5987],{3905:function(e,n,t){t.d(n,{kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},4996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return s}});var r=t(2263),o=t(3919);function i(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,s=i.forcePrependBaseUrl,a=void 0!==s&&s,l=i.absolute,u=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+c:c}(i,t,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},6545:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),s=(t(4996),["components"]),a={id:"sponsors",title:"Sponsors",slug:"/club-management/sponsors"},l=void 0,u={unversionedId:"club-management/sponsors",id:"club-management/sponsors",isDocsHomePage:!1,title:"Sponsors",description:"This is a Premium Only Feature",source:"@site/docs/club-management/sponsors.md",sourceDirName:"club-management",slug:"/club-management/sponsors",permalink:"/docs/club-management/sponsors",tags:[],version:"current",frontMatter:{id:"sponsors",title:"Sponsors",slug:"/club-management/sponsors"},sidebar:"someSidebar",previous:{title:"Custom Fields",permalink:"/docs/club-management/custom-fields"},next:{title:"Managers",permalink:"/docs/club-management/managers"}},c=[{value:"Finding Sponsors",id:"finding-sponsors",children:[]},{value:"Fields",id:"fields",children:[{value:"Name",id:"name",children:[]},{value:"Logo",id:"logo",children:[]},{value:"URL",id:"url",children:[]},{value:"Active",id:"active",children:[]}]},{value:"Deleting Sponsors",id:"deleting-sponsors",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],p={toc:c};function d(e){var n=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/club-management/premium"},"This is a Premium Only Feature"))),(0,i.kt)("p",null,"You can create reusable sponsors that can be associated with leagues, competitions, products, pages, and articles."),(0,i.kt)("p",null,"When a member views the details of any of these items, the sponsor logo will be shown along with it's name."),(0,i.kt)("p",null,"Curling I/O will keep track of how many times a sponsor has been viewed and how many times it has been clicked (if a URL has been provided)."),(0,i.kt)("h2",{id:"finding-sponsors"},"Finding Sponsors"),(0,i.kt)("p",null,"Within your admin area, click on the ",(0,i.kt)("strong",{parentName:"p"},"Club")," dropdown menu in the top bar and then click on ",(0,i.kt)("strong",{parentName:"p"},"Sponsors"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigation",src:t(7719).Z})),(0,i.kt)("p",null,"To create a sponsor click on the ",(0,i.kt)("strong",{parentName:"p"},"New sponsor")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New",src:t(6294).Z})),(0,i.kt)("p",null,"To update an existing sponsor, click the ",(0,i.kt)("strong",{parentName:"p"},"Edit")," link next to it."),(0,i.kt)("h2",{id:"fields"},"Fields"),(0,i.kt)("h3",{id:"name"},"Name"),(0,i.kt)("p",null,'The name is required and will be shown below the sponsor logo / image. For example: "Brought to you by ACME Inc."'),(0,i.kt)("h3",{id:"logo"},"Logo"),(0,i.kt)("p",null,"The logo is required and will be shown on the detail page of any leagues, competitions, products, pages, or articles that use the sponsor."),(0,i.kt)("h3",{id:"url"},"URL"),(0,i.kt)("p",null,"The URL is optional. If a URL is provided, when a member clicks the sponsor logo they will be sent to the URL provided. Curling I/O will track how many times a sponsor has been clicked."),(0,i.kt)("h3",{id:"active"},"Active"),(0,i.kt)("p",null,"You can temporarily disable a sponsor logo by deactivating it. You can still associate a deactivated sponsor to leagues, competitions, products, pages, and articles, but it will no longer be shown to your members."),(0,i.kt)("h2",{id:"deleting-sponsors"},"Deleting Sponsors"),(0,i.kt)("p",null,"To remove a sponsor, click the ",(0,i.kt)("strong",{parentName:"p"},"Delete")," link next to it. This will also remove it from any of it's associations."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,'We noticed after launching this sponsors feature that a popular browser extension called "uBlock Origin" may hide the sponsor logo upload (preventing you from creating a sponsor).\nIf you are experiencing this issue, we highly recommend disabling the extension for Curling I/O.\nWe don\'t embed any thiird party advertising within Curling I/O anyways, so ad block extensions like uBlock provide no benefits on our site.'))}d.isMDXComponent=!0},7719:function(e,n,t){n.Z=t.p+"assets/images/navigation-e2c371579fb9934303f6a44b718ba009.png"},6294:function(e,n){n.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAAAxCAMAAAAsnfFTAAAByFBMVEXtGUD//////v7//f7zZ4H/+frvNlj96u7vMFP/+/v+8/X++Pn+9vj7zdbtHEL/+/z81t3/+vv+7/HxSmj809r7ytP+8fP6usXuJEn95+vwP1/83ePvOFn96OzwQWH5tMH2jJ/7ztftG0HuIkfuLFDuJkv+7fD82+HzY33yVHH4pbTzbIX5tsL94eb2iZ3+9ff81dz3nK30cIj6vcj0d47wRGT3nq7vNFb4p7btH0XtHkT1gpf81Nv6w870dYz4orL3k6X5rbv7xtD83uP+9PbyXHfvMVT2jKDuKE34obH94ufwQmLvN1n+8vX1fZT4q7nuIEbwRWX2kqT2kKPwO1z83OL1fJL7y9T4qLfwOVvyVnP5sL396e33laftGkD6w835s8D2i573mar7z9fuK0/82uD1epHzZH72h5v5t8P7zNX1fZPyWHTyWXX93+T+7vHvLlHwPV7zZoD3lKb4oLD0cor2j6L0cYn3m6z5sb/uJ0v0epD4prX6u8fxT235rLr7yNH6wsz6xM7uKk76u8bxS2n3lqj4o7P95OjxR2bxUG782eD0eI/6vsn1hZr1fpT+8PL3na36ucX5sr/xTmz96+77xc/1f5UgqRisAAACuklEQVR4Xu3YRaskSQBF4XMjpdzlubu7a7u7u7uMu7u7/d0JkoZXNM1QxdDUW+RZXWL17SIItA3axogQESKOXqUuXT1agbCGOikqENSt/40IESEiRISIENGiEYD9ulZHxFN5fcAX+ryuCO2sQHTz4ror1n+fVI50tQgTkfsMsTeVM7uekE7OQMEbhSFvHIBCkzFNBaLehyXH/DAH7GlxnIEhaEiejcu7D+xIKHEM2NuVM00rcNY7WdYHVSKcOZNoDBDLEZ255cQu0D8B32g3DOsrgGXHGV0zsbQvk0mNKd7InGOKWRN7jS45kwMySyzq4I6I5jner7FSTm/RKZVTQ9UimNdagDilDXjdjgd6lYOODtOSA8DVeXjn2gWLsKj3NMWkXFjXOYu4CQc0S5uB4w2bvKFLcNqZsIg7QNUI2nTPIihp2nVd5RnUo2VzXqeIFQE4rdibhwBfZ4D39ZDdZYBkni7rpaDfuaXsdA9QUh+QUmOn7taEaDfJBYvIK8gh7Xzmqj2SPaFxgt6OSfEVfM0AZC4TaPjWsQigV18SHZNM8TaXMwCf6HGn3JoQvKtzFrGq9mZbq5XlG5Jcil1RlCC6Bz9y9LGvLLCkSbx+gHh8CwF+Z5vuUNQSsFO9NSNokkVs6C6wuQLzOvIpF/VKmaCLXy/Apvb5ykThhhZpMd/B91rdQpxcB7wEBzQOfQmP2hHNxiL8nLm+b0DX4ZD0I8T0E0Ejyv/8S1ytvvTrbx0m04qr5PCiZ/ZsISL6Y7pDKRY8M3ozoqmaELsCBFe0Bn/+JZmZbiChHljVCEEMO5I3i6+/26Qjg8A/cTtmISXgtho4EZGU3Q8FO7xjcKNqxPM1Nqd5Ya1RwFcHUTuCenupDHra08/G4Zd5i1pE/a/y6MRU+KgJESEiRLzUttt3Uf0/zupfiAgRz/cvaqZpj9kSRNoAAAAASUVORK5CYII="}}]);