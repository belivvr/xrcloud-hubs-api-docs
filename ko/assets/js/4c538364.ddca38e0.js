"use strict";(self.webpackChunkxrcloud_hubs_api_docs=self.webpackChunkxrcloud_hubs_api_docs||[]).push([[268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2900:(e,t,n)=>{n.d(t,{f:()=>i,d:()=>r});var a=n(7294);const o=JSON.parse('{"HQ":"https://hubs-api.dev.xrcloud.belivvr.com"}');function r(e){let{color:t="red",children:n}=e;return a.createElement("strong",{style:{color:t}},n)}function i(){return o.HQ}},69:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(2900);const i={sidebar_position:1,title:"Scenes"},l=void 0,p={unversionedId:"api/scenes",id:"api/scenes",title:"Scenes",description:"Hubs API URL:",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/scenes.mdx",sourceDirName:"api",slug:"/api/scenes",permalink:"/ko/docs/api/scenes",draft:!1,editUrl:"https://github.com/belivvr/xrcloud-hubs-api-docs/tree/main/docs/docs/api/scenes.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Scenes"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/ko/docs/api/introduction"},next:{title:"Rooms",permalink:"/ko/docs/api/rooms"}},c={},d=[{value:"Scenes \ub9ac\uc2a4\ud2b8 \uc870\ud68c",id:"scenes-\ub9ac\uc2a4\ud2b8-\uc870\ud68c",level:2},{value:"Scene \uc815\ubcf4 \uc870\ud68c",id:"scene-\uc815\ubcf4-\uc870\ud68c",level:2},{value:"Scene \uc5d0\ub514\ud130(New)",id:"scene-\uc5d0\ub514\ud130new",level:2},{value:"Scene \uc5d0\ub514\ud130(ID)",id:"scene-\uc5d0\ub514\ud130id",level:2},{value:"Scene \uc815\ubcf4 \uc5c5\ub370\uc774\ud2b8",id:"scene-\uc815\ubcf4-\uc5c5\ub370\uc774\ud2b8",level:2},{value:"Scene \uc0ad\uc81c",id:"scene-\uc0ad\uc81c",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hubs API URL: ",(0,o.kt)("a",null,(0,o.kt)(r.f,{mdxType:"APIUrl"})))),(0,o.kt)("h2",{id:"scenes-\ub9ac\uc2a4\ud2b8-\uc870\ud68c"},"Scenes \ub9ac\uc2a4\ud2b8 \uc870\ud68c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[GET]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/scenes?take="),(0,o.kt)(r.d,{mdxType:"Bold"},"$","{","take","}"),(0,o.kt)("inlineCode",{parentName:"p"},"&page="),(0,o.kt)(r.d,{mdxType:"Bold"},"$","{","page","}"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\uc694\uccad ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"URL \ucffc\ub9ac \ud30c\ub77c\ubbf8\ud130")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"take"),": \ud55c \ud398\uc774\uc9c0\uc5d0 \ubcf4\uc5ec\uc904 Room \uac1c\uc218"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"page"),": \ud398\uc774\uc9c0 \ubc88\ud638"))),(0,o.kt)("admonition",{title:"\uc751\ub2f5",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 10,\n  "data": [\n    {\n      "id": "...", // uuid\n      "name": "...",\n      "thumbnailUrl": "https://...",\n      "modelUrl": "https://...", // nullable\n      "projectUrl": "https://...",\n      "accessKey": "...", // uuid\n      "created": "...",\n      "updated": "..."\n    },\n    ...\n  ]\n}\n'))),(0,o.kt)("h2",{id:"scene-\uc815\ubcf4-\uc870\ud68c"},"Scene \uc815\ubcf4 \uc870\ud68c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[GET]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/scenes/"),(0,o.kt)(r.d,{mdxType:"Bold"},"$","{","id","}"))),(0,o.kt)("admonition",{title:"\uc751\ub2f5",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "...", // uuid\n  "name": "...",\n  "thumbnailUrl": "https://...",\n  "modelUrl": "https://...", // nullable\n  "projectUrl": "https://...",\n  "accessKey": "...", // uuid\n  "created": "...",\n  "updated": "..."\n}\n'))),(0,o.kt)("h2",{id:"scene-\uc5d0\ub514\ud130new"},"Scene \uc5d0\ub514\ud130(New)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[GET]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/scenes/new/spoke"))),(0,o.kt)("admonition",{title:"\uc751\ub2f5",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"text/html")))),(0,o.kt)("h2",{id:"scene-\uc5d0\ub514\ud130id"},"Scene \uc5d0\ub514\ud130(ID)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[GET]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/scenes/"),(0,o.kt)(r.d,{mdxType:"Bold"},"$","{","id","}"),(0,o.kt)("inlineCode",{parentName:"p"},"/spoke"))),(0,o.kt)("admonition",{title:"\uc751\ub2f5",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"text/html")))),(0,o.kt)("h2",{id:"scene-\uc815\ubcf4-\uc5c5\ub370\uc774\ud2b8"},"Scene \uc815\ubcf4 \uc5c5\ub370\uc774\ud2b8"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[PUT/PATCH]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/scenes/"),(0,o.kt)(r.d,{mdxType:"Bold"},"$","{","id","}"))),(0,o.kt)("admonition",{title:"\uc751\ub2f5",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"204 No Content")))),(0,o.kt)("h2",{id:"scene-\uc0ad\uc81c"},"Scene \uc0ad\uc81c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[DELETE]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/scenes/"),(0,o.kt)(r.d,{mdxType:"Bold"},"$","{","id","}"))),(0,o.kt)("admonition",{title:"\uc751\ub2f5",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"204 No Content")))))}u.isMDXComponent=!0}}]);