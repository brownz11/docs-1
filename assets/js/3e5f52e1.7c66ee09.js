"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},17337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_label:"Policy Settings",title:""},o="Policy settings",s={unversionedId:"writing-policies/spec/settings",id:"version-1.9/writing-policies/spec/settings",title:"",description:"Policy behaviour is not set in stone, it can be configured by providing configuration",source:"@site/versioned_docs/version-1.9/writing-policies/spec/02-settings.md",sourceDirName:"writing-policies/spec",slug:"/writing-policies/spec/settings",permalink:"/writing-policies/spec/settings",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/spec/02-settings.md",tags:[],version:"1.9",lastUpdatedAt:1699017983,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Policy Settings",title:""},sidebar:"docs",previous:{title:"Policy Communication Specification",permalink:"/writing-policies/spec/intro-spec"},next:{title:"Validating Policies",permalink:"/writing-policies/spec/validating-policies"}},l={},p=[{value:"Settings validation",id:"settings-validation",level:2},{value:"Example",id:"example",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"policy-settings"},"Policy settings"),(0,r.kt)("p",null,"Policy behaviour is not set in stone, it can be configured by providing configuration\ndetails to the policy at runtime. The policy author has full freedom to define\nthe structure of the policy settings."),(0,r.kt)("p",null,"Kubewarden takes care of serializing the policy settings into JSON and provide\nthem to the policy every time it is invoked."),(0,r.kt)("h2",{id:"settings-validation"},"Settings validation"),(0,r.kt)("p",null,"Some policies might want to validate the settings a user provides to ensure\nthey are correct."),(0,r.kt)("p",null,"Each policy must register a waPC function called ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_settings")," that\ntakes care of validating the policy settings."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_settings")," function receives as input a JSON representation of\nthe settings provided by the user. The function validates them and returns\nas a response a ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsValidationResponse")," object."),(0,r.kt)("p",null,"The structure of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsValidationResponse")," object is the following one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  # mandatory\n  "valid": <boolean>,\n\n  # optional, ignored if accepted - recommended for rejections\n  "message": <string>,\n}\n')),(0,r.kt)("p",null,"If the user provided settings are ",(0,r.kt)("inlineCode",{parentName:"p"},"valid"),", the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," are ignored.\nOtherwise the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," are shown to the user."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Kubewarden's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chimera-kube/policy-server"},"policy-server"),"\nvalidates all the policy settings provided by users at start time.\nThe policy-server exits immediately with an error if at least one of its\npolicies received wrong configuration parameters.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's take as an example the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/psp-capabilities"},"psp-capabilities"),"\npolicy which has the following configuration format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"allowed_capabilities:\n- CHOWN\n\nrequired_drop_capabilities:\n- NET_ADMIN\n\ndefault_add_capabilities:\n- KILL\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_settings")," function will receive as input the following JSON\ndocument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "allowed_capabilities": [\n    "CHOWN"\n  ],\n  "required_drop_capabilities": [\n    "NET_ADMIN"\n  ],\n  "default_add_capabilities": [\n    "KILL"\n  ]\n}\n')),(0,r.kt)("h1",{id:"recap"},"Recap"),(0,r.kt)("p",null,"Each policy must register a waPC function called ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_settings")," that has\nthe following API:"))}u.isMDXComponent=!0}}]);