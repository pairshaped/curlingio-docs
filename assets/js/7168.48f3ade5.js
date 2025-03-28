(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7168],{3843:(e,t,n)=>{"use strict";n.d(t,{xA:()=>p});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),y=o,h=d["".concat(c,".").concat(y)]||d[y]||u[y]||l;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));d.displayName="MDXCreateElement"},5582:(e,t,n)=>{"use strict";n.d(t,{A:()=>W});var r=n(9668),o=n(1367),l=n(6540),a=n(2602),s=n(4676),c=n(53);const i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var p={Prism:n(1258).default,theme:i};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var y=/\r\n|\r|\n/,h=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=d({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=d({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,l=d({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==o&&(l.style=void 0!==l.style?d({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),u(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return l[n[0]];var a=r?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(s))}})),u(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,l=e.token,a=d({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?d({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),u(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,l=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],l=0,a=0,s=[],c=[s];a>-1;){for(;(l=r[a]++)<o[a];){var i=void 0,p=t[a],u=n[a][l];if("string"==typeof u?(p=a>0?p:["plain"],i=u):(p=m(p,u.type),u.alias&&(p=m(p,u.alias)),i=u.content),"string"==typeof i){var d=i.split(y),g=d.length;s.push({types:p,content:d[0]});for(var f=1;f<g;f++)h(s),c.push(s=[]),s.push({types:p,content:d[f]})}else a++,t.push(p),n.push(i),r.push(0),o.push(i.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return h(s),c}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component);const b=f;var v=n(8426),k=n.n(v);const j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var E=n(4785),O=n(9777);const A=()=>{const{prism:e}=(0,O.pN)(),{isDarkTheme:t}=(0,E.A)(),n=e.theme||j,r=e.darkTheme||n;return t?r:n};var T=n(4798);const N="codeBlockContainer_K1bP",x="codeBlockContent_hGly",P="codeBlockTitle_eoMF",C="codeBlock_23N8",w="copyButton_Ue-o",S="codeBlockLines_39YC",D=/{([\d,-]+)}/,B=["js","jsBlock","jsx","python","html"],_={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},L=["highlight-next-line","highlight-start","highlight-end"],R=function(e){void 0===e&&(e=B);const t=e.map((e=>{const{start:t,end:n}=_[e];return"(?:"+t+"\\s*("+L.join("|")+")\\s*"+n+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function I(e){let{children:t,className:n,metastring:o,title:a}=e;const{prism:s}=(0,O.pN)(),[i,u]=(0,l.useState)(!1),[d,y]=(0,l.useState)(!1);(0,l.useEffect)((()=>{y(!0)}),[]);const h=(0,O.wt)(o)||a,m=(0,l.useRef)(null);let g=[];const f=A(),v=Array.isArray(t)?t.join(""):t;if(o&&D.test(o)){const e=o.match(D)[1];g=k()(e).filter((e=>e>0))}let j=null==n?void 0:n.replace(/language-/,"");!j&&s.defaultLanguage&&(j=s.defaultLanguage);let E=v.replace(/\n$/,"");if(0===g.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return R(["js","jsBlock"]);case"jsx":case"tsx":return R(["js","jsBlock","jsx"]);case"html":return R(["js","jsBlock","html"]);case"python":case"py":return R(["python"]);default:return R()}})(j),n=v.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const l=o+1,a=n[o].match(t);if(null!==a){switch(a.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=l+",";break;case"highlight-start":r=l;break;case"highlight-end":e+=r+"-"+(l-1)+","}n.splice(o,1)}else o+=1}g=k()(e),E=n.join("\n")}const B=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const l=document.getSelection();let a=!1;l.rangeCount>0&&(a=l.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(c){}r.remove(),a&&(l.removeAllRanges(),l.addRange(a)),o&&o.focus()}(E),u(!0),setTimeout((()=>u(!1)),2e3)};return l.createElement(b,(0,r.A)({},p,{key:String(d),theme:f,code:E,language:j}),(e=>{let{className:t,style:n,tokens:o,getLineProps:a,getTokenProps:s}=e;return l.createElement("div",{className:N},h&&l.createElement("div",{style:n,className:P},h),l.createElement("div",{className:(0,c.A)(x,j)},l.createElement("pre",{tabIndex:0,className:(0,c.A)(t,C,"thin-scrollbar"),style:n},l.createElement("code",{className:S},o.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return g.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),l.createElement("span",(0,r.A)({key:t},n),e.map(((e,t)=>l.createElement("span",(0,r.A)({key:t},s({token:e,key:t}))))))})))),l.createElement("button",{ref:m,type:"button","aria-label":(0,T.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.A)(w,"clean-btn"),onClick:B},i?l.createElement(T.A,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.createElement(T.A,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var z=n(6287);const F="details_1VDD";function V(e){let t=Object.assign({},e);return l.createElement(O.B_,(0,r.A)({},t,{className:(0,c.A)("alert alert--info",F,t.className)}))}const $=["mdxType","originalType"];const W={head:e=>{const t=l.Children.map(e.children,(e=>function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){const t=e.props,n=(0,o.A)(t,$);return l.createElement(e.props.originalType,n)}return e}(e)));return l.createElement(a.A,e,t)},code:e=>{const{children:t}=e;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(I,e):l.createElement("code",e)},a:e=>l.createElement(s.A,e),pre:e=>{var t;const{children:n}=e;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:l.createElement(I,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:e=>{const t=l.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=l.createElement(l.Fragment,null,t.filter((e=>e!==n)));return l.createElement(V,(0,r.A)({},e,{summary:n}),o)},h1:(0,z.A)("h1"),h2:(0,z.A)("h2"),h3:(0,z.A)("h3"),h4:(0,z.A)("h4"),h5:(0,z.A)("h5"),h6:(0,z.A)("h6")}},6287:(e,t,n)=>{"use strict";n.d(t,{e:()=>d,A:()=>y});var r=n(1367),o=n(9668),l=n(6540),a=n(53),s=n(4798),c=n(9777);const i="anchorWithStickyNavbar_31ik",p="anchorWithHideOnScrollNavbar_3R7-",u=["id"],d=function(e){let t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,o.A)({},t,{id:void 0}),t.children))},y=e=>{return"h1"===e?d:(t=e,function(e){let{id:n}=e,o=(0,r.A)(e,u);const{navbar:{hideOnScroll:d}}=(0,c.pN)();return n?l.createElement(t,o,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,a.A)("anchor","anchor__"+t,{[p]:d,[i]:!d}),id:n}),o.children,l.createElement("a",{className:"hash-link",href:"#"+n,title:(0,s.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,o)});var t}},8426:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);