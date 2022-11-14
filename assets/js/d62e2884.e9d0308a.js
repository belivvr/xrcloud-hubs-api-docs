"use strict";(self.webpackChunkxrcloud_hubs_api_docs=self.webpackChunkxrcloud_hubs_api_docs||[]).push([[593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2900:(e,t,a)=>{a.d(t,{f:()=>i,d:()=>o});var n=a(7294);const r=JSON.parse('{"HQ":"https://hubs-api.dev.xrcloud.belivvr.com"}');function o(e){let{color:t="red",children:a}=e;return n.createElement("strong",{style:{color:t}},a)}function i(){return r.HQ}},2061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(2900);const i={sidebar_position:4,title:"Avatars"},l=void 0,p={unversionedId:"api/avatars",id:"api/avatars",title:"Avatars",description:"Hubs API URL:",source:"@site/docs/api/avatars.mdx",sourceDirName:"api",slug:"/api/avatars",permalink:"/docs/api/avatars",draft:!1,editUrl:"https://github.com/belivvr/xrcloud-hubs-api-docs/tree/main/docs/docs/api/avatars.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Avatars"},sidebar:"tutorialSidebar",previous:{title:"Permissions",permalink:"/docs/api/permissions"},next:{title:"Emojis",permalink:"/docs/api/emojis"}},d={},u=[{value:"Get many Avatars",id:"get-many-avatars",level:2},{value:"Get a Avatar information",id:"get-a-avatar-information",level:2},{value:"Create a Avatar",id:"create-a-avatar",level:2},{value:"Update a Avatar",id:"update-a-avatar",level:2},{value:"Delete a Avatar",id:"delete-a-avatar",level:2}],m={toc:u};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hubs API URL: ",(0,r.kt)("a",null,(0,r.kt)(o.f,{mdxType:"APIUrl"})))),(0,r.kt)("h2",{id:"get-many-avatars"},"Get many Avatars"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"[GET]")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/avatars?take="),(0,r.kt)(o.d,{mdxType:"Bold"},"$","{","take","}"),(0,r.kt)("inlineCode",{parentName:"p"},"&page="),(0,r.kt)(o.d,{mdxType:"Bold"},"$","{","page","}"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Request ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"URL Query Parameters")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"take"),": number of rooms to return"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page"),": page number to return"))),(0,r.kt)("admonition",{title:"Response",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Status: ",(0,r.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,r.kt)("li",{parentName:"ul"},"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 10,\n  "data": [\n    {\n      "id": "avatar uuid", // uuid\n      "name": "avatar name",\n      "thumbnailUrl": "https://...",\n      "glbUrl": "https://...",\n      "active": false, // boolean\n      "accessKey": "project uuid",\n      "created": "created date",\n      "updated": "latest update date"\n    },\n    ...\n  ]\n}\n'))),(0,r.kt)("h2",{id:"get-a-avatar-information"},"Get a Avatar information"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"[GET]")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/avatars/"),(0,r.kt)(o.d,{mdxType:"Bold"},"$","{","id","}"))),(0,r.kt)("admonition",{title:"Response",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Status: ",(0,r.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,r.kt)("li",{parentName:"ul"},"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "avatar uuid", // uuid\n  "name": "avatar name",\n  "thumbnailUrl": "https://...",\n  "glbUrl": "https://...",\n  "active": false, // boolean\n  "accessKey": "project uuid",\n  "created": "created date",\n  "updated": "latest update date"\n}\n'))),(0,r.kt)("h2",{id:"create-a-avatar"},"Create a Avatar"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"[POST]")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/avatars"))),(0,r.kt)("admonition",{title:"Request",type:"info"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data; boundary=----WebKitFormBoundary..."))),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"glb: base64 Buffer (example: data:application/octet-stream;base64,...)"),(0,r.kt)("li",{parentName:"ul"},"thumbnail: base64 Buffer (example: data:application/octet-stream;base64,...)"),(0,r.kt)("li",{parentName:"ul"},"name: string"),(0,r.kt)("li",{parentName:"ul"},"active: boolean"))),(0,r.kt)("admonition",{title:"Response",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Status: ",(0,r.kt)("inlineCode",{parentName:"li"},"201 Created")),(0,r.kt)("li",{parentName:"ul"},"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "avatar uuid",\n  "name": "avatar name",\n  "thumbnailUrl": "https://...",\n  "glbUrl": "https://...",\n  "active": false, // boolean\n  "accessKey": "project uuid",\n  "created": "created date",\n  "updated": "latest update date"\n}\n'))),(0,r.kt)("h2",{id:"update-a-avatar"},"Update a Avatar"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"[PUT/PATCH]")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/avatars/"),(0,r.kt)(o.d,{mdxType:"Bold"},"$","{","id","}"))),(0,r.kt)("admonition",{title:"Response",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Status: ",(0,r.kt)("inlineCode",{parentName:"li"},"204 No Content")))),(0,r.kt)("h2",{id:"delete-a-avatar"},"Delete a Avatar"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"[DELETE]")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/avatars/"),(0,r.kt)(o.d,{mdxType:"Bold"},"$","{","id","}"))),(0,r.kt)("admonition",{title:"Response",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Status: ",(0,r.kt)("inlineCode",{parentName:"li"},"204 No Content")))))}s.isMDXComponent=!0}}]);