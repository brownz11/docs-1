"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5330],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9623:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={sidebar_label:"Swift",title:""},s="Swift",p={unversionedId:"writing-policies/swift",id:"writing-policies/swift",title:"",description:"As stated on the official website:",source:"@site/docs/writing-policies/swift.md",sourceDirName:"writing-policies",slug:"/writing-policies/swift",permalink:"/docs/writing-policies/swift",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/swift.md",tags:[],version:"current",lastUpdatedAt:1651836741,formattedLastUpdatedAt:"5/6/2022",frontMatter:{sidebar_label:"Swift",title:""},sidebar:"docs",previous:{title:"Builtin Support",permalink:"/docs/writing-policies/rego/builtin-support"},next:{title:"TypeScript",permalink:"/docs/writing-policies/typescript"}},c={},u=[{value:"Current State",id:"current-state",level:2},{value:"More examples",id:"more-examples",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"swift"},"Swift"),(0,o.kt)("p",null,"As stated on the ",(0,o.kt)("a",{parentName:"p",href:"https://swift.org/"},"official website"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Swift is a general-purpose programming language built using a modern approach\nto safety, performance, and software design patterns.")),(0,o.kt)("p",null,"The swift compiler doesn't yet have WebAssembly support, however the\n",(0,o.kt)("a",{parentName:"p",href:"https://swiftwasm.org/"},"Swiftwasm")," provides a patched compiler with this\ncapability."),(0,o.kt)("p",null,"The Swiftwasm team is also working to upstream all these changes into the\nSwift project. In the meantime the toolchain provided by the Swiftwasm project\ncan be used to build Kubewarden policies."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note well:")," you don't need an Apple system to write or run Swift code. Everything\ncan be done also on a Linux machine or on Windows (by using Docker for Windows)."),(0,o.kt)("h2",{id:"current-state"},"Current State"),(0,o.kt)("p",null,"Policy authors can leverage the following resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/policy-sdk-swift"},"Kubewarden Swift SDK"),": this\nprovides a set of ",(0,o.kt)("inlineCode",{parentName:"li"},"struct")," and functions that simplify the process of\nwriting policies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/swift-policy-template"},"Kubewarden Swift template project"),":\nuse this template to quickly scaffold a Swift-based policy. The template comes\nwith a working policy and a set of GitHub Actions to automate its lifecycle.")),(0,o.kt)("p",null,"No severe limitations have been found inside of Swift, only\nsome minor glitches:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's critical to perform some post-build optimizations before using the\npolicy ",(0,o.kt)("em",{parentName:"li"},'"in production"'),":",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Strip the Wasm module via ",(0,o.kt)("inlineCode",{parentName:"li"},"wasm-strip")," to reduce its size"),(0,o.kt)("li",{parentName:"ol"},"Optimize the Wasm module via ",(0,o.kt)("inlineCode",{parentName:"li"},"wasm-opt"))))),(0,o.kt)("p",null,"The GitHub Action provided by the template repository already takes care of that."),(0,o.kt)("h2",{id:"more-examples"},"More examples"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/pod-runtime-class-policy"},"This GitHub repository"),"\ncontains a Kubewarden Policy written in Swift."))}m.isMDXComponent=!0}}]);