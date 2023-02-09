"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6522],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?i.createElement(m,o(o({ref:t},l),{},{components:r})):i.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=r(3117),n=(r(7294),r(3905));const a={sidebar_label:"Cryptographic Capabilities",title:""},o="Cryptographic capabilities",c={unversionedId:"writing-policies/spec/host-capabilities/crypto",id:"writing-policies/spec/host-capabilities/crypto",title:"",description:"Because of Wasm constraints at the time of writing, some cryptographic libraries",source:"@site/docs/writing-policies/spec/host-capabilities/05-crypto.md",sourceDirName:"writing-policies/spec/host-capabilities",slug:"/writing-policies/spec/host-capabilities/crypto",permalink:"/writing-policies/spec/host-capabilities/crypto",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/spec/host-capabilities/05-crypto.md",tags:[],version:"current",lastUpdatedAt:1675948821,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:5,frontMatter:{sidebar_label:"Cryptographic Capabilities",title:""},sidebar:"docs",previous:{title:"Network Capabilities",permalink:"/writing-policies/spec/host-capabilities/net"},next:{title:"OCI Registries Support",permalink:"/distributing-policies/oci-registries-support"}},s={},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cryptographic-capabilities"},"Cryptographic capabilities"),(0,n.kt)("p",null,"Because of Wasm constraints at the time of writing, some cryptographic libraries\ncannot be compiled to Wasm. In the meantime, Kubewarden policies needing those\ncan instead perform these callbacks to evaluate the cryptographic functions\nhost-side, receive the result, and continue with their logic."),(0,n.kt)("h1",{id:"wapc-protocol-contract"},"WaPC protocol contract"),(0,n.kt)("p",null,"In case you are implementing your own language SDK, these are the functions\nperforming cryptographic checks exposed by the host:"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null," waPC function name ")," ",(0,n.kt)("th",null," Input payload ")," ",(0,n.kt)("th",null," Output payload ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"v1/is_certificate_trusted"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n  # **mandatory**: PEM-encoded certificate to verify\n  "certificate": string,\n  # optional:\n  "cert_chain": [\n      # list of PEM-encoded certs, ordered by trust\n      # usage (intermediates first, root last)\n      # If empty or missing, certificate is assumed\n      # trusted\n      string,\n      ...\n      string,\n    ],\n  # RFC 3339 time format string, to check expiration\n  # against.\n  # If missing, certificate is assumed never expired\n  "not_after": string\n}\n'))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n   # true if certificate verified:\n   "trusted": boolean,\n   # empty if trusted == true:\n   "reason": string\n}\n'))))))}u.isMDXComponent=!0}}]);