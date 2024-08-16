"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[94915],{74602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(85893),r=n(11151),i=n(74866),a=n(85162);const o={sidebar_label:"Context Aware Policies",title:""},l="Context aware policies",c={id:"writing-policies/spec/context-aware-policies",title:"",description:"The policy-server has capabilities to expose cluster information to",source:"@site/versioned_docs/version-1.8/writing-policies/spec/05-context-aware-policies.mdx",sourceDirName:"writing-policies/spec",slug:"/writing-policies/spec/context-aware-policies",permalink:"/1.8/writing-policies/spec/context-aware-policies",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/writing-policies/spec/05-context-aware-policies.mdx",tags:[],version:"1.8",lastUpdatedAt:1723810499e3,sidebarPosition:5,frontMatter:{sidebar_label:"Context Aware Policies",title:""},sidebar:"docs",previous:{title:"Mutating Policies",permalink:"/1.8/writing-policies/spec/mutating-policies"},next:{title:"Host Capabilities Specification",permalink:"/1.8/writing-policies/spec/host-capabilities/intro-host-capabilities"}},u={},d=[{value:"ClusterAdmissionPolicies",id:"clusteradmissionpolicies",level:3},{value:"Testing context aware policies locally",id:"testing-context-aware-policies-locally",level:3},{value:"Language SDKs",id:"language-sdks",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"context-aware-policies",children:"Context aware policies"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"policy-server"})," has capabilities to expose cluster information to\npolicies, so that they can take decisions based on other existing\nresources, and not only based on the details provided by the admission request."]}),"\n",(0,s.jsx)(t.p,{children:"The retrieval of Kubernetes resources is performed by the Policy Server hosting the policy.\nAccess to Kubernetes is regulated by RBAC rules applied to the Service Account used by the Policy Server."}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"default"})," Policy Server deployed by Kubewarden helm charts has access to the following Kubernetes resources:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Namespaces"}),"\n",(0,s.jsx)(t.li,{children:"Services"}),"\n",(0,s.jsx)(t.li,{children:"Ingresses"}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Access to Kubernetes resources is currently available only to Kubewarden policies written using traditional programming languages. This is not available yet for Rego-based policies."})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"The policy server performs caching of the results obtained from the Kubernetes API server to reduce the amount of load of this core piece of Kubernetes.\nThat means some information might be stale or missing."})}),"\n",(0,s.jsx)(t.h3,{id:"clusteradmissionpolicies",children:"ClusterAdmissionPolicies"}),"\n",(0,s.jsxs)(t.p,{children:["ClusterAdmissionPolicies have the field ",(0,s.jsx)(t.a,{href:"https://doc.crds.dev/github.com/kubewarden/kubewarden-controller/policies.kubewarden.io/ClusterAdmissionPolicy/v1#spec-contextAwareResources",children:"spec.contextAwareResources"}),". This field provides a list a ",(0,s.jsx)(t.code,{children:"GroupVersionKind"}),' resources that the policy needs to access. This allows policy writers to ship the "permissions" that the policy needs together with the policy. Moreover, this allows policy operators to review the "permissions" needed by the policy at deployment time.']}),"\n",(0,s.jsx)(t.h3,{id:"testing-context-aware-policies-locally",children:"Testing context aware policies locally"}),"\n",(0,s.jsxs)(t.p,{children:["Apart from running policies in cluster for end-to-end tests, one can use our ",(0,s.jsx)(t.code,{children:"kwctl"})," CLI utility to run policies and mock requests against the cluster."]}),"\n",(0,s.jsxs)(t.p,{children:["For that, ",(0,s.jsx)(t.code,{children:"kwctl run"})," can first record all the interactions with the cluster into a file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"kwctl run \\\n    --allow-context-aware \\\n    -r request.json \\\n    --record-host-capabilities-interactions replay-session.yml \\\n    annotated-policy.wasm\n"})}),"\n",(0,s.jsxs)(t.p,{children:["which creates the following ",(0,s.jsx)(t.code,{children:"replay-session.yml"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'# replay-session.yml\n---\n- type: Exchange\n  request: |\n    !KubernetesGetResource\n    api_version: /v1\n    kind: Pod\n    name: p-testing\n    namespace: local\n    disable_cache: true\n  response:\n    type: Success\n    payload: \'{"apiVersion":"","kind":"Pod", <snipped> }\'\n'})}),"\n",(0,s.jsx)(t.p,{children:"With the replay session, one can now mock the cluster interactions without the need\nof a cluster, perfect for CI and end-to-end tests:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"kwctl run \\\n    --allow-context-aware \\\n    -r request.json \\\n    --replay-host-capabilities-interactions replay-session.yml \\\n    annotated-policy.wasm\n"})}),"\n",(0,s.jsx)(t.h3,{id:"language-sdks",children:"Language SDKs"}),"\n",(0,s.jsx)(t.p,{children:"Language SDK's that support cluster context at this time will expose\nfunctions that allow policies to retrieve the current state of the\ncluster."}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(a.Z,{value:"rust",label:"Rust SDK",default:!0,children:(0,s.jsxs)(t.p,{children:["See the functions exposing this functionality at the ",(0,s.jsx)("a",{href:"https://docs.rs/kubewarden-policy-sdk/0.8.7/kubewarden_policy_sdk",children:"Rust SDK reference docs"})]})}),(0,s.jsx)(a.Z,{value:"go",label:"Go SDK",children:(0,s.jsxs)(t.p,{children:["See the functions exposing this functionality at the ",(0,s.jsx)("a",{href:"https://pkg.go.dev/github.com/kubewarden/policy-sdk-go",children:"Go SDK reference docs"})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["If you want more information about the WaPC function used by the SDKs, check the ",(0,s.jsx)(t.a,{href:"/1.8/writing-policies/spec/host-capabilities/kubernetes",children:"Kubernetes capabilities"})," reference documentation."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>a});n(67294);var s=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,a),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>j});var s=n(67294),r=n(36905),i=n(12466),a=n(16550),o=n(20469),l=n(91980),c=n(67392),u=n(20812);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[c,d]=b({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),x=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function w(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==s&&(c(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(w,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function j(e){const t=(0,f.Z)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);