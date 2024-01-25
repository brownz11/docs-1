"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4459],{7239:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=i(85893),n=i(11151);const o={sidebar_label:"Context aware policies",title:"Context aware policies",description:"Context aware policies.",keywords:["kubewarden","kubernetes","policy specification","context aware policies"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","context-aware-policies"]},r=void 0,c={id:"writing-policies/spec/context-aware-policies",title:"Context aware policies",description:"Context aware policies.",source:"@site/docs/writing-policies/spec/05-context-aware-policies.md",sourceDirName:"writing-policies/spec",slug:"/writing-policies/spec/context-aware-policies",permalink:"/next/writing-policies/spec/context-aware-policies",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/spec/05-context-aware-policies.md",tags:[],version:"current",lastUpdatedAt:1706175194,formattedLastUpdatedAt:"Jan 25, 2024",sidebarPosition:5,frontMatter:{sidebar_label:"Context aware policies",title:"Context aware policies",description:"Context aware policies.",keywords:["kubewarden","kubernetes","policy specification","context aware policies"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","context-aware-policies"]},sidebar:"docs",previous:{title:"Mutating policies",permalink:"/next/writing-policies/spec/mutating-policies"},next:{title:"Host capabilities specification",permalink:"/next/writing-policies/spec/host-capabilities/intro-host-capabilities"}},l={},a=[{value:"Support Matrix",id:"support-matrix",level:2},{value:"ClusterAdmissionPolicies",id:"clusteradmissionpolicies",level:2},{value:"Testing context aware policies locally",id:"testing-context-aware-policies-locally",level:3},{value:"Language SDKs",id:"language-sdks",level:2},{value:"Rust",id:"rust",level:3},{value:"Go",id:"go",level:3},{value:"Rego policies",id:"rego-policies",level:2},{value:"Gatekeeper",id:"gatekeeper",level:3},{value:"Open Policy Agent",id:"open-policy-agent",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"policy-server"})," has capabilities to expose cluster information to\npolicies, so that they can take decisions based on other existing\nresources, and not only based on the details provided by the admission request."]}),"\n",(0,s.jsx)(t.p,{children:"The retrieval of Kubernetes resources is performed by the Policy Server hosting the policy.\nAccess to Kubernetes is regulated by RBAC rules applied to the Service Account used by the Policy Server."}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"default"})," Policy Server deployed by Kubewarden helm charts has access to the following Kubernetes resources:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Namespaces"}),"\n",(0,s.jsx)(t.li,{children:"Services"}),"\n",(0,s.jsx)(t.li,{children:"Ingresses"}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"The policy server performs caching of the results obtained from the Kubernetes API server to reduce the amount of load on this core part of Kubernetes.\nThat means some information might be stale or missing."})}),"\n",(0,s.jsx)(t.h2,{id:"support-matrix",children:"Support Matrix"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Policy type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Support"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Traditional programming languages"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Rego"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{children:"Since Kubewarden 1.9 release"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WASI"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{children:"Since Kubewarden 1.10.0 release, only for Go SDK"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"clusteradmissionpolicies",children:"ClusterAdmissionPolicies"}),"\n",(0,s.jsxs)(t.p,{children:["ClusterAdmissionPolicies have the field ",(0,s.jsx)(t.a,{href:"https://doc.crds.dev/github.com/kubewarden/kubewarden-controller/policies.kubewarden.io/ClusterAdmissionPolicy/v1#spec-contextAwareResources",children:"spec.contextAwareResources"}),". This field provides a list a ",(0,s.jsx)(t.code,{children:"GroupVersionKind"}),' resources that the policy needs to access. This allows policy writers to ship the "permissions" that the policy needs together with the policy. Moreover, this allows policy operators to review the "permissions" needed by the policy at deployment time.']}),"\n",(0,s.jsx)(t.h3,{id:"testing-context-aware-policies-locally",children:"Testing context aware policies locally"}),"\n",(0,s.jsxs)(t.p,{children:["Apart from running policies in cluster for end-to-end tests, one can use our ",(0,s.jsx)(t.code,{children:"kwctl"})," CLI utility to run policies and mock requests against the cluster."]}),"\n",(0,s.jsxs)(t.p,{children:["For that, ",(0,s.jsx)(t.code,{children:"kwctl run"})," can first record all the interactions with the cluster into a file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"kwctl run \\\n    --allow-context-aware \\\n    -r request.json \\\n    --record-host-capabilities-interactions replay-session.yml \\\n    annotated-policy.wasm\n"})}),"\n",(0,s.jsxs)(t.p,{children:["which creates the following ",(0,s.jsx)(t.code,{children:"replay-session.yml"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'# replay-session.yml\n---\n- type: Exchange\n  request: |\n    !KubernetesGetResource\n    api_version: /v1\n    kind: Pod\n    name: p-testing\n    namespace: local\n    disable_cache: true\n  response:\n    type: Success\n    payload: \'{"apiVersion":"","kind":"Pod", <snipped> }\'\n'})}),"\n",(0,s.jsx)(t.p,{children:"With the replay session, one can now mock the cluster interactions without the need\nof a cluster, perfect for CI and end-to-end tests:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"kwctl run \\\n    --allow-context-aware \\\n    -r request.json \\\n    --replay-host-capabilities-interactions replay-session.yml \\\n    annotated-policy.wasm\n"})}),"\n",(0,s.jsx)(t.h2,{id:"language-sdks",children:"Language SDKs"}),"\n",(0,s.jsx)(t.p,{children:"Language SDK's that support cluster context at this time will expose\nfunctions that allow policies to retrieve the current state of the\ncluster."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["If you want more information about the waPC function used by the SDKs, check the ",(0,s.jsx)(t.a,{href:"/next/writing-policies/spec/host-capabilities/kubernetes",children:"Kubernetes capabilities"})," reference documentation."]})}),"\n",(0,s.jsx)(t.h3,{id:"rust",children:"Rust"}),"\n",(0,s.jsxs)(t.p,{children:["See the functions exposing this functionality at the ",(0,s.jsx)(t.a,{href:"https://docs.rs/kubewarden-policy-sdk/0.8.7/kubewarden_policy_sdk",children:"Rust SDK reference docs"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"go",children:"Go"}),"\n",(0,s.jsxs)(t.p,{children:["See the functions exposing this functionality at the ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/kubewarden/policy-sdk-go",children:"Go SDK reference docs"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"rego-policies",children:"Rego policies"}),"\n",(0,s.jsx)(t.h3,{id:"gatekeeper",children:"Gatekeeper"}),"\n",(0,s.jsxs)(t.p,{children:["The context aware information is exposed under the ",(0,s.jsx)(t.code,{children:"data.inventory"})," key, like Gatekeeper does."]}),"\n",(0,s.jsxs)(t.p,{children:["The inventory is populated with the resources the policy has been granted access to via the ",(0,s.jsx)(t.code,{children:"spec.contextAwareResources"})," field."]}),"\n",(0,s.jsx)(t.h3,{id:"open-policy-agent",children:"Open Policy Agent"}),"\n",(0,s.jsxs)(t.p,{children:["The context aware information is exposed under the ",(0,s.jsx)(t.code,{children:"data.kubernetes"})," key, like\n",(0,s.jsx)(t.a,{href:"https://github.com/open-policy-agent/kube-mgmt",children:(0,s.jsx)(t.code,{children:"kube-mgmt"})})," does by default."]}),"\n",(0,s.jsxs)(t.p,{children:["The inventory is populated with the resources the policy has been granted access to via the ",(0,s.jsx)(t.code,{children:"spec.contextAwareResources"})," field."]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>r});var s=i(67294);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);