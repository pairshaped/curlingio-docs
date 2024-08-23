"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8424],{3905:function(e,t,n){n.d(t,{kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,f=h["".concat(s,".").concat(m)]||h[m]||l[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,s=i.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},6998:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return h}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=(n(4996),["components"]),u={id:"support",title:"Support",slug:"/club-management/support"},s=void 0,p={unversionedId:"club-management/support",id:"club-management/support",isDocsHomePage:!1,title:"Support",description:"You can submit supports requests from within Curling I/O. Support requests submitted any other way may be missed or at a minimum will take longer for a response.",source:"@site/docs/club-management/support.md",sourceDirName:"club-management",slug:"/club-management/support",permalink:"/docs/club-management/support",tags:[],version:"current",frontMatter:{id:"support",title:"Support",slug:"/club-management/support"},sidebar:"someSidebar",previous:{title:"Registration and Results Widget",permalink:"/docs/club-management/registration-widget"},next:{title:"Premium Tier",permalink:"/docs/club-management/premium"}},l=[{value:"Finding Support Requests",id:"finding-support-requests",children:[]},{value:"Submitting Support Requests",id:"submitting-support-requests",children:[{value:"Subject",id:"subject",children:[]},{value:"Curler name",id:"curler-name",children:[]},{value:"Order number",id:"order-number",children:[]},{value:"Item name",id:"item-name",children:[]},{value:"Attachment",id:"attachment",children:[]},{value:"Body",id:"body",children:[]}]},{value:"If you do not have admin access yet",id:"if-you-do-not-have-admin-access-yet",children:[]}],c={toc:l};function h(e){var t=e.components,u=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can submit supports requests from within Curling I/O. Support requests submitted any other way may be missed or at a minimum will take longer for a response."),(0,i.kt)("p",null,"It's important to differentiate between support requests and feature requests. Do not submit feature requests here, instead please use our ",(0,i.kt)("a",{parentName:"p",href:"https://curling.canny.io/clubs"},"feedback board")," where you can not only post your request but also find and vote on other feature requests."),(0,i.kt)("p",null,"Please keep in mind that support has a cost (to us).\nWe made a choice early on, that in order to keep costs and fees to a minimum, our clubs would need to self-support as much as possible.\nMost other platforms have yearly fees to cover their support costs, while we allow clubs to operate free of charge.\nIf you are not comfortable self-supporting, and need more hands-on guidance, we do offer ",(0,i.kt)("a",{parentName:"p",href:"https://premium.curling.io/en/products"},"paid support options"),"."),(0,i.kt)("h2",{id:"finding-support-requests"},"Finding Support Requests"),(0,i.kt)("p",null,"Within your admin area, click on the ",(0,i.kt)("strong",{parentName:"p"},"Club")," dropdown menu in the top bar and then click on ",(0,i.kt)("strong",{parentName:"p"},"Support Request"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigation",src:n(9563).Z})),(0,i.kt)("p",null,"To submit a support request click on the ",(0,i.kt)("strong",{parentName:"p"},"New support request")," button."),(0,i.kt)("h2",{id:"submitting-support-requests"},"Submitting Support Requests"),(0,i.kt)("p",null,"Please provide as much information as possible when submitting support requests."),(0,i.kt)("h3",{id:"subject"},"Subject"),(0,i.kt)("p",null,"This is required and helps us identify the type of support request."),(0,i.kt)("h3",{id:"curler-name"},"Curler name"),(0,i.kt)("p",null,"If your issue involves a curler in any way, please provide their name here. This will expedite identification and resolution of the issue."),(0,i.kt)("h3",{id:"order-number"},"Order number"),(0,i.kt)("p",null,"If your issue involves an order in any way, please provide the order number here. This will expedite identification and resolution of the issue."),(0,i.kt)("h3",{id:"item-name"},"Item name"),(0,i.kt)("p",null,"If your issue involves a league, competition, product, fee, or discount please provide the name of it here. This will expedite identification and resolution of the issue."),(0,i.kt)("h3",{id:"attachment"},"Attachment"),(0,i.kt)("p",null,"Providing a screenshot of the issue you are experiencing can be extremely useful in identifying and reproducing the issue."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/windows/use-snipping-tool-to-capture-screenshots-00246869-1843-655f-f220-97299b865f6b"},"How to take a screenshot on Windows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/en-ca/102646"},"How to take a screnshot on a Mac")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/en-ca/102616"},"How to take a screnshot on an iPhone")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/android/answer/9075928?hl=en"},"How to take a screnshot on an Android phone"))),(0,i.kt)("h3",{id:"body"},"Body"),(0,i.kt)("p",null,"Describe the issue in as much detail as you can. The more detail you can provide the faster we can identify the issue."),(0,i.kt)("h2",{id:"if-you-do-not-have-admin-access-yet"},"If you do not have admin access yet"),(0,i.kt)("p",null,"You can alternatively reach out to us directly via email: ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@curling.io"},"support@curling.io")),(0,i.kt)("p",null,"Please note that direct email requests will take longer to respond to than requests sent via in-app support."))}h.isMDXComponent=!0},9563:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAADKCAIAAADvpPj4AAAeg0lEQVR4Ae2dBXBbyfKvLzMzMy69vLvMmyxmmZmZw8zMzMxgZmY7zIkdho1DhjAZkkjn/9Xtqi5dyxbE2o0d96+6VHPmgI7s+dQzfUY9X3IC0Pbt252mJ5MpOzvb8SdDyGQyhEwmQ8hkMoRMJkPIEDKZDCGTyRAymQwhk8kQMoRMhpAhZDIZQiaTIWQyGUImU9OQIZRfsCQ7J9fxK5PJEHrsyWf+/Pd/l5cf9qx87c13nn7uJSd4rV27DnNMpkaE0Oix4194+TVeneC1e88e+MHmzl8QEoQ4C3NMpsaC0PIVKwEAhHh1gtfY8RM58apm1+GL6oOQ2+32jZAcYGpwMoSABxNfFKwjolnf2eK+t9/7cP7CxYC0d29xXQjho9jkmHc/+Cg3r0Aqz5w5c1/LhxcuDmvTviMQDhsxik3xaRTkZiorK/sNHMy7UPnsCy+vXrPWaTgyGULigngVhIJ1RJsKCzklNi6hrLycwsTJU2pFaOr0meyFNN6i5cOPU163fgP1J06cFGBa3Nuy/8AhmVk5k6ZMu+6mWzEKOXn5HNO2QycOGDl67Oy58+Xcffv3Ow1EJkNIXZDAE6wjGjRkGCeePHlKLgUJ3ggdOXKUYzp17S71p06dwqXgTxShRx5/qqKi0nssJF6OA/BRsllaVjZh0pSizVuchiCTIaQuSBGSQoAUXbhwAXfx/oefyOaisHDO1fatCC1Zuoz66TNnFRYWiT35zPPUcLogNG7CJB/hBADjmMlTp+/YuathDYdMhpC6IEUoKEe0bPkKzpIeGia9rCHDRtRAiA4Y9d5WUlIqCHGAD4SI+L34yutyys233zVz9lynIchkCHm6ICSFoBxR1+69OPKV19/66NPWYmyKe/FEKC0jk0p80fETJzwNlxIIQtqFY8QlD6AoOJdcJkNIHgQpP+qOAowrVFVVEUMDG8/K8IgoTly5arUnQoz+qRwzboIetmr1moioaB8IMViSMgfEJyTiiGTz6NGjHD946HCngcgkA9aCNHductNCCGYUEsUmKEeUnpHFMUnJqVqjTbx7rz6KkPyF23fsIk0/NT1DniMJe7UiRGhb3p1Rk4DKiAuQCGcTk2CXROoagkzu4t3uF+9w/vElzJUaKYPVJoGQjIJ8z1fwfUCrth1ozWfPnq1RDzk0evpyb7z1rvbHqquru/fsDQnS0+vYpRtPhKgnlMfmnHnza0x3kBBCl2492dywcZOMsjCuQNDCaQAyuV0u17zxTrPvCT/Y2aTw8+fPNxWEpKvm2zgm5A6feXQB/pV5ogqHugmrx44fdxqGTO4De12vtAAbtZL2bxw8eJD/mjiiphJO8G2OyeQlCHEtnupu9n2Fx3XFNzb07bB8+fL9+/c3LYRMpmDlLtnvevN+T+dTed1P8yeMzMnJ2bJlCyPhOrsYhpDJ5Iqc6f7PDz35OXrPP9MXzM3Pz9+6devhw4cZ8dbiggwhk8ldetD19oNKjtjeF+9OjY9ftmzZrl27jh07du7cuVr4MYRMJlf0HPe1P/KEx/3Pr2xs+2ZaWtrq1av37t3LpEf6b7XxYwiZzPm8+3AN51N9zXeXDO2dmZm5YcMGQnBESiVw6keGkMmcD3bylt9mzpicm5u7efPmsrIy4m88HHL8yhAymfPBDj1ybUpE2JIlS3bs2EHwrZbggSFkMrmiZns7H2zb24+nJievXLlyz549J06c8A4eGEIme+ZzwDvshl3499dXdW+Vnp6+du1aHp6ePn265uDHEDKZXOHTPZ/5qFVe++O8ccNowZs2bSopKamoqPifwY8hZDK5Dxa73rgPWrztaPO/ps+bnZeXJ09OmTX/v503Q8hkU60XTHTLVGsv2/fUrSkx0bU/OTWETCZ38S7XS3d6kSP25aIPn09JSVm1apXXk1NDyGTwXLjgmjHCueY7tfJz/spvrujbMSMjY/369QcOHOBnXRo8cAwhk8m1bZP76Ru9yRE7e91PcyaOYtp1UVFRaWmpBg8cQ8hkcldXu8b0cq78Rl38HGnx97T/Trvetm3bkSNHPJ6cGkImcz7rl7sfugpO6rLip29LiY3hZ3O7d+8+fvy4Bg8MoQYkUvYUFm12vliZ3GdOu/p+4vzzK3DiI3iQmpoa+LRrQyiU2RdIp6g1ZJenhjxYWrP/wAFNVkph1Jhx9VxrSJJsSU4svzK5c5Lcd/7Bh/O5cMU3VvbpIMEDpl2HLHhgCJE4wW+KH0nzm5ySpjWSivHT1u20Jj4xiRqSnipC9VxrKDomjusU79vn+JTJfbjU1eo5H/DIzIPcccNpnYWFhRcfPLCc2hj+pH2nLrxiQo7f5YYkpQ4HsGyJ5tcm9xU1vOp/onff/tSQcj5AhOg/+EaItHVch8ymPs/ycfEmINKDLJoiU0V92PE7/pQ+d6YGDy5m5oEhpKh4FiQho5hvhBCrM5DwTcqkTeR4UtTzumXrNqlkjSDSYUuZenIsknFb1j4hlRxoaWJU1j5hVQiOIeVvVEysrAfhvdZQVnYOmyRwlBNZ1EhSzPFKN9Lx0oqVqziXVV9J+S0puadMm0G9j1WP4J8PRRZ8OeDQoRKuoIm8WUCJzQabC9K1o8j9/G0Q4tsOPnpdSlSkzDwIefCgaeWRk0xXtdISCELjJ07mGKbuUp42Y6Ys0cUrDU4zlbJMkCKEg6J18tbSajt06iq7yH7KJhlPSRosSRhZ5xgv573W0NJly9WtRURGU2b1IeABgFpzbXMded+PW7UZMnyk5ILcvn2H71WPSCKpK/bBM/UsRaFBETYPHjzU4HxPxVnXsM7OFV/3y8/ONx7mZwv1nXlgCGmmxfogtGbtWo6hWUsSU5ySdL3efOd9WfFbGyUSJ8CAVZc8oWVLmXVTtPWTb5Ej6QH6XXcVjwcS2o3kIuQorhWhXn36U9bs3qxQ5HvVoxmz5miiVpK2Cnji+jgeb9nwwgaJ7uZ/8gsPOQ/Wt3+Hny2sW7euvjMPDCH6bPVHiKdvEnCjJ0ZBOj80UMr0DcTRaWIxyuQE1nNHjBqjHkzEVztrE8n7godfhMjQLdckZMfbab03QkQ+tAZOINz3qkdbt22TKIgM8MLCI9lkfQrO4luA4V8Ixy31vcD+z1zvPwYefu381d9eNqgHOQ82btwYsp8tWEeO1/ogJH0eFkdhKQddnGvjpkLKNGsopY/kiLzCCfJNz3e/ZLiXb3o1TvSL0NmKCrqCcjwNHcdFjTdCemMiOOGefa96RNvifvhq4ERqSGLM/eDKSkpLQ5wUf2yvi4enqtI1vq9z9bcD4afiup9mTxwtOQ/Ky8s156ghFPq02uKdsAARmjFztsQJJBCnoTnCA5Jv3i9CTKSXwQZNk1Ab4xwcBfFxvwhpB4wwAEMdSWMfIEK+Vz1iL3Dy1cBgiQ6nxC3wP0TwOYX+T0jS6l7YsoEnnhe2bqQc9OlZ8e67/+qPHA2+/TF93qyCggLaT+hzHtgqd7pKJG1aAtyKViAIMeFAF2uQGl1gGKNH5BchWSqPYbp252TpFO+1hlQa4JaFjDT6R3MPECHfqx5RZi0W9vLucs8SJgEqeVZWf51HHzxO+64a1iWoAYl75xa3pOQNzEofapYaGUHw7XOfuWMISQEFtVyk+BzPhYa0/Ylf8ouQxA8AgOewhL8ARhDyXmtIalQSp8YN0mmUeCAxtwAR8r3qEZIFzDFdo19ujNhgSFxQ5fqVzKyhiZ+7758MS6jxf9axI0zVkZhbgLaHhKOJieQM0eCbE0oZQrqIkLIUvHRSAv0xrTl8+IhOU6hrzS8C3xpOAD/hUGISxJe5pvdaQ95LR0osW4yxEF38QBAinOB71SORhLm12fUbMIjNTYWFIXFB1W8/pA391IbVvkf27qoq17ShktsgcNvywXMkHJWcIZ9j8M1mJwg8GqC7VJKlh2jTftca8m6OnEgT/GJWPQqNC1q7TFyQ2Omhnet8d5fLHTVL5rkFbu5/fXVtl4+Y+UbC0UOHDn2OwTdDCGkUwfkCZBIX9Mb/DGaqH7iilr4c20lh7gf+HRQ88rNTgtc688074aghZGrEgouKlfne7f5U0Xoauo4v3XHzg4ZHaGz2/byxQwles9qP75w7hpCpUYqAWPWr93g3/dMjurPLfeKYe/ow9x2/p+Yi7Oz1P8ueNpGZo76D14ZQY5a5oOU5tbb+c3f/9fwnzzhXfevi4JGE8RnzZy9dutT/zFFDqBHLXNDLzWnuIbdj5ExcvJCfbUvC60YbvDaEfMtc0NKsz4Of8vuvTIuKXLFihTz8kdBlU0ToswAkF2qsMhf0wh0h56fkoWbp8XH8cqG4uFgTxl9+Iq+DeaGm7oIqCzJCzs+hx65PS0hYs2ZN43946r/lG0JN3gU9d2to+TnwxE1piYlMPuCXP/y0SWLil6kMIXNBeamh5efg4zfAD7+cI+2OTj64PGUImc6hZ24OZf/t0evSk5KaBD+GkIn2XZGZEMr4W8ur0xMT4Mdj8tvlLUPIXNBTN4Ts+U+Lv2XExjD+aTL+xxAyF5QeGyp+ztz4y6yIxcTfmhI/hpC5oMevDQk/1dd8N2/mFJ7/EL/W+NvlLkPIXFBKVIhc0JdXDunJ/B2en/L8p8nwYwiZC3q0WUgQKn3kWpKHkPwgBPN3DKGyI8fNGr6VlB8tXTwrhIG4I8/evosoQunhpvn3NC/UJF3QQ1eH9nGq+6ZfuDLjnKYg68jZKKgyYXFo+VFzdXuHVbecy1iGkOlcdfW5lleGHB419z1/Y+FH57KVIWSBuNj5nxc/av/+mmt0Tzc/rbvMZAiZqquqzmvmkFCbLtBwrvmfq9995Hxm/GW37pghZC4oak7Iman8/z8sfeDq7a8/tKrTBznjhqcnxJOglN94X24xbkPIVF1Zef7ef9QTGBLBHW3+1z3PN1/f6rXcQT0T5syKjo6Oi4tLSkoiO2lWVhbPiJhmyq+YL7s0CYaQBeIiZgbdK/vHl0/d/Ov9j99Y9N4zS3u1S5k8LjoyMjY2NjExkYXsyUhKUjjy8vDLZ9YF2rp1K86H39iVlZXBj6ZZvBxkj1bN9h8oqWr+F/9L/TT7wYF7rtj04n15rd6KHdBr9tRps+bMnzt/4cLF4WGR0VEx8fGJySnpmVk5+flLl69cvW7thk2birZu2b5r+67Pdn+2b+/+Q/sPlfGMlae3pYeP2aNVQ+jymY5QNn10Lb2yK75Rfseftz1127L3Xkjq0WH++HEz58ybM2/BgkVhYRFRkdFxsSxokcoaZbm5BUuXrVi9et3GjYVbNm/buW3nnl2fFX+27+C+g6UAc6jsiDBzeWJjCJnt33+o6s4/0is7edOv9zx83ZrXH8vo9HH48CGzZs1hOT1W+FocHhkeFRMTl5CYnJqWkZ2dV7Bk2cqVa9av31RUuGX71h27d+7Zu6f4QPGBkgMl5QCDNSE/YwiZC9pbtLlw8bz4yKh5CxZhwfbKDBhDqKkjRKcLQnAvyWkZNXplRVt3WK/MjxlChhD+hM5Y4eZt3r0yczL+zRAyAxJoMWAMITMzQ8jMrHGZIUS/hXHzps3bguu6mJkZQnT9P/60zS9+9VuxP//1H+MnTmk4t5eWmYPVumvG7Hl629jV/+8/r73x9pr1mxpUiCIiOo4HR8ZPA0WoV98BNB3fxjG+L/LeBx9z2MuvvTlvYdjU6bNuu6M5m9Nmzmkgf/f7Wz6M1bqLm+RWW7Xt0HfA4N59B9zZ4l4BiQB0A7l5onncUs8+/Y2fBoqQEJKYkl6XCWO++2+4nSefeV5reO5BzWNPPB34bYS+7yfXDAyhZSvXaM2goSOomTJt5qW6cy5oCDUyhODEs6aGz2Gvb4R4AMIBnbv19KzMyM6Lik2gsDg86uZb7+AY3QVsXXv0ppCUmsGuhOS01996lytcf9OtffoNBEg5DJ/Wul3H2fMWUi8ujmvqRXbv3d+5aw9Oh1V2xSUkU6nXXBQW+chjT3JWWGQMmxQwCnw0vwjJx6FfKpsrVq97/8NPeBdug3fk20GPnDl73kOPPM7BvOYvXdHinvvBz/dHljvnb8XVuCbe27OHNm7iFHHgvE6YNJUapjXIx+dgrkmPzhBqBAhRExRC2L+uuJr/MQ1XAPBuo+s3bdaa/1x34zvvfUiBBiGN4577HwSeJ5561hNF+lTswmjN7Tt1lbJch0cuNEoO5jo9eveTRsZUAL2mNOsu3XsVLFs5aMhwbg+jQIv0i1BmTj41AgPPRunUcS539eEnral/4aVXGZywKzwqVrDEP8Aw98Zm+45dfH9kzn32+ZfYy9W4Jlfm+kxZYBd+j/q33nkfeJ578RXKILp81dq+/QdRfuChR7n/pStWG0KXJ0LJqRnScMUnMBzikXyACNHF0qxor7z2JjXE9AQhyvq9m1uwTJ3D/EXhlPnOll1MM6Mt4gT0mp+0ahvUWAhscC/4h5j4JHEsvB17QYIy7VgOJkaify4+Bbbrs32yCycTCEJ8y7CLGIbUQzibfH1QBk4+hfaNh40YjTezjlyT6MiJMWNyxOhxtFRliXYZCEJ811LWbhg1+ApBiG9oCmo0biopdPtve2Vepu7iG50aAoNyTZAOCqEa1n/QUNkr/i0nf6kYgLE5fNRYYKOAf/Ds/vlFSO+c8KBek00ZNNJLlO8I9vJBGvFYyBBi8yIQwtQnDBw8TOJafhHSDpgYh1Ezasx4QYiuHQW1Dz9uJXdCP6cGXXR+2MW4gmuKDwkKIWJxk6bO4CtAumq615suaeW5+UsVfrVAEIIW7wuK82Fy3Tvvf6RfQIwDqTGEGh9ClGut8c0MTZapx56VPF3hLHr5tCftC+nAyRMhemW6C5yoWRgWKQjhBCioQRRjDwoMjThMx10amqe1XRxCOhaiEYvbUS/EOG3H7r2exrswRtLxkhifVBHy8ZGlZ8jBnheU3qAGGwjDSIeWrwxDqPEhpBY4QtL7kgiSZwyKr1JGz9L5YXQk9Ty1ZNMToZdeeV12KRur1m4QhDxh2Fi0VUbb+jyUaJvsgl7QErrqQgg/EAhC6zYWsUk0TzYlFgcwsskAj0E/AxjKMvrSHtfYCZMVIR8fWe6cIKTewLwFi2FGCp79Tz6O9Fr5dDq6M2uICDHAEBOQeNUaNd8IwYmMGRiQ0ILxIUQU2KQrwl5+uiydOrpnGqH2RAjju3/O/EUdOncTouTBiD7lHD1u4sQp0yXam5VbIF/VEs4eMnwUvSmJztEE60JIRiB4KtyL34hcm3YdqZFmTahaQsx087g+KOrFuSvKhNf4UMQDKAtCvj+y3jnRAv5Q4vTGjJ/ELonUDRs5hrHQ0OGjKBNRlFuCVU7hMOkcNiwzhKQXpBRJOJgaT6Pe7/hH4rBq4KQdLRof39lS32/gEBwCTUebu85mwOjAaCgPhLgmHRh9qiOQqFOizekuGKOyLoQYI3E17Rp52vRZc2t0upiXINjIJk+c6MvJG3Hnnk9muDf5XLRvUOQVhHx/ZBnvPf3sCzrmoTfIV4YEJPRvKF9A2jcmNMfVdPTV4MwQUop0Lk+wph2qJctX0Q3DL9UastMYmndzB0LPvYqQTMCTJyfeRjR8557iwG9PqQ7WCHkzaKl1JgE+Ry4rCPn+yGp8KPZ6/6H4RFzQu54aBkUNd/6uIYSfUX6+APPhMbwRaiymCJnZTO0vyFIzsunl1zUHmchBpy7dG9HHIQjBSCb4E80MITMzQ8jMzBAyMzOEDCEzM0PIzMwQMjMzhMzMDCFbostkslXuTCZDyGQyhEwmQ8gQMpkMIZPJEDKZDCGTyRAyhEyGkCF05MjRiKjo0rKyWvfmFyzJzsmlcO7cuZmz5xZt3uLUWxs3FbJy/YULFxxTg5Ih9Oe//9vTXnn9rfjEJMef1q3fwMFLli6rde9rb77z9HMvUSgsLOKwj1u1ceqtt9/7kEtt376D8rFjx7Kyc3h1TIZQSLR8xcoXXn4No5HxOnrseGqCQmjchEnYux98JJvJKWkhQcjlcgFk8b59Tr21d29xQlKy2+2mzPvqu9dXJkMIYIQcfaVGXp0AdN1Nt37aup1uHjhwkHNbPvx4CBCqW0ICurhjDCFDKMT84HOkQI16IaEoWITQR5+25twzZ86kZ2Td1/JhzwHPG2+9S6pBRQi30Klr96uaXXdni/uGDBtRUVFZA6GqqiquEB4RJfVck8OokR5jXa5y/sLFMCwkL1wcJpVz5y/gRApjx0/kntnLq97ert275U5a3Nty8NDhZ8+edfzKZAh5cqIFqdQCr8EixNKLnHj69OmomFgK+CXdBSoki1KEaLK0ct5XeoAdOnWtgRBQUT956nTKRALefOd9Ntt26DRk+EguRXnV6jU17iciMlqOAR65bGxcAvWjxoyjLLEK3kjebtKUadwnsY2bb7+LDwKfXbv3YhfZgC3wYAgF5IJqYFODHBkgBYVQcfE+Tn/k8aco+0UIJ6Cep0fvvtRs3batLoRS09IpE1WT448ePQqB3pEGWj+3REGomz5zFs5QEaq1I9dv4GA2d+7aLZsLFoX5/+4wGULaZxOWKHvW04A0zBBIOKFPvwHYsy+8TFlbp1+ElAe0bft2amJi4+tCaNiIUZTp2jk+RTeMw7r37L127Tpi4lLpGyE6b2wS/RPDTbE5Y9Ycx2QIBdL6/VogF4ENDK9C212zdi31gSAkD390nEPNyNFj60KIXhndLcefzlZUSD9NOoq9+/anxjdC3h9ZIHRMhpBveXsbH94p8LEQUoS0g6QHeyKkY320e88eahaHR9SF0KAhwyifP3/eCUCnTp3KzSugm8cpXbr19OuFWCHi+IkTniY9TD8yGUKYd+RAyzJYumiEpEfELATPYZInQry7jtonTp5CzfoNG+tCiAdElJOSU+X4yspK/BJxBdlUccDKVat1E8fIwKwGQsuWr5B4oGxKLI6ggvpDYhIyKjMZQr6k5NTAhrIWqLxohMrLD3MFel+MeQBAhhyeCGFEwNlF/43yi6+8DlF1IUSgGRjYJIzGKRKdI8ZQ6yyEGTNnMxaaNmMmZTCrgdDJk6ck5hEdE8dbbNm6TSLgYeGREMhbsxn0rCKTPRcSj8RmsM+FiGJ716tP4AChZfzEyYyFGKgoQovCwulByV6aPkE2fXzkidCUaTOknmc4OgGCy0o/UOV9DMZYCH/l+dUgGjNuAps6VKNTp3fCTcogzRSEbHZCrXMUnBDp8OEj1dXVde09ceJkUAMPhkNMb/N7DD6Q+UE+jsHjCV0qHB2jIMdkCAUr8ULKj4YZTCZDyGQyhAwhk8kQEplMhpDJZAiZTIaQyWQIGUImkyFkMhlCJpMhZDIZQoaQyWQImUyGkMlkCJlMhpAhZDIZQiaTIWQyGUImU4OWIUSCnjbtOzqXWqShI2fIJUuEbbLcCZhzEdIkWJdakuPqEuRPNBlCmi+KDCRfMEIsAWQINW4ZQt4pf0OIUE5ePussSJZDlhXybN/k3f7g41aStI28imR7Iyej7GK1ElLLk4WUDKNUatrekpJSKumteeaCk5sn7xwHczWyPZLG0bm0MhlCVGL1REiS7tLouRSDJV20R9bDosVzImmyWROFMiZpe8n/Bg+S9JQUp5IAlbyNmk9YFgsSkTle1kEhJ6MsKsHyWyxt4lxamQwhTWVaH4Ro/XgY0sPL5tTpM7kmqeIpy8oLmq5+xcpVuiRRSmoaZZapk13Hjh/n+o89+YxvhKwj17BkCEn9RS8UqSudsICx1kgaa3LPC124GgreyeNlESHP1KesPEcNKwUZQg1dhpD3GjsXnZaenO6cG5+Q6FlJb431G+WNOnbpVmN9YkHIexEhOmkcT8zaEGpCMi9EB0zTyYto3HpBxi2eS4IzQNKxUP+BQziMmhp3wumCEJnsdRdAGkINVBZOqP9YCGfCGEZX1JLVgdIyMinTwaM8YdIUVn0k/ta9Vx8dC7FQJOXMrGzKuuI3pp1DwgwKHmMtQUjvuaS01Gl0MllEDpfCyqSexhIJrMxFm6ZjBjyTJk+lDFHiJeCKpYSoERPYBCHCDxLOJvxAn02ic7osF28k6wWxArGsgCII6XJgLGtn65p8oTKEGOrU/7mQ9wiKRX7YNWfefIlKC0usVqJnER5gLTqiC3TMwIb1tgQhdOhQiSyzJTFxWTpSRDRcL0iIXDpyekGBSoZSjUUmm53gX6zYo2MbfeRKX04X5JLF8Ih011ggiHWH6lqPiO6fd72AhBxTA5bNkQuBmJogMwmIAfQbOBi/wSaPYh2TyX7sEKB4nMo4h24Y/DCLh3VRHZPJEDKZDCGTyRBqnDKZDCGTyRAymQwhk8kQMoRMJkPIZDKETCZDyGQyhAwhk8kQMpkMIZPJEDKZkCEkeXRNpqYj2nzIECovL99uMjU90fJDgJDJZDKELplMhpDJZDKETCZDyGQyhEwmQ8hkMhlCJpMhZDIZQiaTIWQymf4PWCdE0piZSnsAAAAASUVORK5CYII="}}]);