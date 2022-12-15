"use strict";(self.webpackChunkxrcloud_hubs_api_docs=self.webpackChunkxrcloud_hubs_api_docs||[]).push([[266],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>c});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return a?t.createElement(k,r(r({ref:n},m),{},{components:a})):t.createElement(k,r({ref:n},m))}));function c(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2900:(e,n,a)=>{a.d(n,{f:()=>r,d:()=>i});var t=a(7294);const o=JSON.parse('{"HQ":"https://hubs-api.dev.xrcloud.belivvr.com"}');function i(e){let{color:n="red",children:a}=e;return t.createElement("strong",{style:{color:n}},a)}function r(){return o.HQ}},3563:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var t=a(7462),o=(a(7294),a(3905)),i=a(2900);const r={sidebar_position:3,title:"Permissions"},l=void 0,s={unversionedId:"api/permissions",id:"api/permissions",title:"Permissions",description:"Hubs API URL:",source:"@site/docs/api/permissions.mdx",sourceDirName:"api",slug:"/api/permissions",permalink:"/docs/api/permissions",draft:!1,editUrl:"https://github.com/belivvr/xrcloud-hubs-api-docs/tree/main/docs/docs/api/permissions.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Permissions"},sidebar:"tutorialSidebar",previous:{title:"Rooms",permalink:"/docs/api/rooms"},next:{title:"Avatars",permalink:"/docs/api/avatars"}},p={},m=[{value:"Get many Permissions",id:"get-many-permissions",level:2},{value:"Get a Permission information",id:"get-a-permission-information",level:2},{value:"Create a Permission",id:"create-a-permission",level:2},{value:"Update a Permission",id:"update-a-permission",level:2},{value:"Delete a Permission",id:"delete-a-permission",level:2}],d={toc:m};function u(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hubs API URL: ",(0,o.kt)("a",null,(0,o.kt)(i.f,{mdxType:"APIUrl"})))),(0,o.kt)("h2",{id:"get-many-permissions"},"Get many Permissions"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[GET]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/permissions?take="),(0,o.kt)(i.d,{mdxType:"Bold"},"$","{","take","}"),(0,o.kt)("inlineCode",{parentName:"p"},"&page="),(0,o.kt)(i.d,{mdxType:"Bold"},"$","{","page","}"))),(0,o.kt)("admonition",{title:"Request",type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"headers"},"Headers"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Authorization: Bearer {accessToken}")),(0,o.kt)("h4",{parentName:"admonition",id:"url-query-parameters"},"URL Query Parameters"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"take"),": number of rooms to return"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"page"),": page number to return"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"custom-data"),": custom data to filter"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"custom-data-disabled"),": disable ",(0,o.kt)("inlineCode",{parentName:"li"},"custom-data")," and return all data"))),(0,o.kt)("admonition",{title:"Response",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 10,\n  "data": [\n    {\n      "id": "permission uuid", // uuid\n      "name": "permission name",\n      "pinObject": false, // boolean\n      "fly": false, // boolean\n      "kickUsers": false, // boolean\n      "muteUsers": false, // boolean\n      "amplifyAudio": false, // boolean\n      "spawnAndMoveMedia": false, // boolean\n      "spawnDrawing": false, // boolean\n      "spawnCamera": false, // boolean\n      "spawnEmoji": false, // boolean\n      "accessKey": "project uuid",\n      "created": "created date",\n      "updated": "latest update date"\n    },\n    ...\n  ]\n}\n'))),(0,o.kt)("h2",{id:"get-a-permission-information"},"Get a Permission information"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[GET]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/permissions/"),(0,o.kt)(i.d,{mdxType:"Bold"},"$","{","id","}"))),(0,o.kt)("admonition",{title:"Request",type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"headers-1"},"Headers"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Authorization: Bearer {accessToken}"))),(0,o.kt)("admonition",{title:"Response",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"200 OK")),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "permission uuid", // uuid\n  "name": "permission name",\n  "pinObject": false, // boolean\n  "fly": false, // boolean\n  "kickUsers": false, // boolean\n  "muteUsers": false, // boolean\n  "amplifyAudio": false, // boolean\n  "spawnAndMoveMedia": false, // boolean\n  "spawnDrawing": false, // boolean\n  "spawnCamera": false, // boolean\n  "spawnEmoji": false, // boolean\n  "accessKey": "project uuid",\n  "created": "created date",\n  "updated": "latest update date"\n}\n'))),(0,o.kt)("h2",{id:"create-a-permission"},"Create a Permission"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[POST]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/permissions"))),(0,o.kt)("admonition",{title:"Request",type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"headers-2"},"Headers"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Authorization: Bearer {accessToken}"),(0,o.kt)("li",{parentName:"ul"},"Content-Type: application/json")),(0,o.kt)("h4",{parentName:"admonition",id:"body"},"Body"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "permission name",\n  "pinObject": false, // boolean\n  "fly": false, // boolean\n  "kickUsers": false, // boolean\n  "muteUsers": false, // boolean\n  "amplifyAudio": false, // boolean\n  "spawnAndMoveMedia": false, // boolean\n  "spawnDrawing": false, // boolean\n  "spawnCamera": false, // boolean\n  "spawnEmoji": false, // boolean\n}\n'))),(0,o.kt)("admonition",{title:"Response",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"201 Created")),(0,o.kt)("li",{parentName:"ul"},"Content-Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json"))),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "permission uuid", // uuid\n  "name": "permission name",\n  "pinObject": false, // boolean\n  "fly": false, // boolean\n  "kickUsers": false, // boolean\n  "muteUsers": false, // boolean\n  "amplifyAudio": false, // boolean\n  "spawnAndMoveMedia": false, // boolean\n  "spawnDrawing": false, // boolean\n  "spawnCamera": false, // boolean\n  "spawnEmoji": false, // boolean\n  "accessKey": "project uuid",\n  "created": "created date",\n  "updated": "latest update date"\n}\n'))),(0,o.kt)("h2",{id:"update-a-permission"},"Update a Permission"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[PUT/PATCH]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/permissions/"),(0,o.kt)(i.d,{mdxType:"Bold"},"$","{","id","}"))),(0,o.kt)("admonition",{title:"Request",type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"headers-3"},"Headers"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Authorization: Bearer {accessToken}"),(0,o.kt)("li",{parentName:"ul"},"Content-Type: application/json")),(0,o.kt)("h4",{parentName:"admonition",id:"body-1"},"Body"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "permission name", // optional.\n  "pinObject": false, // boolean. optional.\n  "fly": false, // boolean. optional.\n  "kickUsers": false, // boolean. optional.\n  "muteUsers": false, // boolean. optional.\n  "amplifyAudio": false, // boolean. optional.\n  "spawnAndMoveMedia": false, // boolean. optional.\n  "spawnDrawing": false, // boolean. optional.\n  "spawnCamera": false, // boolean. optional.\n  "spawnEmoji": false, // boolean. optional.\n}\n'))),(0,o.kt)("admonition",{title:"Response",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"204 No Content")))),(0,o.kt)("h2",{id:"delete-a-permission"},"Delete a Permission"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[DELETE]")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/permissions/"),(0,o.kt)(i.d,{mdxType:"Bold"},"$","{","id","}"))),(0,o.kt)("admonition",{title:"Request",type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"headers-4"},"Headers"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Authorization: Bearer {accessToken}"))),(0,o.kt)("admonition",{title:"Response",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"204 No Content")))))}u.isMDXComponent=!0}}]);