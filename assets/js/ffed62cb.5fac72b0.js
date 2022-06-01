"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3018],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1484:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),l=["components"],r={sidebar_label:"GitHub Action Integration",title:""},s="Automations",c={unversionedId:"writing-policies/go/automate",id:"writing-policies/go/automate",title:"",description:"This section describes how we can use GitHub Actions to automate as many tasks",source:"@site/docs/writing-policies/go/07-automate.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/automate",permalink:"/writing-policies/go/automate",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/go/07-automate.md",tags:[],version:"current",lastUpdatedAt:1654063996,formattedLastUpdatedAt:"6/1/2022",sidebarPosition:7,frontMatter:{sidebar_label:"GitHub Action Integration",title:""},sidebar:"docs",previous:{title:"Logging",permalink:"/writing-policies/go/logging"},next:{title:"Distributing Policy",permalink:"/writing-policies/go/distribute"}},u={},p=[{value:"Testing",id:"testing",level:2},{value:"Release",id:"release",level:2},{value:"A concrete example",id:"a-concrete-example",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"automations"},"Automations"),(0,o.kt)("p",null,"This section describes how we can use GitHub Actions to automate as many tasks\nas possible."),(0,o.kt)("p",null,"The scaffolded project already includes all the GitHub actions you need.\nThese Actions can be found in the ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/ci.yml.template")," file;\nrename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"github/workflows.ci/yml")," to enable them."),(0,o.kt)("p",null,"The same principles can be adapted to use a different CI system."),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Automation of the unit tests and of the end-to-end tests is working out of the\nbox thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"unit-tests")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"e2e-tests")," jobs defined in\n",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/ci.yml.template"),"."),(0,o.kt)("h2",{id:"release"},"Release"),(0,o.kt)("p",null,"The scaffolded project contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," job in\n",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/ci.yml.template"),"."),(0,o.kt)("p",null,"This job performs the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Checkout code"),(0,o.kt)("li",{parentName:"ul"},"Build the WebAssembly policy"),(0,o.kt)("li",{parentName:"ul"},"Push the policy to an OCI registry"),(0,o.kt)("li",{parentName:"ul"},"Eventually create a new GitHub Release")),(0,o.kt)("p",null,"To enable the job you need to rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"ci.yml")," and change the value of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"OCI_TARGET")," to match your preferences."),(0,o.kt)("p",null,"The job will act differently based on the commit that triggered its execution."),(0,o.kt)("p",null,"Regular commits will lead to the creation of an OCI artifact called ",(0,o.kt)("inlineCode",{parentName:"p"},"<policy-name>:latest"),".\nNo GitHub Release will be created for these commits."),(0,o.kt)("p",null,"On the other hand, creating a tag that matches the ",(0,o.kt)("inlineCode",{parentName:"p"},"v*")," pattern, will lead\nto:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creation of an OCI artifact called ",(0,o.kt)("inlineCode",{parentName:"li"},"<policy-name>:<tag>"),"."),(0,o.kt)("li",{parentName:"ol"},"Creation of a GitHub Release named ",(0,o.kt)("inlineCode",{parentName:"li"},"Release <full tag name>"),". The release\nwill include the following assets: the source code of the policy and the WebAssembly\nbinary.")),(0,o.kt)("h3",{id:"a-concrete-example"},"A concrete example"),(0,o.kt)("p",null,"Let's assume we have a policy named ",(0,o.kt)("inlineCode",{parentName:"p"},"safe-labels")," and we want to publish\nit as ",(0,o.kt)("inlineCode",{parentName:"p"},"ghcr.io/kubewarden/policies/safe-labels"),"."),(0,o.kt)("p",null,"The contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"jobs.push-to-oci-registry.env")," section of ",(0,o.kt)("inlineCode",{parentName:"p"},"ci.yml")," should\nlook like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  push-to-oci-registry:\n    runs-on: ubuntu-latest\n    env:\n      WASM_BINARY_NAME: policy.wasm\n      OCI_TARGET: ghcr.io/kubewarden/policies/safe-labels\n")),(0,o.kt)("p",null,"Pushing a tag named ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.1.0")," will lead to the creation and publishing of the\nOCI artifact called ",(0,o.kt)("inlineCode",{parentName:"p"},"ghcr.io/kubewarden/policies/safe-labels:v0.1.0"),"."),(0,o.kt)("p",null,"A GitHub Release named ",(0,o.kt)("inlineCode",{parentName:"p"},"Release v0.1.0")," will be created. The release will\ninclude the following assets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Source code compressed as ",(0,o.kt)("inlineCode",{parentName:"li"},"zip")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tar.gz")),(0,o.kt)("li",{parentName:"ul"},"A file named ",(0,o.kt)("inlineCode",{parentName:"li"},"policy.wasm")," that is the actual WebAssembly policy")))}m.isMDXComponent=!0}}]);