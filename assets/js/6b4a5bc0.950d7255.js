"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[41159],{58677:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(85893),t=n(11151);const r={sidebar_label:"Logging",title:""},s="Logging",l={id:"writing-policies/rust/logging",title:"",description:"You can perform logging in your policy, so the policy-server or kwctl will forward those log",source:"@site/versioned_docs/version-1.8/writing-policies/rust/06-logging.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/logging",permalink:"/1.8/writing-policies/rust/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/writing-policies/rust/06-logging.md",tags:[],version:"1.8",lastUpdatedAt:1708015605,formattedLastUpdatedAt:"Feb 15, 2024",sidebarPosition:6,frontMatter:{sidebar_label:"Logging",title:""},sidebar:"docs",previous:{title:"Creating a new mutation policy",permalink:"/1.8/writing-policies/rust/mutation-policy"},next:{title:"Building & Distributing Policies",permalink:"/1.8/writing-policies/rust/build-and-distribute"}},a={},c=[{value:"Initialize logger",id:"initialize-logger",level:2},{value:"Consuming the logger",id:"consuming-the-logger",level:2}];function g(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"logging",children:"Logging"}),"\n",(0,o.jsxs)(i.p,{children:["You can perform logging in your policy, so the ",(0,o.jsx)(i.code,{children:"policy-server"})," or ",(0,o.jsx)(i.code,{children:"kwctl"})," will forward those log\nentries with the appropriate information."]}),"\n",(0,o.jsxs)(i.p,{children:["The logging library chosen for the Rust SDK is ",(0,o.jsx)(i.a,{href:"https://github.com/slog-rs/slog",children:(0,o.jsx)(i.code,{children:"slog"})}),", as it is a\nwell known crate and integrates in a very straightforward way with Kubewarden."]}),"\n",(0,o.jsx)(i.h2,{id:"initialize-logger",children:"Initialize logger"}),"\n",(0,o.jsxs)(i.p,{children:["We recommend that you create a global sink where you can log from where you need within your policy. For this, we will use the ",(0,o.jsx)(i.code,{children:"lazy_static"})," crate:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-rust",children:'use slog::{o, Logger};\n\nlazy_static! {\n    static ref LOG_DRAIN: Logger = Logger::root(\n        logging::KubewardenDrain::new(),\n        o!("policy" => "sample-policy")\n    );\n}\n'})}),"\n",(0,o.jsx)(i.h2,{id:"consuming-the-logger",children:"Consuming the logger"}),"\n",(0,o.jsxs)(i.p,{children:["Now, from within our ",(0,o.jsx)(i.code,{children:"validate"}),", or ",(0,o.jsx)(i.code,{children:"validate_settings"})," functions, we are able to log using the macros exported by ",(0,o.jsx)(i.code,{children:"slog"})," that match each supported logging level:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-rust",children:'use slog::{info, o, warn, Logger};\n\nfn validate(payload: &[u8]) -> CallResult {\n    // ...\n    info!(LOG_DRAIN, "starting validation");\n    // ...\n    warn!(\n        LOG_DRAIN, "structured log";\n        "some_resource_name" => &some_resource_name\n    );\n    // ...\n}\n'})}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"slog"})," library will send all logs to the drain we initialized in the global variable, that will\nget sinked to the policy evaluator executing the policy, ",(0,o.jsx)(i.code,{children:"kwctl"})," or the ",(0,o.jsx)(i.code,{children:"policy-server"}),". Then the\npolicy evaluator will log this information, adding more contextual information it knows about, such\nas the Kubernetes request ",(0,o.jsx)(i.code,{children:"uid"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["More information about the ",(0,o.jsx)(i.a,{href:"https://docs.rs/slog/2.7.0/slog/macro.log.html",children:"logging macros"})," offered\nby slog can be found inside of ",(0,o.jsx)(i.a,{href:"https://docs.rs/slog/2.7.0/slog/index.html",children:"its documentation"}),"."]})]})}function d(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>s});var o=n(67294);const t={},r=o.createContext(t);function s(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);