"use strict";(self.webpackChunkxrcloud_hubs_api_docs=self.webpackChunkxrcloud_hubs_api_docs||[]).push([[266],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,f=u["".concat(l,".").concat(c)]||u[c]||d[c]||o;return t?a.createElement(f,r(r({ref:n},m),{},{components:t})):a.createElement(f,r({ref:n},m))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2900:(e,n,t)=>{t.d(n,{f:()=>r,d:()=>o});var a=t(7294);const i=JSON.parse('{"HQ":"http://localhost:3001"}');function o(e){let{color:n="red",children:t}=e;return a.createElement("strong",{style:{color:n}},t)}function r(){return i.HQ}},3563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=t(7462),i=(t(7294),t(3905)),o=t(2900);const r={sidebar_position:3,title:"Permissions"},s=void 0,l={unversionedId:"api/permissions",id:"api/permissions",title:"Permissions",description:"Hubs API URL:",source:"@site/docs/api/permissions.mdx",sourceDirName:"api",slug:"/api/permissions",permalink:"/docs/api/permissions",draft:!1,editUrl:"https://github.com/belivvr/xrcloud-hubs-api-docs/tree/main/docs/docs/api/permissions.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Permissions"},sidebar:"tutorialSidebar",previous:{title:"Rooms",permalink:"/docs/api/rooms"},next:{title:"Avatars",permalink:"/docs/api/avatars"}},p={},m=[{value:"Get many Permissions",id:"get-many-permissions",level:2},{value:"Get a Permission information",id:"get-a-permission-information",level:2},{value:"Update a Permission",id:"update-a-permission",level:2},{value:"Delete a Permission",id:"delete-a-permission",level:2}],d={toc:m};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hubs API URL: ",(0,i.kt)("a",null,(0,i.kt)(o.f,{mdxType:"APIUrl"})))),(0,i.kt)("h2",{id:"get-many-permissions"},"Get many Permissions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/v1/permissions?take="),(0,i.kt)(o.d,{mdxType:"Bold"},"$","{","take","}"),(0,i.kt)("inlineCode",{parentName:"p"},"&page="),(0,i.kt)(o.d,{mdxType:"Bold"},"$","{","page","}")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Request ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"URL Query Parameters")),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"take"),": number of rooms to return"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"page"),": page number to return"))),(0,i.kt)("admonition",{title:"Response",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,i.kt)("li",{parentName:"ul"},"Content-Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 10,\n  "data": [\n    {\n      "id": "permission uuid", // uuid\n      "name": "permission name",\n      "pinObject": false, // boolean\n      "fly": false, // boolean\n      "kickUsers": false, // boolean\n      "muteUsers": false, // boolean\n      "amplifyAudio": false, // boolean\n      "spawnAndMoveMedia": false, // boolean\n      "spawnDrawing": false, // boolean\n      "spawnCamera": false, // boolean\n      "spawnEmoji": false, // boolean\n      "accessKey": "project uuid",\n      "created": "created date",\n      "updated": "latest update date"\n    },\n    ...\n  ]\n}\n'))),(0,i.kt)("h2",{id:"get-a-permission-information"},"Get a Permission information"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/v1/permissions/"),(0,i.kt)(o.d,{mdxType:"Bold"},"$","{","id","}")),(0,i.kt)("admonition",{title:"Response",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,i.kt)("li",{parentName:"ul"},"Content-Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "permission uuid", // uuid\n  "name": "permission name",\n  "pinObject": false, // boolean\n  "fly": false, // boolean\n  "kickUsers": false, // boolean\n  "muteUsers": false, // boolean\n  "amplifyAudio": false, // boolean\n  "spawnAndMoveMedia": false, // boolean\n  "spawnDrawing": false, // boolean\n  "spawnCamera": false, // boolean\n  "spawnEmoji": false, // boolean\n  "accessKey": "project uuid",\n  "created": "created date",\n  "updated": "latest update date"\n}\n'))),(0,i.kt)("h2",{id:"update-a-permission"},"Update a Permission"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/v1/permissions/"),(0,i.kt)(o.d,{mdxType:"Bold"},"$","{","id","}")),(0,i.kt)("admonition",{title:"Response",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"204 No Content")))),(0,i.kt)("h2",{id:"delete-a-permission"},"Delete a Permission"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/v1/permissions/"),(0,i.kt)(o.d,{mdxType:"Bold"},"$","{","id","}")),(0,i.kt)("admonition",{title:"Response",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"204 No Content")))))}u.isMDXComponent=!0}}]);