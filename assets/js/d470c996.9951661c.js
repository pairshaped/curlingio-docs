"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8974],{3905:function(e,t,n){n.d(t,{kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||l;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return l},Z:function(){return o}});var r=n(2263),i=n(3919);function l(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var l=void 0===r?{}:r,o=l.forcePrependBaseUrl,a=void 0!==o&&o,c=l.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(l,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},4391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(3117),i=n(102),l=(n(7294),n(3905)),o=(n(4996),["components"]),a={id:"profile-fields",title:"Profile Fields",slug:"/club-management/profile-fields"},c=void 0,s={unversionedId:"club-management/profile-fields",id:"club-management/profile-fields",isDocsHomePage:!1,title:"Profile Fields",description:"You can customize which fields are required, optional, or not asked for curler profiles at your club.",source:"@site/docs/club-management/profile-fields.md",sourceDirName:"club-management",slug:"/club-management/profile-fields",permalink:"/docs/club-management/profile-fields",tags:[],version:"current",frontMatter:{id:"profile-fields",title:"Profile Fields",slug:"/club-management/profile-fields"},sidebar:"someSidebar",previous:{title:"Alerts",permalink:"/docs/club-management/alerts"},next:{title:"Club Settings",permalink:"/docs/club-management/settings"}},u=[{value:"Greyed out Fields",id:"greyed-out-fields",children:[]},{value:"Required",id:"required",children:[]},{value:"Optional",id:"optional",children:[]},{value:"Don&#39;t Ask",id:"dont-ask",children:[]},{value:"Missing Fields?",id:"missing-fields",children:[]}],f={toc:u};function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can customize which fields are required, optional, or not asked for curler profiles at your club."),(0,l.kt)("p",null,"Within your admin area, click on the ",(0,l.kt)("strong",{parentName:"p"},"Club")," dropdown menu in the top bar and then click on ",(0,l.kt)("strong",{parentName:"p"},"Profile Fields"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Settings Navigation",src:n(7385).Z})),(0,l.kt)("h3",{id:"greyed-out-fields"},"Greyed out Fields"),(0,l.kt)("p",null,"The fields that are greyed out are required by the system for various operations like waivers, gender restricted events, and age restricted events / fees / discounts.\nYou cannot change these fields."),(0,l.kt)("h3",{id:"required"},"Required"),(0,l.kt)("p",null,"If you specify that a field is required, then curlers must fill it out when registering and creating a curler profile."),(0,l.kt)("h3",{id:"optional"},"Optional"),(0,l.kt)("p",null,"If you specify that a field is optional, then curlers will be asked, but may choose not to fill it out when registering and creating a curler profile."),(0,l.kt)("h3",{id:"dont-ask"},"Don't Ask"),(0,l.kt)("p",null,'If you specify that a field is don\'t ask, then curlers will not be asked to fill it out when registering and creating a curler profile.\nCurlers will still be able to see and fill in these fields in their full profile, which can be access by clicking the "Full profile" button next to the "Edit" button when viewing a curler profile.\nIt\'s unlikely that curlers will ever fill out their full profile so any fields you require should be marked as required or optional.'),(0,l.kt)("h3",{id:"missing-fields"},"Missing Fields?"),(0,l.kt)("p",null,"If there are fields that you need to collect but are missing, then you can submit a feature request to discuss it on our feedback board."),(0,l.kt)("p",null,"Profile fields shouldn't be specific to just one club.\nAlso, temporal fields like ",(0,l.kt)("strong",{parentName:"p"},"age")," or ",(0,l.kt)("strong",{parentName:"p"},"first time curler")," cannot be asked as part of a curler profile since they wouldn't remain accurate from season to season, but would be fine to ask via custom fields on your events."))}p.isMDXComponent=!0},7385:function(e,t){t.Z="data:image/png;base64,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"}}]);