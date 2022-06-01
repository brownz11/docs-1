"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6235],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=o,h=g["".concat(s,".").concat(d)]||g[d]||u[d]||r;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1113:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(3117),o=n(102),r=(n(7294),n(3905)),a=["components"],l={sidebar_label:"Introduction to Rego",title:""},s="Rego",c={unversionedId:"writing-policies/rego/intro-rego",id:"writing-policies/rego/intro-rego",title:"",description:"Note well",source:"@site/docs/writing-policies/rego/01-intro-rego.md",sourceDirName:"writing-policies/rego",slug:"/writing-policies/rego/intro-rego",permalink:"/writing-policies/rego/intro-rego",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rego/01-intro-rego.md",tags:[],version:"current",lastUpdatedAt:1654063996,formattedLastUpdatedAt:"6/1/2022",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction to Rego",title:""},sidebar:"docs",previous:{title:"Distributing Policy",permalink:"/writing-policies/go/distribute"},next:{title:"Builtin Support",permalink:"/writing-policies/rego/builtin-support"}},p={},u=[{value:"One language. Two frameworks",id:"one-language-two-frameworks",level:2},{value:"Open Policy Agent",id:"open-policy-agent",level:3},{value:"Gatekeeper",id:"gatekeeper",level:3},{value:"Looking at the differences",id:"looking-at-the-differences",level:2},{value:"Entry point",id:"entry-point",level:2},{value:"Current limitations",id:"current-limitations",level:2},{value:"Context-aware policies",id:"context-aware-policies",level:3},{value:"Mutating policies",id:"mutating-policies",level:3}],g={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rego"},"Rego"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note well:")," Rego support has been introduced starting from these releases:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"kwctl: v0.2.0"),(0,r.kt)("li",{parentName:"ul"},"policy-server: v0.2.0"))),(0,r.kt)("p",null,"The Rego language is a tailor made language designed to embrace\npolicies as\ncode. ",(0,r.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-language/"},"Rego"),"\nis a language inspired by Datalog."),(0,r.kt)("p",null,"There are two ways of writing Rego policies as of today in order to\nimplement policies as code in Kubernetes: Open Policy Agent and\nGatekeeper."),(0,r.kt)("p",null,"While the next couple of sections detail how the two frameworks are different\neven though the same language is used, if you're more interested in the Kubewarden\nimplementation you may directly visit the framework-specific documentation we have linked below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/writing-policies/rego/open-policy-agent/intro"},"Open Policy Agent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/writing-policies/rego/gatekeeper/intro"},"Gatekeeper"))),(0,r.kt)("h2",{id:"one-language-two-frameworks"},"One language. Two frameworks"),(0,r.kt)("h3",{id:"open-policy-agent"},"Open Policy Agent"),(0,r.kt)("p",null,"Open Policy Agent is a project that allows you to implement policies\nas code in any project. You can rely on Open Policy Agent for any\npolicy based check that you might require in your own application,\nthat will in turn execute the required Rego policies."),(0,r.kt)("p",null,"In this context, writing policies for Kubernetes is just another way\nof exercising Open Policy Agent. By using Kubernetes admission\nwebhooks, it's possible to evaluate requests using Open Policy Agent,\nthat will in turn execute the policies written in Rego."),(0,r.kt)("p",null,"Open Policy Agent has some optional integration with Kubernetes\nthrough its ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-mgmt")," sidecar. When deployed on top of Kubernetes\nand next to the Open Policy Agent server evaluating the Rego policies,\nit is able to replicate the configured Kubernetes resources into Rego\n-- so those Kubernetes resources are visible to all policies. It also\nlets you define policies inside Kubernetes' ConfigMap objects. You can\nread more about it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/kube-mgmt"},"its project\npage"),"."),(0,r.kt)("h3",{id:"gatekeeper"},"Gatekeeper"),(0,r.kt)("p",null,"Gatekeeper is very different from Open Policy Agent in this regard. It\nis focused exclusively to be used in Kubernetes, and takes advantage\nof that as much as it can, making some Kubernetes workflows easier\nthan Open Policy Agent in many cases."),(0,r.kt)("h2",{id:"looking-at-the-differences"},"Looking at the differences"),(0,r.kt)("p",null,"Both Open Policy Agent and Gatekeeper policies use Rego to describe\ntheir policies as code. However, this is only one part of the\npuzzle. Each solution has differences when it comes to writing real\npolicies in Rego, and we are going to look at those differences in the\nnext sections."),(0,r.kt)("h2",{id:"entry-point"},"Entry point"),(0,r.kt)("p",null,"The entry point is the name of a rule within a package, and is the\nrule to be invoked by the runtime when the policy is instantiated."),(0,r.kt)("h2",{id:"current-limitations"},"Current limitations"),(0,r.kt)("h3",{id:"context-aware-policies"},"Context-aware policies"),(0,r.kt)("p",null,"Context-aware policies are policies that don't evaluate the input\nrequest in isolation. They take other factors into account in order to\ntake a decision. For example, a policy that evaluates namespaced\nresources and uses an annotation on the parent namespace to configure\nsomething on the policy. Another example would be a policy that\nevaluates ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress")," resources, but that in order to take a decision\nhas the list of the already existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress")," resources."),(0,r.kt)("p",null,"The concept of context-aware policies can also extend to custom\nresources, so your policy might want to evaluate a request based on\ncurrently persisted custom resources as well."),(0,r.kt)("p",null,"Both Open Policy Agent and Gatekeeper support context-aware\npolicies. Right now Kubewarden implements this functionality only for\npolicies written with the Kubewarden SDK. We have plans to fill this\ngap, to allow Rego policies to be context-aware policies too."),(0,r.kt)("h3",{id:"mutating-policies"},"Mutating policies"),(0,r.kt)("p",null,"Gatekeeper has support for mutating policies, but Kubewarden has not\nyet implemented mutating policies with Gatekeeper compatibility. You\ncan use policies that use the Kubewarden SDK to write mutating\npolicies, but at the time of writing, you cannot run Gatekeeper\nmutating policies in Kubewarden yet."))}d.isMDXComponent=!0}}]);