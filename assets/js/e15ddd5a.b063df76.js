"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_label:"Raw policies",title:"Raw policies"},s="Writing raw policies",o={unversionedId:"writing-policies/rust/raw-policies",id:"version-1.9/writing-policies/rust/raw-policies",title:"Raw policies",description:"Raw policies are policies that can evaluate arbitrary JSON documents.",source:"@site/versioned_docs/version-1.9/writing-policies/rust/08-raw-policies.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/raw-policies",permalink:"/writing-policies/rust/raw-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/rust/08-raw-policies.md",tags:[],version:"1.9",lastUpdatedAt:1699017983,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:8,frontMatter:{sidebar_label:"Raw policies",title:"Raw policies"},sidebar:"docs",previous:{title:"Building & Distributing Policies",permalink:"/writing-policies/rust/build-and-distribute"},next:{title:"Introduction to Go",permalink:"/writing-policies/go/intro-go"}},l={},u=[{value:"Examples",id:"examples",level:2},{value:"Validation",id:"validation",level:3},{value:"Mutation",id:"mutation",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-raw-policies"},"Writing raw policies"),(0,r.kt)("p",null,"Raw policies are policies that can evaluate arbitrary JSON documents.\nFor more information about raw policies, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/howtos/raw-policies"},"raw policies")," page."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following examples should look familiar if you completed the ",(0,r.kt)("a",{parentName:"p",href:"/writing-policies/rust/mutation-policy"},"validation")," page of this tutorial."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Remember to mark the policy as ",(0,r.kt)("inlineCode",{parentName:"p"},"raw")," by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"policyType")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.yml")," configuration.\nPlease refer to the ",(0,r.kt)("a",{parentName:"p",href:"/writing-policies/metadata"},"metadata")," specification for more information.")),(0,r.kt)("h3",{id:"validation"},"Validation"),(0,r.kt)("p",null,"Let's write a policy that accepts a request in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "user": "alice",\n    "action": "delete",\n    "resource": "products"\n  }\n}\n')),(0,r.kt)("p",null,"and validates that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," is in the list of valid users"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"action")," is in the list of valid actions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resource")," is in the list of valid resources")),(0,r.kt)("p",null,"Start by scaffolding the policy by using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/rust-policy-template"},"rust policy template"),"."),(0,r.kt)("p",null,"First, we define the types that represent the payload of the request.\nWe will declare a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"RawValidationRequest")," type that contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings"),",\ninstead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," type that is provided by the SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// RawValidationRequest represents the request that is sent to the validate function by the Policy Server.\n#[derive(Deserialize)]\npub(crate) struct RawValidationRequest {\n    pub(crate) request: Request,\n    pub(crate) settings: Settings,\n}\n\n#[derive(Serialize, Deserialize)]\n/// Request represents the payload of the request.\npub(crate) struct Request {\n    pub(crate) user: String,\n    pub(crate) resource: String,\n    pub(crate) action: String,\n}\n")),(0,r.kt)("p",null,"Then we need to define the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," type and implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Validatable")," trait:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// Settings represents the settings of the policy.\n#[derive(Serialize, Deserialize, Default, Debug)]\n#[serde(default, rename_all = "camelCase")]\npub(crate) struct Settings {\n    pub(crate) valid_users: Vec<String>,\n    pub(crate) valid_actions: Vec<String>,\n    pub(crate) valid_resources: Vec<String>,\n}\n\nimpl kubewarden::settings::Validatable for Settings {\n    fn validate(&self) -> Result<(), String> {\n        info!(LOG_DRAIN, "starting settings validation");\n\n        if self.valid_users.is_empty() {\n            return Err("validUsers cannot be empty".to_string());\n        }\n\n        if self.valid_actions.is_empty() {\n            return Err("validActions cannot be empty".to_string());\n        }\n\n        if self.valid_resources.is_empty() {\n            return Err("validResources cannot be empty".to_string());\n        }\n\n        Ok(())\n    }\n}\n')),(0,r.kt)("p",null,"Finally, we define the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn validate(payload: &[u8]) -> CallResult {\n    let validation_request: RawValidationRequest =\n        if let Ok(validation_request) = serde_json::from_slice(payload) {\n            validation_request\n        } else {\n            return kubewarden::reject_request(\n                Some("cannot unmarshal request".to_string()),\n                None,\n                None,\n                None,\n            );\n        };\n\n    info!(LOG_DRAIN, "starting validation");\n\n    let request = validation_request.request;\n    let settings = validation_request.settings;\n\n    if settings.valid_users.contains(&request.user)\n        && settings.valid_actions.contains(&request.action)\n        && settings.valid_resources.contains(&request.resource)\n    {\n        info!(LOG_DRAIN, "accepting resource");\n        kubewarden::accept_request()\n    } else {\n        kubewarden::reject_request(\n            Some("this request is not accepted".to_string()),\n            None,\n            None,\n            None,\n        )\n    }\n}\n')),(0,r.kt)("h3",{id:"mutation"},"Mutation"),(0,r.kt)("p",null,"Let's modify the previous example to mutate the request instead of rejecting it.\nIn this case, the settings will contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultUser"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultAction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultRequest")," that will be used to mutate the request if the user, the action or the resource is not valid."),(0,r.kt)("p",null,"We need to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," type with the new fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// Settings represents the settings of the policy.\n#[derive(Serialize, Deserialize, Default, Debug)]\n#[serde(default, rename_all = "camelCase")]\npub(crate) struct Settings {\n    pub(crate) valid_users: Vec<String>,\n    pub(crate) valid_actions: Vec<String>,\n    pub(crate) valid_resources: Vec<String>,\n    pub(crate) default_user: String,\n    pub(crate) default_action: String,\n    pub(crate) default_resource: String,\n}\n\nimpl kubewarden::settings::Validatable for Settings {\n    fn validate(&self) -> Result<(), String> {\n        info!(LOG_DRAIN, "starting settings validation");\n\n        if self.valid_users.is_empty() {\n            return Err("validUsers cannot be empty".to_string());\n        }\n\n        if self.valid_actions.is_empty() {\n            return Err("validActions cannot be empty".to_string());\n        }\n\n        if self.valid_resources.is_empty() {\n            return Err("validResources cannot be empty".to_string());\n        }\n\n        if self.default_user.is_empty() {\n            return Err("defaultUser cannot be empty".to_string());\n        }\n\n        if self.default_action.is_empty() {\n            return Err("defaultAction cannot be empty".to_string());\n        }\n\n        if self.default_resource.is_empty() {\n            return Err("defaultResource cannot be empty".to_string());\n        }\n\n        Ok(())\n    }\n}\n')),(0,r.kt)("p",null,"and the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," function to introduce the mutation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn validate(payload: &[u8]) -> CallResult {\n    let validation_request: RawValidationRequest =\n        if let Ok(validation_request) = serde_json::from_slice(payload) {\n            validation_request\n        } else {\n            return kubewarden::reject_request(\n                Some("cannot unmarshal request".to_string()),\n                None,\n                None,\n                None,\n            );\n        };\n\n    info!(LOG_DRAIN, "starting validation");\n\n    let request = validation_request.request;\n    let settings = validation_request.settings;\n\n    if settings.valid_users.contains(&request.user)\n        && settings.valid_actions.contains(&request.action)\n        && settings.valid_resources.contains(&request.resource)\n    {\n        info!(LOG_DRAIN, "accepting request");\n        return kubewarden::accept_request();\n    }\n\n    info!(LOG_DRAIN, "mutating request");\n    let mut request = request;\n\n    if !settings.valid_users.contains(&request.user) {\n        request.user = settings.default_user;\n    }\n\n    if !settings.valid_actions.contains(&request.action) {\n        request.action = settings.default_action;\n    }\n\n    if !settings.valid_resources.contains(&request.resource) {\n        request.resource = settings.default_resource;\n    }\n\n    let mutated_request = serde_json::to_value(request)?;\n    kubewarden::mutate_request(mutated_request)\n}\n')))}d.isMDXComponent=!0}}]);