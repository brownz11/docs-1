"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1528],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Monitoring",l={unversionedId:"operator-manual/ui-extension/metrics",id:"operator-manual/ui-extension/metrics",title:"Monitoring",description:"Rancher has a Cluster Tool for Monitoring that leverages Grafana and Prometheus. You can utilize this tool and integrate it with Kubewarden to view overall metrics for a Policy Server or metrics pertaining to a given policy.",source:"@site/docs/operator-manual/ui-extension/metrics.md",sourceDirName:"operator-manual/ui-extension",slug:"/operator-manual/ui-extension/metrics",permalink:"/operator-manual/ui-extension/metrics",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/operator-manual/ui-extension/metrics.md",tags:[],version:"current",lastUpdatedAt:1696590150,formattedLastUpdatedAt:"Oct 6, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Quickstart",permalink:"/operator-manual/ui-extension/install"},next:{title:"Tracing",permalink:"/operator-manual/ui-extension/tracing"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install",id:"install",level:2},{value:"1. Within the cluster explorer click on <code>Cluster Tools</code> in the side navigation",id:"1-within-the-cluster-explorer-click-on-cluster-tools-in-the-side-navigation",level:3},{value:"2. Enable telemetry for your <code>rancher-kubewarden-controller</code> resource",id:"2-enable-telemetry-for-your-rancher-kubewarden-controller-resource",level:3},{value:"3. Add the ConfigMap for Policies and Policy Server",id:"3-add-the-configmap-for-policies-and-policy-server",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"monitoring"},"Monitoring"),(0,a.kt)("p",null,"Rancher has a Cluster Tool for Monitoring that leverages Grafana and Prometheus. You can utilize this tool and integrate it with Kubewarden to view overall metrics for a Policy Server or metrics pertaining to a given policy."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Issues with Rancher Manager ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.7.1")," can cause issues with the Metrics dashboard view. Version ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.7.2")," or greater is recommended.  ")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You will need a cluster with at least 4 cores to install the Monitoring tool.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Cert-Manager and OpenTelemetry are required.\nFollow ",(0,a.kt)("a",{parentName:"p",href:"/operator-manual/telemetry/opentelemetry/quickstart#install-opentelemetry"},"these instructions")," to install Cert Manager and the OpenTelemetry Operator."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("h3",{id:"1-within-the-cluster-explorer-click-on-cluster-tools-in-the-side-navigation"},"1. Within the cluster explorer click on ",(0,a.kt)("inlineCode",{parentName:"h3"},"Cluster Tools")," in the side navigation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Install")," the Monitoring tool"),(0,a.kt)("li",{parentName:"ul"},"Edit the YAML to include a Service Monitor for Kubewarden"),(0,a.kt)("li",{parentName:"ul"},"You need to specify the correct namespace where you installed Kubewarden")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Adapted from ",(0,a.kt)("a",{parentName:"p",href:"/operator-manual/telemetry/metrics/quickstart"},"here"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"prometheus:\n  additionalPodMonitors: []\n  additionalRulesForClusterRole: []\n  additionalServiceMonitors:\n    - name: kubewarden\n      selector:\n        matchLabels:\n          app: kubewarden-policy-server-default\n      namespaceSelector:\n        matchNames:\n          - cattle-kubewarden-system\n      endpoints:\n        - port: metrics\n          interval: 10s\n  annotations: {}\n")),(0,a.kt)("h3",{id:"2-enable-telemetry-for-your-rancher-kubewarden-controller-resource"},"2. Enable telemetry for your ",(0,a.kt)("inlineCode",{parentName:"h3"},"rancher-kubewarden-controller")," resource"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to Apps & Marketplace -> Installed Apps"),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Edit/Upgrade")," action for your ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-kubewarden-controller")," resource"),(0,a.kt)("li",{parentName:"ul"},"Edit the YAML for ",(0,a.kt)("inlineCode",{parentName:"li"},"telemetry")," to be ",(0,a.kt)("inlineCode",{parentName:"li"},'enabled: "true"')," and ensure the metrics port is correct")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"telemetry:\n  enabled: True\n  metrics:\n    port: 8080\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may need to redeploy your Monitoring resources for the new ConfigMap to be loaded. You can easily do this from Workloads -> Deployments. Select all the resources in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Redeploy")," action.")),(0,a.kt)("h3",{id:"3-add-the-configmap-for-policies-and-policy-server"},"3. Add the ConfigMap for Policies and Policy Server"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This method is suited for air gapped installations")),(0,a.kt)("p",null,"The dashboards are unique between Policy Server and Policies, thus will need to be created separately. "),(0,a.kt)("p",null,"Within the detail view for a Policy Server or a specific Policy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Metrics" tab'),(0,a.kt)("li",{parentName:"ul"},"Follow the prompt to create the ConfigMap"),(0,a.kt)("li",{parentName:"ul"},"Reload the page to update the Grafana view (Grafana may be slow to acknowledge the new dashboard)")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You should be able to view the metrics for a Policy Server or any given Policy on the detail page for each respective resource. You can also view the Kubewarden dashboards within the Grafana UI or the events from the Prometheus UI."))}d.isMDXComponent=!0}}]);