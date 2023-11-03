"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[2744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const r={sidebar_label:"Introduction to Go",title:""},a=void 0,s={unversionedId:"writing-policies/go/intro-go",id:"version-1.7/writing-policies/go/intro-go",title:"",description:"Go's support for WebAssembly is fast evolving. The contents",source:"@site/versioned_docs/version-1.7/writing-policies/go/01-intro-go.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/intro-go",permalink:"/1.7/writing-policies/go/intro-go",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/go/01-intro-go.md",tags:[],version:"1.7",lastUpdatedAt:1699017983,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction to Go",title:""},sidebar:"docs",previous:{title:"Building & Distributing Policies",permalink:"/1.7/writing-policies/rust/build-and-distribute"},next:{title:"Create a New Policy",permalink:"/1.7/writing-policies/go/scaffold"}},l={},p=[{value:"Limitations",id:"limitations",level:2},{value:"Tooling",id:"tooling",level:2},{value:"Getting TinyGo dependencies",id:"getting-tinygo-dependencies",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Go's support for WebAssembly is fast evolving. The contents\nof this page were written during June 2023, hence they could be outdated.")),(0,o.kt)("h1",{id:"go"},"Go"),(0,o.kt)("p",null,"Currently the official Go compiler cannot produce WebAssembly binaries\nthat can be run ",(0,o.kt)("strong",{parentName:"p"},"outside")," of the browser.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/go/issues/31105"},"This upstream issue")," is tracking\nthe evolution of this topic.\nDue to that, it's not possible to use the Go compiler to write Kubewarden policies."),(0,o.kt)("p",null,"Luckily there's another Go compiler that is capable of building WebAssembly\nbinaries that can be used by Kubewarden. This compiler is called ",(0,o.kt)("a",{parentName:"p",href:"https://tinygo.org/"},"TinyGo"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TinyGo is a project to bring the Go programming language to microcontrollers\nand modern web browsers by creating a new compiler based on LLVM."),(0,o.kt)("p",{parentName:"blockquote"},"You can compile and run TinyGo programs on many different microcontroller\nboards such as the BBC micro:bit and the Arduino Uno."),(0,o.kt)("p",{parentName:"blockquote"},"TinyGo can also be used to produce WebAssembly (Wasm) code which is very\ncompact in size.")),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"TinyGo doesn't yet support all the Go features (see ",(0,o.kt)("a",{parentName:"p",href:"https://tinygo.org/lang-support/"},"here"),"\nto see the current project status). Currently its biggest limitation\nis the lack of a fully supported ",(0,o.kt)("inlineCode",{parentName:"p"},"reflect")," package. That leads to the inability to compile\nofficial Kubernetes Go API types (e.g.: ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s.io/api/core/v1"),")."),(0,o.kt)("p",null,"Kubewarden policies need to process JSON data like the policy settings and\nthe actual request received by Kubernetes."),(0,o.kt)("p",null,"Despite TinyGo's current limitations, it's still easy and doable to write\nKubewarden validation policies with it."),(0,o.kt)("h2",{id:"tooling"},"Tooling"),(0,o.kt)("p",null,"Writing Kubewarden policies requires a version of TinyGo greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.28.1"),"."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Using an older version of TinyGo will result in runtime errors due to the limited support for Go reflection.")),(0,o.kt)("p",null,"These Go libraries are extremely useful when writing a Kubewarden policy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/policy-sdk-go"},"Kubewarden Go SDK"),": provides a series of\nstructures and functions that reduce the amount of code to write. It also provides test helpers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/k8s-objects"},"Kubernetes Go types"),": The\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/staging/src/k8s.io"},"official Kubernetes Go Types"),"\ncannot be used with TinyGo. This module provides all the\nKubernetes Types in a TinyGo-friendly way."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tidwall/gjson"},"gjson"),": It provides a powerful query language that allows\nquick navigation of JSON documents and data retrieval. This library doesn't use the\n",(0,o.kt)("inlineCode",{parentName:"li"},"encoding/json")," package provided by Go's stdlib, hence it's usable with TinyGo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/deckarep/golang-set"},"mapset"),": provides a Go implementation of the\n",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Set_(abstract_data_type)"},"Set"),"\ndata structure. This library significantly reduces the amount of code to be written,\nthat's because operations like Set ",(0,o.kt)("inlineCode",{parentName:"li"},"union"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"intersection"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"difference")," are pretty frequent inside\nof policies.")),(0,o.kt)("p",null,"Last but not least, the Kubewarden project provides a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/go-policy-template"},"template Go policy project"),"\nthat can be used to quickly create Kubewarden policies written in Go."),(0,o.kt)("h2",{id:"getting-tinygo-dependencies"},"Getting TinyGo dependencies"),(0,o.kt)("p",null,"The easiest way to get TinyGo is by using the upstream container images.\nOfficial releases can be found ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tinygo/tinygo"},"here"),", while\nbuilds from the development branch are automatically pushed\n",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tinygo/tinygo-dev"},"here"),"."),(0,o.kt)("p",null,"If needed, checkout TinyGo's ",(0,o.kt)("a",{parentName:"p",href:"https://tinygo.org/getting-started/"},"getting started")," page for\nmore information."))}d.isMDXComponent=!0}}]);