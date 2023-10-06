"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Custom Certificate Authorities",title:""},o="Custom Certificate Authorities",s={unversionedId:"distributing-policies/custom-certificate-authorities",id:"distributing-policies/custom-certificate-authorities",title:"",description:"With both of kwctl and policy-server",source:"@site/docs/distributing-policies/custom-certificate-authorities.md",sourceDirName:"distributing-policies",slug:"/distributing-policies/custom-certificate-authorities",permalink:"/distributing-policies/custom-certificate-authorities",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/distributing-policies/custom-certificate-authorities.md",tags:[],version:"current",lastUpdatedAt:1696590150,formattedLastUpdatedAt:"Oct 6, 2023",frontMatter:{sidebar_label:"Custom Certificate Authorities",title:""},sidebar:"docs",previous:{title:"Secure supply chain",permalink:"/distributing-policies/secure-supply-chain"},next:{title:"Operator Manual",permalink:"/operator-manual/intro"}},l={},c=[{value:"The <code>sources.yaml</code> file",id:"the-sourcesyaml-file",level:2},{value:"Insecure sources",id:"insecure-sources",level:3},{value:"Source authorities",id:"source-authorities",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-certificate-authorities"},"Custom Certificate Authorities"),(0,r.kt)("p",null,"With both of ",(0,r.kt)("inlineCode",{parentName:"p"},"kwctl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),"\nyou can pull policies from Open Container Initiative (OCI) registries and HTTP servers.\nYou can only push policies to OCI registries.\nBy default, HTTPS is used with host TLS verification for this."),(0,r.kt)("p",null,"The system's certificate authority (CA) store is used to\nvalidate the trusted chain of certificates from the OCI registry.\nIn a standard Kubewarden installation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," uses the\nCA store shipped with its Linux container.\nOn the client side, ",(0,r.kt)("inlineCode",{parentName:"p"},"kwctl")," uses your operating system CA store."),(0,r.kt)("p",null,"If you are using the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kubewarden-controller"},"Kubewarden Controller"),",\nyou can configure the PolicyServer via its\n",(0,r.kt)("a",{parentName:"p",href:"/operator-manual/policy-servers/custom-cas"},(0,r.kt)("inlineCode",{parentName:"a"},"spec")," fields"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The default behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"kwctl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," enforces HTTPS with trusted certificates matching the system CA store.\nYou can interact with registries using untrusted certificates or even without TLS, by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"insecure_sources")," setting.\nClearly, it's not for production environments.")),(0,r.kt)("h2",{id:"the-sourcesyaml-file"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"sources.yaml")," file"),(0,r.kt)("p",null,"You can tune the push-pull behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"kwctl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"sources.yaml")," file."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--sources-path")," argument to both tools specifies the file."),(0,r.kt)("p",null,"The command ",(0,r.kt)("inlineCode",{parentName:"p"},"kwctl")," tries to load the ",(0,r.kt)("inlineCode",{parentName:"p"},"sources.yaml")," file from these folders if the ",(0,r.kt)("inlineCode",{parentName:"p"},"--sources-path")," argument is omitted:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.config/kubewarden/sources.yaml")),(0,r.kt)("li",{parentName:"ul"},"Mac: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Application Support/io.kubewarden.kubewarden/sources.yaml")),(0,r.kt)("li",{parentName:"ul"},"Windows: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME\\AppData\\Roaming\\kubewarden\\config\\sources.yaml"))),(0,r.kt)("p",null,"Its structure is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'insecure_sources:\n  - "registry-dev.example.com"\n  - "registry-dev2.example.com:5500"\nsource_authorities:\n  "registry-pre.example.com":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-1.pem\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-2.der\n  "registry-pre2.example.com:5500":\n    - type: Data\n      data: |\n            -----BEGIN CERTIFICATE-----\n            ca-pre2 PEM cert\n            -----END CERTIFICATE-----\n')),(0,r.kt)("p",null,"This file is in either YAML or JSON format.\nAll keys are optional, so the following is a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"sources.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'insecure_sources: ["dev.registry.example.com"]\n')),(0,r.kt)("p",null,"As is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "source_authorities": {\n        "host.k3d.internal:5000": [\n            {"type": "Data","data":"pem cert 1"},\n            {"type": "Data","data":"pem cert 2"}\n        ]\n    }\n}\n')),(0,r.kt)("h3",{id:"insecure-sources"},"Insecure sources"),(0,r.kt)("p",null,"Hosts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"insecure_sources")," section behave differently to those not listed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Hosts not listed, try:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"to connect using HTTPS, verifying the server identity")),(0,r.kt)("p",{parentName:"li"},"If the connection fails, then the operation stops.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Hosts listed in ",(0,r.kt)("inlineCode",{parentName:"p"},"insecure_sources"),", try in order:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"to connect using HTTPS verifying the server identity"),(0,r.kt)("li",{parentName:"ul"},"to connect using HTTPS, skipping host verification"),(0,r.kt)("li",{parentName:"ul"},"to connect using HTTP")),(0,r.kt)("p",{parentName:"li"},"The operation stops if all fail."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It's usually fine to use ",(0,r.kt)("inlineCode",{parentName:"p"},"insecure_sources")," when using local registries or\nHTTP servers for development.\nIt avoids the burden of managing certificates.\nClearly, it's not for production use.")),(0,r.kt)("h3",{id:"source-authorities"},"Source authorities"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"source_authorities")," section contains URIs and CA certificates.\nIt forms a certificate chain for that URI.\nIt's used to verify the identity of OCI registries and HTTPS servers."),(0,r.kt)("p",null,"These certificates are encoded in either PEM or DER format.\nYou specify DER format certificates as path to a file containing the certificate.\nIn PEM format you specify either a path to the certificate file, or a string with the actual certificate.\nYou specify both with a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source_authorities:\n  "registry-pre.example.com":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-1.pem\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-2.der\n    - type: Data\n      data: |\n            -----BEGIN CERTIFICATE-----\n            A string with the ca-pre1-3 PEM cert\n            -----END CERTIFICATE-----\n  "registry-pre2.example.com:5500":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre2-1.der\n')))}m.isMDXComponent=!0}}]);