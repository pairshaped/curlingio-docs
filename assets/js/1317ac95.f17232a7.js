"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2421],{3457:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/league-334b1fb889d3757cdcdc178f5627c0cb.png"},4361:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/product-6aaa229ab6d83df70bb87cfa72b74243.png"},4952:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/cart-4e92f9612ea1bf3c6c6ffb203868cfa2.png"},5680:(e,t,r)=>{r.d(t,{yg:()=>g});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=o,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6025:(e,t,r)=>{r.d(t,{A:()=>i,h:()=>a});var n=r(4586),o=r(6654);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.A)();return{withBaseUrl:(r,n)=>function(e,t,r,n){let{forcePrependBaseUrl:a=!1,absolute:i=!1}=void 0===n?{}:n;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.z)(r))return r;if(a)return t+r;const l=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+l:l}(t,e,r,n)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:r}=a();return r(e,t)}},6654:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{A:()=>o,z:()=>n})},6883:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(9668),o=r(1367),a=(r(6540),r(5680));r(6025);const i=["components"],l={id:"augmenting-curler-profiles",title:"Augmenting Curler Profiles",slug:"/advanced/augmenting-curler-profiles"},s=void 0,u={unversionedId:"advanced/augmenting-curler-profiles",id:"advanced/augmenting-curler-profiles",isDocsHomePage:!1,title:"Augmenting Curler Profiles",description:"Sometimes you may want to ask your curler's for some additional information, but only once per season (or lifetime).",source:"@site/docs/advanced/augmenting-curler-profiles.md",sourceDirName:"advanced",slug:"/advanced/augmenting-curler-profiles",permalink:"/docs/advanced/augmenting-curler-profiles",tags:[],version:"current",frontMatter:{id:"augmenting-curler-profiles",title:"Augmenting Curler Profiles",slug:"/advanced/augmenting-curler-profiles"},sidebar:"someSidebar",previous:{title:"Event Managers",permalink:"/docs/event-management/event-managers"},next:{title:"Import Member Data",permalink:"/docs/member-data/import"}},c=[],d={toc:c},p="wrapper";function g(e){let{components:t}=e,l=(0,o.A)(e,i);return(0,a.yg)(p,(0,n.A)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Sometimes you may want to ask your curler's for some additional information, but only once per season (or lifetime)."),(0,a.yg)("p",null,"** NOTE: This method of capturing additional information should be used sparingly or it will clutter up your reports."),(0,a.yg)("p",null,"We're going to walk through a contrived example.\nLet's say we want to ask each curler what inspired them to take up curling.\nWe also only ever want to ask our curler's this question once, the very first time they register at the club."),(0,a.yg)("p",null,"First we'll need to create a custom field to capture the information."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Create a new custom field to ask our question."),(0,a.yg)("li",{parentName:"ol"},'Name it "Inspiration" and give it a descriptive hint.'),(0,a.yg)("li",{parentName:"ol"},'Check the box next to the "Products report" so that we\'ll be able to see this field in that report.')),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Inspiration Custom Field",src:r(8412).A})),(0,a.yg)("p",null,"Next we'll want to create an addon product (or fee) to hold this custom field."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},'Create a new product called "Additional Info".'),(0,a.yg)("li",{parentName:"ol"},'Make sure the Product type is "Add-on".'),(0,a.yg)("li",{parentName:"ol"},'Check the boxes for "Requires a curler profile" and "Lifetime per curler" (if it\'s a question you want to ask once per season, check that box instead).'),(0,a.yg)("li",{parentName:"ol"},"Leave the price at $0.00."),(0,a.yg)("li",{parentName:"ol"},'Add our "Inspiration" custom field and make it required.')),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Inspiration Addon Product",src:r(4361).A})),(0,a.yg)("p",null,"Next, we want to add our addon as a required custom field to each of our leagues (or products that require a curler profile)."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Edit each league."),(0,a.yg)("li",{parentName:"ol"},'Add the "Additional Info" addon to each league, making it required.')),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Inspiration Added to League",src:r(3457).A})),(0,a.yg)("p",null,"Now the first time a curler registers at your club they will be asked what inspired them to take up curling. For this example they will only ever be asked once since we made this a lifetime product."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Inspiration Cart",src:r(4952).A})),(0,a.yg)("p",null,'Later, when you download your products reports, it will have a column for "Inspiration" along with the other curler information.'),(0,a.yg)("p",null,'At any time you can click the "Purchased" link next to your "Additional Info" product to download this information.'))}g.isMDXComponent=!0},8412:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/custom-field-700970abc9183e5e359ebd70c51df1fe.png"}}]);