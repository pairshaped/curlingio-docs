"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7362],{3905:function(e,t,n){n.d(t,{kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6669:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],o={id:"event-details",title:"Event Details",slug:"/api/event-details"},l=void 0,p={unversionedId:"api/event-details",id:"api/event-details",isDocsHomePage:!1,title:"Event Details",description:"Events are leagues and competitions.",source:"@site/docs/api/event-details.md",sourceDirName:"api",slug:"/api/event-details",permalink:"/docs/api/event-details",tags:[],version:"current",frontMatter:{id:"event-details",title:"Event Details",slug:"/api/event-details"},sidebar:"someSidebar",previous:{title:"Items",permalink:"/docs/api/items"},next:{title:"Product Details",permalink:"/docs/api/product-details"}},d=[{value:"Fetching the event",id:"fetching-the-event",children:[]},{value:"Payload",id:"payload",children:[{value:"Teams",id:"teams",children:[]},{value:"Stages",id:"stages",children:[]},{value:"Draws",id:"draws",children:[]}]}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Events are leagues and competitions."),(0,i.kt)("h2",{id:"fetching-the-event"},"Fetching the event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://api-curlingio.global.ssl.fastly.net/en/clubs/[subdomain]/events/[id]\n")),(0,i.kt)("p",null,"Replacing ",(0,i.kt)("strong",{parentName:"p"},"[subdomain]")," with your clubs Curling IO subdomain, and ",(0,i.kt)("strong",{parentName:"p"},"[id]")," with the events (league or competition) unique identifier.\nFor example Curling Canada's Curling IO site is at ",(0,i.kt)("a",{parentName:"p",href:"https://canada.curling.io"},"https://canada.curling.io"),", and the 2023 Time Hortons Brier ID is 14890.\nTherefore we replace ",(0,i.kt)("strong",{parentName:"p"},"[subdomain]")," with ",(0,i.kt)("strong",{parentName:"p"},"canada")," and ",(0,i.kt)("strong",{parentName:"p"},"[id]")," with ",(0,i.kt)("strong",{parentName:"p"},"14890")," giving us:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://api-curlingio.global.ssl.fastly.net/en/clubs/canada/events/14890\n")),(0,i.kt)("p",null,"Replacing ",(0,i.kt)("strong",{parentName:"p"},"en")," with ",(0,i.kt)("strong",{parentName:"p"},"fr")," will fetch the french version."),(0,i.kt)("p",null,"Note: If you don't know the event ID, you can find it within the ",(0,i.kt)("a",{parentName:"p",href:"https://curling.io/docs/club-management/leagues"},"Curling IO admin area"),", or by using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/items"},"Items API to get a list of events along with their IDs"),"."),(0,i.kt)("h2",{id:"payload"},"Payload"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": 14890,\n  "name": "2023 Tim Hortons Brier",\n  "starts_on": "Mar 03, 2023",\n  "ends_on": "Mar 12, 2023",\n  "state": "complete",\n  "location": "London, Ontario",\n  "venue": "Budweiser Gardens",\n  "team_restriction": "Open",\n  "age_range": "N/A",\n  "no_registration_message": "Registration closed",\n  "teams": [],\n  "stages": [],\n  "sheet_names": [],\n  "end_scores_enabled": true,\n  "number_of_ends": 10,\n  "top_rock": "red",\n  "bot_rock": "yellow",\n  "shot_by_shot_enabled": true,\n  "last_stone_draw_enabled": false,\n  "draws": []\n}\n')),(0,i.kt)("h3",{id:"teams"},"Teams"),(0,i.kt)("p",null,"Within the teams array node (",(0,i.kt)("inlineCode",{parentName:"p"},'"teams": []'),") you have team data.\nThese team IDs will be referenced in standings and game_positions."),(0,i.kt)("p",null,"Path: teams -> team"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": 47029,\n  "name": "Alberta (Koe)",\n  "short_name": "AB (KOE)",\n  "affiliation": "The Glencoe Club",\n  "location": "Calgary, Alberta",\n  "lineup": []\n}\n')),(0,i.kt)("h4",{id:"lineup"},"Lineup"),(0,i.kt)("p",null,"Within the lineup array node (",(0,i.kt)("inlineCode",{parentName:"p"},'"lineup": []'),") you have curler data.\nThe curler IDs will be referenced in shots."),(0,i.kt)("p",null,"Path: teams -> team -> lineup"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "curler_id": 1781,\n  "position": "fourth",\n  "skip": true,\n  "name": "Kevin Koe",\n  "delivery": "Right",\n  "club_name": "Glencoe Club",\n  "club_city": "Calgary"\n}\n\n')),(0,i.kt)("h3",{id:"stages"},"Stages"),(0,i.kt)("p",null,"Within the stages array node (",(0,i.kt)("inlineCode",{parentName:"p"},'"stages": []'),") you have round robin and bracket data."),(0,i.kt)("p",null,"Path: stages -> stage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": 6736,\n  "type": "RoundRobin",\n  "name": "Pool A",\n  "standings": [],\n  "games": []\n}\n\n')),(0,i.kt)("h4",{id:"standings"},"Standings"),(0,i.kt)("p",null,"Within the standings array node (",(0,i.kt)("inlineCode",{parentName:"p"},'"standings": []'),") you have team standings / rank data."),(0,i.kt)("p",null,"Path: stages -> stage -> standings -> standing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": 47187,\n  "rank": 1,\n  "played": 8,\n  "wins": 8,\n  "ties": 0,\n  "losses": 0\n},\n\n')),(0,i.kt)("h4",{id:"games"},"Games"),(0,i.kt)("p",null,"Within the games array node (",(0,i.kt)("inlineCode",{parentName:"p"},'"games": []'),") you have game data."),(0,i.kt)("p",null,"Path: stages -> stage -> games -> game"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "name": "WC2 (CAR) vs NU (HIG)",\n  "state": "complete",\n  "id": "fd1bc71e",\n  "game_positions": []\n}\n\n')),(0,i.kt)("h5",{id:"game-positions"},"Game Positions"),(0,i.kt)("p",null,"Within the game_positions array node (",(0,i.kt)("inlineCode",{parentName:"p"},'"game_positions": []'),") you have game position (side) data, which includes end scores.\nEvey game should have exactly two game positions, one for each team participating.\nIt's possible to have a game position without a team assigned yet for bracket games, where it's populated by the winner / loser from another game that hasn't finished yet.\nThe end scores are indexed, so the first end score of 2 in the below example is in the first end, followed by 1 in the second end, 0 in the third, etc."),(0,i.kt)("p",null,"Path: stages -> stage -> games -> game -> game_positions -> game_position"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "team_id": 47037,\n  "score": 8,\n  "result": "won",\n  "top_rock": true,\n  "first_hammer": true,\n  "time_remaining": "606",\n  "end_scores": [2, 1, 0, 0, 3, 0, 2, 0, 0, 0],\n  "shots": []\n}\n\n')),(0,i.kt)("h6",{id:"shots"},"Shots"),(0,i.kt)("p",null,"Within the shots array node (",(0,i.kt)("inlineCode",{parentName:"p"},'"shots": []'),") you have shot by shot data. Most events don't track shot by shot data.\nThe end number references the indexes from the end scores, starting at 1 (not 0)."),(0,i.kt)("p",null,"Path: stages -> stage -> games -> game -> game_positions -> game_position -> shots -> shot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "turn": "I",\n  "throw": "E",\n  "rating": "4",\n  "curler_id": 56162,\n  "end_number": 1,\n  "shot_number": 1\n}\n\n')),(0,i.kt)("h3",{id:"draws"},"Draws"),(0,i.kt)("p",null,"Within the draws array node (",(0,i.kt)("inlineCode",{parentName:"p"},'"draws": []'),') you have draw schedule data.\nThe draw sheets list the game IDs for each sheet in order.\nIn this example, the game ID of "3db7fda0" is on Sheet 1.\nOften sheets will be null when there is no game on that sheet for the draw.'),(0,i.kt)("p",null,"Path: draws -> draw"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": 127575,\n  "label": "1",\n  "starts_at": "Mar 03 at  7:00 pm",\n  "attendance": 3910,\n  "draw_sheets": ["3db7fda0", "cc34ae70", "5f1d2e2b", "0da23f90"]\n}\n')))}c.isMDXComponent=!0}}]);