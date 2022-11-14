"use strict";(self.webpackChunkxrcloud_hubs_api_docs=self.webpackChunkxrcloud_hubs_api_docs||[]).push([[958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||r;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2133:(e,t,n)=>{n.d(t,{d:()=>a});var o=n(7294);function a(e){let{color:t="red",children:n}=e;return o.createElement("strong",{style:{color:t}},n)}},8253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var o=n(7462),a=(n(7294),n(3905)),r=n(2133);const i={sidebar_position:2,title:"Rooms"},l=void 0,p={unversionedId:"api/rooms",id:"api/rooms",title:"Rooms",description:"Get many Rooms",source:"@site/docs/api/rooms.mdx",sourceDirName:"api",slug:"/api/rooms",permalink:"/docs/api/rooms",draft:!1,editUrl:"https://github.com/belivvr/xrcloud-hubs-api-docs/tree/main/docs/docs/api/rooms.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Rooms"},sidebar:"tutorialSidebar",previous:{title:"Scenes",permalink:"/docs/api/scenes"},next:{title:"Permissions",permalink:"/docs/api/permissions"}},m={},d=[{value:"Get many Rooms",id:"get-many-rooms",level:2},{value:"Get a Room information",id:"get-a-room-information",level:2},{value:"Update a Room",id:"update-a-room",level:2},{value:"Delete a Room",id:"delete-a-room",level:2},{value:"Enter the Room",id:"enter-the-room",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-many-rooms"},"Get many Rooms"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://hubs-api.dev.xrcloud.belivvr.com/v1/rooms?take="),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","take","}"),(0,a.kt)("inlineCode",{parentName:"p"},"&page="),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","page","}")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Request ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"URL Query Parameters")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"take"),": number of rooms to return"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"page"),": page number to return"))),(0,a.kt)("admonition",{title:"Response",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,a.kt)("li",{parentName:"ul"},"Content-Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 10,\n  "data": [\n    {\n      "id": "...", // uuid\n      "hubSid": "...",\n      "name": "...",\n      "scene": {\n        "id": "...", // uuid\n        "name": "...",\n        "thumbnailUrl": "https://...",\n        "modelUrl": "https://...", // nullable\n        "projectUrl": "https://...",\n        "accessKey": "...", // uuid\n        "created": "...",\n        "updated": "..."\n      },\n      "roomSize": 10,\n      "current": 10, // nullable\n      "autoScale": false,\n      "parentRoom": null, // nullable, only exists `autoScale` is true\n      "accessKey": "...", // uuid\n      "created": "...",\n      "updated": "..."\n    },\n    ...\n  ]\n}\n'))),(0,a.kt)("h2",{id:"get-a-room-information"},"Get a Room information"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://hubs-api.dev.xrcloud.belivvr.com/v1/rooms/"),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","id","}")),(0,a.kt)("admonition",{title:"Response",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,a.kt)("li",{parentName:"ul"},"Content-Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "...", // uuid\n  "hubSid": "...",\n  "name": "...",\n  "scene": {\n    "id": "...", // uuid\n    "name": "...",\n    "thumbnailUrl": "https://...",\n    "modelUrl": "https://...", // nullable\n    "projectUrl": "https://...",\n    "accessKey": "...", // uuid\n    "created": "...",\n    "updated": "..."\n  },\n  "roomSize": 10,\n  "current": 10, // nullable\n  "autoScale": false,\n  "parentRoom": null, // nullable, only exists `autoScale` is true\n  "accessKey": "...", // uuid\n  "created": "...",\n  "updated": "..."\n},\n'))),(0,a.kt)("h2",{id:"update-a-room"},"Update a Room"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://hubs-api.dev.xrcloud.belivvr.com/v1/rooms/"),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","id","}")),(0,a.kt)("admonition",{title:"Response",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"204 No Content")))),(0,a.kt)("h2",{id:"delete-a-room"},"Delete a Room"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://hubs-api.dev.xrcloud.belivvr.com/v1/rooms/"),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","id","}")),(0,a.kt)("admonition",{title:"Response",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"204 No Content")))),(0,a.kt)("h2",{id:"enter-the-room"},"Enter the Room"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://hubs-api.dev.xrcloud.belivvr.com/v1/rooms/"),(0,a.kt)(r.d,{mdxType:"Bold"},"$","{","id","}"),(0,a.kt)("inlineCode",{parentName:"p"},"/enter")),(0,a.kt)("admonition",{title:"Request",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Content-Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nickname": "nickname",\n  "avatarId": "avatar uuid", // or url\n  "permissionId": "permission uuid",\n  "leaveUrl": "https://..." // When click \'leave\' button\'s destination. default is `/`\n}\n'))),(0,a.kt)("admonition",{title:"Response",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,a.kt)("li",{parentName:"ul"},"Content-Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"text/html")))))}u.isMDXComponent=!0}}]);