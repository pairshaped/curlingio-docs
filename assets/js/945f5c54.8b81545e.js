"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8294],{3905:function(e,n,t){t.d(n,{kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=u(t),d=a,b=g["".concat(l,".").concat(d)]||g[d]||c[d]||i;return t?r.createElement(b,o(o({ref:n},m),{},{components:t})):r.createElement(b,o({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return a}})},4996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return o}});var r=t(2263),a=t(3919);function i(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,u=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(s)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+c:c}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},1851:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=(t(4996),["components"]),s={id:"managers",title:"Managers",slug:"/club-management/managers"},l=void 0,u={unversionedId:"club-management/managers",id:"club-management/managers",isDocsHomePage:!1,title:"Managers",description:"Clubs can have multiple managers for Curling I/O.",source:"@site/docs/club-management/managers.md",sourceDirName:"club-management",slug:"/club-management/managers",permalink:"/docs/club-management/managers",tags:[],version:"current",frontMatter:{id:"managers",title:"Managers",slug:"/club-management/managers"},sidebar:"someSidebar",previous:{title:"Sponsors",permalink:"/docs/club-management/sponsors"},next:{title:"Waivers",permalink:"/docs/club-management/waivers"}},c=[{value:"Finding Managers",id:"finding-managers",children:[]},{value:"Adding Managers",id:"adding-managers",children:[]},{value:"Removing Managers",id:"removing-managers",children:[]}],m={toc:c};function g(e){var n=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Clubs can have multiple managers for Curling I/O.\nEach of the managers is granted the same level of access."),(0,i.kt)("p",null,"If you want to give access to an outside party for just a specific league or competition, then you don't add them as a club manager.\n",(0,i.kt)("a",{parentName:"p",href:"/docs/event-management/event-managers"},"You can find information about event managers here"),"."),(0,i.kt)("h2",{id:"finding-managers"},"Finding Managers"),(0,i.kt)("p",null,"You can access the list of all the managers at your club, by clicking on ",(0,i.kt)("strong",{parentName:"p"},"Managers")," in the top right ",(0,i.kt)("strong",{parentName:"p"},"Club")," dropdown in the top navigation bar."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Curlers Navigation",src:t(496).Z})),(0,i.kt)("h2",{id:"adding-managers"},"Adding Managers"),(0,i.kt)("p",null,"You can add another manager to your club by entering their name and email address into the form at the top of the screen and clicking the ",(0,i.kt)("strong",{parentName:"p"},"Create Manager")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Curlers Navigation",src:t(6044).Z})),(0,i.kt)("p",null,"Curling I/O will send an email to the email address entered inviting them to join the club management (admin) area.\nThe email will contain a link to the admin dashboard."),(0,i.kt)("p",null,"We recommend managers bookmark the admin area to avoid confusion between the public and administration sections of your Curling I/O site."),(0,i.kt)("h2",{id:"removing-managers"},"Removing Managers"),(0,i.kt)("p",null,"We highly recommend that you remove staff from your Curling I/O management when they are no longer with the club.\nYou can do so by clicking the ",(0,i.kt)("strong",{parentName:"p"},"Delete")," link next to the manager you wish to remove.\nThis doesn't delete their account, as they may have curler profiles and participate in leagues themselves, but it does remove them from your club management."))}g.isMDXComponent=!0},6044:function(e,n){n.Z="data:image/png;base64,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"},496:function(e,n,t){n.Z=t.p+"assets/images/navigation-d2b7d62a6baa134ee1bcaa9d431857db.png"}}]);