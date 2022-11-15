"use strict";(self.webpackChunkxrcloud_hubs_api_docs=self.webpackChunkxrcloud_hubs_api_docs||[]).push([[92],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(a),c=o,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||r;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2900:(e,t,a)=>{a.d(t,{f:()=>i,d:()=>r});var n=a(7294);const o=JSON.parse('{"HQ":"https://hubs-api.dev.xrcloud.belivvr.com"}');function r(e){let{color:t="red",children:a}=e;return n.createElement("strong",{style:{color:t}},a)}function i(){return o.HQ}},9075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(7462),o=(a(7294),a(3905)),r=a(2900);const i={sidebar_position:6,title:"3D Models"},l=void 0,d={unversionedId:"api/3d-models",id:"api/3d-models",title:"3D Models",description:"Hubs API URL:",source:"@site/docs/api/3d-models.mdx",sourceDirName:"api",slug:"/api/3d-models",permalink:"/docs/api/3d-models",draft:!1,editUrl:"https://github.com/belivvr/xrcloud-hubs-api-docs/tree/main/docs/docs/api/3d-models.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"3D Models"},sidebar:"tutorialSidebar",previous:{title:"Emojis",permalink:"/docs/api/emojis"}},p={},m=[{value:"Get many 3D Models",id:"get-many-3d-models",level:2},{value:"Get a 3D Model information",id:"get-a-3d-model-information",level:2},{value:"Create a 3D Model",id:"create-a-3d-model",level:2},{value:"Update a 3D Model",id:"update-a-3d-model",level:2},{value:"Delete a 3D Model",id:"delete-a-3d-model",level:2}],u={toc:m};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hubs API URL: ",(0,o.kt)("a",null,(0,o.kt)(r.f,{mdxType:"APIUrl"})))),(0,o.kt)("h2",{id:"get-many-3d-models"},"Get many 3D Models"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[GET]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/3d-models?take="),(0,o.kt)(r.d,{mdxType:"Bold"},"$","{","take","}"),(0,o.kt)("inlineCode",{parentName:"p"},"&page="),(0,o.kt)(r.d,{mdxType:"Bold"},"$","{","page","}"))),(0,o.kt)("admonition",{title:"Request",type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"headers"},"Headers"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Authorization: Bearer {accessToken}")),(0,o.kt)("h4",{parentName:"admonition",id:"url-query-parameters"},"URL Query Parameters"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"take"),": number of rooms to return"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"page"),": page number to return"))),(0,o.kt)("admonition",{title:"Response",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 10,\n  "data": [\n    {\n      "id": "3d-model uuid",\n      "name": "3d-model name",\n      "thumbnailUrl": "https://...",\n      "glbUrl": "https://...",\n      "active": false, // boolean\n      "accessKey": "project uuid",\n      "created": "created date",\n      "updated": "latest update date"\n    },\n    ...\n  ]\n}\n'))),(0,o.kt)("h2",{id:"get-a-3d-model-information"},"Get a 3D Model information"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[GET]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/3d-models/"),(0,o.kt)(r.d,{mdxType:"Bold"},"$","{","id","}"))),(0,o.kt)("admonition",{title:"Request",type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"headers-1"},"Headers"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Authorization: Bearer {accessToken}"))),(0,o.kt)("admonition",{title:"Response",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "3d-model uuid",\n  "name": "3d-model name",\n  "thumbnailUrl": "https://...",\n  "glbUrl": "https://...",\n  "active": false, // boolean\n  "accessKey": "project uuid",\n  "created": "created date",\n  "updated": "latest update date"\n}\n'))),(0,o.kt)("h2",{id:"create-a-3d-model"},"Create a 3D Model"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[POST]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/3d-models"))),(0,o.kt)("admonition",{title:"Request",type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"headers-2"},"Headers"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Authorization: Bearer {accessToken}"),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"multipart/form-data; boundary=----WebKitFormBoundary..."))),(0,o.kt)("h4",{parentName:"admonition",id:"body"},"Body"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"glb: base64 Buffer (example: data:application/octet-stream;base64,...)"),(0,o.kt)("li",{parentName:"ul"},"thumbnail: base64 Buffer (example: data:application/octet-stream;base64,...)"),(0,o.kt)("li",{parentName:"ul"},"name: string"),(0,o.kt)("li",{parentName:"ul"},"active: boolean"))),(0,o.kt)("admonition",{title:"Response",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"201 Created")),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "3d-model uuid",\n  "name": "3d-model name",\n  "thumbnailUrl": "https://...",\n  "glbUrl": "https://...",\n  "active": false, // boolean\n  "accessKey": "project uuid",\n  "created": "created date",\n  "updated": "latest update date"\n}\n'))),(0,o.kt)("h2",{id:"update-a-3d-model"},"Update a 3D Model"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[PUT/PATCH]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/3d-models/"),(0,o.kt)(r.d,{mdxType:"Bold"},"$","{","id","}"))),(0,o.kt)("admonition",{title:"Request",type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"headers-3"},"Headers"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Authorization: Bearer {accessToken}"),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"multipart/form-data; boundary=----WebKitFormBoundary..."))),(0,o.kt)("h4",{parentName:"admonition",id:"body-1"},"Body"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"glb(optional): base64 Buffer (example: data:application/octet-stream;base64,...)"),(0,o.kt)("li",{parentName:"ul"},"thumbnail(optional): base64 Buffer (example: data:application/octet-stream;base64,...)"),(0,o.kt)("li",{parentName:"ul"},"name(optional): string"),(0,o.kt)("li",{parentName:"ul"},"active(optional): boolean"))),(0,o.kt)("admonition",{title:"Response",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"204 No Content")))),(0,o.kt)("h2",{id:"delete-a-3d-model"},"Delete a 3D Model"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[DELETE]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/3d-models/"),(0,o.kt)(r.d,{mdxType:"Bold"},"$","{","id","}"))),(0,o.kt)("admonition",{title:"Request",type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"headers-4"},"Headers"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Authorization: Bearer {accessToken}"))),(0,o.kt)("admonition",{title:"Response",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"204 No Content")))))}s.isMDXComponent=!0}}]);