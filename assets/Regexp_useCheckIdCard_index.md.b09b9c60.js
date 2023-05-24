import{_ as s,c as a,o as n,a as l}from"./app.86b6cb87.js";const C=JSON.parse('{"title":"useCheckIdCard","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"Type Declaration","slug":"type-declaration","link":"#type-declaration","children":[]}],"relativePath":"Regexp/useCheckIdCard/index.md","lastUpdated":1684897854000}'),e={name:"Regexp/useCheckIdCard/index.md"},p=l(`<h1 id="usecheckidcard" tabindex="-1">useCheckIdCard <a class="header-anchor" href="#usecheckidcard" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>校验身份证号码格式是否正确</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { useCheckIdCard } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@flypeng/tool/browser&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">isChecked</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useCheckIdCard</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;110101199006075838&#39;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { useCheckIdCard } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;@flypeng/tool/browser&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">isChecked</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useCheckIdCard</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;110101199006075838&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declaration" tabindex="-1">Type Declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;"> * 检测身份证号码是否有效</span></span>
<span class="line"><span style="color:#8B949E;"> * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#C9D1D9;">value</span></span>
<span class="line"><span style="color:#8B949E;"> * </span><span style="color:#FF7B72;">@returns</span></span>
<span class="line"><span style="color:#8B949E;"> */</span></span>
<span class="line"><span style="color:#FF7B72;">declare</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useCheckIdCard</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">value</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">)</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;"> * 检测身份证号码是否有效</span></span>
<span class="line"><span style="color:#6E7781;"> * </span><span style="color:#CF222E;">@param</span><span style="color:#6E7781;"> </span><span style="color:#24292F;">value</span></span>
<span class="line"><span style="color:#6E7781;"> * </span><span style="color:#CF222E;">@returns</span></span>
<span class="line"><span style="color:#6E7781;"> */</span></span>
<span class="line"><span style="color:#CF222E;">declare</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useCheckIdCard</span><span style="color:#24292F;">(</span><span style="color:#953800;">value</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">boolean</span></span>
<span class="line"></span></code></pre></div>`,7),o=[p];function c(t,r,i,d,y,F){return n(),a("div",null,o)}const u=s(e,[["render",c]]);export{C as __pageData,u as default};