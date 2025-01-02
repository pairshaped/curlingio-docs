"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1445],{3905:function(e,t,n){n.d(t,{kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6564:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"pricing",title:"Pricing",slug:"/getting-started/pricing"},s=void 0,p={unversionedId:"getting-started/pricing",id:"getting-started/pricing",isDocsHomePage:!1,title:"Pricing",description:"Canadian Clubs",source:"@site/docs/getting-started/pricing.md",sourceDirName:"getting-started",slug:"/getting-started/pricing",permalink:"/docs/getting-started/pricing",tags:[],version:"current",frontMatter:{id:"pricing",title:"Pricing",slug:"/getting-started/pricing"},sidebar:"someSidebar",previous:{title:"Curling Club Management",permalink:"/docs/getting-started/curling-club-managers"},next:{title:"Premium Tier",permalink:"/docs/getting-started/premium"}},c=[{value:"Canadian Clubs",id:"canadian-clubs",children:[{value:"Notes",id:"notes",children:[]},{value:"Example Fees for Online Payments",id:"example-fees-for-online-payments",children:[]}]},{value:"Clubs in the United States",id:"clubs-in-the-united-states",children:[{value:"Notes",id:"notes-1",children:[]},{value:"Example Fees for Online Payments",id:"example-fees-for-online-payments-1",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"canadian-clubs"},"Canadian Clubs"),(0,i.kt)("p",null,"There are three pricing option available for Canadian clubs."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2.7% + $0.30")," per transaction (online payment) for clubs that are ",(0,i.kt)("strong",{parentName:"p"},"only accepting online payments")," (offline payments disabled). This includes access to all premium features.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2.9% + $0.30")," per transaction (online payment) for clubs that want to enable both online and offline payments. This includes access to all premium features. The offline payments cost nothing.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you don't want to accept online payments then you can use Curling IO ",(0,i.kt)("strong",{parentName:"p"},"free for offline payments"),". You lose access to premium features, but can purchase premium tier for a year if and when you like."))),(0,i.kt)("p",null,"There are no setup fees and no fees for offline payments. You can use the core Curling IO platform and features completely free of charge."),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("p",null,"2.7% + $0.30 means that 2.7% of the amount of the payment plus another $0.30 will come out of ",(0,i.kt)("strong",{parentName:"p"},"your")," end for every online payment.\nThis includes all credit card processing fees.\nSo if it's a $100 payment you will receive $97.00 when it's deposited."),(0,i.kt)("p",null,"There are additional fees for disputes (chargebacks) which you will see in the agreement, but luckily those are very rare in curling."),(0,i.kt)("p",null,"We do offer a feature that allows you to ",(0,i.kt)("a",{parentName:"p",href:"/docs/club-management/settings#convenience-fee--surcharge"},"charge your members a convenience fee"),", however it is solely the club's responsibility to be compliant with their local laws."),(0,i.kt)("p",null,"Online payments can take up to 7 days before they are cleared and available for payout (direct deposit)."),(0,i.kt)("p",null,"International credit cards may incur additional fees with our payment processor.\nThis is usually only a concern if you're running a large competition in which competitors are coming in from other countries."),(0,i.kt)("p",null,"Only VISA and Mastercard are currently accepted (and debit cards with VISA of Mastercard co-branding).\nOther cards incur additional fees for our clubs, so we've opted to disable them for the time being."),(0,i.kt)("p",null,"There are ",(0,i.kt)("strong",{parentName:"p"},"NO FEES"),' for offline payments. This is when a member registers at your club using Curling IO selects to pay "At the club" option.\nYou are responsible for collecting offline payments and logging those payments against your orders in Curling IO.\nOffline payments cost you nothing but your time (to collect and log).'),(0,i.kt)("h3",{id:"example-fees-for-online-payments"},"Example Fees for Online Payments"),(0,i.kt)("p",null,"Here are a few examples to help you visualize the cost of online transactions.\nThe majority of this cost is paid to the credit card processor."),(0,i.kt)("h4",{id:"100-purchase"},"$100 purchase"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$100 x 2.7% + 30c = $3.00")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$100 x 2.9% + 30c = $3.20")),(0,i.kt)("h4",{id:"200-purchase"},"$200 purchase"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$200 x 2.7% + 30c = $5.70")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$200 x 2.9% + 30c = $6.10")),(0,i.kt)("h4",{id:"500-purchase"},"$500 purchase"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$500 x 2.7% + 30c = $13.80")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$500 x 2.9% + 30c = $14.80")),(0,i.kt)("h4",{id:"1000-purchase"},"$1,000 purchase"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$1,000 x 2.7% + 30c = $27.30")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$1,000 x 2.9% + 30c = $29.30")),(0,i.kt)("h2",{id:"clubs-in-the-united-states"},"Clubs in the United States"),(0,i.kt)("p",null,"Our pricing is simple and the same for every club in the United States."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3.6% + $0.35 per transaction")," for online payments. This includes access to all premium features."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"No setup fees.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"No monthly fees.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"No fees for offline payments.")),(0,i.kt)("h3",{id:"notes-1"},"Notes"),(0,i.kt)("p",null,"3.6% + $0.35 means that 3.6% of the amount of the payment plus another $0.35 will come out of ",(0,i.kt)("strong",{parentName:"p"},"your")," end for every online payment.\nThis includes all credit card processing fees.\nSo if it's a $100 payment you will only receive $96.05 when it's deposited."),(0,i.kt)("p",null,"There are additional fees for disputes (chargebacks) which you will see in the agreement, but luckily those are very rare in curling."),(0,i.kt)("p",null,"We do offer a feature that allows you to ",(0,i.kt)("a",{parentName:"p",href:"/docs/club-management/settings#convenience-fee--surcharge"},"charge your members a convenience fee"),", however it is solely the club's responsibility to be compliant with their local laws."),(0,i.kt)("p",null,"Online payments can take up to 7 days before they are cleared and available for payout (direct deposit)."),(0,i.kt)("p",null,"We would love to offer our US based clubs the same pricing as our canadian clubs, but unfortunately it's not up to us. Each country results in a separate agreement with our payment processor. ",(0,i.kt)("strong",{parentName:"p"},"We are actively working on lowering this with our new payment processor.")),(0,i.kt)("p",null,"Only VISA and Mastercard are currently accepted (and debit cards with VISA of Mastercard co-branding).\nOther cards incur additional fees for our clubs, so we've opted to disable them for the time being."),(0,i.kt)("p",null,"There are ",(0,i.kt)("strong",{parentName:"p"},"NO FEES"),' for offline payments. This is when a member registers at your club using Curling IO selects to pay "At the club" option.\nYou are responsible for collecting offline payments and logging those payments against your orders in Curling IO.\nOffline payments cost you nothing but your time (to collect and log).'),(0,i.kt)("h3",{id:"example-fees-for-online-payments-1"},"Example Fees for Online Payments"),(0,i.kt)("p",null,"Here are a few examples to help you visualize the cost of online transactions.\nThe majority of this cost is paid to the credit card processor / network."),(0,i.kt)("h4",{id:"100-purchase-1"},"$100 purchase"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$100 x 3.6% + 35c = $3.95")),(0,i.kt)("h4",{id:"200-purchase-1"},"$200 purchase"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$200 x 3.6% + 35c = $7.55")),(0,i.kt)("h4",{id:"500-purchase-1"},"$500 purchase"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$500 x 3.6% + 35c = $18.35")),(0,i.kt)("h4",{id:"1000-purchase-1"},"$1,000 purchase"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$1,000 x 3.6% + 35c = $36.35")))}d.isMDXComponent=!0}}]);