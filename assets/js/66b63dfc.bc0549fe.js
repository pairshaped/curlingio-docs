"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5828],{3905:function(e,t,a){a.d(t,{kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(a),m=r,p=h["".concat(u,".").concat(m)]||h[m]||c[m]||o;return a?n.createElement(p,i(i({ref:t},d),{},{components:a})):n.createElement(p,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6378:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],s={id:"best-practices",title:"Best Practices",slug:"/getting-started/best-practices"},u=void 0,l={unversionedId:"getting-started/best-practices",id:"getting-started/best-practices",isDocsHomePage:!1,title:"Best Practices",description:"This document is for curling club managers that are new to Curling I/O or club's who's pricing, fees, or discounts have undergone significant changes for the next season.",source:"@site/docs/getting-started/best-practices.md",sourceDirName:"getting-started",slug:"/getting-started/best-practices",permalink:"/docs/getting-started/best-practices",tags:[],version:"current",frontMatter:{id:"best-practices",title:"Best Practices",slug:"/getting-started/best-practices"},sidebar:"someSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/getting-started/faq"},next:{title:"How do I Login?",permalink:"/docs/for-curlers/how-do-i-login"}},c=[{value:"Individual League Registrations",id:"individual-league-registrations",children:[{value:"Team Size Discounts",id:"team-size-discounts",children:[]}]},{value:"Avoid Complex Discount Combinations",id:"avoid-complex-discount-combinations",children:[]},{value:"Make Sure Fees are Required",id:"make-sure-fees-are-required",children:[]},{value:"Assign Fees, Addons, and Discounts to Leagues",id:"assign-fees-addons-and-discounts-to-leagues",children:[]},{value:"Assign Custom Fields and Discounts",id:"assign-custom-fields-and-discounts",children:[]},{value:"Don&#39;t spam yourself with registration emails",id:"dont-spam-yourself-with-registration-emails",children:[]},{value:"Use a separate non-administrator email for registration nights",id:"use-a-separate-non-administrator-email-for-registration-nights",children:[]},{value:"Test Your Registrations",id:"test-your-registrations",children:[]},{value:"Ask us to Review your Setup",id:"ask-us-to-review-your-setup",children:[]}],d={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document is for curling club managers that are new to Curling I/O or club's who's pricing, fees, or discounts have undergone significant changes for the next season."),(0,o.kt)("p",null,"If you are brand new to Curling I/O then your best bet is to start with our ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PLewhXbqjD6VFr-WlpNC1CGEvF9UV33jLb"},"tutorial videos here"),".\nMaking the up front time investment to understand your curler registration system will save you a ton of time and headaches down the road once you've started taking registrations."),(0,o.kt)("p",null,"We'll start by outlining some general best practices with the reasoning behind them, and then go through specific examples we've seen clubs struggle with."),(0,o.kt)("h2",{id:"individual-league-registrations"},"Individual League Registrations"),(0,o.kt)("p",null,'We highly recommend that your members register for your leagues as individuals rather than as a team.\nBy default league registrations are individual.\nThe "Requires curler profile" checkbox is what determines this.\nYou can uncheck this box to accept team registrations, but this is almost always a mistake.'),(0,o.kt)("p",null,"Individual registration has multiple benefits:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can accurately capture membership and affiliation fees per member per season. Curling I/O will remember which fees a curler has already paid each season and they won't be charged more than once. Alternatively, with team registrations, if these fees are embedded within team prices, you will ",(0,o.kt)("em",{parentName:"li"},"double dip")," when one of your members is in multiple leagues."),(0,o.kt)("li",{parentName:"ol"},"Addons like lockers can be associated with individual curlers when they register for their leagues."),(0,o.kt)("li",{parentName:"ol"},"You can still gather team and position information simply by asking for the team or skip name and their position. Curling I/O will later make team recommendations based on these fields if you are using our league management features."),(0,o.kt)("li",{parentName:"ol"},"Through the use of discounts and custom fields you can still offer individual discounts based on team size. For example, you can ask if it's a 5 person team and offer a 20% off discount for each individual who selects it.")),(0,o.kt)("h3",{id:"team-size-discounts"},"Team Size Discounts"),(0,o.kt)("p",null,"If your pricing has been historically team based, you'll want to offer a percentage discount to members who play on a 5 or 6 player team.\nThe easiest way to do this is to simply ask them using a custom field."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Create a new custom field for "Number of players on team".'),(0,o.kt)("li",{parentName:"ol"},'Select "Dropdown" as the type of field.'),(0,o.kt)("li",{parentName:"ol"},'Enter "Four, Five, Six" for the options.'),(0,o.kt)("li",{parentName:"ol"},'Create a 5 player 20% discount, using the custom field criteria. Select the custom field you created in the drop down and enter "Five" as the value.'),(0,o.kt)("li",{parentName:"ol"},'Create a 6 player 33.33% discount, using the custom field criteria. Select the custom field you created in the drop down and enter "Six" as the value.'),(0,o.kt)("li",{parentName:"ol"},'For each of the relevant leagues add the "Number of players on team" to the custom fields and make it required. This will force every member to select Four, Five, or Six when they register.'),(0,o.kt)("li",{parentName:"ol"},"For each of the relevant leagues add both the 5 player and the 6 player discount.")),(0,o.kt)("p",null,'Now when your members register for a league they will be asked how many players are on their team.\nIf they select "Five" then they will receive a 20% discount.\nIf all 5 members of the team do this, they will together pay the total team price for the league.'),(0,o.kt)("h2",{id:"avoid-complex-discount-combinations"},"Avoid Complex Discount Combinations"),(0,o.kt)("p",null,"We know that sometimes this can't be helped, but we recommend staying away from complicated discount schemes.\nIf you can't quickly grasp your discount logic without using a spreadsheet, then your curlers probably can't either."),(0,o.kt)("p",null,"Discounts can be a great way to get new members and encourage more involvement through multiple leagues, but only if your members realize how they may qualify."),(0,o.kt)("h2",{id:"make-sure-fees-are-required"},"Make Sure Fees are Required"),(0,o.kt)("p",null,"When assigning your seasonal fees to your leagues or products, make sure you mark them as required.\nCurling I/O keeps track of which curlers have paid which seasonal fees and won't charge them again within the same season."),(0,o.kt)("p",null,"If you do not mark them as required, then you will miss collecting a lot of fees because the member didn't check the box to pay these fees."),(0,o.kt)("h2",{id:"assign-fees-addons-and-discounts-to-leagues"},"Assign Fees, Addons, and Discounts to Leagues"),(0,o.kt)("p",null,"Just creating the fee, addon, or discount doesn't actually affect anything until you assign it to the appropriate leagues, products, or competitions."),(0,o.kt)("p",null,'If your "Monday Night Open" should have a Junior Discount of 50% for members 17 and under, then you need to make sure you associate this discount with it.'),(0,o.kt)("h2",{id:"assign-custom-fields-and-discounts"},"Assign Custom Fields and Discounts"),(0,o.kt)("p",null,"If you have a discount who's criteria relies on the answer to a custom field, then you need to associate both the custom field and the discount to the item being discounted."),(0,o.kt)("p",null,'For example if you want to offer a "New Curler" discount for your "Monday Night Open" league:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Create a "New Curler?" custom field dropdown to ask if they are a new curler with "Yes, No" options.'),(0,o.kt)("li",{parentName:"ol"},'Create a "New Curler" discount with the criteria that they answer "Yes" to my "New Curler?" custom field.'),(0,o.kt)("li",{parentName:"ol"},'Assign both the "New Curler?" custom field and the "New Curler" discount to the "Monday Night Open" league.')),(0,o.kt)("p",null,'Now when your members register for this league and answer "Yes" that they are a new curler, they will receive the new curler discount.'),(0,o.kt)("p",null,"We also recommend using a dropdown instead of a checkbox for custom fields that are used by a discount's criteria.\nThe reason for this is that you can make a dropdown required to force your members to see it.\nIf you make a checkbox required it means that everyone must check it off (and everyone then gets the discount).\nIf you make a checkbox optional and there are no other required fields for the league or product, then your member's may never even see it because they aren't forced to during registration.\nWith a dropdown you can make it required without automatically giving everyone the discount, but are making sure they will all see it."),(0,o.kt)("h2",{id:"dont-spam-yourself-with-registration-emails"},"Don't spam yourself with registration emails"),(0,o.kt)("p",null,'Your leagues, competitions, and products have a "Notification email" field. This should only be used to send emails to people who aren\'t also administrators, like an outside dedicated league manager or someone running a commercial league.\nIf you are an administrator you already have access to all of your recent orders from the ',(0,o.kt)("a",{parentName:"p",href:"/docs/club-management/orders"},"Orders Screen"),".\nIf you're sending thousands of emails to your club's email address and someone with access happens to get annoyed and marks any of them as spam, the system will immediately stop sending you any emails, including other potentially important emails."),(0,o.kt)("h2",{id:"use-a-separate-non-administrator-email-for-registration-nights"},"Use a separate non-administrator email for registration nights"),(0,o.kt)("p",null,"If you have members coming into your club who are not able to create / login with their own email address, we recommend creating a separate registration specific account to hold these curler profiles and orders."),(0,o.kt)("p",null,'If you want to be able to handle multiple registrations at the same time on this registration account, please let us know and we can flag it as a "multicart" account to avoid having these multiple instances of the login from clobbering each other\'s cart.'),(0,o.kt)("h2",{id:"test-your-registrations"},"Test Your Registrations"),(0,o.kt)("p",null,"Make sure that you test each possible registration scenario before you open up registration to your members.\nThis can save you a ton of headaches in the long run trying to fix mistakes and refund payments."),(0,o.kt)("p",null,"Curling I/O has a lot of flexibility, especially when it comes to discounts.\nThis is necessary to support all the different registration methods that different clubs have.\nComplex setups can result in unexpected outcomes though, so the more complicated your setup, the more testing you should do."),(0,o.kt)("p",null,"You can test your registrations at any time and even submit the orders. You can then delete these test orders when you're done."),(0,o.kt)("h2",{id:"ask-us-to-review-your-setup"},"Ask us to Review your Setup"),(0,o.kt)("p",null,"If this is your first time using Curling I/O, and you've just finished setting everything up, feel free to ask us to review your setup."),(0,o.kt)("p",null,"DO NOT LEAVE THIS UNTIL THE DAY BEFORE REGISTRATION!"),(0,o.kt)("p",null,"Make sure you're set up well in advance of opening registrations and send us a support request to take a look at least 2 weeks before you open registration."))}h.isMDXComponent=!0}}]);