"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const s={sidebar_label:"Introduction to Rust",title:""},o="Rust",a={unversionedId:"writing-policies/rust/intro-rust",id:"version-1.9/writing-policies/rust/intro-rust",title:"",description:"Rust is the most mature programming language that",source:"@site/versioned_docs/version-1.9/writing-policies/rust/01-intro-rust.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/intro-rust",permalink:"/writing-policies/rust/intro-rust",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/rust/01-intro-rust.md",tags:[],version:"1.9",lastUpdatedAt:1699017983,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction to Rust",title:""},sidebar:"docs",previous:{title:"Writing Policies",permalink:"/writing-policies/"},next:{title:"Creating a new validation policy",permalink:"/writing-policies/rust/create-policy"}},l={},u=[{value:"Getting Rust dependencies",id:"getting-rust-dependencies",level:2},{value:"OSX specific dependencies",id:"osx-specific-dependencies",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rust"},"Rust"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," is the most mature programming language that\ncan generate WebAssembly modules: WebAssembly is a first-class citizen\nin the Rust world. That means many of the tools and crates of the Rust\necosystem work out of the box."),(0,i.kt)("p",null,"Kubewarden provides a ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/kubewarden-policy-sdk"},"Rust SDK"),"\nthat simplifies the process of writing policies, plus a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/rust-policy-template"},"template project")," to\nquickly scaffold a policy project using the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cargo-generate/cargo-generate"},(0,i.kt)("inlineCode",{parentName:"a"},"cargo-generate"))," utility."),(0,i.kt)("p",null,"This document illustrates how to take advantage of these projects to write\nKubewarden policies using the Rust programming language."),(0,i.kt)("p",null,"Note well, we won't cover the details of Kubewarden's Rust SDK inside of this\npage. These can be found inside of the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/kubewarden-policy-sdk/0.1.0"},"official crate documentation"),"."),(0,i.kt)("h2",{id:"getting-rust-dependencies"},"Getting Rust dependencies"),(0,i.kt)("p",null,"This section guides you through the process of installing the Rust compiler and\nits dependencies."),(0,i.kt)("p",null,"As a first step install the Rust compiler and its tools, this can be easily done\nusing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup"},"rustup"),". Please follow\n",(0,i.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/installation/index.html"},"rustup's install documentation"),"."),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup")," is installed add the WASI target:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"rustup target add wasm32-wasi\n")),(0,i.kt)("h2",{id:"osx-specific-dependencies"},"OSX specific dependencies"),(0,i.kt)("p",null,"In order to use ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-generate")," you will need to add the Xcode tool set. If it isn't installed through Xcode the following command will give you the dependencies needed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"xcode-select --install\n")))}d.isMDXComponent=!0}}]);