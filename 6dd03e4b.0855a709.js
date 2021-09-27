(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,d=m["".concat(i,".").concat(h)]||m[h]||p[h]||o;return r?n.a.createElement(d,l(l({ref:t},c),{},{components:r})):n.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(6),o=(r(0),r(116)),i={id:"faq",title:"Frequently Asked Questions",slug:"/getting-started/faq"},l={unversionedId:"getting-started/faq",id:"getting-started/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"How much does it cost?",source:"@site/docs/getting-started/faq.md",slug:"/getting-started/faq",permalink:"/docs/getting-started/faq",version:"current",sidebar:"someSidebar",previous:{title:"Support and Feedback",permalink:"/docs/getting-started/support"},next:{title:"Best Practices",permalink:"/docs/getting-started/best-practices"}},s=[{value:"How much does it cost?",id:"how-much-does-it-cost",children:[]},{value:"I&#39;m having trouble signing in",id:"im-having-trouble-signing-in",children:[]},{value:"Can I import our club&#39;s existing curlers?",id:"can-i-import-our-clubs-existing-curlers",children:[]},{value:"Can our club use Curling I/O without online payments (for free)?",id:"can-our-club-use-curling-io-without-online-payments-for-free",children:[]},{value:"We have complicated pricing and discounts, will Curling I/O support us?",id:"we-have-complicated-pricing-and-discounts-will-curling-io-support-us",children:[]},{value:"Can our curlers register family members?",id:"can-our-curlers-register-family-members",children:[]},{value:"One of our members has two or more duplicate curler profiles, how can I fix that?",id:"one-of-our-members-has-two-or-more-duplicate-curler-profiles-how-can-i-fix-that",children:[]},{value:"What is an Account?",id:"what-is-an-account",children:[]}],c={rightToc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"how-much-does-it-cost"},"How much does it cost?"),Object(o.b)("p",null,"Curling I/O pricing is 2.9% + $0.30 per online transaction, and include all credit card processing fees.\nThere are no monthly, yearly, setup, or licensing fees, and offline payments are free.\nSee our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/pricing"}),"pricing section")," for more details."),Object(o.b)("h3",{id:"im-having-trouble-signing-in"},"I'm having trouble signing in"),Object(o.b)("p",null,"Curling I/O doesn't use passwords.\nYou can login using a Google (Gmail) account or you can have a login link / code sent to your email address.\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/for-curlers/how-do-i-login"}),"See our login instructions for more details.")),Object(o.b)("h3",{id:"can-i-import-our-clubs-existing-curlers"},"Can I import our club's existing curlers?"),Object(o.b)("p",null,'Yes, you can import curlers from a previous season that aren\'t already registered with Curling I/O by uploading a CSV file.\nCSV files can be exported from any spreadsheet or database program, usually by selecting the "File" menu and selected "Export as" or "Download as" and then selected "CSV".\n',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/spreadsheets/d/1-smgG2v8atZySX68hwoP-gaDJGvD0sGl3_GHZ7XTrtk/edit?usp=sharing"}),"Here's a sample Google Sheet of what you'll need to provide.")," The red columns are required."),Object(o.b)("p",null,"It's generally not worth the effort though, as curler's are quick to adopt and key in their profiles once you're using Curling I/O."),Object(o.b)("h3",{id:"can-our-club-use-curling-io-without-online-payments-for-free"},"Can our club use Curling I/O without online payments (for free)?"),Object(o.b)("p",null,"Yes. We have a handful of clubs that are using Curling I/O just for offline payments and it doesn't cost them a penny.\nOur assumption is that eventually your club will adopt online payments out of convenience for both club staff and your curlers.\nStarting with Curling I/O for offline payments only is a great way to get familiar with the system."),Object(o.b)("p",null,"Please keep in mind that we need to manage our support costs for clubs that are using our platform for free, and that you'll need to self-serve as much as possible.\nEvery support ticket has a cost for us, and our documentation should cover all of your support needs."),Object(o.b)("h3",{id:"we-have-complicated-pricing-and-discounts-will-curling-io-support-us"},"We have complicated pricing and discounts, will Curling I/O support us?"),Object(o.b)("p",null,"Yes, some of our clubs have extremely complicated discounts and fees, and Curling I/O is very flexible.\nHowever, if you've never codified your club's pricing before, expect to spend some time figuring it out."),Object(o.b)("p",null,"Eventually, our hope is that you'll simplify your pricing over time to make life easier for both your curlers and club staff."),Object(o.b)("h3",{id:"can-our-curlers-register-family-members"},"Can our curlers register family members?"),Object(o.b)("p",null,"Yes, each account (login) can have multiple profiles.\nKeep in mind that if you are leveraging our waivers, then the person registering family members must be a legal guardian for it to be valid.\nCoaches should NOT be registering their team's curlers as they are not considered a legal guardian that can accept waivers on their behalf."),Object(o.b)("h3",{id:"one-of-our-members-has-two-or-more-duplicate-curler-profiles-how-can-i-fix-that"},"One of our members has two or more duplicate curler profiles, how can I fix that?"),Object(o.b)("p",null,"In the curlers section you can flag profiles as duplicates, and we regularly merge these duplicate profiles.\nYou only need to flag one of them."),Object(o.b)("h3",{id:"what-is-an-account"},"What is an Account?"),Object(o.b)("p",null,"An account is just an email address and possibly a name to go along with it.\nWhen someone first logs in (signs up) to Curling I/O, an account is created for them with the email address they logged in with.\nEssentially you can think of an account as a ",Object(o.b)("strong",{parentName:"p"},"login"),"."),Object(o.b)("p",null,"Every account may own one or more curler profiles.\nAccounts will also be able to see and register with any curler profile that has a primary or secondary email matching the account's email."),Object(o.b)("p",null,"This means that when a curler profile is added to the Curling I/O, it could be shared between mutliple logins.\nSome people have and may login with multiple email addresses."),Object(o.b)("h4",{id:"example-1"},"Example 1"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Hurly has two email addresses; ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:hurly-buttons@gmail.com"}),"hurly-buttons@gmail.com")," and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:hurly-rocks@hotmail.com"}),"hurly-rocks@hotmail.com"),"."),Object(o.b)("li",{parentName:"ol"},"Hurly logs into Curling I/O with ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:hurly-buttons@gmail.com"}),"hurly-buttons@gmail.com"),"."),Object(o.b)("li",{parentName:"ol"},"Hurly creates a curler profile and enters ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:hurly-rocks@hotmail.com"}),"hurly-rocks@hotmail.com")," as his secondary email address."),Object(o.b)("li",{parentName:"ol"},"Months later Hurly logs back into Curling I/O using his ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:hurly-rocks@hotmail.com"}),"hurly-rocks@hotmail.com")," email."),Object(o.b)("li",{parentName:"ol"},"Curling I/O creates a new account for ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:hurly-rocks@hotmail.com"}),"hurly-rocks@hotmail.com"),"."),Object(o.b)("li",{parentName:"ol"},"Hurly goes to register for another league, and still sees and uses the curler profile he created earlier with his other account.")),Object(o.b)("h4",{id:"example-2"},"Example 2"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Jane logs into Curling I/O with ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:jane-hack@gmail.com"}),"jane-hack@gmail.com"),"."),Object(o.b)("li",{parentName:"ol"},"Jane creates a curler profile for herself and another curler profile for her 17 year old son Jimmy."),Object(o.b)("li",{parentName:"ol"},"Her son Jimmy, while a youth curler, has his own email address ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:jimme-hack@gmail.com"}),"jimme-hack@gmail.com"),", and Jane enters that email address into his curler profile."),Object(o.b)("li",{parentName:"ol"},"Jane registers herself and her son in a league."),Object(o.b)("li",{parentName:"ol"},"Her son Jimmy logs into Curler I/O a month later to register for another league."),Object(o.b)("li",{parentName:"ol"},"During registration Jimmy sees and is able to use the curler profile that his mother created for him earlier.")))}u.isMDXComponent=!0}}]);