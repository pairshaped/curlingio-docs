(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(t),p=r,m=b["".concat(i,".").concat(p)]||b[p]||f[p]||c;return t?a.a.createElement(m,o(o({ref:n},l),{},{components:t})):a.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},106:function(e,n,t){"use strict";var r=t(0),a=t(20);n.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},107:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return i}));var r=t(106),a=t(108);function c(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(r.a)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(r)return n+t;const i=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+i:i}(n,e,t,r)}}function i(e,n={}){const{withBaseUrl:t}=c();return t(e,n)}},108:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))},154:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/navigation-502522eac8920831b555e07bde4f2b8d.png"},155:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"},156:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"},67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),c=(t(0),t(105)),i=(t(107),{id:"waivers",title:"Waivers",slug:"/club-management/waivers"}),o={unversionedId:"club-management/waivers",id:"club-management/waivers",isDocsHomePage:!1,title:"Waivers",description:"Curling I/O by default will ask your curlers to accept a waiver during registration, but only once per season.",source:"@site/docs/club-management/waivers.md",slug:"/club-management/waivers",permalink:"/docs/club-management/waivers",version:"current",sidebar:"someSidebar",previous:{title:"Managers",permalink:"/docs/club-management/managers"},next:{title:"Club Settings",permalink:"/docs/club-management/settings"}},u=[{value:"Customizing Waivers",id:"customizing-waivers",children:[]},{value:"Resetting back to Defaults",id:"resetting-back-to-defaults",children:[]}],l={rightToc:u};function s(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,i,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Curling I/O by default will ask your curlers to accept a waiver during registration, but only once per season.\nWe also keep a snapshot of the waiver that was accepted for future reference if it's ever needs.\nThese snapshots along with which waivers have been accepted can be found in the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/club-management/reports"}),"Reports section"),"."),Object(c.b)("p",null,"You can customize or completely replace these waivers, or you can simply disable our waivers if you'd rather manage that process yourself at the club."),Object(c.b)("p",null,"The default waivers come from Curling Canada's Business of Curling program."),Object(c.b)("h2",{id:"customizing-waivers"},"Customizing Waivers"),Object(c.b)("p",null,"You can find your waivers within the admin area.\nClick on the ",Object(c.b)("strong",{parentName:"p"},"Club")," dropdown menu in the top bar and then click on ",Object(c.b)("strong",{parentName:"p"},"Waivers"),"."),Object(c.b)("p",null,Object(c.b)("img",{alt:"Curlers Navigation",src:t(154).default})),Object(c.b)("p",null,"You should see three waivers listed:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Adult"),Object(c.b)("li",{parentName:"ul"},"Youth"),Object(c.b)("li",{parentName:"ul"},"COVID-19")),Object(c.b)("p",null,"To customize a waiver, simply click the ",Object(c.b)("strong",{parentName:"p"},"Customize")," link next to it."),Object(c.b)("p",null,Object(c.b)("img",{alt:"Customize",src:t(155).default})),Object(c.b)("p",null,"You can then choose whether or not the waiver is enabled by checking the ",Object(c.b)("strong",{parentName:"p"},"Active")," checkbox.\nWaivers are active by default when your Curling I/O instance is created."),Object(c.b)("p",null,"To customize the content of your waiver, just edit the ",Object(c.b)("strong",{parentName:"p"},"Body Text")," of the waiver.\nWe use a popular format named ",Object(c.b)("strong",{parentName:"p"},"markdown")," for text editing.\nMarkdown allows you to add basic formatting to text.\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://guides.github.com/features/mastering-markdown/"}),"You can find more information on Markdown here.")),Object(c.b)("p",null,'When done, click the "Update Waiver" button and your changes will be saved.'),Object(c.b)("h2",{id:"resetting-back-to-defaults"},"Resetting back to Defaults"),Object(c.b)("p",null,'You can revert a waiver to it\'s default, undoing your changes, at any time by clicking "Reset to default" next to the waiver on the waiver list screen.'),Object(c.b)("p",null,Object(c.b)("img",{alt:"Reset to default",src:t(156).default})))}s.isMDXComponent=!0}}]);