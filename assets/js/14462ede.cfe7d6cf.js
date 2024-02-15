"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[91213],{75304:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var c=i(85893),r=i(11151);const n={sidebar_label:"Cryptographic capabilities",title:"Cryptographic capabilities",description:"Cryptographic capabilities.",keywords:["kubewarden","kubernetes","policy specification","cryptographic capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","host-capabilities","cryptographic-capabilities"]},a=void 0,s={id:"reference/spec/host-capabilities/crypto",title:"Cryptographic capabilities",description:"Cryptographic capabilities.",source:"@site/docs/reference/spec/host-capabilities/05-crypto.md",sourceDirName:"reference/spec/host-capabilities",slug:"/reference/spec/host-capabilities/crypto",permalink:"/next/reference/spec/host-capabilities/crypto",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/reference/spec/host-capabilities/05-crypto.md",tags:[],version:"current",lastUpdatedAt:1708015605,formattedLastUpdatedAt:"Feb 15, 2024",sidebarPosition:5,frontMatter:{sidebar_label:"Cryptographic capabilities",title:"Cryptographic capabilities",description:"Cryptographic capabilities.",keywords:["kubewarden","kubernetes","policy specification","cryptographic capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","host-capabilities","cryptographic-capabilities"]},sidebar:"docs",previous:{title:"Network capabilities",permalink:"/next/reference/spec/host-capabilities/net"},next:{title:"Kubernetes capabilities",permalink:"/next/reference/spec/host-capabilities/kubernetes"}},o={},p=[{value:"WaPC protocol contract",id:"wapc-protocol-contract",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:"Because of Wasm constraints at the time of writing, some cryptographic libraries\ncannot be compiled to Wasm. In the meantime, Kubewarden policies needing those\ncan instead perform these callbacks to evaluate the cryptographic functions\nhost-side, receive the result, and continue with their logic."}),"\n",(0,c.jsx)(t.h2,{id:"wapc-protocol-contract",children:"WaPC protocol contract"}),"\n",(0,c.jsx)(t.p,{children:"In case you are implementing your own language SDK, these are the functions\nperforming cryptographic checks exposed by the host:"}),"\n",(0,c.jsxs)("table",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:" waPC function name "}),(0,c.jsx)("th",{children:" Input payload "}),(0,c.jsx)("th",{children:" Output payload "})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:"v1/is_certificate_trusted"})})}),(0,c.jsx)("td",{children:(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-hcl",children:'# Certificate:\n{\n  # **mandatory**: Which encoding is used by the certificate\n  # Either the string "Pem" or "Der".\n  "encoding": string,\n  # Actual certificate\n  # The certificate is UTF-8 encoded.\n  # It\'s an array of bytes of the unicode code pointers of a PEM/DER encoded\n  # certificate string.\n  "data": [byte(int), ..., byte(int)]\n}\n\n{\n  # **mandatory**: PEM-encoded certificate to verify\n  "cert": Certificate,\n  # optional:\n  "cert_chain": [\n      # list of certs, ordered by trust\n      # usage (intermediates first, root last)\n      # If empty or missing, certificate is assumed\n      # trusted\n      Certificate,\n      ...\n      Certificate,\n    ],\n  # RFC 3339 time format string, to check expiration\n  # against.\n  # If missing, certificate is assumed never expired\n  "not_after": string\n}\n'})})}),(0,c.jsx)("td",{children:(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-hcl",children:'{\n   # true if certificate verified:\n   "trusted": boolean,\n   # empty if trusted == true:\n   "reason": string\n}\n'})})})]})]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>a});var c=i(67294);const r={},n=c.createContext(r);function a(e){const t=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),c.createElement(n.Provider,{value:t},e.children)}}}]);