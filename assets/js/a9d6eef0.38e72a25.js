"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7947],{3905:function(e,t,r){r.d(t,{kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=o,f=p["".concat(u,".").concat(h)]||p[h]||c[h]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(2263),o=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,l=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(l)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+c:c}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},7818:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=(r(4996),["components"]),l={id:"dashboard",title:"The Dashboard",slug:"/club-management/dashboard"},u=void 0,s={unversionedId:"club-management/dashboard",id:"club-management/dashboard",isDocsHomePage:!1,title:"The Dashboard",description:"When you first log in to the administrator area of Curling I/O you will be presented with your dashboard.",source:"@site/docs/club-management/dashboard.md",sourceDirName:"club-management",slug:"/club-management/dashboard",permalink:"/docs/club-management/dashboard",tags:[],version:"current",frontMatter:{id:"dashboard",title:"The Dashboard",slug:"/club-management/dashboard"},sidebar:"someSidebar",previous:{title:"Sparing",permalink:"/docs/for-curlers/sparing"},next:{title:"Leagues & Competitions",permalink:"/docs/club-management/leagues"}},c=[{value:"Collected",id:"collected",children:[]},{value:"Accrued",id:"accrued",children:[]},{value:"Combined Revenue",id:"combined-revenue",children:[]},{value:"Leagues",id:"leagues",children:[]},{value:"Competitions",id:"competitions",children:[]},{value:"Products",id:"products",children:[]},{value:"Orders",id:"orders",children:[]},{value:"Curler Registrations",id:"curler-registrations",children:[]},{value:"Curlers",id:"curlers",children:[]}],d={toc:c};function p(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you first log in to the administrator area of Curling I/O you will be presented with your dashboard.\nOn the dashboard you will see a collection of statistics meant to give you a quick summary of the current season."),(0,i.kt)("p",null,"By clicking on any of these dashboard links, you will be taken to their relevant section or report."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dashboard",src:r(182).Z})),(0,i.kt)("h2",{id:"collected"},"Collected"),(0,i.kt)("p",null,"This is the amount of money that has already been collected for the current season."),(0,i.kt)("p",null,"Clicking the link will take you to the ",(0,i.kt)("strong",{parentName:"p"},"Orders")," section filtered by ",(0,i.kt)("strong",{parentName:"p"},"Paid")," orders only."),(0,i.kt)("h2",{id:"accrued"},"Accrued"),(0,i.kt)("p",null,"This is the amount of money that still remains to be paid for the current season. Offline orders which haven't been paid for yet."),(0,i.kt)("p",null,"Clicking the link will take you to the ",(0,i.kt)("strong",{parentName:"p"},"Orders")," section filtered by ",(0,i.kt)("strong",{parentName:"p"},"Submitted")," orders only."),(0,i.kt)("h2",{id:"combined-revenue"},"Combined Revenue"),(0,i.kt)("p",null,"This is the sum of collected and accrued."),(0,i.kt)("p",null,"Clicking the link will take you to the ",(0,i.kt)("strong",{parentName:"p"},"Orders")," section."),(0,i.kt)("h2",{id:"leagues"},"Leagues"),(0,i.kt)("p",null,"The number of leagues you're running in the current season."),(0,i.kt)("p",null,"Clicking the link will take you to the ",(0,i.kt)("strong",{parentName:"p"},"Leagues")," section."),(0,i.kt)("h2",{id:"competitions"},"Competitions"),(0,i.kt)("p",null,"The number of competitions / bonspiels you're running in the current season."),(0,i.kt)("p",null,"Clicking the link will take you to the ",(0,i.kt)("strong",{parentName:"p"},"Competitions")," section."),(0,i.kt)("h2",{id:"products"},"Products"),(0,i.kt)("p",null,"The number of products being sold. This isn't specific to the current season."),(0,i.kt)("p",null,"Clicking the link will take you to the ",(0,i.kt)("strong",{parentName:"p"},"Products")," section."),(0,i.kt)("h2",{id:"orders"},"Orders"),(0,i.kt)("p",null,"The number of orders that have been placed in the current season."),(0,i.kt)("p",null,"Clicking the link will take you to the ",(0,i.kt)("strong",{parentName:"p"},"Orders")," section."),(0,i.kt)("h2",{id:"curler-registrations"},"Curler Registrations"),(0,i.kt)("p",null,"The number of curler registrations for the current season."),(0,i.kt)("p",null,"Clicking the link will take you to the ",(0,i.kt)("strong",{parentName:"p"},"Curlers")," section filtered by curlers that registered in the current season."),(0,i.kt)("h2",{id:"curlers"},"Curlers"),(0,i.kt)("p",null,"The number of curlers across all seasons."),(0,i.kt)("p",null,"Clicking the link will take you to the ",(0,i.kt)("strong",{parentName:"p"},"Curlers")," section."))}p.isMDXComponent=!0},182:function(e,t,r){t.Z=r.p+"assets/images/dashboard-506ec378fafedb177ee4db810a13c73e.png"}}]);