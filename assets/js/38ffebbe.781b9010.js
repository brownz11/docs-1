"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<r;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Writing Validation Logic",title:""},s="Writing the validation logic",o={unversionedId:"writing-policies/rust/write-validation-logic",id:"writing-policies/rust/write-validation-logic",title:"",description:"It's time to write the actual validation code. This is defined inside of the",source:"@site/docs/writing-policies/rust/04-write-validation-logic.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/write-validation-logic",permalink:"/next/writing-policies/rust/write-validation-logic",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rust/04-write-validation-logic.md",tags:[],version:"current",lastUpdatedAt:1699017983,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Writing Validation Logic",title:""},sidebar:"docs",previous:{title:"Defining Policy Settings",permalink:"/next/writing-policies/rust/define-policy-settings"},next:{title:"Creating a new mutation policy",permalink:"/next/writing-policies/rust/mutation-policy"}},l={},d=[{value:"Unit tests",id:"unit-tests",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"writing-the-validation-logic"},"Writing the validation logic"),(0,a.kt)("p",null,"It's time to write the actual validation code. This is defined inside of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," file. Inside of this file you will find a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"validate"),"."),(0,a.kt)("p",null,"The scaffolded function is already doing something:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn validate(payload: &[u8]) -> CallResult {\n    // NOTE 1\n    let validation_request: ValidationRequest<Settings> = ValidationRequest::new(payload)?;\n\n    // NOTE 2\n    match serde_json::from_value::<apicore::Pod>(validation_request.request.object) {\n        Ok(pod) => {\n            // NOTE 3\n            if pod.metadata.name == Some("invalid-pod-name".to_string()) {\n                kubewarden::reject_request(\n                    Some(format!("pod name {:?} is not accepted", pod.metadata.name)),\n                    None,\n                )\n            } else {\n                kubewarden::accept_request()\n            }\n        }\n        Err(_) => {\n            // NOTE 4\n            // We were forwarded a request we cannot unmarshal or\n            // understand, just accept it\n            kubewarden::accept_request()\n        }\n    }\n}\n')),(0,a.kt)("p",null,"This is a walk-through the code described above:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Parse the incoming ",(0,a.kt)("inlineCode",{parentName:"li"},"payload")," into a ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidationRequest<Setting>")," object. This\nautomatically populates the ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," instance inside of ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidationRequest")," with\nthe params provided by the user."),(0,a.kt)("li",{parentName:"ol"},"Convert the Kubernetes raw JSON object embedded into the request\ninto an instance of the ",(0,a.kt)("a",{parentName:"li",href:"https://arnavion.github.io/k8s-openapi/v0.11.x/k8s_openapi/api/core/v1/struct.Pod.html"},"Pod struct")),(0,a.kt)("li",{parentName:"ol"},"The request contains a Pod object, the code approves only the requests\nthat do not have ",(0,a.kt)("inlineCode",{parentName:"li"},"metadata.name")," equal to the hard-coded value ",(0,a.kt)("inlineCode",{parentName:"li"},"invalid-pod-name")),(0,a.kt)("li",{parentName:"ol"},"The request doesn't contain a Pod object, hence the policy accepts the request")),(0,a.kt)("p",null,"As you can see the code is already doing a validation that resembles the one we\nwant to implement. We just have to get rid of the hard-coded value and use the\nvalues provided by the user via the policy settings."),(0,a.kt)("p",null,"This can be done with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn validate(payload: &[u8]) -> CallResult {\n    let validation_request: ValidationRequest<Settings> = ValidationRequest::new(payload)?;\n\n    match serde_json::from_value::<apicore::Pod>(validation_request.request.object) {\n        Ok(pod) => {\n            let pod_name = pod.metadata.name.unwrap_or_default();\n            if validation_request\n                .settings\n                .invalid_names\n                .contains(&pod_name)\n            {\n                kubewarden::reject_request(\n                    Some(format!("pod name {:?} is not accepted", pod_name)),\n                    None,\n                )\n            } else {\n                kubewarden::accept_request()\n            }\n        }\n        Err(_) => {\n            // We were forwarded a request we cannot unmarshal or\n            // understand, just accept it\n            kubewarden::accept_request()\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,a.kt)("p",null,"Finally, we will create some unit tests to ensure the validation code works as\nexpected."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"lib.rs")," file has already some tests defined at the bottom of the file, as\nyou can see Kubewarden's Rust SDK provides some test helpers too."),(0,a.kt)("p",null,"Moreover, the scaffolded project already ships with some default\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Test_fixture#Software"},"test fixtures")," inside of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"test_data")," directory. We are going to take advantage of these recorded\nadmission requests to write our unit tests."),(0,a.kt)("p",null,"Change the contents of the test section inside of ",(0,a.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," to look like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(test)]\nmod tests {\n    use super::*;\n\n    use kubewarden_policy_sdk::test::Testcase;\n    use std::collections::HashSet;\n\n    #[test]\n    fn accept_pod_with_valid_name() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("bad_name1"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/pod_creation.json";\n        let tc = Testcase {\n            name: String::from("Pod creation with valid name"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: true,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n\n    #[test]\n    fn reject_pod_with_invalid_name() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("nginx"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/pod_creation.json";\n        let tc = Testcase {\n            name: String::from("Pod creation with invalid name"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: false,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n\n    #[test]\n    fn accept_request_with_non_pod_resource() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("prod"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/ingress_creation.json";\n        let tc = Testcase {\n            name: String::from("Ingress creation"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: true,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n}\n')),(0,a.kt)("p",null,"We now have three unit tests defined inside of this file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accept_pod_with_valid_name"),": ensures a Pod with a valid\nname is accepted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reject_pod_with_invalid_name"),": ensures a Pod with an invalid\nname is rejected"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accept_request_with_non_pod_resource"),": ensure the policy accepts\nrequest that do not have a ",(0,a.kt)("inlineCode",{parentName:"li"},"Pod")," as object")),(0,a.kt)("p",null,"We can run the unit tests again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cargo test\n   Compiling demo v0.1.0 (/home/flavio/hacking/kubernetes/kubewarden/demo)\n    Finished test [unoptimized + debuginfo] target(s) in 3.45s\n     Running target/debug/deps/demo-24670dd6a538fd72\n\nrunning 5 tests\ntest settings::tests::accept_settings_with_a_list_of_invalid_names ... ok\ntest settings::tests::reject_settings_without_a_list_of_invalid_names ... ok\ntest tests::accept_request_with_non_pod_resource ... ok\ntest tests::accept_pod_with_valid_name ... ok\ntest tests::reject_pod_with_invalid_name ... ok\n\ntest result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n")),(0,a.kt)("p",null,"That's all if you want to write a simple validating policy."))}p.isMDXComponent=!0}}]);