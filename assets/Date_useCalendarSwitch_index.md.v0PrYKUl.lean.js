import{m as p,b as k}from"./chunks/index.esm.XcO1EnRr.js";import{d as t,o as l,c as h,t as E,m as r,D as d,I as n,w as C,R as y}from"./chunks/framework.VePiZCsH.js";const F=t({__name:"index",setup(e){const s=p("yyyy-MM-dd"),i=k(s,"lunar");return(a,o)=>(l(),h("div",null,E(r(i)),1))}}),g=y(`<h1 id="usecalendarswitch" tabindex="-1">useCalendarSwitch <a class="header-anchor" href="#usecalendarswitch" aria-label="Permalink to &quot;useCalendarSwitch&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>获取当前日期阳历或阴历的信息</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useCalendarSwitch } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@flypeng/tool/browser&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="type-declaration" tabindex="-1">Type Declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type Declaration&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 获取当前日期阳历或阴历的信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> date</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">: date format yyyy-MM-dd</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">: &#39;solar&#39; | &#39;lunar&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useCalendarSwitch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;solar&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lunar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  | {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      lYear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      lMonth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      lDay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      Animal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      IMonthCn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      IDayCn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      cYear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      cMonth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      cDay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      gzYear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      gzMonth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      gzDay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      isToday</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: boolean;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      isLeap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: boolean;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      nWeek</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      ncWeek</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      isTerm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: boolean;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      Term</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      astro</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span></code></pre></div><h2 id="online-demo" tabindex="-1">Online Demo <a class="header-anchor" href="#online-demo" aria-label="Permalink to &quot;Online Demo&quot;">​</a></h2>`,8),B=JSON.parse('{"title":"useCalendarSwitch","description":"","frontmatter":{},"headers":[],"relativePath":"Date/useCalendarSwitch/index.md","filePath":"Date/useCalendarSwitch/index.md","lastUpdated":1702349496000}'),A={name:"Date/useCalendarSwitch/index.md"},u=t({...A,setup(e){return(s,i)=>{const a=d("demo-preview");return l(),h("div",null,[g,n(a,{title:"useCalendarSwitch",description:"获取当前日期阳历或阴历的信息",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%7B%7B%20todayDateInfo1%20%7D%7D%3C/div%3E%0A%3C/template%3E%0A%0A%3Cscript%20setup%20lang=%22ts%22%3E%0Aimport%20%7B%20useFormatDate,%20useCalendarSwitch%20%7D%20from%20'@flypeng/tool/browser';%0A%0Aconst%20todayDate%20=%20useFormatDate('yyyy-MM-dd');%0Aconst%20todayDateInfo1%20=%20useCalendarSwitch(todayDate,%20'lunar');%0A%3C/script%3E%0A%0A%3Cstyle%3E%3C/style%3E%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20shiki-themes%20github-light%20github-dark%20vp-code%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%7B%7B%20todayDateInfo1%20%7D%7D%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20useFormatDate%2C%20useCalendarSwitch%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'%40flypeng%2Ftool%2Fbrowser'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20todayDate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20useFormatDate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'yyyy-MM-dd'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20todayDateInfo1%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20useCalendarSwitch%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(todayDate%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'lunar'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"/home/runner/work/flypeng-tool/flypeng-tool/docs/Date/useCalendarSwitch/index.vue",relativePath:"./index.vue"},{default:C(()=>[n(F)]),_:1})])}}});export{B as __pageData,u as default};