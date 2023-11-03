"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1745],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9671:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(87462),i=(t(67294),t(3905));const o={sidebar_label:"Using private registries",title:""},a="Configuring PolicyServers to use private registries",s={unversionedId:"operator-manual/policy-servers/private-registry",id:"version-1.8/operator-manual/policy-servers/private-registry",title:"",description:"It is possible to configure PolicyServers to use credentials of private OCI",source:"@site/versioned_docs/version-1.8/operator-manual/policy-servers/02-private-registry.md",sourceDirName:"operator-manual/policy-servers",slug:"/operator-manual/policy-servers/private-registry",permalink:"/1.8/operator-manual/policy-servers/private-registry",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/operator-manual/policy-servers/02-private-registry.md",tags:[],version:"1.8",lastUpdatedAt:1699017983,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Using private registries",title:""},sidebar:"docs",previous:{title:"Using Custom CAs",permalink:"/1.8/operator-manual/policy-servers/custom-cas"},next:{title:"Open Telemetry Quickstart",permalink:"/1.8/operator-manual/telemetry/opentelemetry/quickstart"}},c={},l=[{value:"Creating the Secret",id:"creating-the-secret",level:2},{value:"Consuming the Secret in PolicyServers",id:"consuming-the-secret-in-policyservers",level:2},{value:"Consuming the Secret in Helm charts",id:"consuming-the-secret-in-helm-charts",level:2}],p={toc:l},u="wrapper";function d(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-policyservers-to-use-private-registries"},"Configuring PolicyServers to use private registries"),(0,i.kt)("p",null,"It is possible to configure PolicyServers to use credentials of private OCI\nregistries. This will allow those PolicyServers to download policies from\npublic and private registries."),(0,i.kt)("p",null,"Once a PolicyServer is configured to access private registries, policies running\non it and using the defined SDKs and lower level host capabilities APIs will be\nable to access private registries too. This is because PolicyServers expose that\nfunctionality through the defined policy SDKs and lower level host capability\nAPI. This is the case, for example, in policies that verify signatures of\ncontainer images."),(0,i.kt)("p",null,"To achieve this, we will create a Secret containing the private registry\ncredentials, and configure our PolicyServers' resources, and/or our Helm chart\nto use it."),(0,i.kt)("h2",{id:"creating-the-secret"},"Creating the Secret"),(0,i.kt)("p",null,"PolicyServers support the usual\n",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#docker-config-secrets"},"Docker config Secrets"),"\n, either of type ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes.io/dockercfg")," or type ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes.io/dockerconfigjson"),".\nThese secrets can be created with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl create secret docker-registry"),"."),(0,i.kt)("p",null,"For configuring your PolicyServer instance, store the credentials\nused to access the registry in a ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-registry")," Secret. The secret should be\ncreated in the same namespace where you run your PolicyServer. This can be done\nwith the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl --namespace kubewarden create secret docker-registry secret-ghcr-docker \\\n  --docker-username=myuser \\\n  --docker-password=mypass123 \\\n  --docker-server=myregistry.io\n")),(0,i.kt)("p",null,"For more information on how to create the Docker Secrets, see the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#docker-config-secrets"},"Kubernetes documentation"),"."),(0,i.kt)("h2",{id:"consuming-the-secret-in-policyservers"},"Consuming the Secret in PolicyServers"),(0,i.kt)("p",null,"Once you have the Secret created, it is necessary to configure the PolicyServer\ninstance by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.imagePullSecret")," field with the name of the Secret that\ncontains the credentials:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# Example of a PolicyServer using a private registry\napiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: default\nspec:\n  image: ghcr.io/kubewarden/policy-server:v1.1.1\n  serviceAccountName: policy-server\n  replicas: 1\n  annotations:\n  imagePullSecret: "secret-ghcr-docker"\n')),(0,i.kt)("h2",{id:"consuming-the-secret-in-helm-charts"},"Consuming the Secret in Helm charts"),(0,i.kt)("p",null,"When deployed from the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubewarden-defaults")," Helm chart, you can set the\n",(0,i.kt)("inlineCode",{parentName:"p"},"policyServer.imagePullSecret")," value with the Secret name. Thus,\nthe created default policy server will be able to download policies from your\nprivate registry as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# values file example\npolicyServer:\n  telemetry:\n    enabled: False\n  imagePullSecret: secret-ghcr-docker\n")))}d.isMDXComponent=!0}}]);