import{C as h}from"./chunks/index.CCuBRy9A.js";import{d as n,h as p,j as k,o as l,c as t,k as C,_ as A,P as r,G as E,w as o,B as d}from"./chunks/framework.otdKWnXz.js";const F=n({__name:"index",setup(e){const i=p(null);k(()=>{i.value=document.querySelector("h2#introduction")});const s=()=>{h(i.value)};return(a,c)=>(l(),t("div",null,[C("button",{onClick:s},"点击滚动到Introduction节点上")]))}}),D=A(F,[["__scopeId","data-v-d20606b8"]]),u=JSON.parse('{"title":"useScrollToElement","description":"","frontmatter":{},"headers":[],"relativePath":"Dom/useScrollToElement/index.md","filePath":"Dom/useScrollToElement/index.md","lastUpdated":1728703670000}'),B={name:"Dom/useScrollToElement/index.md"},m=n({...B,setup(e){return(i,s)=>{const a=d("demo-preview");return l(),t("div",null,[s[0]||(s[0]=r(`<h1 id="usescrolltoelement" tabindex="-1">useScrollToElement <a class="header-anchor" href="#usescrolltoelement" aria-label="Permalink to &quot;useScrollToElement&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>滚动到对应DOM元素节点上</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useScrollToElement } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@flypeng/tool/browser&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useScrollToElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HTMLElement);</span></span></code></pre></div><h2 id="type-declaration" tabindex="-1">Type Declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type Declaration&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 滚动到对应DOM元素节点上</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useScrollToElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">element</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HTMLElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="online-demo" tabindex="-1">Online Demo <a class="header-anchor" href="#online-demo" aria-label="Permalink to &quot;Online Demo&quot;">​</a></h2>`,8)),E(a,{title:"useScrollToElement",description:"滚动到对应DOM元素节点上",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbutton%20@click=%22scroolToIntroduction%22%3E%E7%82%B9%E5%87%BB%E6%BB%9A%E5%8A%A8%E5%88%B0Introduction%E8%8A%82%E7%82%B9%E4%B8%8A%3C/button%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A%0A%3Cscript%20lang=%22ts%22%20setup%3E%0Aimport%20%7B%20onMounted,%20ref%20%7D%20from%20'vue';%0Aimport%20%7B%20useScrollToElement%20%7D%20from%20'@flypeng/tool/browser';%0A%0Aconst%20introductionNode%20=%20ref%3CHTMLElement%20%7C%20null%3E(null);%0A%0AonMounted(()%20=%3E%20%7B%0A%20%20introductionNode.value%20=%20document.querySelector('h2#introduction');%0A%7D);%0A%0Aconst%20scroolToIntroduction%20=%20()%20=%3E%20%7B%0A%20%20useScrollToElement(introductionNode.value!);%0A%7D;%0A%3C/script%3E%0A%0A%3Cstyle%20scoped%3E%0Abutton%20%7B%0A%20%20padding:%204px%208px;%0A%20%20border-radius:%204px;%0A%20%20color:%20#ffffff;%0A%20%20background-color:%20var(--vp-c-brand);%0A%7D%0A%3C/style%3E%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20shiki-themes%20github-light%20github-dark%20vp-code%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20%40click%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22scroolToIntroduction%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%E7%82%B9%E5%87%BB%E6%BB%9A%E5%8A%A8%E5%88%B0Introduction%E8%8A%82%E7%82%B9%E4%B8%8A%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20onMounted%2C%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'vue'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20useScrollToElement%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'%40flypeng%2Ftool%2Fbrowser'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20introductionNode%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EHTMLElement%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20%7C%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20null%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonMounted%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20introductionNode.value%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20document.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EquerySelector%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'h2%23introduction'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%7D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20scroolToIntroduction%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20%20useScrollToElement%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(introductionNode.value%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E!%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20scoped%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20padding%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E4%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%208%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20border-radius%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E4%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20color%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%23ffffff%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20background-color%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3Evar%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23E36209%3B--shiki-dark%3A%23FFAB70%22%3E--vp-c-brand%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"/home/runner/work/flypeng-tool/flypeng-tool/docs/Dom/useScrollToElement/index.vue",relativePath:"./index.vue"},{default:o(()=>[E(D)]),_:1})])}}});export{u as __pageData,m as default};
