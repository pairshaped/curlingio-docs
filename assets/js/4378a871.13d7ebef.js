"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5241],{3905:function(e,t,n){n.d(t,{kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(m,".").concat(p)]||d[p]||l[p]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(2263),r=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,m=o.absolute,u=void 0!==m&&m;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},44:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=(n(4996),["components"]),s={id:"teams",title:"Teams",slug:"/event-management/teams"},m=void 0,u={unversionedId:"event-management/teams",id:"event-management/teams",isDocsHomePage:!1,title:"Teams",description:"Walkthrough Video",source:"@site/docs/event-management/teams.md",sourceDirName:"event-management",slug:"/event-management/teams",permalink:"/docs/event-management/teams",tags:[],version:"current",frontMatter:{id:"teams",title:"Teams",slug:"/event-management/teams"},sidebar:"someSidebar",previous:{title:"Curlers",permalink:"/docs/event-management/curlers"},next:{title:"Round Robins",permalink:"/docs/event-management/round-robins"}},l=[{value:"Walkthrough Video",id:"walkthrough-video",children:[]},{value:"Finding the Teams Section",id:"finding-the-teams-section",children:[]},{value:"Team Recommendations",id:"team-recommendations",children:[]},{value:"Import Teams",id:"import-teams",children:[]},{value:"Manual Team Assembly",id:"manual-team-assembly",children:[]}],c={toc:l};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"walkthrough-video"},"Walkthrough Video"),(0,o.kt)("p",null,"The following video will take you, the curling club or event manager, through the basics of setting up teams for a league.\nIf you're new to Curling IO, it's worthwhile to watch this before wading through the rest of our documentation."),(0,o.kt)("div",{className:"text--center videoWrapper"},(0,o.kt)("iframe",{width:"100%",src:"https://www.youtube.com/embed/3ZO0gJbDcRc",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,o.kt)("h2",{id:"finding-the-teams-section"},"Finding the Teams Section"),(0,o.kt)("p",null,"You can assemble teams for each of your leagues or competitions.\nTo get to the teams screen, first click on the name of a league of competition."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Events List",src:n(1074).Z})),(0,o.kt)("p",null,"You should then see a list of tabs near the top.\nClick on the ",(0,o.kt)("strong",{parentName:"p"},"Teams")," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Teams Navigation",src:n(9628).Z})),(0,o.kt)("h2",{id:"team-recommendations"},"Team Recommendations"),(0,o.kt)("p",null,"If you asked for a team or skip name for your event, then you can leverage Curling IO's team recommendations.\nClick on the ",(0,o.kt)("strong",{parentName:"p"},"Recommendations")," button.\nIf you don't see this button it is because you aren't asking for a team or skip name and therefor the system cannot assemble teams for you."),(0,o.kt)("p",null,"On the recommendations screen, you will see a list of team suggestions.\nThese suggestions will be updated whenever a new registration occurs, and will include ",(0,o.kt)("em",{parentName:"p"},"New Team")," suggestions as well as ",(0,o.kt)("em",{parentName:"p"},"Team Update")," suggestions as new teams and curlers register."),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Create Team")," or ",(0,o.kt)("strong",{parentName:"p"},"Update Team")," button to accept the recommendation and assemble your teams."),(0,o.kt)("p",null,"If you find that there are multiple copies for the same team that have slightly different names (",(0,o.kt)("em",{parentName:"p"},'"Jones"')," vs. ",(0,o.kt)("em",{parentName:"p"},'"Team Jones"'),"), you can go to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/event-management/registrations"},"registrations tab")," and fix the team or skip names so that they are identical and then come back here."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Team Miss-match",src:n(4679).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Team Match",src:n(9288).Z})),(0,o.kt)("p",null,"We will also copy over the team contact name, phone, email, coach, and affiliation from the registration if are being asked and filled in."),(0,o.kt)("h2",{id:"import-teams"},"Import Teams"),(0,o.kt)("p",null,"You can import teams from another event from the current season that matches the team restriction (Men's, Women's, Mixed, etc.).\nThis is useful to copy teams from a preliminary competition or a semester / trimester leagues (Fall, Winter, Spring).\nWhen you import teams, it will also add any curlers assigned to these teams to your event, so be careful to select the correct event as there is no Undo button and you'll end up cleaning up both your teams and curlers if you select the wrong event."),(0,o.kt)("h2",{id:"manual-team-assembly"},"Manual Team Assembly"),(0,o.kt)("p",null,"You can manually assemble teams regardless of whether or not you're using our team recommendations.\nMaybe our team recommendations covered most of your teams, but you need to tweak a few assignments."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Team Match",src:n(4376).Z})),(0,o.kt)("p",null,"You can add or modify the team's:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name"),(0,o.kt)("li",{parentName:"ul"},"Short Name (for the draw schedule)"),(0,o.kt)("li",{parentName:"ul"},"Contact Information"),(0,o.kt)("li",{parentName:"ul"},"Coach"),(0,o.kt)("li",{parentName:"ul"},"Lineup")),(0,o.kt)("p",null,"You can also pre-create your teams before or while registrations are coming in if you want to setup your round robins and draw schedules ahead of time.\nYou don't need to assign curlers to teams to have round robins, draw schedules, and scores."))}d.isMDXComponent=!0},1074:function(e,t,n){t.Z=n.p+"assets/images/events-d18b109ded429fddd604c714df19b8be.png"},4376:function(e,t,n){t.Z=n.p+"assets/images/manual-assignment-7a956cf9e88c0b9d565a9d44c440166d.png"},9628:function(e,t,n){t.Z=n.p+"assets/images/navigation-48bc20a29000445e6f0cf9871e4b2d31.png"},9288:function(e,t,n){t.Z=n.p+"assets/images/team-match-db55bdf95d01b58cddfe5e8cc289516a.png"},4679:function(e,t,n){t.Z=n.p+"assets/images/team-missmatch-f8c42d661353bc63621d7d20c75a2aba.png"}}]);