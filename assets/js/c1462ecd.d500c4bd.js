"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5240],{3905:function(e,t,a){a.d(t,{kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3919:function(e,t,a){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){a.d(t,{C:function(){return l},Z:function(){return o}});var n=a(2263),r=a(3919);function l(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var l=void 0===n?{}:n,o=l.forcePrependBaseUrl,i=void 0!==o&&o,s=l.absolute,u=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(i)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return u?e+c:c}(l,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},145:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),o=(a(4996),["components"]),i={id:"draw-schedule-templates",title:"Draw Schedule Templates",slug:"/club-management/draw-schedule-templates"},s=void 0,u={unversionedId:"club-management/draw-schedule-templates",id:"club-management/draw-schedule-templates",isDocsHomePage:!1,title:"Draw Schedule Templates",description:"Draw schedules templates allow you to pre-create draw schedules that you will re-use between multiple leagues and competitions year after year.",source:"@site/docs/club-management/draw-schedule-templates.md",sourceDirName:"club-management",slug:"/club-management/draw-schedule-templates",permalink:"/docs/club-management/draw-schedule-templates",tags:[],version:"current",frontMatter:{id:"draw-schedule-templates",title:"Draw Schedule Templates",slug:"/club-management/draw-schedule-templates"},sidebar:"someSidebar",previous:{title:"Custom Fields",permalink:"/docs/club-management/custom-fields"},next:{title:"Managers",permalink:"/docs/club-management/managers"}},c=[{value:"Finding Draw Schedule Templates",id:"finding-draw-schedule-templates",children:[]},{value:"The Basics",id:"the-basics",children:[{value:"Creating the Template",id:"creating-the-template",children:[]},{value:"Editing the Template",id:"editing-the-template",children:[]}]},{value:"Copying a Draw Schedule Template",id:"copying-a-draw-schedule-template",children:[]},{value:"Deleting Draw Schedule Templates",id:"deleting-draw-schedule-templates",children:[]}],d={toc:c};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Draw schedules templates allow you to pre-create draw schedules that you will re-use between multiple leagues and competitions year after year."),(0,l.kt)("p",null,"Curling I/O provides a standard set of templates, which will likely grow over time."),(0,l.kt)("p",null,"You can copy these templates as a starting point or create your own from scratch."),(0,l.kt)("p",null,"When you generate a draw schedule for one of your leagues or competitions, Curling I/O will find any templates that closely match the number of teams and sheets, then ask you to select which one you would like to use."),(0,l.kt)("h2",{id:"finding-draw-schedule-templates"},"Finding Draw Schedule Templates"),(0,l.kt)("p",null,"Within your admin area, click on the ",(0,l.kt)("strong",{parentName:"p"},"Club")," dropdown menu in the top bar and then click on ",(0,l.kt)("strong",{parentName:"p"},"Draw Schedule Templates"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Navigation",src:a(3679).Z})),(0,l.kt)("p",null,"To create a draw schedule template click on the ",(0,l.kt)("strong",{parentName:"p"},"New template")," button (or copy an existing one)."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"New",src:a(634).Z})),(0,l.kt)("p",null,"To update an existing draw schedule, click the ",(0,l.kt)("strong",{parentName:"p"},"Edit")," link next to it."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edit",src:a(5510).Z})),(0,l.kt)("h2",{id:"the-basics"},"The Basics"),(0,l.kt)("h3",{id:"creating-the-template"},"Creating the Template"),(0,l.kt)("p",null,"When you first create the template, you need to fill in a few required fields and then we'll generate all of the games for you."),(0,l.kt)("h4",{id:"name"},"Name"),(0,l.kt)("p",null,'Give your draw schedule template a description name. As an example, the name of one of our standard templates is "Standard: 8 teams, 4 sheets".'),(0,l.kt)("p",null,"If the template is custom to a specific league or competition though, you will probably name it after that league or competition."),(0,l.kt)("h4",{id:"teams"},"Teams"),(0,l.kt)("p",null,"How many teams will there be for this draw schedule? If you are running 2 pools, please double the number of teams. For example, 2 pools of 8 teams each will require your draw schedule template to specify 16 teams."),(0,l.kt)("h4",{id:"sheets"},"Sheets"),(0,l.kt)("p",null,"How many sheets are being used for this draw schedule?"),(0,l.kt)("h4",{id:"draws"},"Draws"),(0,l.kt)("p",null,"How many draws will there be in this draw schedule?"),(0,l.kt)("h4",{id:"pools"},"Pools"),(0,l.kt)("p",null,"If you are running multiple round robin stages (pools). Multiple pools are assumed to have the same number of teams in each. For example, 2 pools of 8 teams each, will assign team numbers of 1-8 for the first pool, and 9-16 for the second pool."),(0,l.kt)("p",null,"When using a multiple pool draw schedule template, each of your pools must have the same number of teams and sheets."),(0,l.kt)("h3",{id:"editing-the-template"},"Editing the Template"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Editing",src:a(1954).Z})),(0,l.kt)("p",null,"After creating the template you're ready to fill in the schedule. You'll see all of the games we generated so you can select the teams that will play each other in each draw."),(0,l.kt)("p",null,"When editing however, you can no longer change the number of teams, sheets, or draws."),(0,l.kt)("p",null,'Once you\'re happy with the schedule you can check the "Active" checkbox to activate it then save it.'),(0,l.kt)("p",null,"This template can now be used when generating draw schedules for your leagues and competitions."),(0,l.kt)("h2",{id:"copying-a-draw-schedule-template"},"Copying a Draw Schedule Template"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Edit",src:a(8853).Z})),(0,l.kt)("p",null,"You can copy any of your existing draw schedule templates to use them as a starting point for further customization."),(0,l.kt)("h2",{id:"deleting-draw-schedule-templates"},"Deleting Draw Schedule Templates"),(0,l.kt)("p",null,"To remove a draw schedule template, click the ",(0,l.kt)("strong",{parentName:"p"},"Delete")," link next to it. You can only delete templates created for your club."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Delete",src:a(1417).Z})))}m.isMDXComponent=!0},8853:function(e,t){t.Z="data:image/png;base64,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"},1417:function(e,t){t.Z="data:image/png;base64,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"},5510:function(e,t){t.Z="data:image/png;base64,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"},1954:function(e,t,a){t.Z=a.p+"assets/images/editing-5ae67ef56050332c5d55fa1f2f484db9.png"},3679:function(e,t,a){t.Z=a.p+"assets/images/navigation-c78594d7cda184de4fd706ef4358f0cb.png"},634:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAAxCAMAAADz04tMAAABs1BMVEXQEDP////88vT99vfQEjX//v7//f3REzXnh5n++frRFTfgYXn98/X++vvSGz3YOVb87vH66Ov99fbzwsv88PL43OH++fn99PXEEDH++/zvrbnwsb3UIkL0xs7mgpXEDzDdUGn87/H87fD76Oz76e354eX++Pn1y9PeVm/dUmz65unsnqzkeIzng5X42+HZO1jUJkXnhJb20dj77O/cTWfpkaHSGTvaQV3pjp/YN1XTHT7sn63vr7vxt8HoiJncTmj54OX2z9baQ17SGDnuq7fgY3rwtL/RFznmgJPXNVPVJ0fkd4vXNFHrnKr42t/ZPlrmfpHibIH76u3zw8z1zNTTIEHvrLnyv8nbRWHVKUnpj6DojJ3zwcrjcYb65OjzwMnyvcbws77jcofbSWTeeIr32d7uqbX0yNDWL03yu8XwtcDzxM3snavuqrbtoa/aRF/dU2343eL31NribYLrmKfvrrrfXXXcS2X54ubrmqnUJETfW3PfWnL31dv31tzdUmvVKknhZ33yvMXjb4T0ydH1ytLoi5zuqLXbSGPtpbLqlaXlfZD20tnhZn3torDWME7XMlCSRuBHAAACwUlEQVR4Xu3YVYvtSABF4bXjx73d3V2vu7u733F3d/efPFOEQ0Ez9OWSHuY8ZL2FwOaDQCgKtXap7xmlvtT3pKO/5ep4Yn0dtGAd1tdPC9af+lJf6kt9qS/1cSL6L3zT6sbkDG4DmIyyPLOhvAVko8kd8u2W9gPknW0Avep5Pl+PenfO54TW523rs289+wie9cUP1ucl9zX0ftO3J6+RPkL3ZTjU9hBW2hYBln1lhuCtOb9wZQGm3nml03/x6kHfP1fkdNvMR8rUDse++QOByl8zm5HfFjX3Evom8noc+/bq0qtjushy1bjb4Q29CfCCo9oRTnYGV+ZUCXH9TK2uscydS7pDJL96uaxx4yOb0dLBQKWJmpwHnzX3Evq+HNBgaHybasBXBYdjWmA00EvMZez3ZUkTcEQzuCpR9HWG451lIrUX8aa0bnwn7z+CRa2a74vdS+ijW68b3wU9zOVyeWU/0EzW/1m3KSxZHxn98/ZXHcMdBJw8MOIS6SxwWrPGB8c/PPqeuowPu5fUl3V0I+/Qrbj1MLieU2nk8/NatD4U9xR3uPk/Gja+d4Eb6ja+8LovKfZh95L6WFG53WFDfZumkLfLe12uFVZ1yvooVDdNp7b6VoGLumV8+3Tg7vz+ps/uJfXRJTk81n3g29c8PpbTy4CG6sRd1nlo+Gfgk+lPt/ruAeMaML6aVuAXdXFVX2D3kvvCuhy8UX2374EqMC89goK+Ia5PoyfIyd294ejoVp/O3fpeFc/4ftDU7B6pC6rBj4fsXiLfAMBPqsOup4HUuAmMaQ1+0+/EFYfVCRfapUIEbgWol4GK8f0xJt27Cct5suNSMK1rcDvQWbu3Y+cDr7TGv1YsAiz8ydYi5fhrF80Ol7KYCHs8u5fAlzDja+nz1d3qZHo+ff5SX+pLfaS+1r/fbf378ZYt9aW+/72/AW2+kt4hzcywAAAAAElFTkSuQmCC"}}]);