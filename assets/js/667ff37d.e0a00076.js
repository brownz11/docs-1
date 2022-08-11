"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[120],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={sidebar_label:"Mutating Policies",title:""},c="Mutating policies",s={unversionedId:"writing-policies/spec/mutating-policies",id:"writing-policies/spec/mutating-policies",title:"",description:"Mutating policies are structured in the very same way as validating ones:",source:"@site/docs/writing-policies/spec/04-mutating-policies.md",sourceDirName:"writing-policies/spec",slug:"/writing-policies/spec/mutating-policies",permalink:"/writing-policies/spec/mutating-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/spec/04-mutating-policies.md",tags:[],version:"current",lastUpdatedAt:1660209376,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:4,frontMatter:{sidebar_label:"Mutating Policies",title:""},sidebar:"docs",previous:{title:"Validating Policies",permalink:"/writing-policies/spec/validating-policies"},next:{title:"Context Aware Policies",permalink:"/writing-policies/spec/context-aware-policies"}},u={},p=[{value:"A concrete example",id:"a-concrete-example",level:2},{value:"Recap",id:"recap",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mutating-policies"},"Mutating policies"),(0,i.kt)("p",null,"Mutating policies are structured in the very same way as validating ones:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They have to register ",(0,i.kt)("inlineCode",{parentName:"li"},"validate")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"validate_settings")," waPC functions"),(0,i.kt)("li",{parentName:"ul"},"The communication API used between the host and the policy is the very same\nas the one used by validating policies.")),(0,i.kt)("p",null,"Mutating policies can accept a request and propose a mutation of the incoming\nobject by returning a ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," object that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accepted": true,\n  "mutated_object": <object to be created>\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mutated_object")," field contains the object the policy wants to be created\ninside of the Kubernetes cluster serialized to JSON."),(0,i.kt)("h2",{id:"a-concrete-example"},"A concrete example"),(0,i.kt)("p",null,"Let's assume the policy received this ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationRequest"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {},\n  "request": {\n    "operation": "CREATE",\n    "object": {\n      "apiVersion": "v1",\n      "kind": "Pod",\n      "metadata": {\n        "name": "security-context-demo-4"\n      },\n      "spec": {\n        "containers": [\n        {\n          "name": "sec-ctx-4",\n          "image": "gcr.io/google-samples/node-hello:1.0",\n          "securityContext": {\n            "capabilities": {\n              "add": ["NET_ADMIN", "SYS_TIME"]\n            }\n          }\n        }\n        ]\n      }\n    }\n  }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We left some irrelevant fields out of the ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," object.")),(0,i.kt)("p",null,"This request is generated because someone tried to create a Pod that would\nlook like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: security-context-demo-4\nspec:\n  containers:\n  - name: sec-ctx-4\n    image: gcr.io/google-samples/node-hello:1.0\n    securityContext:\n      capabilities:\n        add:\n        - NET_ADMIN\n        - SYS_TIME\n")),(0,i.kt)("p",null,"Let's assume our policy replies with the following ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationResponse"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accepted": true,\n  "mutated_object": {\n    "apiVersion": "v1",\n    "kind": "Pod",\n    "metadata": {\n      "name": "security-context-demo-4"\n    },\n    "spec": {\n      "containers": [\n        {\n          "name": "sec-ctx-4",\n          "image": "gcr.io/google-samples/node-hello:1.0",\n          "securityContext": {\n            "capabilities": {\n              "add": [\n                "NET_ADMIN",\n                "SYS_TIME"\n              ],\n              "drop": [\n                "BPF"\n              ]\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"That would lead to the request being accepted, but the final Pod would look like\nthis:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: security-context-demo-4\nspec:\n  containers:\n  - name: sec-ctx-4\n    image: gcr.io/google-samples/node-hello:1.0\n    securityContext:\n      capabilities:\n        add:\n        - NET_ADMIN\n        - SYS_TIME\n        drop:\n        - BPF\n")),(0,i.kt)("p",null,"As you can see, the policy altered the ",(0,i.kt)("inlineCode",{parentName:"p"},"securityContext.capabilities.drop"),"\nsection of the only container declared inside of the Pod."),(0,i.kt)("p",null,"The container is now dropping the ",(0,i.kt)("inlineCode",{parentName:"p"},"BPF")," capability thanks to our policy."),(0,i.kt)("h2",{id:"recap"},"Recap"),(0,i.kt)("p",null,"These are the functions a mutating policy must implement:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"waPC function name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Input payload")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Output payload")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"validate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"{",(0,i.kt)("br",null),'  "request": {',(0,i.kt)("br",null),"    // AdmissionReview.request data",(0,i.kt)("br",null),"  },",(0,i.kt)("br",null),'  "settings": {',(0,i.kt)("br",null),"    // your policy configuration",(0,i.kt)("br",null),"  }",(0,i.kt)("br",null),"}")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"{",(0,i.kt)("br",null),"  ",(0,i.kt)("strong",{parentName:"td"},"// mandatory"),(0,i.kt)("br",null),'  "accepted": boolean,',(0,i.kt)("br",null),(0,i.kt)("br",null),"  // optional, ignored if accepted",(0,i.kt)("br",null),"  // recommended for rejections",(0,i.kt)("br",null),'  "message": string,',(0,i.kt)("br",null),(0,i.kt)("br",null),"  // optional, ignored if accepted",(0,i.kt)("br",null),'  "code": integer, ',(0,i.kt)("br",null),(0,i.kt)("br",null),"  // JSON Object to be created",(0,i.kt)("br",null),"  // Can be used only when the",(0,i.kt)("br",null),"  // request is accepted",(0,i.kt)("br",null),'  "mutated_object": object',(0,i.kt)("br",null),"}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"validate_settings")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"{",(0,i.kt)("br",null),(0,i.kt)("br",null),"  // your policy configuration",(0,i.kt)("br",null),(0,i.kt)("br",null),"}")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"{",(0,i.kt)("br",null),"  ",(0,i.kt)("strong",{parentName:"td"},"// mandatory"),(0,i.kt)("br",null),'  "validate": boolean,',(0,i.kt)("br",null),(0,i.kt)("br",null),"  // optional, ignored if accepted",(0,i.kt)("br",null),"  // recommended for rejections",(0,i.kt)("br",null),'  "message": string,',(0,i.kt)("br",null),"}"))))))}m.isMDXComponent=!0}}]);