import{c}from"./chunks/bundle.d93fd651.js";import{d as o,r as A,b as r,o as p,c as E,t as D,f as a,w as y,a as C,g as F}from"./app.fb09a375.js";const B=o({__name:"index",setup(e){const n=()=>window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,s=A(n()),t=c(()=>{s.value=n(),console.log("\u8282\u6D41\u51FD\u6570\u6267\u884C\u4E86",s.value)},1e3);return r(()=>{window.addEventListener("scroll",t)}),(m,g)=>(p(),E("div",null,"\u5F53\u524D\u5C4F\u5E55\u6EDA\u52A8\u9AD8\u5EA6\uFF1A"+D(s.value),1))}}),u=C(`<h1 id="usethrottle" tabindex="-1">useThrottle <a class="header-anchor" href="#usethrottle" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>\u8282\u6D41\u7684\u542B\u4E49\u5C31\u662F \u5728\u51FD\u6570\u6267\u884C\u4E00\u6B21\u540E\uFF0C\u8BE5\u51FD\u6570\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u671F\u9650\u5185\u4E0D\u5728\u5DE5\u4F5C\uFF0C\u76F4\u5230\u8FC7\u4E86\u8FD9\u6BB5\u65F6\u95F4\u624D\u80FD\u91CD\u65B0\u751F\u6548</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useThrottle</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@flypeng/tool</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">throttleFunction</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">useThrottle</span><span style="color:#666666;">(()</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{},</span><span style="color:#CB7676;"> </span><span style="color:#4C9A91;">1000</span><span style="color:#666666;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useThrottle</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@flypeng/tool</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">throttleFunction</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">useThrottle</span><span style="color:#999999;">(()</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{},</span><span style="color:#AB5959;"> </span><span style="color:#2F798A;">1000</span><span style="color:#999999;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="online-demo" tabindex="-1">Online Demo <a class="header-anchor" href="#online-demo" aria-hidden="true">#</a></h2>`,6),i=C(`<h2 id="type-declaration" tabindex="-1">Type Declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575DD;">/**</span></span>
<span class="line"><span style="color:#758575DD;"> * \u8282\u6D41\u51FD\u6570</span></span>
<span class="line"><span style="color:#758575DD;"> * </span><span style="color:#666666;">@</span><span style="color:#4D9375;">param</span><span style="color:#758575DD;"> </span><span style="color:#BD976A;">callback</span></span>
<span class="line"><span style="color:#758575DD;"> * </span><span style="color:#666666;">@</span><span style="color:#4D9375;">param</span><span style="color:#758575DD;"> </span><span style="color:#BD976A;">delay</span></span>
<span class="line"><span style="color:#758575DD;"> */</span></span>
<span class="line"><span style="color:#CB7676;">declare</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">useThrottle</span><span style="color:#666666;">(</span><span style="color:#80A665;">callback</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">Function</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">delay</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">number</span><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">void</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * \u8282\u6D41\u51FD\u6570</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#999999;">@</span><span style="color:#1E754F;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#B07D48;">callback</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#999999;">@</span><span style="color:#1E754F;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#B07D48;">delay</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useThrottle</span><span style="color:#999999;">(</span><span style="color:#59873A;">callback</span><span style="color:#999999;">: </span><span style="color:#2E808F;">Function</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">delay</span><span style="color:#999999;">: </span><span style="color:#2E808F;">number</span><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">void</span></span>
<span class="line"></span></code></pre></div>`,2),v=JSON.parse('{"title":"useThrottle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"Online Demo","slug":"online-demo","link":"#online-demo","children":[]},{"level":2,"title":"Type Declaration","slug":"type-declaration","link":"#type-declaration","children":[]}],"relativePath":"common/useThrottle/index.md"}'),d={name:"common/useThrottle/index.md"},f=o({...d,setup(e){return(n,s)=>{const l=F("demo-preview");return p(),E("div",null,[u,a(l,{title:"useThrottle",description:"\u8282\u6D41\u51FD\u6570\uFF1A\u5C4F\u5E55\u6EDA\u52A8\u4E8B\u4EF6\u793A\u4F8B",code:"%3Cscript%20lang=%22ts%22%20setup%3E%0A%20%20import%20%7B%20useThrottle%20%7D%20from%20'@flypeng/tool'%0A%20%20import%20%7B%20ref,%20onMounted%20%7D%20from%20'vue'%0A%20%20const%20getScrollTop%20=%20()%20=%3E%20window.pageYOffset%20%7C%7C%20document.body.scrollTop%20%7C%7C%20document.documentElement.scrollTop%0A%20%20const%20scrollTop%20=%20ref%3Cnumber%20%7C%20null%3E(getScrollTop())%0A%20%20const%20consoleScrollTop%20=%20()%20=%3E%20%7B%0A%20%20%20%20scrollTop.value%20=%20getScrollTop()%0A%20%20%20%20console.log('%E8%8A%82%E6%B5%81%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E4%BA%86',%20scrollTop.value)%0A%20%20%7D%0A%20%20const%20scrollFunction%20=%20useThrottle(consoleScrollTop,%201000)%0A%20%20onMounted(()%20=%3E%20%7B%0A%20%20%20%20window.addEventListener('scroll',%20scrollFunction)%0A%20%20%7D)%0A%3C/script%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%E5%BD%93%E5%89%8D%E5%B1%8F%E5%B9%95%E6%BB%9A%E5%8A%A8%E9%AB%98%E5%BA%A6%EF%BC%9A%7B%7B%20scrollTop%20%7D%7D%3C/div%3E%0A%3C/template%3E%0A",showCode:"%3Cpre%20v-pre%20class%3D%22vp-code-dark%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7DAA%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7DAA%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EuseThrottle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7DAA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3E%40flypeng%2Ftool%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7DAA%22%3E%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EonMounted%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7DAA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7DAA%22%3E%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3EgetScrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Ewindow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EpageYOffset%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%7C%7C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Edocument%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Ebody%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%7C%7C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Edocument%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EdocumentElement%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EscrollTop%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%235DA9A7%22%3Enumber%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20null%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3EgetScrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E())%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3EconsoleScrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3EgetScrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Econsole%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7DAA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3E%E8%8A%82%E6%B5%81%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E4%BA%86%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7DAA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EscrollFunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3EuseThrottle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EconsoleScrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234C9A91%22%3E1000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3EonMounted%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E(()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Ewindow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3EaddEventListener%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7DAA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Escroll%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7DAA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EscrollFunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%E5%BD%93%E5%89%8D%E5%B1%8F%E5%B9%95%E6%BB%9A%E5%8A%A8%E9%AB%98%E5%BA%A6%EF%BC%9A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7B%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22vp-code-light%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959AA%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959AA%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EuseThrottle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959AA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3E%40flypeng%2Ftool%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959AA%22%3E%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EonMounted%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959AA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959AA%22%3E%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3EgetScrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Ewindow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EpageYOffset%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%7C%7C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Edocument%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Ebody%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%7C%7C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Edocument%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EdocumentElement%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EscrollTop%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%232E808F%22%3Enumber%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20null%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3EgetScrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E())%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3EconsoleScrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3EgetScrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Econsole%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959AA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3E%E8%8A%82%E6%B5%81%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E4%BA%86%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959AA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EscrollFunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3EuseThrottle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EconsoleScrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%232F798A%22%3E1000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3EonMounted%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E(()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Ewindow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3EaddEventListener%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959AA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Escroll%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959AA%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EscrollFunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%E5%BD%93%E5%89%8D%E5%B1%8F%E5%B9%95%E6%BB%9A%E5%8A%A8%E9%AB%98%E5%BA%A6%EF%BC%9A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7B%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"},{default:y(()=>[a(B)]),_:1}),i])}}});export{v as __pageData,f as default};
