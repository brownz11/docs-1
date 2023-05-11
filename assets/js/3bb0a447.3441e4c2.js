"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_label:"Mutating Policies",title:""},s="Mutating policies",o={unversionedId:"tasksDir/mutating-policies",id:"tasksDir/mutating-policies",title:"",description:"A mutating policy will rebuild the requests with definied values that are conformant with the policy definition. If you want allow the behavior of mutating requests, you need to set the ClusterAdmissionPolicy.mutating filed to true.",source:"@site/docs/tasksDir/mutating-policies.md",sourceDirName:"tasksDir",slug:"/tasksDir/mutating-policies",permalink:"/tasksDir/mutating-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/tasksDir/mutating-policies.md",tags:[],version:"current",lastUpdatedAt:1683803258,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{sidebar_label:"Mutating Policies",title:""},sidebar:"docs",previous:{title:"Verifying Kubewarden",permalink:"/security/verifying-kubewarden"},next:{title:"Distributing Policies",permalink:"/distributing-policies"}},u={},p=[],l={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mutating-policies"},"Mutating policies"),(0,i.kt)("p",null,"A mutating policy will rebuild the requests with definied values that are conformant with the policy definition. If you want allow the behavior of mutating requests, you need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy.mutating")," filed to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"However, if you set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy.mutating")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the mutated requests will be rejected. For example, create the following ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"mutating")," field set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-user-group\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/user-group-psp:v0.1.5"\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 3000\n          max: 4000\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny" \nEOF\n\n# Output\nclusteradmissionpolicy.policies.kubewarden.io/psp-user-group created\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/user-group-psp-policy"},(0,i.kt)("inlineCode",{parentName:"a"},"psp-user-group"))," policy is used to control users and groups in containers and can mutate the requests. In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsUser")," field is set and it will be added to the container ",(0,i.kt)("inlineCode",{parentName:"p"},"securityContext")," section. "),(0,i.kt)("p",null,"As the ",(0,i.kt)("inlineCode",{parentName:"p"},"mutating")," field is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the following request will be applied successfully:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Command\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pause-user-group\nspec:\n  containers:\n    - name: pause\n      image: registry.k8s.io/pause\nEOF\n\n# Output\npod/pause-user-group created\n")),(0,i.kt)("p",null,"Once the request is applied, you can see the results of the container's ",(0,i.kt)("inlineCode",{parentName:"p"},"securityContext"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Command\nkubectl get pods pause-user-group -o jsonpath='{ .spec.containers[].securityContext }'\n\n# Output\n{\"runAsUser\":1000}\n")),(0,i.kt)("p",null,"Now, modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," by setting the field ",(0,i.kt)("inlineCode",{parentName:"p"},"mutating")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-user-group\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/user-group-psp:v0.1.5"\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: false\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 3000\n          max: 4000\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny" \nEOF\n\n# Output\nclusteradmissionpolicy.policies.kubewarden.io/psp-user-group configured\n')),(0,i.kt)("p",null,"As the ",(0,i.kt)("inlineCode",{parentName:"p"},"mutating")," field is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the following request will fail:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pause-user-group\nspec:\n  containers:\n    - name: pause\n      image: registry.k8s.io/pause\nEOF\n\n# Output\nError from server: error when creating ".\\\\pause-user-group.yaml": admission webhook "psp-user-group.kubewarden.admission" denied the request: Request rejected by policy psp-user-group. The policy attempted to mutate the request, but it is currently configured to not allow mutations.\n')),(0,i.kt)("p",null,"As a conclusion, you can see that Kubewarden allows you to replicate the exact same behavior as the deprecated Kubernetes Pod Security Polices (PSP)."))}c.isMDXComponent=!0}}]);