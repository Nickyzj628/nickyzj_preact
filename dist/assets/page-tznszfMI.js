import{u,h as i,y as w,a as c,b as e,g as N,t as r,c as m,f as v}from"./index-BY5sadQB.js";import{C as n}from"./Card-ClcYyNh3.js";import{g as b,T as o,a as z}from"./Title-DF3jQ7SB.js";import{g as $,a as k,b as _}from"./api-sGwyN5m7.js";import"./Image-CjgMHeUq.js";function I(){const{user:d}=u(),[a,f]=i(),[x,h]=i([]),[p,g]=i([]);return w(()=>{$().then(f).catch(t=>c(t.message,"error")),k({from_now:!0}).then(t=>h(t.blogs.filter(l=>l.visibility===1).slice(0,3))).catch(t=>c(t.message,"error")),_({from_now:"day"}).then(t=>g(Object.values(b(t.animes.filter(l=>parseInt(l.from_now)<=7),l=>l.from_now)))).catch(t=>c(t.message,"error"))},[]),e("div",{className:"bento flex flex-1 flex-col gap-x-3 gap-y-5",children:[e("div",{children:[e("h4",{className:"text-zinc-400 dark:text-zinc-500",children:[N(),"好，欢迎回来："]}),e("h1",{children:d.name})]}),e("div",{className:"flex flex-col flex-wrap gap-5 sm:flex-row",children:[e("div",{className:"flex h-[30rem] flex-col gap-1 sm:aspect-[2/3] sm:h-[35rem]",children:[e(o,{className:"text-blue-300",children:"每日一句"}),e(n,{image:a==null?void 0:a.image,title:a==null?void 0:a.content,description:a==null?void 0:a.translation,extra:r((a==null?void 0:a.author)&&`-- ${a.author}`),className:"flex-1",captionClassName:"!max-h-full",titleClassName:"text-xl !overflow-auto !whitespace-normal",extraClassName:"text-right"})]}),e("div",{className:"flex h-[30rem] flex-col gap-1 sm:aspect-[2/3] sm:h-[35rem]",children:[e(o,{className:"text-red-300",children:"近期文章"}),e("div",{className:"flex-1 overflow-hidden rounded-xl bg-zinc-100 transition dark:bg-zinc-700",children:x.map((t,l)=>{const s=Date.now()-t.updated<259200200;return e("a",{href:`/blogs/${t.id}`,className:"relative block h-1/3",children:[e("img",{src:m(`/Blogs/${t.id}.webp`),alt:"",className:"size-full"}),e("div",{className:r("group absolute left-0 top-0 flex size-full flex-col items-center justify-center gap-px transition",l===0?"bg-black/20":"bg-black/50 hover:bg-black/20"),children:[e("h4",{className:r(l===0?"text-white":"text-zinc-200 group-hover:text-white"),children:t.title}),e("div",{className:r("text-sm",l===0?"text-white":"text-zinc-200 group-hover:text-white"),children:[e("span",{children:s?v(t.updated):t.from_now}),s&&e("span",{className:"badge ml-1",children:"更新"})]})]})]},t.id)})})]}),e("div",{className:"flex w-full flex-col gap-1 xl:h-[35rem] xl:flex-1",children:[e(o,{className:"text-yellow-300",children:"本月番剧"}),e("div",{className:"flex-1 overflow-y-auto rounded-xl bg-zinc-100 px-3 pt-3 transition dark:bg-zinc-700",children:p.map((t,l)=>e(z,{time:t.at(-1).from_now,className:"flex flex-wrap gap-3",children:t.map(s=>e("a",{href:`/animes/${s.id}?ep=${s.eps}`,children:e(n,{className:"w-32 sm:w-36",image:m(`/Animes/${s.id}.webp`),title:s.title,description:`第${s.eps}话`,extra:`收录于${s.cate}`})},s.id))},l))})]})]})]})}export{I as default};
