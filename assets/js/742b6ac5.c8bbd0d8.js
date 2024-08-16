"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[70889],{45901:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(85893),i=s(11151);const o={sidebar_label:"Cluster operators",title:"Testing for cluster operators",description:"An introduction to testing Kubewarden policies for cluster operators."},r=void 0,c={id:"testing-policies/cluster-operators",title:"Testing for cluster operators",description:"An introduction to testing Kubewarden policies for cluster operators.",source:"@site/versioned_docs/version-1.7/testing-policies/03-cluster-operators.md",sourceDirName:"testing-policies",slug:"/testing-policies/cluster-operators",permalink:"/1.7/testing-policies/cluster-operators",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/testing-policies/03-cluster-operators.md",tags:[],version:"1.7",lastUpdatedAt:1723810499e3,sidebarPosition:3,frontMatter:{sidebar_label:"Cluster operators",title:"Testing for cluster operators",description:"An introduction to testing Kubewarden policies for cluster operators."},sidebar:"docs",previous:{title:"Policy authors",permalink:"/1.7/testing-policies/policy-authors"},next:{title:"Publish to Artifact Hub",permalink:"/1.7/distributing-policies/publish-policy-to-artifact-hub"}},a={},l=[{value:"A testing example",id:"a-testing-example",level:2},{value:"Create <code>AdmissionReview</code> requests",id:"create-admissionreview-requests",level:3},{value:"Test the policy",id:"test-the-policy",level:3},{value:"Automation",id:"automation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"As a Kubernetes cluster operator, you will want to perform testing against Kubewarden policies you want to use."}),"\n",(0,t.jsx)(n.p,{children:"You will have questions like:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"What are the correct policy settings to get the validation/mutation outcome I need?"}),"\n",(0,t.jsxs)(n.li,{children:["How can I be sure everything will keep working as expected when:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"I upgrade the policy to a newer version"}),"\n",(0,t.jsx)(n.li,{children:"I add/change some Kubernetes resources"}),"\n",(0,t.jsx)(n.li,{children:"I change the configuration parameters of the policy"}),"\n",(0,t.jsx)(n.li,{children:"and so on?"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Kubewarden has a utility, ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl",children:(0,t.jsx)(n.code,{children:"kwctl"})}),", that allows testing of the policies outside of Kubernetes."]}),"\n",(0,t.jsxs)(n.p,{children:["To use ",(0,t.jsx)(n.code,{children:"kwctl"})," we invoke it with following inputs:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["A WebAssembly binary file URI of the policy to be run.\nThe Kubewarden policy can be loaded from the local filesystem ",(0,t.jsx)(n.code,{children:"file://"}),", an HTTP(s) server ",(0,t.jsx)(n.code,{children:"https://"}),", or an OCI registry ",(0,t.jsx)(n.code,{children:"registry://"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The admission request object to be evaluated.\nYou provide it with the ",(0,t.jsx)(n.code,{children:"--request-path"})," argument.\nUse ",(0,t.jsx)(n.code,{children:"stdin"})," by setting ",(0,t.jsx)(n.code,{children:"--request-path"})," to ",(0,t.jsx)(n.code,{children:"-"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You provide run time policy settings as inline JSON via ",(0,t.jsx)(n.code,{children:"--settings-json"})," flag. Or with a JSON or YAML file from the filesystem using ",(0,t.jsx)(n.code,{children:"--settings-path"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After the test ",(0,t.jsx)(n.code,{children:"kwctl"})," prints the ",(0,t.jsx)(n.code,{children:"ValidationResponse"})," object to the standard output."]}),"\n",(0,t.jsxs)(n.p,{children:["You can download pre-built binaries of ",(0,t.jsx)(n.code,{children:"kwctl"})," from ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl/releases",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"a-testing-example",children:"A testing example"}),"\n",(0,t.jsxs)(n.p,{children:["This section describes how to test the ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/psp-apparmor",children:"psp-apparmor"})," policy with different configurations and validation request objects."]}),"\n",(0,t.jsxs)(n.h3,{id:"create-admissionreview-requests",children:["Create ",(0,t.jsx)(n.code,{children:"AdmissionReview"})," requests"]}),"\n",(0,t.jsxs)(n.p,{children:["We have to create files holding the ",(0,t.jsx)(n.code,{children:"AdmissionReview"})," objects to test the policy."]}),"\n",(0,t.jsxs)(n.p,{children:["You can create a file named ",(0,t.jsx)(n.code,{children:"pod-req-no-specific-apparmor-profile.json"})," with the following contents:"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("code",{children:"pod-req-no-specific-apparmor-profile.json"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "no-apparmor"\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["This request tries to create a Pod that doesn't specify any AppArmor profile to be used.\nBecause it doesn't have an ",(0,t.jsx)(n.code,{children:"annotation"})," with the ",(0,t.jsx)(n.code,{children:"container.apparmor.security.beta.kubernetes.io/<container-name>"})," key."]}),"\n",(0,t.jsxs)(n.p,{children:["You can create a file named ",(0,t.jsx)(n.code,{children:"pod-req-apparmor-unconfined.json"})," with the\nfollowing contents:"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("code",{children:"pod-req-apparmor-unconfined.json"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "privileged-pod",\n      "annotations": {\n        "container.apparmor.security.beta.kubernetes.io/nginx": "unconfined"\n      }\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["This request tries to create a Pod with a container called ",(0,t.jsx)(n.code,{children:"nginx"})," running with the ",(0,t.jsx)(n.code,{children:"unconfined"})," AppArmor profile.\nNote that, running in ",(0,t.jsx)(n.code,{children:"unconfined"})," mode is a bad security practice."]}),"\n",(0,t.jsxs)(n.p,{children:["Now you can create a file named ",(0,t.jsx)(n.code,{children:"pod-req-apparmor-custom.json"})," with the following contents:"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("code",{children:"pod-req-apparmor-custom.json"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "privileged-pod",\n      "annotations": {\n        "container.apparmor.security.beta.kubernetes.io/nginx": "localhost/nginx-custom"\n      }\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n'})})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["These are all simplified ",(0,t.jsx)(n.code,{children:"AdmissionReview"})," objects.\nWe have only the fields relevant to our testing of the policy."]})}),"\n",(0,t.jsx)(n.h3,{id:"test-the-policy",children:"Test the policy"}),"\n",(0,t.jsxs)(n.p,{children:["Now we can use ",(0,t.jsx)(n.code,{children:"kwctl"})," to test the creation of a Pod not specifying an AppArmor profile:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ kwctl run \\\n    --request-path pod-req-no-specific-apparmor-profile.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n"})}),"\n",(0,t.jsx)(n.p,{children:"The policy will accept the request and produce output like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The policy will instead reject the creation of a Pod with an\n",(0,t.jsx)(n.code,{children:"unconfined"})," AppArmor profile:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'$ kwctl run \\\n    --request-path pod-req-apparmor-unconfined.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "These AppArmor profiles are not allowed: [\\"unconfined\\"]"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Both times we ran the policy ",(0,t.jsx)(n.strong,{children:"without"})," providing any kind of setting. As the ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/psp-apparmor#configuration",children:"policy's documentation"})," states, this results in preventing the usage of non-default profiles."]}),"\n",(0,t.jsxs)(n.p,{children:["The Pod using a custom ",(0,t.jsx)(n.code,{children:"nginx"})," profile gets rejected by the policy too:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'$ kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "These AppArmor profiles are not allowed: [\\"localhost/nginx-custom\\"]"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can change the default behavior, allowing some chosen AppArmor to be used:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'$ kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    --settings-json \'{"allowed_profiles": ["runtime/default", "localhost/nginx-custom"]}\' \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now the request succeeds:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"automation",children:"Automation"}),"\n",(0,t.jsxs)(n.p,{children:["All these steps, shown above, can be automated using ",(0,t.jsx)(n.a,{href:"https://github.com/bats-core/bats-core",children:"bats"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You can write a series of tests and integrate their execution inside your existing CI and CD pipelines."}),"\n",(0,t.jsxs)(n.p,{children:['The commands above can be "wrapped" into a ',(0,t.jsx)(n.code,{children:"bats"})," test:"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:["A ",(0,t.jsx)("code",{children:"bats"}),"test"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'@test "all is good" {\n  run kwctl run \\\n    --request-path pod-req-no-specific-apparmor-profile.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # request accepted\n  [ $(expr "$output" : \'.*"allowed":true.*\') -ne 0 ]\n}\n\n@test "reject" {\n  run kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # request rejected\n  [ $(expr "$output" : \'.*"allowed":false.*\') -ne 0 ]\n}\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"bats"})," code above is in the file ",(0,t.jsx)(n.code,{children:"e2e.bats"}),", we can run the test as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ bats e2e.bats\n \u2713 all is good\n \u2713 reject\n\n2 tests, 0 failures\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/1.7/writing-policies/go/e2e-tests",children:"This"})," section has more about writing end-to-end tests for your policies."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(67294);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);