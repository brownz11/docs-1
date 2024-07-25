"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[76439],{10155:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(85893),n=t(11151);const s={sidebar_label:"Network capabilities",title:"Network capabilities",description:"Network capabilities.",keywords:["kubewarden","kubernetes","policy specification","network capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","network-capabilities"]},c=void 0,r={id:"reference/spec/host-capabilities/net",title:"Network capabilities",description:"Network capabilities.",source:"@site/versioned_docs/version-1.13/reference/spec/host-capabilities/04-net.md",sourceDirName:"reference/spec/host-capabilities",slug:"/reference/spec/host-capabilities/net",permalink:"/1.13/reference/spec/host-capabilities/net",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.13/reference/spec/host-capabilities/04-net.md",tags:[],version:"1.13",lastUpdatedAt:1721916452e3,sidebarPosition:4,frontMatter:{sidebar_label:"Network capabilities",title:"Network capabilities",description:"Network capabilities.",keywords:["kubewarden","kubernetes","policy specification","network capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","network-capabilities"]},sidebar:"docs",previous:{title:"Container registry capabilities",permalink:"/1.13/reference/spec/host-capabilities/container-registry"},next:{title:"Cryptographic capabilities",permalink:"/1.13/reference/spec/host-capabilities/crypto"}},a={},l=[{value:"DNS host lookup",id:"dns-host-lookup",level:2},{value:"Caching",id:"caching",level:3},{value:"Communication protocol",id:"communication-protocol",level:3},{value:"waPC function - <code>v1/dns_lookup_host</code> input",id:"wapc-function---v1dns_lookup_host-input",level:4},{value:"waPC function - <code>v1/dns_lookup_host</code> output",id:"wapc-function---v1dns_lookup_host-output",level:4}];function p(e){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/host-capabilities/net"})}),"\n",(0,o.jsx)(i.p,{children:"Kubewarden policies cannot make network request from within the WebAssembly execution context."}),"\n",(0,o.jsx)(i.p,{children:"Network operations can be done by leveraging a series of capabilities exposed by the host."}),"\n",(0,o.jsx)(i.h2,{id:"dns-host-lookup",children:"DNS host lookup"}),"\n",(0,o.jsx)(i.p,{children:"This function performs a DNS lookup starting from the FQDN given by the policy."}),"\n",(0,o.jsx)(i.h3,{id:"caching",children:"Caching"}),"\n",(0,o.jsx)(i.p,{children:"Lookup results are cached for 1 minute."}),"\n",(0,o.jsx)(i.h3,{id:"communication-protocol",children:"Communication protocol"}),"\n",(0,o.jsx)(i.p,{children:"This is the description of the waPC protocol used to expose this capability:"}),"\n",(0,o.jsxs)(i.h4,{id:"wapc-function---v1dns_lookup_host-input",children:["waPC function - ",(0,o.jsx)(i.code,{children:"v1/dns_lookup_host"})," input"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-hcl",children:"# hostname - JSON encoded string\nstring\n"})}),"\n",(0,o.jsxs)(i.h4,{id:"wapc-function---v1dns_lookup_host-output",children:["waPC function - ",(0,o.jsx)(i.code,{children:"v1/dns_lookup_host"})," output"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-hcl",children:'\n{\n  # list of IPs\n  "ips": [string]\n}\n'})}),"\n",(0,o.jsx)(i.p,{children:"All the IP addresses associated with the given FQDN,\nare going to be returned as strings in the response.\nBoth IPv4 and IPv6 entries are returned as part of the same response."}),"\n",(0,o.jsxs)(i.p,{children:["For example, when requesting the manifest digest of the\n",(0,o.jsx)(i.code,{children:"busybox:latest"})," image,\nthe payloads would be:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Input payload: ",(0,o.jsx)(i.code,{children:'"google.com"'})]}),"\n",(0,o.jsxs)(i.li,{children:["Output payload: ",(0,o.jsx)(i.code,{children:'{ "ips": ["127.0.0.1"]}'})]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>c});var o=t(67294);const n={},s=o.createContext(n);function c(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);