import{b as t,D as c}from"./chunks/bundle.707cfd16.js";import{d as a,o as l,c as o,t as r,u as y,e as n,w as u,f as i}from"./app.5c6e67ed.js";const A=a({__name:"index",setup(p){const s=t();return(e,D)=>(l(),o("div",null,r(y(s)),1))}}),B=i(`<h1 id="uselocationinfo" tabindex="-1">useLocationInfo <a class="header-anchor" href="#uselocationinfo" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u4ECB\u7ECD" tabindex="-1">\u57FA\u672C\u4ECB\u7ECD <a class="header-anchor" href="#\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u5F53\u524D\u9875\u9762\u94FE\u63A5\u76F8\u5173\u4FE1\u606F</p><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useLocationInfo</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@flypeng/tool&#39;</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">locationInfo</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useLocationInfo</span><span style="color:#858585;">()</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useLocationInfo</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@flypeng/tool&#39;</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">locationInfo</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useLocationInfo</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B\u578B\u58F0\u660E" tabindex="-1">\u7C7B\u578B\u58F0\u660E <a class="header-anchor" href="#\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">interface</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">LocationInfo</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">href</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">hostname</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">port</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">number</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">pathname</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">params</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">hash</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * \u8FD4\u56DE\u5F53\u524D\u9875\u9762\u94FE\u63A5\u76F8\u5173\u4FE1\u606F</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">returns</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useLocationInfo</span><span style="color:#858585;">()</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Readonly</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">Partial</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">LocationInfo</span><span style="color:#858585;">&gt;&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">null</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">LocationInfo</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">href</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">hostname</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">port</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">number</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">pathname</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">params</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">hash</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * \u8FD4\u56DE\u5F53\u524D\u9875\u9762\u94FE\u63A5\u76F8\u5173\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">returns</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useLocationInfo</span><span style="color:#8E8F8B;">()</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Readonly</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">Partial</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">LocationInfo</span><span style="color:#8E8F8B;">&gt;&gt;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">null</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5728\u7EBF\u6F14\u793A" tabindex="-1">\u5728\u7EBF\u6F14\u793A <a class="header-anchor" href="#\u5728\u7EBF\u6F14\u793A" aria-hidden="true">#</a></h2>`,8),h=JSON.parse('{"title":"useLocationInfo","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4ECB\u7ECD","slug":"\u57FA\u672C\u4ECB\u7ECD"},{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u7C7B\u578B\u58F0\u660E","slug":"\u7C7B\u578B\u58F0\u660E"},{"level":2,"title":"\u5728\u7EBF\u6F14\u793A","slug":"\u5728\u7EBF\u6F14\u793A"}],"relativePath":"common/useLocationInfo/index.md"}'),C={name:"common/useLocationInfo/index.md"},E=a({...C,setup(p){return(s,e)=>(l(),o("div",null,[B,n(c,null,{default:u(()=>[n(A)]),_:1})]))}});export{h as __pageData,E as default};