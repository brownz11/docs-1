"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7886],{46453:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=t(85893),o=t(11151);const r={sidebar_label:"Introduction",title:""},s="Open Policy Agent",c={id:"writing-policies/rego/open-policy-agent/intro",title:"",description:"Open Policy Agent support has been introduced starting from these releases:",source:"@site/docs/writing-policies/rego/open-policy-agent/01-intro.md",sourceDirName:"writing-policies/rego/open-policy-agent",slug:"/writing-policies/rego/open-policy-agent/intro",permalink:"/next/writing-policies/rego/open-policy-agent/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rego/open-policy-agent/01-intro.md",tags:[],version:"current",lastUpdatedAt:1701700024,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",title:""},sidebar:"docs",previous:{title:"Builtin Support",permalink:"/next/writing-policies/rego/builtin-support"},next:{title:"Create a New Policy",permalink:"/next/writing-policies/rego/open-policy-agent/create-policy"}},l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Compatibility with existing policies",id:"compatibility-with-existing-policies",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"open-policy-agent",children:"Open Policy Agent"}),"\n",(0,n.jsxs)(i.admonition,{type:"note",children:[(0,n.jsx)(i.p,{children:"Open Policy Agent support has been introduced starting from these releases:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"kwctl: v0.2.0"}),"\n",(0,n.jsx)(i.li,{children:"policy-server: v0.2.0"}),"\n"]})]}),"\n",(0,n.jsx)(i.p,{children:"Open Policy Agent is a general purpose policy framework that uses the\nRego language to write policies."}),"\n",(0,n.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(i.p,{children:"Rego policies work by receiving an input to evaluate, and produce an\noutput as a response. In this sense, Open Policy Agent has no specific\ntooling for targeting writing policies for Kubernetes."}),"\n",(0,n.jsxs)(i.p,{children:["Specifically, policies in Open Policy Agent receive a JSON input and\nproduce a JSON output. When the Open Policy Agent server is set up to\nreceive admission review requests from Kubernetes, policies will\nreceive a Kubernetes ",(0,n.jsx)(i.code,{children:"AdmissionReview"})," object in JSON format with the\nobject to evaluate, and they have to produce a valid ",(0,n.jsx)(i.code,{children:"AdmissionReview"}),"\nobject in return with the evaluation results."]}),"\n",(0,n.jsx)(i.h2,{id:"compatibility-with-existing-policies",children:"Compatibility with existing policies"}),"\n",(0,n.jsxs)(i.p,{children:["All policies can be compiled to the ",(0,n.jsx)(i.code,{children:"wasm"})," target (WebAssembly) with\nthe official ",(0,n.jsx)(i.code,{children:"opa"})," CLI tool."]}),"\n",(0,n.jsxs)(i.p,{children:["In terms of policy execution, you can read more about the ",(0,n.jsx)(i.a,{href:"../builtin-support",children:"Open Policy\nAgent built-in support that is implemented in\nKubewarden"}),"."]})]})}function d(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>c,a:()=>s});var n=t(67294);const o={},r=n.createContext(o);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);