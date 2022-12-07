import{d as a,c as l,g as s,h as n,t as e,u as o,a as p,o as t}from"./app.9314e45f.js";const u="2.3.0",c=s("h1",{id:"get-started",tabindex:"-1"},[n("Get Started "),s("a",{class:"header-anchor",href:"#get-started","aria-hidden":"true"},"#")],-1),r=s("p",null,[s("strong",null,"@flypeng/tool"),n(" \u662F\u4E00\u4E2A\u96C6\u6210\u5404\u79CD\u5B9E\u7528\u529F\u80FD\u7684\u5F00\u53D1\u5DE5\u5177\u7BB1")],-1),i=p(`<h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C9D1D9;">npm install @flypeng/tool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">yarn add @flypeng/tool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">pnpm install @flypeng/tool</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#24292F;">npm install @flypeng/tool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">yarn add @flypeng/tool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">pnpm install @flypeng/tool</span></span>
<span class="line"></span></code></pre></div><h2 id="usage-example" tabindex="-1">Usage Example <a class="header-anchor" href="#usage-example" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { useRandomInteger, useIsMobile } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@flypeng/tool&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">isMobile</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useIsMobile</span><span style="color:#C9D1D9;">() </span><span style="color:#8B949E;">// isMobile is Boolean</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">randomInteger</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useRandomInteger</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">100</span><span style="color:#C9D1D9;">) </span><span style="color:#8B949E;">// Integer in [10, 100]</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { useRandomInteger, useIsMobile } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;@flypeng/tool&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">isMobile</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useIsMobile</span><span style="color:#24292F;">() </span><span style="color:#6E7781;">// isMobile is Boolean</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">randomInteger</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useRandomInteger</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">10</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">100</span><span style="color:#24292F;">) </span><span style="color:#6E7781;">// Integer in [10, 100]</span></span>
<span class="line"></span></code></pre></div><h2 id="project-introduction" tabindex="-1">Project introduction <a class="header-anchor" href="#project-introduction" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u7684\u7075\u611F\u6765\u81EA\u4E8E VueUse\u3002\u5F00\u53D1\u8FD9\u6837\u4E00\u4E2A\u5DE5\u5177\u5E93\u6765\u7528\u4E8E\u5E73\u65F6\u5F00\u53D1\u4E2D\uFF0C\u53EF\u4EE5\u6781\u5927\u7684\u63D0\u9AD8\u5F00\u53D1\u8005\u7684\u6548\u7387</p><p><strong>@flypeng/tool</strong>\uFF1A</p><ol><li><p>\u4F7F\u7528 TypeScript \u8BED\u8A00 \u914D\u7F6E Rollup \u6253\u5305\u5DE5\u5177\u8FDB\u884C\u5B9E\u7528\u51FD\u6570\u7684\u7F16\u5199\u548C\u6253\u5305</p></li><li><p>\u4F7F\u7528 vitest \u8FDB\u884C\u529F\u80FD\u6D4B\u8BD5\uFF0C\u6BCF\u4E2A\u5B9E\u7528\u51FD\u6570\u5E94\u914D\u5907 <code>index.test.ts</code> \u6D4B\u8BD5\u6587\u4EF6</p></li><li><p>\u5DE5\u5177\u7BB1\u4F7F\u7528 vitepress \u6587\u6863\uFF0C\u5404\u79CD\u5B9E\u7528\u51FD\u6570 Introduction\u3001\u5728\u7EBF Demo \u6F14\u793A\u7F16\u5199\u3002\u786E\u4FDD\u5728\u4E0D\u597D\u4E66\u5199\u6D4B\u8BD5\u7528\u4F8B\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FDB\u884C Demo \u6F14\u793A</p></li></ol>`,8),g=JSON.parse('{"title":"Get Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Usage Example","slug":"usage-example","link":"#usage-example","children":[]},{"level":2,"title":"Project introduction","slug":"project-introduction","link":"#project-introduction","children":[]}],"relativePath":"guide/index.md"}'),F={name:"guide/index.md"},C=a({...F,setup(d){return(y,D)=>(t(),l("div",null,[c,r,s("p",null,[n("\u5F53\u524D\u7248\u672C\uFF1A"),s("span",null,e(o(u)),1)]),i]))}});export{g as __pageData,C as default};
