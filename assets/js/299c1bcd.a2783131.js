"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7e3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={},o="JavaScript",c={unversionedId:"writing-policies/javascript",id:"writing-policies/javascript",title:"JavaScript",description:"JavaScript cannot be converted to WebAssembly, however",source:"@site/docs/writing-policies/javascript.md",sourceDirName:"writing-policies",slug:"/writing-policies/javascript",permalink:"/next/writing-policies/javascript",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/javascript.md",tags:[],version:"current",lastUpdatedAt:1699017983,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{}},p={},s=[{value:"Current State",id:"current-state",level:2}],l={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript"},"JavaScript"),(0,a.kt)("p",null,"JavaScript ",(0,a.kt)("strong",{parentName:"p"},"cannot")," be converted to WebAssembly, however\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Shopify/javy"},"Javy")," can execute JavaScript code in a\nWebAssembly embedded JavaScript runtime, powered by the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bellard/quickjs"},"QuickJS embedded JavaScript engine"),"."),(0,a.kt)("h2",{id:"current-state"},"Current State"),(0,a.kt)("p",null,"Currently there's no Kubewarden SDK for JavaScript. As of the time of writing,\nJavy is a beta project that was only recently released."))}d.isMDXComponent=!0}}]);