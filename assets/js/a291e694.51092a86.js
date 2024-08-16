"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[54602],{3970:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=t(85893),r=t(11151);const n={sidebar_label:"Publish to Artifact Hub",title:"Publish policies to Artifact Hub",description:"A brief introduction to publishing Kubewarden policies on Artifact Hub.",keywords:["kubewarden","kubernetes","publishing policies","artifact hub"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-policy-developer","kubewarden-distributor","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["distributing-policies","publish-policy-to-artifacthub"]},s=void 0,a={id:"distributing-policies/publish-policy-to-artifact-hub",title:"Publish policies to Artifact Hub",description:"A brief introduction to publishing Kubewarden policies on Artifact Hub.",source:"@site/versioned_docs/version-1.10/distributing-policies/publish-policy-to-artifact-hub.md",sourceDirName:"distributing-policies",slug:"/distributing-policies/publish-policy-to-artifact-hub",permalink:"/1.10/distributing-policies/publish-policy-to-artifact-hub",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/distributing-policies/publish-policy-to-artifact-hub.md",tags:[],version:"1.10",lastUpdatedAt:1723810499e3,frontMatter:{sidebar_label:"Publish to Artifact Hub",title:"Publish policies to Artifact Hub",description:"A brief introduction to publishing Kubewarden policies on Artifact Hub.",keywords:["kubewarden","kubernetes","publishing policies","artifact hub"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-policy-developer","kubewarden-distributor","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["distributing-policies","publish-policy-to-artifacthub"]},sidebar:"docs",previous:{title:"Cluster operators",permalink:"/1.10/testing-policies/cluster-operators"},next:{title:"Verifying Kubewarden",permalink:"/1.10/security/verifying-kubewarden"}},c={},l=[{value:"Prepare your Git repository",id:"prepare-your-git-repository",level:2},{value:"Publishing Steps",id:"publishing-steps",level:2},{value:"Keeping Artifact Hub in Sync",id:"keeping-artifact-hub-in-sync",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://artifacthub.io/",children:"Artifact Hub"})," is a website where users can find,\ninstall, and publish packages and configurations for ",(0,o.jsx)(i.a,{href:"https://cncf.io",children:"CNCF"})," projects."]}),"\n",(0,o.jsx)(i.p,{children:"Kubewarden policies can be published on Artifact Hub and made\ndiscoverable to the wide audience of CNCF users."}),"\n",(0,o.jsxs)(i.admonition,{type:"note",children:[(0,o.jsx)(i.p,{children:"Artifact Hub is a content aggregation platform and doesn't actually host the\nartifacts that are published on it."}),(0,o.jsxs)(i.p,{children:["Artifact Hub requires you to physically host container image repositories on a container\nregistry or a web server.\nRefer to the ",(0,o.jsxs)(i.em,{children:['"',(0,o.jsx)(i.a,{href:"../distributing-policies",children:"distributing policies"}),'"']})," section for more information on how to\nhost your policies."]})]}),"\n",(0,o.jsx)(i.p,{children:"This document focuses on the steps required to make a Kubewarden policy\ndiscoverable on Artifact Hub."}),"\n",(0,o.jsx)(i.h2,{id:"prepare-your-git-repository",children:"Prepare your Git repository"}),"\n",(0,o.jsx)(i.p,{children:"Artifact Hub crawls Git repositories looking for special metadata files."}),"\n",(0,o.jsxs)(i.p,{children:["There are different kind of layouts the Git repository can have. They\nare all documented in depth in the ",(0,o.jsx)(i.a,{href:"https://artifacthub.io/docs/topics/repositories/#kubewarden-policies-repositories",children:"official Artifact Hub documentation"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"Artifact Hub is pretty flexible and allows you to organize your code in these ways:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Have a Git repository dedicated to Artifact Hub: this repository will not contain\nany policy source code. It will be a collection of the YAML files required by\nArtifact Hub."}),"\n",(0,o.jsx)(i.li,{children:"Add a Artifact Hub directory inside of the Git repository that holds the source\nof your policy. This is an iteration of the previous approach, the only difference\nis that it focuses just on one policy: the one defined inside of the Git repository.\nThis approach allows to keep multiple versions of the policy published on Artifact Hub."}),"\n",(0,o.jsxs)(i.li,{children:["Add the ",(0,o.jsx)(i.code,{children:"artifacthub-pkg.yml"})," and the ",(0,o.jsx)(i.code,{children:"artifacthub-repo.yml"})," files to the root\nof the Git repository that holds the policy source code. This approach is the\nsimplest one. The only limitation is that only the latest version of the policy\nwill be visible on Artifact Hub."]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["The last approach is what we used inside of our official policy templates.\nThe Git repository that is scaffolded includes the ",(0,o.jsx)(i.code,{children:"artifacthub-pkg.yml"}),"\nand ",(0,o.jsx)(i.code,{children:"artifacthub-repo.yml"})," files."]}),"\n",(0,o.jsx)(i.h2,{id:"publishing-steps",children:"Publishing Steps"}),"\n",(0,o.jsxs)(i.p,{children:["Before publishing a policy to Artifact Hub, you must create an account on\nthe ",(0,o.jsx)(i.a,{href:"https://artifacthub.io/",children:"website"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["Before publishing the policy, ensure your Git repository has the proper layout.\nThe ",(0,o.jsx)(i.code,{children:"artifacthub-pkg.yml"})," contains fields such as ",(0,o.jsx)(i.code,{children:"version: "}),", ",(0,o.jsx)(i.code,{children:"createdAt: "}),",\nthat need to match specific format, and be up-to-date. The format of the\n",(0,o.jsx)(i.code,{children:"artifacthub-pkg.yml"})," is described\n",(0,o.jsx)(i.a,{href:"https://github.com/artifacthub/hub/blob/master/docs/metadata/artifacthub-pkg.yml",children:"here"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["If you created the policy using one of our templates, then you have a ",(0,o.jsx)(i.code,{children:"make artifacthub-pkg.yml"})," target. Execute that target to generate the\n",(0,o.jsx)(i.code,{children:"artifacthub-pkg.yml"})," file programmatically from ",(0,o.jsx)(i.code,{children:"metadata.yml"})," and other\ninputs. This target gets called as part as a normal build of a policy, so\nyour task is to commit the resulting changes to ",(0,o.jsx)(i.code,{children:"artifacthub-pkg.yml"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["The policy templates make use of our GitHub Actions at\n",(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/github-actions",children:"github.com/kubewarden/github-actions"}),":"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["If you are using our GitHub Actions >= ",(0,o.jsx)(i.code,{children:"v3.1.0"}),", the workflows provide by\ndefault automated checking of the ",(0,o.jsx)(i.code,{children:"artifacthub-pkg.yml"})," file."]}),"\n",(0,o.jsxs)(i.li,{children:["After a successful release, that is, after the policy has been successfully\nbuilt, signed, and pushed, our GitHub Actions have a last job that pushes the\nfiles needed by Artifact Hub to an orphan ",(0,o.jsx)(i.code,{children:"artifacthub"})," branch. The canonical\nfiles are always the ones in the ",(0,o.jsx)(i.code,{children:"main"})," branch, and the GHA job overwrites the\nones in ",(0,o.jsx)(i.code,{children:"artifacthub"})," branch every time."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"Finally, ensure your policy is published inside of a container registry or on a\nweb server."}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsxs)(i.p,{children:["Right now the contents of the ",(0,o.jsx)(i.code,{children:"artifacthub-repo.yml"})," file are not relevant."]})}),"\n",(0,o.jsxs)(i.p,{children:["Once everything is in place, log into Artifact Hub and go to your\n",(0,o.jsx)(i.a,{href:"https://artifacthub.io/control-panel/repositories?page=1",children:"control plane"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["Decide whether you want to publish the policy as a user or under an Artifact Hub\norganization you belong to. This is done by choosing the correct ",(0,o.jsx)(i.em,{children:'"control panel context"'}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["Then press the ",(0,o.jsx)(i.em,{children:'"Add"'})," button and fill the form:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Choose ",(0,o.jsx)(i.em,{children:'"Kubewarden policies"'})," as kind."]}),"\n",(0,o.jsxs)(i.li,{children:["Enter a ",(0,o.jsx)(i.em,{children:'"Name"'})," and ",(0,o.jsx)(i.em,{children:'"Display name"'})," of your choice."]}),"\n",(0,o.jsx)(i.li,{children:"Enter the URL to your Git repository."}),"\n",(0,o.jsxs)(i.li,{children:["Enter ",(0,o.jsx)(i.code,{children:"artifacthub"})," as the branch to track."]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["Finally, press the ",(0,o.jsx)(i.em,{children:'"Add"'})," button. This will bring you back to the ",(0,o.jsx)(i.em,{children:'"Repositories"'}),"\npage, where you will see your freshly created repository."]}),"\n",(0,o.jsxs)(i.p,{children:["Each repository has several information fields. Find the ",(0,o.jsx)(i.em,{children:'"ID"'})," property of the\nrepository you just created and copy it."]}),"\n",(0,o.jsxs)(i.p,{children:["Go back to your Git repository and edit the ",(0,o.jsx)(i.code,{children:"artifacthub-repo.yml"}),". Ensure the\n",(0,o.jsx)(i.code,{children:"repositoryID"})," key found inside of the document has the value you just copied from the\nArtifact Hub web page."]}),"\n",(0,o.jsxs)(i.admonition,{type:"tip",children:[(0,o.jsxs)(i.p,{children:["The format of the ",(0,o.jsx)(i.code,{children:"artifacthub-repo.yml"})," file is defined\n",(0,o.jsx)(i.a,{href:"https://github.com/artifacthub/hub/blob/master/docs/metadata/artifacthub-repo.yml",children:"here"}),"."]}),(0,o.jsx)(i.p,{children:"Now it's a good time to do some further customizations to this file."})]}),"\n",(0,o.jsxs)(i.p,{children:["Once you are done with the changes, commit the updated ",(0,o.jsx)(i.code,{children:"artifacthub-repo.yml"}),"\nfile and push it. During the next scan, Artifact Hub will find this file and\nit will add the\n",(0,o.jsxs)(i.a,{href:"https://artifacthub.io/docs/topics/repositories/#verified-publisher",children:[(0,o.jsx)(i.em,{children:'"Verified Publisher"'})," badge"]}),"\nto you Artifact Hub repository."]}),"\n",(0,o.jsx)(i.h2,{id:"keeping-artifact-hub-in-sync",children:"Keeping Artifact Hub in Sync"}),"\n",(0,o.jsxs)(i.p,{children:["Do not forget to update the contents of the ",(0,o.jsx)(i.code,{children:"artifacthub-pkg.yml"})," file\nevery time you release a new version of your policy."]}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsxs)(i.p,{children:["The contents of the ",(0,o.jsx)(i.code,{children:"artifacthub-repo.yml"})," file do not need to be changed."]})})]})}function d(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>s});var o=t(67294);const r={},n=o.createContext(r);function s(e){const i=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:i},e.children)}}}]);