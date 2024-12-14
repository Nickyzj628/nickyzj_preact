import{h as u,y,b as e,I as x,q as C,j as k,r as f,d as j,a as o}from"./index-BY5sadQB.js";import{T as D}from"./Tabs-DMrAdUU0.js";import{a as L,s as S,u as z,b as A}from"./api-sGwyN5m7.js";function I(a){return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()}function w({title:a,request:t,postData:i,dataKey:n,actions:l}){const[s,p]=u(),[c,m]=u(1),[g,v]=u(""),b=async r=>{const d=await t({page:r||c,keyword:g}),h=i?i(d[n]):d[n];p({...d,[n]:h}),m(d.page)};return y(()=>{b()},[c,g]),e("div",{className:"flex flex-col rounded-xl border transition dark:border-zinc-700",children:[e("div",{className:"flex items-center justify-between p-3",children:[e("h4",{className:"text-zinc-800 dark:text-zinc-100",children:a||"未命名表格"}),e("div",{className:"relative",children:[e(x,{src:C,className:"pointer-events-none absolute bottom-0 left-2.5 top-0 my-auto size-4 text-zinc-600 transition dark:text-zinc-300"}),e("input",{type:"text",className:"rounded-lg border-zinc-200 pl-8 text-sm transition placeholder:transition dark:border-zinc-700 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-200",placeholder:"搜索关键词...",onKeyPress:r=>r.key==="Enter"&&v(r.target.value)})]})]}),(s==null?void 0:s[n])!==void 0?e(k,{children:[e("div",{className:"overflow-x-auto",children:e("table",{className:"min-w-full",children:[e("thead",{className:"border-y bg-zinc-50 transition dark:border-zinc-700 dark:bg-zinc-700",children:e("tr",{children:[Object.keys(s[n][0]??{}).map(r=>e("th",{className:"p-3 text-start text-sm font-medium text-zinc-500 transition dark:text-zinc-400",children:I(r)},r)),e("th",{className:"p-3 text-start text-sm font-medium text-zinc-500 transition dark:text-zinc-400",children:"Actions"})]})}),e("tbody",{children:s[n].map(r=>e("tr",{className:"border-b transition hover:bg-zinc-50 hover:duration-0 dark:border-zinc-700 dark:hover:bg-zinc-700",children:[Object.values(r).map((d,h)=>e("td",{className:"whitespace-nowrap px-3 py-2 text-zinc-800 transition dark:text-zinc-200",children:d},`${r.id}.${h}`)),e("td",{className:"flex gap-1.5 py-2 pr-3",children:l==null?void 0:l(r,()=>b(1))})]},r.id))})]})}),e("div",{className:"flex items-center justify-between gap-1.5 p-3",children:[e("span",{className:"text-sm tracking-wider text-zinc-400 transition dark:text-zinc-500",children:["第",c,"/",s.pages,"页"]}),e("div",{className:"flex gap-1.5",children:[e("button",{disabled:c===1,onClick:()=>m(c-1),children:e(x,{src:f,className:"size-5"})}),e("button",{disabled:c===s.pages,onClick:()=>m(c+1),children:e(x,{src:f,className:"size-5 rotate-180"})})]})]})]}):e("div",{className:"flex items-center justify-center p-20",children:e(j,{})})]})}function N({name:a,accept:t,placeholder:i,className:n,onChange:l}){return e(k,{children:[e("input",{hidden:!0,type:"file",name:a,accept:t||"*",onChange:s=>{const p=new FormData,[c]=s.target.files;p.append(a,c),l(p)}}),e("button",{onClick:s=>s.target.previousSibling.click(),className:n,children:i||"上传文件"})]})}function B(){return e(D,{names:["文章","番剧"],className:"bento flex-1 overflow-x-hidden",tabClassName:"w-fit",children:[e(w,{title:"文章管理",dataKey:"blogs",request:L,postData:a=>a.map(t=>(t.updated=new Date(t.updated).toLocaleString(),t.created=new Date(parseInt(t.id,36)).toLocaleString(),t)),actions:(a,t)=>[e("button",{className:"whitespace-nowrap rounded-xl px-2 py-1.5 text-sm",onClick:()=>{S({...a,visibility:+!a.visibility}).then(()=>{o("操作成功","success"),t()}).catch(i=>o(i.message,"error"))},children:"设置可见性"}),e(N,{name:"banner",accept:"image/png, image/jpeg",placeholder:"上传封面",className:"whitespace-nowrap rounded-xl px-2 py-1.5 text-sm",onChange:i=>{z(`blogs/${a.id}`,i).then(()=>o("上传成功","success")).catch(n=>o(n.message,"error"))}})]},"blogs"),e(w,{title:"番剧管理",dataKey:"animes",request:A,postData:a=>a.map(t=>(t.updated=new Date(t.updated).toLocaleString(),t.created=new Date(parseInt(t.id,36)).toLocaleString(),t)),actions:(a,t)=>[e(N,{name:"banner",accept:"image/png, image/jpeg",placeholder:"上传封面",className:"whitespace-nowrap rounded-xl px-2 py-1.5 text-sm",onChange:i=>{z(`animes/${a.id}`,i).then(()=>o("上传成功","success")).catch(n=>o(n.message,"error"))}})]},"animes")]})}export{B as default};