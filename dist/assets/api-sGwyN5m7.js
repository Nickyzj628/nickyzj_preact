import{v as e,f as t,a as o}from"./index-BY5sadQB.js";const w=async()=>{const r=await e.get("shanbay").json();if(r.statusCode!==200)throw new Error(r.message);return r},m=async(r={})=>{const s=await e.get("blogs",{searchParams:r}).json();if(s.statusCode!==200)throw new Error(s.message);return r.from_now&&(s.blogs=s.blogs.map(a=>({...a,from_now:t(parseInt(a.id,36),typeof r.from_now=="string"?r.from_now:void 0)}))),s},i=async r=>{const s=await e.get(`blogs/${r}`).json();if(s.statusCode!==200)throw new Error(s.message);return s.from_now=t(parseInt(s.id,36)),s},g=async r=>{if(!r.id)return o("请传入文章id","warning");const s=await e.put(`blogs/${r.id}`,{json:r}).json();if(s.statusCode!==200)throw new Error(s.message);return!0},c=async(r={})=>{const s=await e.get("animes",{searchParams:r}).json();if(s.statusCode!==200)throw new Error(s.message);return r.from_now&&(s.animes=s.animes.map(a=>({...a,from_now:t(a.updated,typeof r.from_now=="string"?r.from_now:void 0)}))),s},f=async r=>{const s=await e.get(`animes/${r}`).json();if(s.statusCode!==200)throw new Error(s.message);return s},d=async(r,s)=>{const a=await e.put(r,{body:s}).json();if(a.statusCode!==200)throw new Error(a.message);return a};export{m as a,c as b,i as c,f as d,w as g,g as s,d as u};
