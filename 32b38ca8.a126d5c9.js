(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(2),r=(n(0),n(105));const i={id:"how-do-i-login",title:"How do I Login?",slug:"/for-curlers/how-do-i-login"},a={unversionedId:"for-curlers/how-do-i-login",id:"for-curlers/how-do-i-login",isDocsHomePage:!1,title:"How do I Login?",description:"It's simple, but first you need an email address.",source:"@site/docs/for-curlers/how-do-i-login.md",slug:"/for-curlers/how-do-i-login",permalink:"/docs/for-curlers/how-do-i-login",editUrl:"https://github.com/pairshaped/curlingio-docs/edit/master/website/docs/for-curlers/how-do-i-login.md",version:"current",sidebar:"someSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/getting-started/faq"},next:{title:"Google Login Without Gmail",permalink:"/docs/for-curlers/google-login-without-gmail"}},s=[{value:"Passwordless Authentication",id:"passwordless-authentication",children:[]},{value:"Instructional Video",id:"instructional-video",children:[]}],l={rightToc:s};function c({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It's simple, but first you need an email address."),Object(r.b)("p",null,"If you don't have an email address, you can easily get a free one from Gmail, FastMail, Microsoft, ProtonMail, and about a hundred or so others. You can also ask your internet service provider if they can set you up with one."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Click the Login link in the top right of this screen. If you don't see a \"Login\" link, then you're probably already logged in, and can skip the rest of these instructions."),Object(r.b)("li",{parentName:"ol"},"You should now see a screen giving you two options: Send me a Login Link and Login with Gmail."),Object(r.b)("li",{parentName:"ol"},"If you use Gmail then the fastest way to login is simply selecting the red Login with Gmail button and you'll be logged in, and can skip the rest of these instructions."),Object(r.b)("li",{parentName:"ol"},"If you don't have a Gmail then you'll need to enter your email address and select the Send me a Login Link button."),Object(r.b)("li",{parentName:"ol"},"We will immediately send you an email containing a link that you can click which automatically logs you in."),Object(r.b)("li",{parentName:"ol"},'If for some reason you can\'t click the link, (maybe you sent it to your phone but are using a computer), you can instead copy the "Token" from the email and paste it into the "Token" field back in Curling I/O.')),Object(r.b)("p",null,'That\'s all there is to it. You should now be logged in, and most likely back on your "Cart" screen.'),Object(r.b)("h2",{id:"passwordless-authentication"},"Passwordless Authentication"),Object(r.b)("p",null,"Curling I/O doesn't use passwords, because passwords are the primary cause of most data breaches on the internet."),Object(r.b)("p",null,"You'll never have to remember a password with our system. This means your personal information is more secure with us than other registration systems."),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://auth0.com/blog/is-passwordless-authentication-more-secure-than-passwords/"}),"Read more about passwordless logins and their increased security here.")),Object(r.b)("h2",{id:"instructional-video"},"Instructional Video"),Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6bzxDm_t-JA",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}c.isMDXComponent=!0}}]);