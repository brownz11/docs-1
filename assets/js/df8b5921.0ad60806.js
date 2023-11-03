"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6973],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17931:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_label:"Installation",title:""},o="Air gap installation",l={unversionedId:"operator-manual/airgap/install",id:"operator-manual/airgap/install",title:"",description:"This guide will show you how to install Kubewarden in air-gapped environments. In an air-gapped installation of Kubewarden,",source:"@site/docs/operator-manual/airgap/02-install.md",sourceDirName:"operator-manual/airgap",slug:"/operator-manual/airgap/install",permalink:"/next/operator-manual/airgap/install",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/operator-manual/airgap/02-install.md",tags:[],version:"current",lastUpdatedAt:1699017983,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Installation",title:""},sidebar:"docs",previous:{title:"Requirements",permalink:"/next/operator-manual/airgap/requirements"},next:{title:"Raw policies",permalink:"/next/howtos/raw-policies"}},s={},p=[{value:"Save container images in your workstation",id:"save-container-images-in-your-workstation",level:2},{value:"Save policies in your workstation",id:"save-policies-in-your-workstation",level:2},{value:"Helm charts",id:"helm-charts",level:2},{value:"Populate private registry",id:"populate-private-registry",level:2},{value:"Install Kubewarden",id:"install-kubewarden",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"air-gap-installation"},"Air gap installation"),(0,r.kt)("p",null,"This guide will show you how to install Kubewarden in air-gapped environments. In an air-gapped installation of Kubewarden,\nyou will need a private OCI registry accessible by your Kubernetes cluster. Kubewarden Policies\nare WebAssembly modules; therefore, they can be stored inside an OCI-compliant registry as OCI artifacts.\nYou need to add Kubewarden's images and policies to this OCI registry. Let's see how to do that."),(0,r.kt)("h2",{id:"save-container-images-in-your-workstation"},"Save container images in your workstation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("inlineCode",{parentName:"li"},"kubewarden-images.txt")," from the Kubewarden ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/helm-charts/releases/"},"release page"),". Alternatively, the ",(0,r.kt)("inlineCode",{parentName:"li"},"imagelist.txt")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"policylist.txt")," files are shipped inside the helm charts containing the used container images and policy wasm modules, respectively.",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Optionally, you can verify the signatures of the ",(0,r.kt)("a",{parentName:"p",href:"../../security/verifying-kubewarden#helm-charts"},"helm charts")," and ",(0,r.kt)("a",{parentName:"p",href:"../../security/verifying-kubewarden#container-images"},"container images")))),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"cert-manager")," if it is not available in your private registry.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm pull jetstack/cert-manager\nhelm template ./cert-manager-<Version>.tgz | \\\n  awk '$1 ~ /image:/ {print $2}' | sed s/\\\"//g >> ./kubewarden-images.txt\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("inlineCode",{parentName:"li"},"kubewarden-save-images.sh")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"kubewarden-load-images.sh")," from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/utils"},"utils repository"),"."),(0,r.kt)("li",{parentName:"ol"},"Save Kubewarden container images into a .tar.gz file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./kubewarden-save-images.sh \\\n  --image-list ./kubewarden-images.txt \\\n  --images kubewarden-images.tar.gz\n")),(0,r.kt)("p",null,"Docker begins pulling the images used for an air gap install. Be patient. This process takes a few minutes.\nWhen the process completes, your current directory will output a tarball named ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-images.tar.gz"),". It will be present in the same directory where you executed the command."),(0,r.kt)("h2",{id:"save-policies-in-your-workstation"},"Save policies in your workstation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add all the policies you want to use in a ",(0,r.kt)("inlineCode",{parentName:"li"},"policies.txt")," file. A file with a list of the default policies can be found in the Kubewarden defaults ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/helm-charts/releases/"},"release page")),(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("inlineCode",{parentName:"li"},"kubewarden-save-policies.sh")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"kubewarden-load-policies.sh")," from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/kwctl/tree/main/scripts"},"kwctl repository")),(0,r.kt)("li",{parentName:"ol"},"Save policies into a .tar.gz file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./kubewarden-save-policies.sh --policies-list policies.txt\n")),(0,r.kt)("p",null,"kwctl downloads all the policies and stores them as ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-policies.tar.gz")," archive."),(0,r.kt)("h2",{id:"helm-charts"},"Helm charts"),(0,r.kt)("p",null,"You need to download the following helm charts in your workstation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm pull kubewarden/kubewarden-crds\nhelm pull kubewarden/kubewarden-controller\nhelm pull kubewarden/kubewarden-defaults\n")),(0,r.kt)("p",null,"Download ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," if it is not installed in the air gap cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm pull jetstack/cert-manager\n")),(0,r.kt)("h2",{id:"populate-private-registry"},"Populate private registry"),(0,r.kt)("p",null,"Move ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-policies.tar.gz"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-images.tar.gz"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-load-images.sh"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-load-policies.sh")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"policies.txt"),"\nto the air gap environment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Load Kubewarden images into the private registry. Docker client must be authenticated against the local registry")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./kubewarden-load-images.sh \\\n  --image-list ./kubewarden-images.txt \\\n  --images kubewarden-images.tar.gz \\\n  --registry <REGISTRY.YOURDOMAIN.COM:PORT>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Load Kubewarden policies into the private registry. Kwctl must be authenticated against the local registry (",(0,r.kt)("inlineCode",{parentName:"li"},"kwctl")," uses the same mechanism to authenticate as ",(0,r.kt)("inlineCode",{parentName:"li"},"docker"),", a ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.docker/config.json")," file)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./kubewarden-load-policies.sh \\\n  --policies-list policies.txt \\\n  --policies kubewarden-policies.tar.gz \\\n  --registry <REGISTRY.YOURDOMAIN.COM:PORT> \\\n  --sources-path sources.yml\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sources.yaml")," file is needed by kwctl to connect to registries that fall into these categories:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Authentication is required"),(0,r.kt)("li",{parentName:"ul"},"Self signed certificate is being used"),(0,r.kt)("li",{parentName:"ul"},"No TLS termination is done")),(0,r.kt)("p",{parentName:"admonition"},"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/next/distributing-policies/custom-certificate-authorities"},"the section on custom certificate authorities")," in our documentation to learn more about configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"sources.yaml")," file")),(0,r.kt)("h2",{id:"install-kubewarden"},"Install Kubewarden"),(0,r.kt)("p",null,"Let's install Kubewarden now that we have everything we need in our private registry. The only difference with a normal\nKubewarden installation is that we need to change the registry in the container images and policies to our private registry."),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," if it is not already installed in the air gap cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm install --create-namespace cert-manager ./cert-manager-<Version>.tgz \\\n    -n kubewarden \\\n    --set installCRDs=true \\\n    --set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/jetstack/cert-manager-controller \\\n    --set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/jetstack/cert-manager-webhook \\\n    --set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/jetstack/cert-manager-cainjector \\\n    --set startupapicheck.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/jetstack/cert-manager-ctl\n")),(0,r.kt)("p",null,"Let's install the Kubewarden stack:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm install --wait -n kubewarden \\\n  kubewarden-crds kubewarden-crds.tgz\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm install --wait -n kubewarden \\\n  kubewarden-controller kubewarden-controller.tgz \\\n  --set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT>\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use the Policy Reported subchart available in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," chart you need to define other values specific for the\nsubchart in an air-gapped environment. See an example below:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"helm install --wait -n kubewarden kubewarden-controller kubewarden-controller.tgz \\\n    --set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n    --set auditScanner.policyReporter=true \\\n    --set policy-reporter.image.registry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n    --set policy-reporter.ui.image.registry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n    --set policy-reporter.image.repository=kyverno/policy-reporter \\\n    --set policy-reporter.ui.image.repository=kyverno/policy-reporter-ui\n")),(0,r.kt)("p",{parentName:"admonition"},"Note that is necessary to define ",(0,r.kt)("inlineCode",{parentName:"p"},"auditScanner.policyReporter")," to enable the\nsubchart and 4 more additional values to configure the registry and repository\nwhere the Policy Reporter images are stored. For more information about the\npolicy report subchart values take a look in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kyverno/policy-reporter/tree/policy-reporter-2.19.4/charts/policy-reporter"},"chart\nrepository"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm install --wait -n kubewarden \\\n  kubewarden-defaults kubewarden-defaults.tgz \\\n  --set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT>\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To download the recommended policies installed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-defaults")," Helm\nChart from a registry other than ",(0,r.kt)("inlineCode",{parentName:"p"},"global.cattle.systemDefaultRegistry"),", you can\nutilize the ",(0,r.kt)("inlineCode",{parentName:"p"},"recommendedPolicies.defaultPoliciesRegistry")," configuration. This\nconfiguration allows users to specify a registry dedicated to pulling the OCI\nartifacts of the policies. It is particularly useful when their container image\nrepository does not support OCI artifacts."),(0,r.kt)("p",{parentName:"admonition"},"To install and wait for the installation to complete, use the following command:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"helm install --wait -n kubewarden \\\n  kubewarden-defaults kubewarden-defaults.tgz \\\n  --set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n  --set recommendedPolicies.defaultPoliciesRegistry=<REGISTRY.YOURDOMAIN.COM:PORT>\n")),(0,r.kt)("p",{parentName:"admonition"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"recommendedPolicies.defaultPoliciesRegistry")," configuration is not set,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"global.cattle.systemDefaultRegistry")," will be used as the default registry.")),(0,r.kt)("p",null,"Finally, we need to configure Policy Server to fetch policies from our private registry. See the ",(0,r.kt)("a",{parentName:"p",href:"../policy-servers/private-registry"},"using private registry")," section of the docs."),(0,r.kt)("p",null,"Now we can create Kubewarden policies in our cluster! Policies must be available in your private registry."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: privileged-pods\nspec:\n  module: registry://<REGISTRY.YOURDOMAIN.COM:PORT>/kubewarden/policies/pod-privileged:v0.2.2\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n  mutating: false\nEOF\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer")," resources must use the image available in your private registry. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"apiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: reserved-instance-for-tenant-a\nspec:\n  image: <REGISTRY.YOURDOMAIN.COM:PORT>/kubewarden/policy-server:v1.3.0\n  replicas: 2\n  serviceAccountName: sa\n"))))}d.isMDXComponent=!0}}]);