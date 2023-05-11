"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3385],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,d=h["".concat(c,".").concat(m)]||h[m]||p[m]||o;return r?i.createElement(d,n(n({ref:t},u),{},{components:r})):i.createElement(d,n({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var l=2;l<o;l++)n[l]=r[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(3117),a=(r(7294),r(3905));const o={sidebar_label:"OCI Registries Support",title:""},n="OCI Registries support",s={unversionedId:"distributing-policies/oci-registries-support",id:"distributing-policies/oci-registries-support",title:"",description:"This is not an exhaustive list. If a registry you know or use is working correctly",source:"@site/docs/distributing-policies/oci-registries-support.md",sourceDirName:"distributing-policies",slug:"/distributing-policies/oci-registries-support",permalink:"/distributing-policies/oci-registries-support",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/distributing-policies/oci-registries-support.md",tags:[],version:"current",lastUpdatedAt:1683803258,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{sidebar_label:"OCI Registries Support",title:""},sidebar:"docs",previous:{title:"Kubernetes Capabilities",permalink:"/writing-policies/spec/host-capabilities/kubernetes"},next:{title:"Threat Model",permalink:"/security/threat-model"}},c={},l=[{value:"Projects that implement OCI registries",id:"projects-that-implement-oci-registries",level:2},{value:"Hosted OCI registries",id:"hosted-oci-registries",level:2},{value:"Tools that work with OCI registries",id:"tools-that-work-with-oci-registries",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Docker Hub",id:"docker-hub",level:3},{value:"JFrog",id:"jfrog",level:3}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oci-registries-support"},"OCI Registries support"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is not an exhaustive list. If a registry you know or use is working correctly\nwith Kubewarden, or if any information described here is not accurate at this time, please open a\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/docs/edit/main/docs/distributing-policies/oci-registries-support.md"},"Pull Request against this documentation")," to fix it.")),(0,a.kt)("p",null,"Kubewarden policies are distributed as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencontainers/artifacts"},"OCI Artifacts"),"\nusing regular OCI Registries."),(0,a.kt)("p",null,"Policies are stored side by side with container images. They don't require any extra setup or\nmaintenance than regular container images do."),(0,a.kt)("h2",{id:"projects-that-implement-oci-registries"},"Projects that implement OCI registries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://goharbor.io/"},"Harbor"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/distribution/distribution"},"Distribution")," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/distribution/distribution/releases/tag/v2.7.0"},">= 2.7.0"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://access.redhat.com/products/red-hat-quay/"},"Quay"),": Supported, but ",(0,a.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_quay/3/html/use_red_hat_quay/oci-intro#other-oci-artifacts-with-quay"},"disabled by default in v3.6"),".")),(0,a.kt)("h2",{id:"hosted-oci-registries"},"Hosted OCI registries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/container-registry/"},"GitHub Container Registry"),".See ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://quay.io"},"Quay.io"),". See projects list above."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ecr/"},"Amazon ECR"),": See ",(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/containers/oci-artifact-support-in-amazon-ecr/"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/artifact-registry"},"Google Artifact Registry"),". See ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/anthos-config-management/docs/how-to/sync-oci-artifacts-from-artifact-registry"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/products/container-registry/"},"Azure Container Registry"),". See ",(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/container-registry/container-registry-oci-artifacts"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://bundle.bar"},"Bundle Bar"),". See ",(0,a.kt)("a",{parentName:"li",href:"https://bundle.bar/docs/#open-container-initiative-oci"},"here"),".")),(0,a.kt)("h2",{id:"tools-that-work-with-oci-registries"},"Tools that work with OCI registries"),(0,a.kt)("p",null,"We recommend:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/kwctl"},"Kwctl")," (our cli tool)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containers/skopeo"},"Skopeo")," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/containers/skopeo/pull/1705"},">= 1.9.0"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/go-containerregistry/blob/main/cmd/crane/README.md"},"Crane"),".")),(0,a.kt)("h2",{id:"known-issues"},"Known issues"),(0,a.kt)("h3",{id:"docker-hub"},"Docker Hub"),(0,a.kt)("p",null,"Currently, Docker Hub does not support OCI artifacts at this time, and as such,\nit cannot be used to store Kubewarden policies.\nDocker Inc. has publicly announced that Docker Hub will ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/blog/announcing-docker-hub-oci-artifacts-support/"},"support OCI artifacts\nin the near\nfuture"),"."),(0,a.kt)("h3",{id:"jfrog"},"JFrog"),(0,a.kt)("p",null,"Although JFrog supports OCI artifacts, it is only partially possible to push to it when following\nthe specification. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kwctl/issues/59"},"Read more here")))}p.isMDXComponent=!0}}]);