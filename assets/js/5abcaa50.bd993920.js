"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[12627],{81537:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=i(85893),t=i(11151);const o={sidebar_label:"Build and run",title:"Build and run a Gatekeeper policy",description:"Building and running a Gatekeeper policy written in Rego.",keywords:["kubewarden","kubernetes","gatekeeper policy","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","gatekeeper","build-and-run"]},l=void 0,d={id:"writing-policies/rego/gatekeeper/build-and-run",title:"Build and run a Gatekeeper policy",description:"Building and running a Gatekeeper policy written in Rego.",source:"@site/versioned_docs/version-1.10/writing-policies/rego/gatekeeper/03-build-and-run.md",sourceDirName:"writing-policies/rego/gatekeeper",slug:"/writing-policies/rego/gatekeeper/build-and-run",permalink:"/1.10/writing-policies/rego/gatekeeper/build-and-run",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/rego/gatekeeper/03-build-and-run.md",tags:[],version:"1.10",lastUpdatedAt:17218954e5,sidebarPosition:3,frontMatter:{sidebar_label:"Build and run",title:"Build and run a Gatekeeper policy",description:"Building and running a Gatekeeper policy written in Rego.",keywords:["kubewarden","kubernetes","gatekeeper policy","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","gatekeeper","build-and-run"]},sidebar:"docs",previous:{title:"Create a New Policy",permalink:"/1.10/writing-policies/rego/gatekeeper/create-policy"},next:{title:"Distribute",permalink:"/1.10/writing-policies/rego/gatekeeper/distribute"}},s={},c=[{value:"Build",id:"build",level:2},{value:"Run",id:"run",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Building and running the policy is done exactly the same way as a Rego\npolicy targeting Open Policy Agent. The structure of our project is\nlike:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 default-ns.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 other-ns.json\n\u2514\u2500\u2500 policy.rego\n\n1 directory, 3 files\n"})}),"\n",(0,r.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,r.jsxs)(n.p,{children:["Let's build our policy by running the following ",(0,r.jsx)(n.code,{children:"opa"})," command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ opa build -t wasm -e policy/violation policy.rego\n"})}),"\n",(0,r.jsx)(n.p,{children:"What this does is build the rego policy, with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"target"}),": ",(0,r.jsx)(n.code,{children:"wasm"}),". We want  to build the policy for the ",(0,r.jsx)(n.code,{children:"wasm"})," target."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"entrypoint"}),": ",(0,r.jsx)(n.code,{children:"policy/violation"}),". The entry point is the ",(0,r.jsx)(n.code,{children:"violation"}),"\nrule inside the ",(0,r.jsx)(n.code,{children:"policy"})," package."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"policy.rego"}),": build and include the ",(0,r.jsx)(n.code,{children:"policy.rego"})," file."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The previous command generates a ",(0,r.jsx)(n.code,{children:"bundle.tar.gz"})," file. You can extract\nthe wasm module from it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ tar -xf bundle.tar.gz /policy.wasm\n"})}),"\n",(0,r.jsx)(n.p,{children:"The project tree looks like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".\n\u251c\u2500\u2500 bundle.tar.gz\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 default-ns.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 other-ns.json\n\u251c\u2500\u2500 policy.rego\n\u2514\u2500\u2500 policy.wasm\n\n1 directory, 5 files\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can now execute our policy!"}),"\n",(0,r.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,r.jsxs)(n.p,{children:["Let's use ",(0,r.jsx)(n.code,{children:"kwctl"})," to run our policy as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$ kwctl run -e gatekeeper --request-path data/other-ns.json policy.wasm | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Given that this is our resource created in the namespace called\n",(0,r.jsx)(n.code,{children:"other"}),", this resource is accepted, as expected."]}),"\n",(0,r.jsx)(n.p,{children:"Now let's execute a request that will be rejected by the policy:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$ kwctl run -e gatekeeper --request-path data/default-ns.json policy.wasm | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "it is forbidden to use the default namespace"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"As you can see, our Gatekeeper policy rejected this resource as expected."})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var r=i(67294);const t={},o=r.createContext(t);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);