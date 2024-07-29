"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[51646],{91783:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var t=o(85893),i=o(11151);const r={sidebar_label:"Logging",title:""},l="Logging",s={id:"writing-policies/go/logging",title:"",description:"The Go SDK integrates with the onelog project almost out",source:"@site/versioned_docs/version-1.7/writing-policies/go/06-logging.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/logging",permalink:"/1.7/writing-policies/go/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/go/06-logging.md",tags:[],version:"1.7",lastUpdatedAt:172225268e4,sidebarPosition:6,frontMatter:{sidebar_label:"Logging",title:""},sidebar:"docs",previous:{title:"End-to-end testing",permalink:"/1.7/writing-policies/go/e2e-tests"},next:{title:"GitHub Action Integration",permalink:"/1.7/writing-policies/go/automate"}},g={},a=[{value:"Initialize logger",id:"initialize-logger",level:2},{value:"Consuming the logger",id:"consuming-the-logger",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"logging",children:"Logging"}),"\n",(0,t.jsxs)(n.p,{children:["The Go SDK integrates with the ",(0,t.jsx)(n.a,{href:"https://github.com/francoispqt/onelog",children:(0,t.jsx)(n.code,{children:"onelog"})})," project almost out\nof the box. The reasons why this library has been chosen are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"It works with WebAssembly binaries. Other popular logging solutions cannot even be built to\nWebAssembly."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["It provides ",(0,t.jsx)(n.a,{href:"https://github.com/francoispqt/onelog#benchmarks",children:"good performance"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"It supports structured logging."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"initialize-logger",children:"Initialize logger"}),"\n",(0,t.jsxs)(n.p,{children:["You first have to initialize a logger structure. By performing this initialization in a global\nvariable, you can easily log from the two main policy entry points: ",(0,t.jsx)(n.code,{children:"validate"})," and\n",(0,t.jsx)(n.code,{children:"validate_settings"}),". Let's initialize this structure in our main package:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"var (\n\tlogWriter = kubewarden.KubewardenLogWriter{}\n\tlogger    = onelog.New(\n\t\t&logWriter,\n\t\tonelog.ALL, // shortcut for onelog.DEBUG|onelog.INFO|onelog.WARN|onelog.ERROR|onelog.FATAL\n\t)\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"consuming-the-logger",children:"Consuming the logger"}),"\n",(0,t.jsxs)(n.p,{children:["Now, we can use the ",(0,t.jsx)(n.code,{children:"logger"})," object to log from wherever we need in our policy:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func validate(payload []byte) ([]byte, error) {\n\t// ...\n\tlogger.Info("validating request")\n\t// ...\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Let's add some structured logging:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func validate(payload []byte) ([]byte, error) {\n\t// ...\n\tlogger.WarnWithFields("logging something important", func(e onelog.Entry) {\n\t\te.String("one_field", "a value")\n\t\te.String("another_field", "another value")\n\t})\n\t// ...\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can refer to the ",(0,t.jsxs)(n.a,{href:"https://pkg.go.dev/github.com/francoispqt/onelog?utm_source=godoc",children:[(0,t.jsx)(n.code,{children:"onelog"}),"\ndocumentation"]})," for more\ninformation."]}),"\n",(0,t.jsxs)(n.p,{children:["The logging produced by the policy will be sent to the policy evaluator (",(0,t.jsx)(n.code,{children:"kwctl"})," or ",(0,t.jsx)(n.code,{children:"policy-server"}),"\nfor example), and they will log on behalf of the policy using mechanisms that are easily pluggable\nto other components that enable distributed tracing, such as Jaeger."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>l});var t=o(67294);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);