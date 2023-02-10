"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[300],{3905:function(e,t,n){n.d(t,{kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,g=m["".concat(c,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,s=void 0!==i&&i,c=a.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},5308:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=(n(4996),["components"]),s={id:"registrations",title:"Registrations",slug:"/event-management/registrations"},c=void 0,u={unversionedId:"event-management/registrations",id:"event-management/registrations",isDocsHomePage:!1,title:"Registrations",description:"You can manage the registrations for each of your leagues or competitions.",source:"@site/docs/event-management/registrations.md",sourceDirName:"event-management",slug:"/event-management/registrations",permalink:"/docs/event-management/registrations",tags:[],version:"current",frontMatter:{id:"registrations",title:"Registrations",slug:"/event-management/registrations"},sidebar:"someSidebar",previous:{title:"Registration Widget",permalink:"/docs/club-management/registration-widget"},next:{title:"Spares",permalink:"/docs/event-management/spares"}},l=[],p={toc:l};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can manage the registrations for each of your leagues or competitions.\nTo get to the registrations screen, first click on the name of a league or competition."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Events List",src:n(1074).Z})),(0,a.kt)("p",null,"You will then see a list of tabs near the top.\nClick on the ",(0,a.kt)("strong",{parentName:"p"},"Registrations")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Registrations Navigation",src:n(5473).Z})),(0,a.kt)("p",null,"From this screen you can download a CSV file of your events registrations, and you can edit the registrations themselves."),(0,a.kt)("p",null,"A scenario where you might want to edit a registration, is if you are asking for a ",(0,a.kt)("strong",{parentName:"p"},"Team name"),", ",(0,a.kt)("strong",{parentName:"p"},"Skip name"),", or ",(0,a.kt)("strong",{parentName:"p"},"Lineup"),",\nand need to correct an entry due to a typo or convention. For example, say there are four registrations for the same team, the first\nentered ",(0,a.kt)("em",{parentName:"p"},'"Jones"'),", the second entered ",(0,a.kt)("em",{parentName:"p"},'"Team Joness"'),", and the last two entered ",(0,a.kt)("em",{parentName:"p"},'"Team Jones"'),".\nYou can edit the first two registrations to have them all have ",(0,a.kt)("em",{parentName:"p"},'"Team Jones"')," for the team name.\nThis will come in handy later when you are assembling the teams."))}m.isMDXComponent=!0},5473:function(e,t,n){t.Z=n.p+"assets/images/navigation-034d76db2703690fbac922355d496414.png"},1074:function(e,t,n){t.Z=n.p+"assets/images/events-d18b109ded429fddd604c714df19b8be.png"}}]);