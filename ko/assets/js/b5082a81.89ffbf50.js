"use strict";(self.webpackChunkxrcloud_hubs_api_docs=self.webpackChunkxrcloud_hubs_api_docs||[]).push([[126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2900:(e,t,n)=>{n.d(t,{f:()=>i,d:()=>r});var o=n(7294);const a=JSON.parse('{"HQ":"https://hubs-api.dev.xrcloud.belivvr.com"}');function r(e){let{color:t="red",children:n}=e;return o.createElement("strong",{style:{color:t}},n)}function i(){return a.HQ}},7107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var o=n(7462),a=(n(7294),n(3905)),r=n(2900);const i={sidebar_position:2,title:"Rooms"},l=void 0,p={unversionedId:"api/rooms",id:"api/rooms",title:"Rooms",description:"Hubs API URL:",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/rooms.mdx",sourceDirName:"api",slug:"/api/rooms",permalink:"/ko/docs/api/rooms",draft:!1,editUrl:"https://github.com/belivvr/xrcloud-hubs-api-docs/tree/main/docs/docs/api/rooms.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Rooms"},sidebar:"tutorialSidebar",previous:{title:"Scenes",permalink:"/ko/docs/api/scenes"},next:{title:"Permissions",permalink:"/ko/docs/api/permissions"}},m={},u=[{value:"Room \ub9ac\uc2a4\ud2b8 \uc870\ud68c",id:"room-\ub9ac\uc2a4\ud2b8-\uc870\ud68c",level:2},{value:"Room \uc815\ubcf4 \uc870\ud68c",id:"room-\uc815\ubcf4-\uc870\ud68c",level:2},{value:"Room \uc0dd\uc131",id:"room-\uc0dd\uc131",level:2},{value:"Room \uc0ad\uc81c",id:"room-\uc0ad\uc81c",level:2},{value:"Room\uc5d0 \ub4e4\uc5b4\uac00\uae30",id:"room\uc5d0-\ub4e4\uc5b4\uac00\uae30",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hubs API URL: ",(0,a.kt)("a",null,(0,a.kt)(r.f,{mdxType:"APIUrl"})))),(0,a.kt)("h2",{id:"room-\ub9ac\uc2a4\ud2b8-\uc870\ud68c"},"Room \ub9ac\uc2a4\ud2b8 \uc870\ud68c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"[GET]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/rooms?take="),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","take","}"),(0,a.kt)("inlineCode",{parentName:"p"},"&page="),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","page","}"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\uc694\uccad ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"URL \ucffc\ub9ac \ud30c\ub77c\ubbf8\ud130")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"take"),": \ud55c \ud398\uc774\uc9c0\uc5d0 \ubcf4\uc5ec\uc904 Room \uac1c\uc218"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"page"),": \ud398\uc774\uc9c0 \ubc88\ud638"))),(0,a.kt)("admonition",{title:"\uc751\ub2f5",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,a.kt)("li",{parentName:"ul"},"Content-Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 10,\n  "data": [\n    {\n      "id": "...", // uuid\n      "hubSid": "...",\n      "name": "...",\n      "scene": {\n        "id": "...", // uuid\n        "name": "...",\n        "thumbnailUrl": "https://...",\n        "modelUrl": "https://...", // nullable\n        "projectUrl": "https://...",\n        "accessKey": "project uuid",\n        "created": "...",\n        "updated": "..."\n      },\n      "roomSize": 10,\n      "current": 10, // nullable\n      "autoScale": false,\n      "parentRoom": null, // nullable, `autoScale` \uc774 true \uc77c \ub54c\ub9cc \uc874\uc7ac\n      "accessKey": "project uuid",\n      "created": "...",\n      "updated": "..."\n    },\n    ...\n  ]\n}\n'))),(0,a.kt)("h2",{id:"room-\uc815\ubcf4-\uc870\ud68c"},"Room \uc815\ubcf4 \uc870\ud68c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"[GET]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/rooms/"),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","id","}"))),(0,a.kt)("admonition",{title:"\uc751\ub2f5",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,a.kt)("li",{parentName:"ul"},"Content-Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "...", // uuid\n  "hubSid": "...",\n  "name": "...",\n  "scene": {\n    "id": "...", // uuid\n    "name": "...",\n    "thumbnailUrl": "https://...",\n    "modelUrl": "https://...", // nullable\n    "projectUrl": "https://...",\n    "accessKey": "project uuid",\n    "created": "...",\n    "updated": "..."\n  },\n  "roomSize": 10,\n  "current": 10, // nullable\n  "autoScale": false,\n  "parentRoom": null, // nullable, `autoScale` \uc774 true \uc77c \ub54c\ub9cc \uc874\uc7ac\n  "accessKey": "project uuid",\n  "created": "...",\n  "updated": "..."\n},\n'))),(0,a.kt)("h2",{id:"room-\uc0dd\uc131"},"Room \uc0dd\uc131"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"[POST]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/rooms"))),(0,a.kt)("admonition",{title:"\uc694\uccad",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Content-Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "room name",\n  "sceneId": "scene id",\n  "roomSize": 6,\n  "autoScale": false,\n  "parentRoomId": "parent room id" // nullable, `autoScale` \uc774 true \uc77c \ub54c\ub9cc \uc874\uc7ac\n}\n'))),(0,a.kt)("admonition",{title:"\uc751\ub2f5",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"201 Created")),(0,a.kt)("li",{parentName:"ul"},"Content-Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "room uuid",\n  "hubSid": "...",\n  "name": "...",\n  "scene": {\n    "id": "...", // uuid\n    "name": "...",\n    "thumbnailUrl": "https://...",\n    "modelUrl": "https://...", // nullable\n    "projectUrl": "https://...",\n    "accessKey": "project uuid",\n    "created": "...",\n    "updated": "..."\n  },\n  "roomSize": 10,\n  "current": 10, // nullable\n  "autoScale": false,\n  "parentRoom": null, // nullable, `autoScale` \uc774 true \uc77c \ub54c\ub9cc \uc874\uc7ac\n  "accessKey": "project uuid",\n  "created": "...",\n  "updated": "..."\n},\n')),(0,a.kt)("h2",{parentName:"admonition",id:"room-\uc815\ubcf4-\uc5c5\ub370\uc774\ud2b8"},"Room \uc815\ubcf4 \uc5c5\ub370\uc774\ud2b8"),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"[PUT/PATCH]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/rooms/"),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","id","}")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"204 No Content"))),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"room-\uc0ad\uc81c"},"Room \uc0ad\uc81c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"[DELETE]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/rooms/"),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","id","}"))),(0,a.kt)("admonition",{title:"\uc751\ub2f5",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"204 No Content")))),(0,a.kt)("h2",{id:"room\uc5d0-\ub4e4\uc5b4\uac00\uae30"},"Room\uc5d0 \ub4e4\uc5b4\uac00\uae30"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"[POST]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/rooms/"),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","id","}"),(0,a.kt)("inlineCode",{parentName:"p"},"/enter"))),(0,a.kt)("admonition",{title:"\uc694\uccad",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Content-Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nickname": "nickname",\n  "avatarId": "avatar uuid", // or url\n  "permissionId": "permission uuid",\n  "leaveUrl": "https://..." // When click \'leave\' button\'s destination. default is `/`\n}\n'))),(0,a.kt)("admonition",{title:"\uc751\ub2f5",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,a.kt)("li",{parentName:"ul"},"Content-Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"text/html")))))}c.isMDXComponent=!0}}]);