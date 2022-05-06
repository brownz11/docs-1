"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7239],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={sidebar_label:"Quick Start",title:""},s="Quick Start",p={unversionedId:"quick-start",id:"quick-start",title:"",description:"The Kubewarden stack is made of the following components:",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/quick-start.md",tags:[],version:"current",lastUpdatedAt:1651836741,formattedLastUpdatedAt:"5/6/2022",frontMatter:{sidebar_label:"Quick Start",title:""},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Common Tasks",permalink:"/docs/tasks"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Main components",id:"main-components",level:2},{value:"PolicyServer",id:"policyserver",level:3},{value:"ClusterAdmissionPolicy",id:"clusteradmissionpolicy",level:3},{value:"AdmissionPolicy",id:"admissionpolicy",level:3},{value:"Example: Enforce your first policy",id:"example-enforce-your-first-policy",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"Wrapping up",id:"wrapping-up",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"The Kubewarden stack is made of the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An arbitrary number of ",(0,i.kt)("inlineCode",{parentName:"li"},"ClusterAdmissionPolicy")," resources: this is how policies are defined inside Kubernetes"),(0,i.kt)("li",{parentName:"ul"},"An arbitrary number of ",(0,i.kt)("inlineCode",{parentName:"li"},"PolicyServer")," resources: this component represents a Deployment of a Kubewarden ",(0,i.kt)("inlineCode",{parentName:"li"},"PolicyServer"),". The policies defined by the administrators are loaded and evaluated by the Kubewarden ",(0,i.kt)("inlineCode",{parentName:"li"},"PolicyServer")),(0,i.kt)("li",{parentName:"ul"},"A Deployment of ",(0,i.kt)("inlineCode",{parentName:"li"},"kubewarden-controller"),": this is the controller that monitors the ",(0,i.kt)("inlineCode",{parentName:"li"},"ClusterAdmissionPolicy")," resources and interacts with the Kubewarden ",(0,i.kt)("inlineCode",{parentName:"li"},"PolicyServer")," components")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"PREREQUISITES:")),(0,i.kt)("p",{parentName:"blockquote"},"Currently, the chart depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager"),". Make sure you have ",(0,i.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/"},(0,i.kt)("inlineCode",{parentName:"a"},"cert-manager")," installed")," ",(0,i.kt)("em",{parentName:"p"},"before")," installing the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," chart."),(0,i.kt)("p",{parentName:"blockquote"},"You can install the latest version of ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," by running the following commands:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply -f https://github.com/jetstack/cert-manager/releases/latest/download/cert-manager.yaml\n")),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl wait --for=condition=Available deployment --timeout=2m -n cert-manager --all\n"))),(0,i.kt)("p",null,"The Kubewarden stack can be deployed using ",(0,i.kt)("inlineCode",{parentName:"p"},"helm")," charts as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add kubewarden https://charts.kubewarden.io\n\nhelm install --wait -n kubewarden --create-namespace kubewarden-crds kubewarden/kubewarden-crds\n\nhelm install --wait -n kubewarden kubewarden-controller kubewarden/kubewarden-controller\n\nhelm install --wait -n kubewarden kubewarden-defaults kubewarden/kubewarden-defaults\n")),(0,i.kt)("p",null,"The following charts should be installed inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden")," namespace in your Kubernetes cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-crds"),", which will register the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServer")," Custom Resource Definitions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-controller"),", which will install the Kubewarden controller")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-defaults"),", which will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServer")," resource named ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),". It can also installs a set of\nrecommended policies to secure your cluster by enforcing some well known best practices."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"WARNING:"),"\nSince ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kubewarden-controller/releases/tag/v0.4.0"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.4.0")),", a PolicyServer resource named default will not be created using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," chart.\nThere is another Helm chart called ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-defaults"),", which now installs\nthe default policy server."),(0,i.kt)("p",{parentName:"blockquote"},"This also means that if you are not using the latest version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," and are trying to upgrade,\nyour default policy server will not be upgraded or deleted. As a result, you might run into\nissues if you try to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-defaults")," with some conflicting information, for example the same policy server name.\nTherefore, to be able to take advantage of future upgrades in the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-defaults")," helm chart you need to remove the\nexisting PolicyServer resource created by the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," before installing the new chart. With this step, you ensure that you are able to update your policy server using Helm upgrades without running into\nresource conflicts. It worth mentioning that when you remove the PolicyServer, all the policies bounded to it will be removed as well.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"QUICK NOTE:")),(0,i.kt)("p",{parentName:"blockquote"},"The default configuration values should be good enough for the majority of deployments. All options are documented ",(0,i.kt)("a",{parentName:"p",href:"https://charts.kubewarden.io/#configuration"},"here"),".")),(0,i.kt)("h2",{id:"main-components"},"Main components"),(0,i.kt)("p",null,"Kubewarden has three main components which you will interact with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The PolicyServer"),(0,i.kt)("li",{parentName:"ul"},"The ClusterAdmissionPolicy"),(0,i.kt)("li",{parentName:"ul"},"The AdmissionPolicy")),(0,i.kt)("h3",{id:"policyserver"},"PolicyServer"),(0,i.kt)("p",null,"A Kubewarden ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServer")," is completely managed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," and multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServers")," can be deployed in the same Kubernetes cluster."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServer")," is the component which executes the Kubewarden policies when requests arrive and validates them."),(0,i.kt)("p",null,"Default ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServer")," configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policies.kubewarden.io/v1alpha2\nkind: PolicyServer\nmetadata:\n  name: reserved-instance-for-tenant-a\nspec:\n  image: ghcr.io/kubewarden/policy-server:v1.0.0\n  replicas: 2\n  serviceAccountName: sa\n  env:\n  - name: KUBEWARDEN_LOG_LEVEL\n    value: debug\n")),(0,i.kt)("p",null,"Overview of the attributes of the ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServer")," resource:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"image")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the container image")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"replicas")),(0,i.kt)("td",{parentName:"tr",align:null},"The number of desired instances")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"serviceAccountName")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the ",(0,i.kt)("inlineCode",{parentName:"td"},"ServiceAccount")," to use for the ",(0,i.kt)("inlineCode",{parentName:"td"},"PolicyServer")," deployment. If no value is provided, the default ",(0,i.kt)("inlineCode",{parentName:"td"},"ServiceAccount")," from the namespace, where the ",(0,i.kt)("inlineCode",{parentName:"td"},"kubewarden-controller")," is installed, will be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env")),(0,i.kt)("td",{parentName:"tr",align:null},"The list of environment variables")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"annotations")),(0,i.kt)("td",{parentName:"tr",align:null},"The list of annotations")))),(0,i.kt)("p",null,"Changing any of these attributes will lead to a rollout of the ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServer")," Deployment with the new configuration."),(0,i.kt)("h3",{id:"clusteradmissionpolicy"},"ClusterAdmissionPolicy"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," resource is the core of the Kubewarden stack. This resource defines how policies evaluate requests."),(0,i.kt)("p",null,"Enforcing policies is the most common operation which a Kubernetes administrator will perform. You can declare as many policies as you want, and each policy will target one or more specific Kubernetes resources (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"pods"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom Resource"),"). You will also specify the type of operation(s) that will be applied for the targeted resource(s). The operations available are ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CONNECT"),"."),(0,i.kt)("p",null,"Default ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-capabilities\nspec:\n  policyServer: reserved-instance-for-tenant-a\n  module: registry://ghcr.io/kubewarden/policies/psp-capabilities:v0.1.3\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    allowed_capabilities:\n    - CHOWN\n    required_drop_capabilities:\n    - NET_ADMIN\n')),(0,i.kt)("p",null,"Overview of the attributes of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," resource:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"policy-server")),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies an existing ",(0,i.kt)("inlineCode",{parentName:"td"},"PolicyServer")," object. The policy will be served only by this ",(0,i.kt)("inlineCode",{parentName:"td"},"PolicyServer")," instance. A ",(0,i.kt)("inlineCode",{parentName:"td"},"ClusterAdmissionPolicy")," that doesn't have an explicit ",(0,i.kt)("inlineCode",{parentName:"td"},"PolicyServer"),", will be served by the one named ",(0,i.kt)("inlineCode",{parentName:"td"},"default"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"module")),(0,i.kt)("td",{parentName:"tr",align:null},"The location of the Kubewarden policy. The following schemes are allowed:")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"- ",(0,i.kt)("inlineCode",{parentName:"td"},"registry"),": The policy is downloaded from an ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/opencontainers/artifacts"},"OCI artifacts")," compliant container registry. Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"registry://<OCI registry/policy URL>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"- ",(0,i.kt)("inlineCode",{parentName:"td"},"http"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"https"),": The policy is downloaded from a regular HTTP(s) server. Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"https://<website/policy URL>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"- ",(0,i.kt)("inlineCode",{parentName:"td"},"file"),": The policy is loaded from a file in the computer filesystem. Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"file:///<policy WASM binary full path>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"resources")),(0,i.kt)("td",{parentName:"tr",align:null},"The Kubernetes resources evaluated by the policy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"operations")),(0,i.kt)("td",{parentName:"tr",align:null},"What operations for the previously given types should be forwarded to this admission policy by the API server for evaluation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mutating")),(0,i.kt)("td",{parentName:"tr",align:null},"A boolean value that must be set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," for policies that can mutate incoming requests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"settings")),(0,i.kt)("td",{parentName:"tr",align:null},"A free-form object that contains the policy configuration values")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"failurePolicy")),(0,i.kt)("td",{parentName:"tr",align:null},"The action to take if the request evaluated by a policy results in an error. The following options are allowed:")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"- ",(0,i.kt)("inlineCode",{parentName:"td"},"Ignore"),": an error calling the webhook is ignored and the API request is allowed to continue")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"- ",(0,i.kt)("inlineCode",{parentName:"td"},"Fail"),": an error calling the webhook causes the admission to fail and the API request to be rejected")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," The  ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," resources are registered with a ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," webhook ",(0,i.kt)("inlineCode",{parentName:"p"},"scope"),", which means that registered webhooks will forward all requests matching the given ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"operations")," -- either namespaced (in any namespace), or cluster-wide resources.")),(0,i.kt)("h3",{id:"admissionpolicy"},"AdmissionPolicy"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AdmissionPolicy")," is a namespace-wide resource. The policy will process only the requests that are targeting the Namespace where the ",(0,i.kt)("inlineCode",{parentName:"p"},"AdmissionPolicy")," is defined. Other than that, there are no functional differences between the ",(0,i.kt)("inlineCode",{parentName:"p"},"AdmissionPolicy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," resources."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:"),"  ",(0,i.kt)("inlineCode",{parentName:"p"},"AdmissionPolicy")," requires kubernetes 1.21.0 or above. This is because we are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes.io/metadata.name")," label, which was introduced in kubernetes 1.21.0")),(0,i.kt)("p",null,"The complete documentation of these Custom Resources can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kubewarden-controller/blob/main/docs/crds/README.asciidoc"},"here")," or on ",(0,i.kt)("a",{parentName:"p",href:"https://doc.crds.dev/github.com/kubewarden/kubewarden-controller"},"docs.crds.dev"),"."),(0,i.kt)("h2",{id:"example-enforce-your-first-policy"},"Example: Enforce your first policy"),(0,i.kt)("p",null,"For this first example, we will use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/pod-privileged-policy"},(0,i.kt)("inlineCode",{parentName:"a"},"pod-privileged")," policy"),".\nOur goal will be to prevent the creation of privileged containers inside our Kubernetes cluster by enforcing this policy."),(0,i.kt)("p",null,"Let's define a ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," for that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: privileged-pods\nspec:\n  module: registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: false\nEOF\n')),(0,i.kt)("p",null,"This will produce the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"clusteradmissionpolicy.policies.kubewarden.io/privileged-pods created\n")),(0,i.kt)("p",null,"When a  ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," is defined, the status is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"pending"),", and it will force a rollout of the targeted ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServer"),". In our example, it's the ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServer")," named ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),". You can monitor the rollout by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get clusteradmissionpolicy.policies.kubewarden.io/privileged-pods\n")),(0,i.kt)("p",null,"You should see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"NAME              POLICY SERVER   MUTATING   STATUS\nprivileged-pods   default         false      pending\n")),(0,i.kt)("p",null,"Once the new policy is ready to be served, the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," will register a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#validatingwebhookconfiguration-v1-admissionregistration-k8s-io"},"ValidatingWebhookConfiguration")," object."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," status will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," once the Deployment is done for every ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServer")," instance. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration")," can be shown with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get validatingwebhookconfigurations.admissionregistration.k8s.io -l kubewarden\n")),(0,i.kt)("p",null,"You should see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"NAME              WEBHOOKS   AGE\nprivileged-pods   1          9s\n")),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," is active and the ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration")," is registered, you can test the policy."),(0,i.kt)("p",null,"First, let's create a Pod with a Container ",(0,i.kt)("em",{parentName:"p"},"not")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"privileged")," mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: unprivileged-pod\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\nEOF\n")),(0,i.kt)("p",null,"This will produce the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pod/unprivileged-pod created\n")),(0,i.kt)("p",null,"The Pod is successfully created."),(0,i.kt)("p",null,"Now, let's create a Pod with at least one Container ",(0,i.kt)("inlineCode",{parentName:"p"},"privileged")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: privileged-pod\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n      securityContext:\n          privileged: true\nEOF\n")),(0,i.kt)("p",null,"The creation of the Pod has been denied by the policy and you should see the following message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'Error from server: error when creating "STDIN": admission webhook "privileged-pods.kubewarden.admission" denied the request: User \'minikube-user\' cannot schedule privileged containers\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," both examples didn't define a ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", which means the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," namespace was the target. However, as you could see in the second example, the policy is still applied. As stated above, this is due to the scope being cluster-wide and not targeting a specific namespace.")),(0,i.kt)("h2",{id:"uninstall"},"Uninstall"),(0,i.kt)("p",null,"You can remove the resources created by uninstalling the ",(0,i.kt)("inlineCode",{parentName:"p"},"helm")," charts as follow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall --namespace kubewarden kubewarden-defaults\n\nhelm uninstall --namespace kubewarden kubewarden-controller\n\nhelm uninstall --namespace kubewarden kubewarden-crds\n")),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"helm")," charts have been uninstalled, you can remove the Kubernetes namespace that was used to deploy the Kubewarden stack:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl delete namespace kubewarden\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," kubewarden contains a helm pre-delete hook that will remove all ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyServers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-controller"),".\nThen the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," will delete all resources, so it is important that ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," is running when helm uninstall is executed.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfigurations")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MutatingWebhookConfigurations")," created by kubewarden should be deleted, this can be checked with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl get validatingwebhookconfigurations.admissionregistration.k8s.io -l "kubewarden"\n\nkubectl get mutatingwebhookconfigurations.admissionregistration.k8s.io -l "kubewarden"\n')),(0,i.kt)("p",null,"If these resources are not automatically removed, you can remove them manually by using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'kubectl delete -l "kubewarden" validatingwebhookconfigurations.admissionregistration.k8s.io\n\nkubectl delete -l "kubewarden" mutatingwebhookconfigurations.admissionregistration.k8s.io\n')),(0,i.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,i.kt)("p",null,"As we have seen, ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," is the core resource that a cluster operator has to manage. The ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," module automatically takes care of the configuration for the rest of the resources needed to run the policies."),(0,i.kt)("p",null,"Now, you are ready to deploy Kubewarden! Have a look at the policies on ",(0,i.kt)("a",{parentName:"p",href:"https://hub.kubewarden.io"},"hub.kubewarden.io"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/topics/kubewarden-policy"},"on Github"),", or reuse existing Rego policies as shown in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing-policies/rego/intro-rego"},"following chapters!")))}m.isMDXComponent=!0}}]);