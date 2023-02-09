"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(3117),r=(n(7294),n(3905));const a={sidebar_label:"Verifying Kubewarden",title:""},o="Verifying Kubewarden",s={unversionedId:"security/verifying-kubewarden",id:"security/verifying-kubewarden",title:"",description:"Kubewarden artifacts are signed using Sigstore,",source:"@site/docs/security/verifying-kubewarden.md",sourceDirName:"security",slug:"/security/verifying-kubewarden",permalink:"/security/verifying-kubewarden",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/security/verifying-kubewarden.md",tags:[],version:"current",lastUpdatedAt:1675948821,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{sidebar_label:"Verifying Kubewarden",title:""},sidebar:"docs",previous:{title:"Publish to Artifact Hub",permalink:"/distributing-policies/publish-policy-to-artifact-hub"},next:{title:"Mutating Policies",permalink:"/tasksDir/mutating-policies"}},l={},c=[{value:"Helm charts",id:"helm-charts",level:2},{value:"Container images &amp; policies referenced in the charts",id:"container-images--policies-referenced-in-the-charts",level:3},{value:"Obtaining the lists",id:"obtaining-the-lists",level:4},{value:"Verifying the lists",id:"verifying-the-lists",level:3},{value:"kwctl",id:"kwctl",level:2},{value:"Policies",id:"policies",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"verifying-kubewarden"},"Verifying Kubewarden"),(0,r.kt)("p",null,"Kubewarden artifacts are signed using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sigstore.dev"},"Sigstore"),",\nwith the keyless workflow. This means that the signing certificate contains the\nfollowing info, where ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," matches any following characters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"issuer: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://token.actions.githubusercontent.com")),(0,r.kt)("li",{parentName:"ul"},"subject: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/kubewarden/*")),(0,r.kt)("li",{parentName:"ul"},'x509 certificate extension for GHA, "github_workflow_repository": ',(0,r.kt)("inlineCode",{parentName:"li"},"kubewarden/*"))),(0,r.kt)("h2",{id:"helm-charts"},"Helm charts"),(0,r.kt)("p",null,"You can find our Helm charts in our ",(0,r.kt)("inlineCode",{parentName:"p"},"https://")," traditional Helm repository under\n",(0,r.kt)("a",{parentName:"p",href:"https://charts.kubewarden.io"},"https://charts.kubewarden.io"),"."),(0,r.kt)("p",null,"The same Helm charts are signed via Sigstore's keyless signing, and pushed to an\nOCI repository that can hold both the Helm chart and its signature as OCI\nartifacts."),(0,r.kt)("p",null,"Since Helm 3.8.0, Helm has support for OCI registries, but because of\nconstraints in them, they can't be searched via ",(0,r.kt)("inlineCode",{parentName:"p"},"helm"),". You can find the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/kubewarden/packages?tab=packages&q=charts"},"list of charts in GitHub Container Registry"),"."),(0,r.kt)("p",null,"To verify a Helm chart, you need ",(0,r.kt)("inlineCode",{parentName:"p"},"cosign")," installed. Then execute the following\ncommand, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"COSIGN_EXPERIMENTAL=1 cosign verify ghrc.io/kubewarden/charts/kubewarden-controller:0.4.6 | jq\n\nVerification for ghcr.io/kubewarden/charts/kubewarden-controller:0.4.6 --\nThe following checks were performed on each of these signatures:\n  - The cosign claims were validated\n  - Existence of the claims in the transparency log was verified offline\n  - Any certificates were verified against the Fulcio roots.\n\n  <snipped json>\n")),(0,r.kt)("p",null,"You may either verify manually or with Sigstore tools that the cert in the\nreturned json contains the correct issuer, subject, and\n",(0,r.kt)("inlineCode",{parentName:"p"},"github_workflow_repository")," extensions."),(0,r.kt)("h3",{id:"container-images--policies-referenced-in-the-charts"},"Container images & policies referenced in the charts"),(0,r.kt)("h4",{id:"obtaining-the-lists"},"Obtaining the lists"),(0,r.kt)("p",null,"Both the production images used in our Helm charts and our development images\n(tagged ",(0,r.kt)("inlineCode",{parentName:"p"},":latest"),") are signed with Sigstore's keyless signing."),(0,r.kt)("p",null,"Kubewarden charts ship ",(0,r.kt)("inlineCode",{parentName:"p"},"imagelist.txt")," and (",(0,r.kt)("inlineCode",{parentName:"p"},"policylist.txt")," when relevant) inside\nof the chart. Hence, if you already verified the chart, you can use those lists\nto verify the consumed container images and policies."),(0,r.kt)("p",null,"Kubewarden also follows the usual practices with regards to Helm charts. Hence, one\ncan also find all the images in the Helm charts with a plugin such as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cvila84/helm-image"},"helm-image"),", or with the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/usr/bin/env bash\nhelm pull --untar kubewarden/kubewarden-controller && \\\nhelm pull --untar kubewarden/kubewarden-defaults && \\\n{ helm template ./kubewarden-controller; helm template ./kubewarden-defaults } \\\n    | yq '..|.image? | select(.)' \\\n    | sort -u | sed 's/\"//g'\n")),(0,r.kt)("p",null,"which gives us:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ghcr.io/kubewarden/kubewarden-controller:v0.5.5\nghcr.io/kubewarden/policy-server:v0.3.1\nghcr.io/kubewarden/kubectl:v1.21.4\n")),(0,r.kt)("h3",{id:"verifying-the-lists"},"Verifying the lists"),(0,r.kt)("p",null,"Now, for each image in that list you can verify their Sigstore signatures. E.g:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"COSIGN_EXPERIMENTAL=1 cosign verify ghcr.io/kubewarden/policy-server:v0.3.1 | jq\nThe following checks were performed on each of these signatures:\n  - The cosign claims were validated\n  - Existence of the claims in the transparency log was verified offline\n  - Any certificates were verified against the Fulcio roots.\n\n  <snipped json>\n")),(0,r.kt)("p",null,"You can then verify either manually or with Sigstore tools that the cert in the\nreturned json contains the correct issuer, subject, and\n",(0,r.kt)("inlineCode",{parentName:"p"},"github_workflow_repository")," extensions."),(0,r.kt)("h2",{id:"kwctl"},"kwctl"),(0,r.kt)("p",null,"kwctl binaries are signed using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sigstore.dev/cosign/working_with_blobs/#signing-blobs-as-files"},"Sigstore's blog signing"),". "),(0,r.kt)("p",null,"When you download a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kwctl/releases/"},"kwctl\nrelease")," each zip file contains\ntwo files that can be used for verification: ",(0,r.kt)("inlineCode",{parentName:"p"},"kwctl.sig")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kwctl.pem"),"."),(0,r.kt)("p",null,"In order to verify kwctl you need cosign installed, and then execute the\nfollowing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"COSIGN_EXPERIMENTAL=1 cosign verify-blob  --signature kwctl-linux-x86_64.sig --cert kwctl-linux-x86_64.pem kwctl-linux-x86_64\n")),(0,r.kt)("p",null,"The output should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tlog entry verified with uuid: 7e5a4fac8f45cdddeafd6901af566b9576be307a06caa3fbc45f91da102214e0 index: 2435066\nVerified OK\n")),(0,r.kt)("p",null,"You can inspect the cert signature yourself to see that indeed was authenticated\nvia GitHub OIDC, and performed in our GitHub Actions workflows."),(0,r.kt)("h2",{id:"policies"},"Policies"),(0,r.kt)("p",null,"Policies maintained by the Kubewarden team are also signed using the Sigstore project. Similar to\nusual container images, one can verify them using ",(0,r.kt)("inlineCode",{parentName:"p"},"cosign"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"COSIGN_EXPERIMENTAL=1 cosign verify ghcr.io/kubewarden/policies/verify-image-signatures:v0.2.0\n\nVerification for ghcr.io/kubewarden/policies/verify-image-signatures:v0.2.0 --\nThe following checks were performed on each of these signatures:\n  - The cosign claims were validated\n  - Existence of the claims in the transparency log was verified offline\n  - Any certificates were verified against the Fulcio roots.\n\n  <snipped json>\n")))}d.isMDXComponent=!0}}]);