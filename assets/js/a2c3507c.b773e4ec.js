"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5707],{44045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=n(85893),i=n(11151);const r={sidebar_label:"Rust",title:"Rust",description:"An introduction to writing Kubewarden policies with Rust.",keywords:["kubewarden","kubernetes","writing policies","introduction"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","introduction"],"doc-persona":["kubewarden-developer","kubewarden-developer-rust"]},o=void 0,d={id:"writing-policies/rust/intro-rust",title:"Rust",description:"An introduction to writing Kubewarden policies with Rust.",source:"@site/docs/writing-policies/rust/01-intro-rust.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/intro-rust",permalink:"/next/writing-policies/rust/intro-rust",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rust/01-intro-rust.md",tags:[],version:"current",lastUpdatedAt:1706172150,formattedLastUpdatedAt:"Jan 25, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"Rust",title:"Rust",description:"An introduction to writing Kubewarden policies with Rust.",keywords:["kubewarden","kubernetes","writing policies","introduction"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","introduction"],"doc-persona":["kubewarden-developer","kubewarden-developer-rust"]},sidebar:"docs",previous:{title:"Writing Policies",permalink:"/next/writing-policies/"},next:{title:"Creating a policy",permalink:"/next/writing-policies/rust/create-policy"}},c={},a=[{value:"Getting the Rust dependencies",id:"getting-the-rust-dependencies",level:2},{value:"OSX dependencies",id:"osx-dependencies",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})," is the most mature programming language that can generate WebAssembly modules.\nWebAssembly is a first-class citizen in the Rust world so many of the tools and crates from the Rust ecosystem work out of the box."]}),"\n",(0,s.jsxs)(t.p,{children:["Kubewarden provides a ",(0,s.jsx)(t.a,{href:"https://crates.io/crates/kubewarden-policy-sdk",children:"Rust SDK"})," that simplifies the process of writing policies.\nThere is also a ",(0,s.jsx)(t.a,{href:"https://github.com/kubewarden/rust-policy-template",children:"template project"})," to provide scaffolding for a policy project using the ",(0,s.jsx)(t.a,{href:"https://github.com/cargo-generate/cargo-generate",children:(0,s.jsx)(t.code,{children:"cargo-generate"})})," utility."]}),"\n",(0,s.jsxs)(t.p,{children:["This documentation shows how to use these projects to write Kubewarden policies using Rust.\nIt doesn't cover the details of Kubewarden's Rust SDK.\nThe details are in the ",(0,s.jsx)(t.a,{href:"https://docs.rs/kubewarden-policy-sdk/0.1.0",children:"crate documentation"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"getting-the-rust-dependencies",children:"Getting the Rust dependencies"}),"\n",(0,s.jsxs)(t.p,{children:["Install the Rust compiler and its tools using\n",(0,s.jsx)(t.a,{href:"https://github.com/rust-lang/rustup",children:"rustup"}),".\nRefer to the rustup ",(0,s.jsx)(t.a,{href:"https://rust-lang.github.io/rustup/installation/index.html",children:"install documentation"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Once you have installed ",(0,s.jsx)(t.code,{children:"rustup"})," add the WebAssembly System Interface (WASI) target:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"rustup target add wasm32-wasi\n"})}),"\n",(0,s.jsx)(t.h2,{id:"osx-dependencies",children:"OSX dependencies"}),"\n",(0,s.jsxs)(t.p,{children:["To use ",(0,s.jsx)(t.code,{children:"cargo-generate"})," you need to add the Xcode tool set.\nIf it isn't installed through Xcode the following command gives you the dependencies needed:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"xcode-select --install\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(67294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);