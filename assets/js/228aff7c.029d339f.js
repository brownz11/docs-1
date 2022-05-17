"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[2606],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9624:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={sidebar_label:"Creating a new validation policy",title:""},c="Creating a new validation policy",p={unversionedId:"writing-policies/rust/create-policy",id:"writing-policies/rust/create-policy",title:"",description:"We are going to create a simple validation policy that processes",source:"@site/docs/writing-policies/rust/02-create-policy.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/create-policy",permalink:"/writing-policies/rust/create-policy",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rust/02-create-policy.md",tags:[],version:"current",lastUpdatedAt:1652790004,formattedLastUpdatedAt:"5/17/2022",sidebarPosition:2,frontMatter:{sidebar_label:"Creating a new validation policy",title:""},sidebar:"docs",previous:{title:"Introduction to Rust",permalink:"/writing-policies/rust/intro-rust"},next:{title:"Defining Policy Settings",permalink:"/writing-policies/rust/define-policy-settings"}},s={},u=[{value:"Scaffolding new policy project",id:"scaffolding-new-policy-project",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-a-new-validation-policy"},"Creating a new validation policy"),(0,i.kt)("p",null,"We are going to create a simple validation policy that processes\nPod creation requests."),(0,i.kt)("p",null,"The policy will look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.name")," attribute of the Pod and reject\nthe pods that have an invalid name. We want the list of invalid names to be\nconfigurable by the end users of the policy."),(0,i.kt)("p",null,"To summarize, the policy settings will look like that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"invalid_names:\n- bad_name1\n- bad_name2\n")),(0,i.kt)("p",null,"The policy will accept the creation of a Pod like the following one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n")),(0,i.kt)("p",null,"While it will reject the creation of a Pod like the following one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: bad_name1\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n")),(0,i.kt)("h2",{id:"scaffolding-new-policy-project"},"Scaffolding new policy project"),(0,i.kt)("p",null,"The creation of a new policy project can be done by feeding this\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/rust-policy-template"},"template project"),"\ninto ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo generate"),"."),(0,i.kt)("p",null,"First, install ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-generate"),". Note, this requires ",(0,i.kt)("a",{parentName:"p",href:"https://pkgs.org/download/openssl-devel"},"openssl-devel"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cargo install cargo-generate\n")),(0,i.kt)("p",null,"Now scaffold the project as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cargo generate --git https://github.com/kubewarden/rust-policy-template \\\n               --branch main \\\n               --name demo\n")),(0,i.kt)("p",null,"The command will produce the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83d\udd27   Creating project called `demo`...\n\u2728   Done! New project created /home/flavio/hacking/kubernetes/kubewarden/demo\n")),(0,i.kt)("p",null,"The new policy project can now be found inside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"demo")," directory."),(0,i.kt)("p",null,"Note: if you plan to make use of the GitHub container registry\nfunctionality in the demo, you will need to\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry#enabling-the-container-registry-for-your-personal-account"},"enable improved container support"),"."))}m.isMDXComponent=!0}}]);