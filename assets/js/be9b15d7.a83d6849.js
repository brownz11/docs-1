"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7250],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6826:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],c={sidebar_label:"Distributing Policy",title:""},u="Distribute policy",l={unversionedId:"writing-policies/go/distribute",id:"writing-policies/go/distribute",title:"",description:"Congratulations for having made this far \ud83c\udf89\ud83c\udf89\ud83c\udf89",source:"@site/docs/writing-policies/go/08-distribute.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/distribute",permalink:"/docs/writing-policies/go/distribute",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/go/08-distribute.md",tags:[],version:"current",lastUpdatedAt:1651836741,formattedLastUpdatedAt:"5/6/2022",sidebarPosition:8,frontMatter:{sidebar_label:"Distributing Policy",title:""},sidebar:"docs",previous:{title:"GitHub Action Integration",permalink:"/docs/writing-policies/go/automate"},next:{title:"Introduction to Rego",permalink:"/docs/writing-policies/rego/intro-rego"}},s={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"distribute-policy"},"Distribute policy"),(0,o.kt)("p",null,"Congratulations for having made this far \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,o.kt)("p",null,"We hope you enjoyed the journey!"),(0,o.kt)("p",null,"In case you haven't realized, we actually created the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/safe-labels-policy"},"safe-labels-policy"),"\ntogether."),(0,o.kt)("p",null,"There's nothing special to be done when it comes to distributing the\npolicy. If you followed this guide you have already published\nyour policy using the GitHub ",(0,o.kt)("inlineCode",{parentName:"p"},"release.yml")," Action defined in the previous\nchapter."),(0,o.kt)("p",null,"The topic of distributing policies is covered in depth inside of the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/distributing-policies"},'"distributing policies"'),"\nsection of Kubewarden's documentation."))}f.isMDXComponent=!0}}]);