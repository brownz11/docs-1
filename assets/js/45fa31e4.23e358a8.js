"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[36409],{61132:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var n=t(85893),s=t(11151);const r={sidebar_label:"Building and distributing policies",title:"Building and distributing policies",description:"Building and distributing Kubewarden policies developed with Rust.",keywords:["kubewarden","kubernetes","writing policies","rust","build and distribute"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","build-and-distribute"],"doc-persona":["kubewarden-developer","kubewarden-developer-rust","kubewarden-operator"]},d=void 0,o={id:"writing-policies/rust/build-and-distribute",title:"Building and distributing policies",description:"Building and distributing Kubewarden policies developed with Rust.",source:"@site/versioned_docs/version-1.10/writing-policies/rust/07-build-and-distribute.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/build-and-distribute",permalink:"/1.10/writing-policies/rust/build-and-distribute",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/rust/07-build-and-distribute.md",tags:[],version:"1.10",lastUpdatedAt:1711007482,formattedLastUpdatedAt:"Mar 21, 2024",sidebarPosition:7,frontMatter:{sidebar_label:"Building and distributing policies",title:"Building and distributing policies",description:"Building and distributing Kubewarden policies developed with Rust.",keywords:["kubewarden","kubernetes","writing policies","rust","build and distribute"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","build-and-distribute"],"doc-persona":["kubewarden-developer","kubewarden-developer-rust","kubewarden-operator"]},sidebar:"docs",previous:{title:"Logging",permalink:"/1.10/writing-policies/rust/logging"},next:{title:"Raw policies",permalink:"/1.10/writing-policies/rust/raw-policies"}},l={},a=[{value:"Building the policy",id:"building-the-policy",level:2},{value:"Distributing the policy",id:"distributing-the-policy",level:2},{value:"More examples",id:"more-examples",level:2}];function u(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"building-the-policy",children:"Building the policy"}),"\n",(0,n.jsx)(i.p,{children:"Thus far, you've built the policy with a compilation target of the same operating system and architecture of your development machine."}),"\n",(0,n.jsxs)(i.p,{children:["It's now time to build the policy as a WebAssembly binary, a ",(0,n.jsx)(i.code,{children:".wasm"})," file."]}),"\n",(0,n.jsx)(i.p,{children:"You use the command:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-console",children:"make policy.wasm\n"})}),"\n",(0,n.jsx)(i.p,{children:"This command builds the code in release mode, with a WebAssembly compilation target."}),"\n",(0,n.jsxs)(i.p,{children:["The build produces a ",(0,n.jsx)(i.code,{children:"policy.wasm"})," file:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-console",children:"$ file policy.wasm\npolicy.wasm: WebAssembly (wasm) binary module version 0x1 (MVP)\n"})}),"\n",(0,n.jsx)(i.h2,{id:"distributing-the-policy",children:"Distributing the policy"}),"\n",(0,n.jsxs)(i.p,{children:["Kubewarden documents policy distribution in the\n",(0,n.jsx)(i.a,{href:"/1.10/distributing-policies",children:"distributing policies"}),"\nsection."]}),"\n",(0,n.jsx)(i.h2,{id:"more-examples",children:"More examples"}),"\n",(0,n.jsxs)(i.p,{children:["You can find more Rust Kubewarden policies in Kubewarden's GitHub space.\n",(0,n.jsx)(i.a,{href:"https://github.com/search?l=Rust&q=topic%3Apolicy-as-code+org%3Akubewarden&type=Repositories",children:"This query"}),"\ncan help you find them."]}),"\n",(0,n.jsx)(i.p,{children:"The Kubewarden policy repositories, shown by that query, have GitHub Actions that automate the following tasks:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Run unit tests and code linting on pull requests and after code merges into the main branch."}),"\n",(0,n.jsxs)(i.li,{children:["Build the policy in ",(0,n.jsx)(i.code,{children:"release"})," mode and push it to an OCI registry as an artifact."]}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>d});var n=t(67294);const s={},r=n.createContext(s);function d(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);