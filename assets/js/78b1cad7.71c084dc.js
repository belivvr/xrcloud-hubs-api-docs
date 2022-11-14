"use strict";(self.webpackChunkxrcloud_hubs_api_docs=self.webpackChunkxrcloud_hubs_api_docs||[]).push([[779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8023:(e,t,n)=>{n.r(t),n.d(t,{Bold:()=>c,assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1,title:"Scenes"},o=void 0,l={unversionedId:"api/scenes",id:"api/scenes",title:"Scenes",description:"Get many Scenes",source:"@site/docs/api/scenes.mdx",sourceDirName:"api",slug:"/api/scenes",permalink:"/docs/api/scenes",draft:!1,editUrl:"https://github.com/belivvr/xrcloud-hubs-api-docs/tree/main/docs/docs/api/scenes.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Scenes"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/api/introduction"},next:{title:"Rooms",permalink:"/docs/api/rooms"}},p={},s=[{value:"Get many Scenes",id:"get-many-scenes",level:2},{value:"Get a Scene information",id:"get-a-scene-information",level:2},{value:"Get Scene Editor(New)",id:"get-scene-editornew",level:2},{value:"Get Scene Editor(ID)",id:"get-scene-editorid",level:2},{value:"Update a Scene",id:"update-a-scene",level:2},{value:"Delete a Scene",id:"delete-a-scene",level:2}];function c(e){let{color:t="red",children:n}=e;return(0,i.kt)("strong",{style:{color:t}},n)}const d={toc:s,Bold:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-many-scenes"},"Get many Scenes"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://hubs-api.dev.xrcloud.belivvr.com/v1/scenes?take="),(0,i.kt)(c,{mdxType:"Bold"},"$","{","take","}"),(0,i.kt)("inlineCode",{parentName:"p"},"&page="),(0,i.kt)(c,{mdxType:"Bold"},"$","{","page","}")),(0,i.kt)("admonition",{title:"Response",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"200")),(0,i.kt)("li",{parentName:"ul"},"Content-Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 10,\n  "data": [\n    {\n      "id": "...", // uuid\n      "name": "...",\n      "thumbnailUrl": "https://...",\n      "modelUrl": "https://...", // nullable\n      "projectUrl": "https://...",\n      "accessKey": "...", // uuid\n      "created": "...",\n      "updated": "..."\n    },\n    ...\n  ]\n}\n'))),(0,i.kt)("h2",{id:"get-a-scene-information"},"Get a Scene information"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://hubs-api.dev.xrcloud.belivvr.com/v1/scenes/"),(0,i.kt)(c,{mdxType:"Bold"},"$","{","id","}")),(0,i.kt)("admonition",{title:"Response",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"200")),(0,i.kt)("li",{parentName:"ul"},"Content-Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "...", // uuid\n  "name": "...",\n  "thumbnailUrl": "https://...",\n  "modelUrl": "https://...", // nullable\n  "projectUrl": "https://...",\n  "accessKey": "...", // uuid\n  "created": "...",\n  "updated": "..."\n}\n'))),(0,i.kt)("h2",{id:"get-scene-editornew"},"Get Scene Editor(New)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://hubs-api.dev.xrcloud.belivvr.com/v1/scenes/new/spoke")),(0,i.kt)("admonition",{title:"Response",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"200")),(0,i.kt)("li",{parentName:"ul"},"Content-Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"text/html")))),(0,i.kt)("h2",{id:"get-scene-editorid"},"Get Scene Editor(ID)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://hubs-api.dev.xrcloud.belivvr.com/v1/scenes/"),(0,i.kt)(c,{mdxType:"Bold"},"$","{","id","}"),(0,i.kt)("inlineCode",{parentName:"p"},"/spoke")),(0,i.kt)("admonition",{title:"Response",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"200")),(0,i.kt)("li",{parentName:"ul"},"Content-Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"text/html")))),(0,i.kt)("h2",{id:"update-a-scene"},"Update a Scene"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://hubs-api.dev.xrcloud.belivvr.com/v1/scenes/"),(0,i.kt)(c,{mdxType:"Bold"},"$","{","id","}")),(0,i.kt)("admonition",{title:"Response",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"204 No Content")))),(0,i.kt)("h2",{id:"delete-a-scene"},"Delete a Scene"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://hubs-api.dev.xrcloud.belivvr.com/v1/scenes/"),(0,i.kt)(c,{mdxType:"Bold"},"$","{","id","}")),(0,i.kt)("admonition",{title:"Response",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"204 No Content")))))}u.isMDXComponent=!0}}]);