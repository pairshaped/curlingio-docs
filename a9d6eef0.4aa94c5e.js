(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{105:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(r),p=n,h=b["".concat(c,".").concat(p)]||b[p]||d[p]||i;return r?o.a.createElement(h,a(a({ref:t},u),{},{components:r})):o.a.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},106:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){const e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},107:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var n=r(106),o=r(108);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},108:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},154:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/dashboard-506ec378fafedb177ee4db810a13c73e.png"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),i=(r(0),r(105)),c=(r(107),{id:"dashboard",title:"The Dashboard",slug:"/club-management/dashboard"}),a={unversionedId:"club-management/dashboard",id:"club-management/dashboard",isDocsHomePage:!1,title:"The Dashboard",description:"When you first log in to the administrator area of Curling I/O you will be presented with your dashboard.",source:"@site/docs/club-management/dashboard.md",slug:"/club-management/dashboard",permalink:"/docs/club-management/dashboard",version:"current",sidebar:"someSidebar",previous:{title:"Curler Profiles",permalink:"/docs/for-curlers/curler-profiles"},next:{title:"Leagues & Competitions",permalink:"/docs/club-management/leagues"}},l=[{value:"Collected",id:"collected",children:[]},{value:"Accrued",id:"accrued",children:[]},{value:"Combined Revenue",id:"combined-revenue",children:[]},{value:"Leagues",id:"leagues",children:[]},{value:"Competitions",id:"competitions",children:[]},{value:"Products",id:"products",children:[]},{value:"Orders",id:"orders",children:[]},{value:"Curler Registrations",id:"curler-registrations",children:[]},{value:"Curlers",id:"curlers",children:[]}],u={rightToc:l};function s(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When you first log in to the administrator area of Curling I/O you will be presented with your dashboard.\nOn the dashboard you will see a collection of statistics meant to give you a quick summary of the current season."),Object(i.b)("p",null,"By clicking on any of these dashboard links, you will be taken to their relevant section or report."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Dashboard",src:r(154).default})),Object(i.b)("h2",{id:"collected"},"Collected"),Object(i.b)("p",null,"This is the amount of money that has already been collected for the current season."),Object(i.b)("p",null,"Clicking the link will take you to the ",Object(i.b)("strong",{parentName:"p"},"Orders")," section filtered by ",Object(i.b)("strong",{parentName:"p"},"Paid")," orders only."),Object(i.b)("h2",{id:"accrued"},"Accrued"),Object(i.b)("p",null,"This is the amount of money that still remains to be paid for the current season. Offline orders which haven't been paid for yet."),Object(i.b)("p",null,"Clicking the link will take you to the ",Object(i.b)("strong",{parentName:"p"},"Orders")," section filtered by ",Object(i.b)("strong",{parentName:"p"},"Submitted")," orders only."),Object(i.b)("h2",{id:"combined-revenue"},"Combined Revenue"),Object(i.b)("p",null,"This is the sum of collected and accrued."),Object(i.b)("p",null,"Clicking the link will take you to the ",Object(i.b)("strong",{parentName:"p"},"Orders")," section."),Object(i.b)("h2",{id:"leagues"},"Leagues"),Object(i.b)("p",null,"The number of leagues you're running in the current season."),Object(i.b)("p",null,"Clicking the link will take you to the ",Object(i.b)("strong",{parentName:"p"},"Leagues")," section."),Object(i.b)("h2",{id:"competitions"},"Competitions"),Object(i.b)("p",null,"The number of competitions / bonspiels you're running in the current season."),Object(i.b)("p",null,"Clicking the link will take you to the ",Object(i.b)("strong",{parentName:"p"},"Competitions")," section."),Object(i.b)("h2",{id:"products"},"Products"),Object(i.b)("p",null,"The number of products being sold. This isn't specific to the current season."),Object(i.b)("p",null,"Clicking the link will take you to the ",Object(i.b)("strong",{parentName:"p"},"Products")," section."),Object(i.b)("h2",{id:"orders"},"Orders"),Object(i.b)("p",null,"The number of orders that have been placed in the current season."),Object(i.b)("p",null,"Clicking the link will take you to the ",Object(i.b)("strong",{parentName:"p"},"Orders")," section."),Object(i.b)("h2",{id:"curler-registrations"},"Curler Registrations"),Object(i.b)("p",null,"The number of curler registrations for the current season."),Object(i.b)("p",null,"Clicking the link will take you to the ",Object(i.b)("strong",{parentName:"p"},"Curlers")," section filtered by curlers that registered in the current season."),Object(i.b)("h2",{id:"curlers"},"Curlers"),Object(i.b)("p",null,"The number of curlers across all seasons."),Object(i.b)("p",null,"Clicking the link will take you to the ",Object(i.b)("strong",{parentName:"p"},"Curlers")," section."))}s.isMDXComponent=!0}}]);