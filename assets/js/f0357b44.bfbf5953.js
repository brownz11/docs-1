"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[50230],{39357:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=n(85893),s=n(11151);const a={sidebar_label:"Sigstore host capabilities",title:"Sigstore host capabilities",description:"Example: Sigstore CEL policy",keywords:["kubewarden","kubernetes","writing policies","sigstore","signature","verification"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","cel","sigstore","signature","verification"],"doc-persona":["kubewarden-policy-developer","kubewarden-operator"]},o=void 0,r={id:"tutorials/writing-policies/CEL/example-sigstore",title:"Sigstore host capabilities",description:"Example: Sigstore CEL policy",source:"@site/docs/tutorials/writing-policies/CEL/04-example-sigstore.md",sourceDirName:"tutorials/writing-policies/CEL",slug:"/tutorials/writing-policies/CEL/example-sigstore",permalink:"/next/tutorials/writing-policies/CEL/example-sigstore",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/tutorials/writing-policies/CEL/04-example-sigstore.md",tags:[],version:"current",lastUpdatedAt:172225268e4,sidebarPosition:4,frontMatter:{sidebar_label:"Sigstore host capabilities",title:"Sigstore host capabilities",description:"Example: Sigstore CEL policy",keywords:["kubewarden","kubernetes","writing policies","sigstore","signature","verification"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","cel","sigstore","signature","verification"],"doc-persona":["kubewarden-policy-developer","kubewarden-operator"]},sidebar:"docs",previous:{title:"Context-aware policies",permalink:"/next/tutorials/writing-policies/CEL/context-aware"},next:{title:"Rust",permalink:"/next/tutorials/writing-policies/rust/intro-rust"}},c={},l=[{value:"Example: Sigstore verification policy",id:"example-sigstore-verification-policy",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/cel/example-sigstore"})}),"\n",(0,t.jsxs)(i.p,{children:["As an example of another usage of host capabilities on kubewarden's\n",(0,t.jsx)(i.code,{children:"cel-policy"}),", let's create a policy that verifies all container images in a Pod\nby checking their Sigstore keyless signatures."]}),"\n",(0,t.jsx)(i.h2,{id:"example-sigstore-verification-policy",children:"Example: Sigstore verification policy"}),"\n",(0,t.jsx)(i.p,{children:"This policy will check all container images in the Pod Sigstore, and verify\nthat the images are signed and trusted."}),"\n",(0,t.jsxs)(i.p,{children:["In this case, we will check for a Sigstore keyless signature performed in\nGitHub Actions. These type of keyless signatures are tied to Github's OIDC\nissuer when creating the cryptographic certificates, so we will only need to\nknow the GitHub organization under where the container image is published. You\ncan read more about the host capabilities for Sigstore\n",(0,t.jsx)(i.a,{href:"../../../reference/spec/host-capabilities/signature-verifier-policies",children:"here"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["To achieve this in CEL, we use the ",(0,t.jsx)(i.a,{href:"https://github.com/kubewarden/cel-policy?tab=readme-ov-file#host-capabilities",children:"Kubewarden's CEL extension\nlibraries for host capabilities"}),"\nin the policy, particularly the ",(0,t.jsxs)(i.a,{href:"https://pkg.go.dev/github.com/kubewarden/cel-policy/internal/cel/library#Sigstore",children:[(0,t.jsx)(i.code,{children:"githubAction"}),"\nfunction"]}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["As always, we can start with ",(0,t.jsx)(i.code,{children:"kwctl"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-console",children:"$ kwctl scaffold manifest -t ClusterAdmissionPolicy \\\n  registry://ghcr.io/kubewarden/policies/cel-policy:v1.0.0`\n"})}),"\n",(0,t.jsx)(i.p,{children:"Which then we can edit to be relevant to our container verification policy:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:'apiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: "cel-sigstore-keyless-verification"\nspec:\n  module: ghcr.io/kubewarden/policies/cel-policy:v1.0.0\n  namespaceSelector:\n    matchLabels:\n      kubernetes.io/metadata.name: default\n  rules:\n    - apiGroups: [""]\n      apiVersions: ["v1"]\n      resources: ["pods"]\n      operations: ["CREATE", "UPDATE"]\n'})}),"\n",(0,t.jsx)(i.p,{children:"Now, let's to the CEL part. We will obtain a list of container images in the\ncurrent Pod object, and then check that they are verified by a signature\nmatching our organization of choosing (in this case, github.com/opencontainers):"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:'apiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: "cel-sigstore-keyless-verification"\nspec:\n  module: ghcr.io/kubewarden/policies/cel-policy:v1.0.0\n  namespaceSelector:\n    matchLabels:\n      kubernetes.io/metadata.name: default\n  rules:\n    - apiGroups: [""]\n      apiVersions: ["v1"]\n      resources: ["pods"]\n      operations: ["CREATE", "UPDATE"]\n  settings:\n    variables:\n      - name: containerImages\n        expression: |\n          object.spec.containers.map(c, c.image)\n      - name: containerImagesNotVerified\n        expression: |\n          variables.containerImages.filter(image, !kw.sigstore.image(image).githubAction("opencontainers").verify().isTrusted())\n    validations:\n      - expression: |\n          size(variables.containerImagesNotVerified) == 0\n        messageExpression: "\'These container images are not signed by the kubewarden GitHub organization: \' + variables.containerImagesNotVerified.join(\', \')"\n'})}),"\n",(0,t.jsx)(i.p,{children:"But wait, we must not forget that InitContainers can be also part of Pods. So let's add another variable and validation:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",metastring:'title="./cel-policy-sigstore.yaml"',children:'apiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: "cel-sigstore-keyless-verification"\nspec:\n  module: ghcr.io/kubewarden/policies/cel-policy:v1.0.0\n  namespaceSelector:\n    matchLabels:\n      kubernetes.io/metadata.name: default\n  rules:\n    - apiGroups: [""]\n      apiVersions: ["v1"]\n      resources: ["pods"]\n      operations: ["CREATE", "UPDATE"]\n  settings:\n    variables:\n      - name: containerImages\n        expression: |\n          object.spec.containers.map(c, c.image)\n      - name: initContainerImages\n        expression: |\n          has(object.spec.initContainerImages) ? object.spec.initContainers.map(c, c.image) : []\n      - name: containerImagesNotVerified\n        expression: |\n          variables.containerImages.filter(image, !kw.sigstore.image(image).githubAction("opencontainers").verify().isTrusted())\n      - name: initContainerImagesNotVerified\n        expression: |\n          variables.initContainerImages.filter(image, !kw.sigstore.image(image).githubAction("opencontainers").verify().isTrusted())\n    validations:\n      - expression: |\n          size(variables.containerImagesNotVerified) == 0\n        messageExpression: "\'These container images are not signed by the kubewarden GitHub organization: \' + variables.containerImagesNotVerified.join(\', \')"\n      - expression: |\n          size(variables.initContainerImagesNotVerified) == 0\n        messageExpression: "\'These init container images are not signed by the kubewarden GitHub organization: \' + variables.initContainerImagesNotVerified.join(\', \')"\n'})}),"\n",(0,t.jsxs)(i.p,{children:["As usual with CEL, we can add several ",(0,t.jsx)(i.code,{children:"validations"})," under\n",(0,t.jsx)(i.code,{children:"settings.validations"}),", and they are evaluated in parallel, joined with an AND\noperation, which is short-circuited."]}),"\n",(0,t.jsx)(i.p,{children:"We can now deploy the policy, and try to deploy a Pod with unsigned images:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-console",children:'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: golanci-lint-example\nspec:\n  containers:\n  - name: nginx\n    image: ghcr.io/opencontainers/golangci-lint:v1.52.1\n    ports:\n    - containerPort: 80\nEOF\nError from server: error when creating "STDIN":\n  admission webhook "clusterwide-cel-sigstore-keyless-verification.kubewarden.admission" denied the request:\n  failed to verify image: Callback evaluation failure: no signatures found for image: ghcr.io/opencontainers/golangci-lint:v1.52.1\n'})})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var t=n(67294);const s={},a=t.createContext(s);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);