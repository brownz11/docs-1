"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[2194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const a={sidebar_label:"Policy evaluation timeout",title:""},r="Policy evaluation timeout protection",l={unversionedId:"operator-manual/policy-evaluation-timeout",id:"version-1.8/operator-manual/policy-evaluation-timeout",title:"",description:"This feature is available starting from Kubewarden v1.5.0.",source:"@site/versioned_docs/version-1.8/operator-manual/policy-evaluation-timeout.md",sourceDirName:"operator-manual",slug:"/operator-manual/policy-evaluation-timeout",permalink:"/1.8/operator-manual/policy-evaluation-timeout",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/operator-manual/policy-evaluation-timeout.md",tags:[],version:"1.8",lastUpdatedAt:1699017983,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{sidebar_label:"Policy evaluation timeout",title:""},sidebar:"docs",previous:{title:"Rancher Fleet",permalink:"/1.8/operator-manual/Rancher-Fleet"},next:{title:"Security Disclosure",permalink:"/1.8/security/disclosure"}},s={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comparison with Kubernetes Dynamic Admission Controller timeout",id:"comparison-with-kubernetes-dynamic-admission-controller-timeout",level:2},{value:"Kubewarden policy evaluation timeout is disabled",id:"kubewarden-policy-evaluation-timeout-is-disabled",level:3},{value:"Kubewarden policy evaluation timeout is enabled",id:"kubewarden-policy-evaluation-timeout-is-enabled",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"policy-evaluation-timeout-protection"},"Policy evaluation timeout protection"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This feature is available starting from Kubewarden v1.5.0.")),(0,o.kt)("p",null,"Policy evaluation timeout protection is a security feature of Policy Server.\nIt's purpose is to limit the amount of time a request evaluation can take."),(0,o.kt)("p",null,"This feature is enabled by default from Kubewarden v1.5.0."),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"Kubewarden policies can be written using both traditional programming languages\n(like ",(0,o.kt)("a",{parentName:"p",href:"/1.8/writing-policies/go/intro-go"},"Go"),",\n",(0,o.kt)("a",{parentName:"p",href:"/1.8/writing-policies/rust/intro-rust"},"Rust")," and\n",(0,o.kt)("a",{parentName:"p",href:"/1.8/writing-policies/"},"others"),"\n) or using the special query language ",(0,o.kt)("a",{parentName:"p",href:"/1.8/writing-policies/rego/intro-rego"},"Rego"),".\nWhile both approaches have their pros and cons, the goal of Kubewarden is to allow the policy\nauthors to pick the best tool to do their job."),(0,o.kt)("p",null,"When using a traditional programming language (or, to be\nmore correct, a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Turing_completeness"},"Turing-complete"),"\nlanguage), it is possible to introduce mistakes like\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Infinite_loop"},"infinite loops"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deadlock"},"deadlocks")," or code that runs slowly\nbecause it lacks optimizations or simply because it performs computationally\nintense operations."),(0,o.kt)("p",null,"The policy evaluation timeout protection feature terminates the evaluation of\na request after a certain time. This ensures Policy Server always has compute\nresources available to process incoming requests."),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"Currently, policy evaluation timeout protection is capable of interrupting\nthe majority of long running evaluations.\nThere are however certain edge cases that are not yet handled. This includes\ninvoking a ",(0,o.kt)("inlineCode",{parentName:"p"},"sleep")," instruction from within a policy and deadlocks."),(0,o.kt)("p",null,"These scenarios are going to be handled by a future release of Policy Server."),(0,o.kt)("p",null,"Finally, the policy evaluation timeout affects all the policies hosted by a\nPolicy Server instance. Currently, there's no way to tune policy evaluation timeout\non a per-policy basis."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Policy evaluation timeout is a configuration option of Policy Server which is\nenabled by default.\nBy default, a request evaluation is interrupted after 2 seconds."),(0,o.kt)("p",null,"This behavior can be tuned by using these environment variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"KUBEWARDEN_DISABLE_TIMEOUT_PROTECTION"),": this disables policy evaluation entirely.\nThe value of the environment variable is not relevant, any value will lead to the\nfeature being turned off."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"KUBEWARDEN_POLICY_TIMEOUT"),": this allows to set a different timeout value. The\nvalue is expressed in seconds and has a default value of ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),".")),(0,o.kt)("p",null,"When using the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.crds.dev/github.com/kubewarden/kubewarden-controller/policies.kubewarden.io/PolicyServer/v1@v1.4.2"},(0,o.kt)("inlineCode",{parentName:"a"},"PolicyServer")),"\nKubernetes Custom Resource Definition, these environment variables can be set in\nthis way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# A Policy Server that has policy evaluation timeout disabled\napiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: no-policy-timeout\nspec:\n  env:\n  - name: KUBEWARDEN_DISABLE_TIMEOUT_PROTECTION\n    value: "true"\n---\n# A Policy Server that has policy evaluation timeout enabled,\n# with a 3 seconds timeout value\napiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: custom-policy-timeout\nspec:\n  env:\n  - name: KUBEWARDEN_POLICY_TIMEOUT\n    value: "3"\n')),(0,o.kt)("h2",{id:"comparison-with-kubernetes-dynamic-admission-controller-timeout"},"Comparison with Kubernetes Dynamic Admission Controller timeout"),(0,o.kt)("p",null,"Kubewarden is a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook"},"webook")," implementation of  the",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"}," Kubernetes Dynamic Admission Controller"),"."),(0,o.kt)("p",null,'Under the hood, the Kubernetes API server makes an HTTP request against  Kubewarden\'s Policy Server\ndescribing an event that is about to happen. After the HTTP request is made,\nKubernetes API Server waits for an answer to be provided. However, Kubernetes\nAPI server will not wait forever, after a certain amount of time it will\nconsider the request to be "timed-out".'),(0,o.kt)("p",null,"Quoting the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#timeouts"},"official Kubernetes documentation"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default timeout for a webhook call is 10 seconds, You can set the timeout and\nit is encouraged to use a short timeout for webhooks.\nIf the webhook call times out, the request is handled according to the\nwebhook's failure policy.\nThat means that, regardless of the policy evaluation timeout feature, each\nKubernetes admission request is subject to a timeout.")),(0,o.kt)("p",null,"Every Kubewarden Policy can set its own timeout value via the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeoutSeconds"),"\nattribute of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AdmissionPolicy")," custom resources.\nBy default the timeout value is 10 seconds."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All the Kubernetes admission requests made against a Policy Server are subject\nto two different timeouts:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The Kubernetes API server timeout value. Set to 10 seconds by default, tunable\non a per-policy basis via a dedicated attribute on the Kubewarden Custom Resources."),(0,o.kt)("li",{parentName:"ul"},"The Policy Server policy evaluation timeout"))),(0,o.kt)("p",null,"Let's go through the following scenarios to better understand the differences\nbetween Kubernetes' Webhook timeout and Kubewarden's policy evaluation timeout."),(0,o.kt)("h3",{id:"kubewarden-policy-evaluation-timeout-is-disabled"},"Kubewarden policy evaluation timeout is disabled"),(0,o.kt)("p",null,"Let's assume we have a Policy Server that has the policy evaluation timeout\nfeature disabled. This server is hosting a policy that is affected by a bug\nwhich causes it to enter an infinite loop during evaluation."),(0,o.kt)("p",null,"Kubernetes API server sends an admission request to be evaluated by this\nbugged policy. As a result, the policy evaluation will enter an infinite loop.\nIn the meantime the Kubernetes API server will be waiting for a response."),(0,o.kt)("p",null,"After 10 seconds Kubernetes' webhoook timeout will take place, the request\nwill be handled according to the webhook's failure policy."),(0,o.kt)("p",null,"Unfortunately, the Policy Server will be left with some computation resources stuck\ninside of this infinite loop. Over time, with more admission requests\ntriggering the bugged policy, the Policy Server will run out of computation resources\nand will be unable to respond to the Kubernetes API server. This is actually a\nDenial Of Service (DOS) attack against the Policy Server."),(0,o.kt)("h3",{id:"kubewarden-policy-evaluation-timeout-is-enabled"},"Kubewarden policy evaluation timeout is enabled"),(0,o.kt)("p",null,"Let's assume a scenario where the same Policy Server now has the policy evaluation timeout\nfeature enabled, and the policy evaluation timeout is set to be 2 seconds.\nKubernetes API server sends an admission request to be evaluated by this\nbugged policy. As a result, the policy evaluation will enter an infinite loop.\nIn the meantime the Kubernetes API server will be waiting for a response."),(0,o.kt)("p",null,"After two seconds, Kubewarden's policy evaluation timeout feature will interrupt\nthe policy evaluation and will produce a rejection response.\nThe response will contain a message explaining that the rejection\nhappened because the policy evaluation didn't complete in a timely manner."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Setting Kubewarden's policy evaluation timeout to a value higher than the\nKubernetes' webhook timeout is not a good choice."),(0,o.kt)("p",{parentName:"admonition"},"While the policy evaluation will still be interrupted, reducing the chances\nof a DOS attack, the final rejection response will not be produced by the Policy\nServer. As a matter of fact, the rejection will be produced by the Kubernetes\nAPI server by the webhook timeout."),(0,o.kt)("p",{parentName:"admonition"},"As a result, it will be harder for end users, and Kubernetes operators, to\ndetect these slow/bugged policies. The only proof of the policy evaluation\ninterruption will be inside of the Policy Server logs and trace events.")))}d.isMDXComponent=!0}}]);