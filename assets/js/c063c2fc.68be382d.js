"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_label:"What is the Audit Scanner?",title:"What is the Audit Scanner?",description:"An overview of the Kubewarden Audit Scanner.",keywords:["kubewarden","audit scanner","kubernetes"]},o=void 0,s={unversionedId:"explanations/audit-scanner/audit-scanner",id:"version-1.9/explanations/audit-scanner/audit-scanner",title:"What is the Audit Scanner?",description:"An overview of the Kubewarden Audit Scanner.",source:"@site/versioned_docs/version-1.9/explanations/audit-scanner/audit-scanner.md",sourceDirName:"explanations/audit-scanner",slug:"/explanations/audit-scanner/",permalink:"/explanations/audit-scanner/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/explanations/audit-scanner/audit-scanner.md",tags:[],version:"1.9",lastUpdatedAt:1699017983,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{sidebar_label:"What is the Audit Scanner?",title:"What is the Audit Scanner?",description:"An overview of the Kubewarden Audit Scanner.",keywords:["kubewarden","audit scanner","kubernetes"]},sidebar:"docs",previous:{title:"Kubewarden vs OPA Gatekeeper",permalink:"/explanations/opa-comparison"},next:{title:"Limitations",permalink:"/explanations/audit-scanner/limitations"}},l={},c=[{value:"Enable audit scanner",id:"enable-audit-scanner",level:2},{value:"Policies",id:"policies",level:2},{value:"Permissions and ServiceAccounts",id:"permissions-and-serviceaccounts",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Audit Scanner feature is available starting from Kubewarden 1.7.0 release")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"audit-scanner")," component constantly checks resources in the cluster.\nIt flags the ones that don't adhere with the Kubewarden policies deployed in the cluster."),(0,i.kt)("p",null,"Policies evolve over time.\nNew ones are deployed, existing ones are updated.\nVersions and configuration settings change.\nThis can lead to situations where resources already inside the cluster are no longer compliant.\nThe audit scanning feature provides Kubernetes administrators with a tool that constantly verifies the compliance state of their clusters."),(0,i.kt)("p",null,"To explain the use of the audit scanner in Kubewarden, consider the following scenario."),(0,i.kt)("p",null,"Assume Bob is deploying a WordPress Pod in the cluster.\nBob is new to Kubernetes, makes a mistake and deploys the Pod running as a privileged container.\nAt this point there's no policy preventing that so the Pod is\nsuccessfully created in the cluster."),(0,i.kt)("p",null,"Some days later, Alice, the Kubernetes administrator, enforces a Kubewarden policy that prohibits the creation of privileged containers.\nThe Pod deployed by Bob keeps running in the cluster as it already exists."),(0,i.kt)("p",null,"A report generated by the audit scanner lets Alice identify all the workloads that are violating creation policies.\nThis includes the WordPress Pod created by Bob."),(0,i.kt)("p",null,"The audit scanner operates by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"identifying all the resources to audit"),(0,i.kt)("li",{parentName:"ul"},"for each it builds a synthetic admission request with the resource's data"),(0,i.kt)("li",{parentName:"ul"},"it sends each admission request to a policy server endpoint which is only for audit requests")),(0,i.kt)("p",null,"For the policy evaluating the request,\nthere are no differences between real or audit requests.\nThe data received is the same.\nThis auditing policy server endpoint has instrumentation to collect data of the evaluation.\nSo, users can use their monitoring tools analyze audit scanner data."),(0,i.kt)("h2",{id:"enable-audit-scanner"},"Enable audit scanner"),(0,i.kt)("p",null,"You can enable the audit scanner starting from the Kubewarden 1.7.0 release."),(0,i.kt)("p",null,"Detailed installation instructions are in the\n",(0,i.kt)("a",{parentName:"p",href:"../howtos/audit-scanner"},"audit scanner How-to"),"."),(0,i.kt)("h2",{id:"policies"},"Policies"),(0,i.kt)("p",null,"By default, the audit scanner evaluates every policy.\nOperators that want to skip a policy evaluation in the audit scanner must set the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.backgroundAudit")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in the policy definition."),(0,i.kt)("p",null,"Also, policies in Kubewarden now support two optional annotations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"io.kubewarden.policy.severity")," annotation lets you specify the severity level of the policy violation, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"critical"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"high"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"medium"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"low")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"info"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"io.kubewarden.policy.category")," annotation lets you categorize the policy based on a specific domain or purpose, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"PSP"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"compliance"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"performance"),".")),(0,i.kt)("p",null,"See the policy authors ",(0,i.kt)("a",{parentName:"p",href:"/writing-policies/"},"documentation")," for more information."),(0,i.kt)("h2",{id:"permissions-and-serviceaccounts"},"Permissions and ServiceAccounts"),(0,i.kt)("p",null,"The audit scanner in Kubernetes requires specific Role Based Access Control (RBAC) configurations to be able to scan Kubernetes resources and save the results.\nA correct default Service Account with those permissions is created during the installation.\nThe user can create and configure their own ServiceAccount to fine tune access to resources."),(0,i.kt)("p",null,"The default audit scanner ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," is bound to the ",(0,i.kt)("inlineCode",{parentName:"p"},"view")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," provided by Kubernetes.\nThis ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," allows read-only access to a wide range of Kubernetes resources within a namespace.\nYou can find more details about this role in the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles"},"Kubernetes documentation"),"."),(0,i.kt)("p",null,"Also, the audit scanner is bound to a ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," that grants read access to Kubewarden resource types and read-write access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyReport")," ",(0,i.kt)("a",{parentName:"p",href:"/explanations/audit-scanner/policy-reports"},"CRDs"),".\nThese permissions let the scanner fetch resources for conducting audit evaluations and creating policy reports based on the evaluation results."))}p.isMDXComponent=!0}}]);