import{d as r,a6 as p,o as t,c as n,F as h,E as u,m as k,k as e,t as m,_,I as g,a as s,R as v}from"./chunks/framework.VePiZCsH.js";const F=JSON.parse('[{"text":"Bom","link":"/Bom/useLocationInfo/"},{"text":"Common","link":"/Common/useCommonType/"},{"text":"Date","link":"/Date/useFormatDate/"},{"text":"Dom","link":"/Dom/useDownloadFile/"},{"text":"Number","link":"/Number/useRandomInteger/"},{"text":"Object","link":"/Object/useObjectIsEmpty/"},{"text":"Regexp","link":"/Regexp/useCheckPhoneNumber/"},{"text":"String","link":"/String/useCheckIncludeEmoji/"},{"text":"Node","link":"/Node/useGetCurrentPath"}]'),f={id:"modules-show-container"},E=["onClick"],b=r({__name:"DevFunctionModulesShow",setup(d){const i=p(),a=o=>{i.go(`/flypeng-tool${o.link}`)};return(o,I)=>(t(),n("div",f,[(t(!0),n(h,null,u(k(F),(l,c)=>(t(),n("div",{key:c},[e("span",{class:"item",onClick:S=>a(l)},"- "+m(l.text)+" Functions 模块",9,E)]))),128))]))}}),x=_(b,[["__scopeId","data-v-9384d8a6"]]),y=e("h1",{id:"dev-function",tabindex:"-1"},[s("Dev Function "),e("a",{class:"header-anchor",href:"#dev-function","aria-label":'Permalink to "Dev Function"'},"​")],-1),D=e("h2",{id:"introduction",tabindex:"-1"},[s("Introduction "),e("a",{class:"header-anchor",href:"#introduction","aria-label":'Permalink to "Introduction"'},"​")],-1),C=e("p",null,"当你准备新增函数时，根据新函数的特性来决定放置在哪个模块中，以便于能够快速找到该函数。",-1),B=e("p",null,[s("目前 "),e("strong",null,"@flypeng/tool"),s(" 已经存在如下工具模块：")],-1),N=v(`<p>添加新函数时，请运行 <code>pnpm run new</code> 来自动生成相关文件同时参考已存在函数的形式来进行开发</p><h2 id="attention-detail" tabindex="-1">Attention Detail <a class="header-anchor" href="#attention-detail" aria-label="Permalink to &quot;Attention Detail&quot;">​</a></h2><ol><li><p>函数命名统一： <code>useAaBb</code></p></li><li><p>函数统一被默认导出</p></li><li><p>函数命名时要确保名称唯一，不可重复</p></li></ol><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useAaBb } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@flypeng/tool/browser&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useAaBb } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@flypeng/tool/node&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,4),w=JSON.parse('{"title":"Dev Function","description":"","frontmatter":{},"headers":[],"relativePath":"guide/devFunction.md","filePath":"guide/devFunction.md","lastUpdated":1702349496000}'),A={name:"guide/devFunction.md"},O=r({...A,setup(d){return(i,a)=>(t(),n("div",null,[y,D,C,B,g(x),N]))}});export{w as __pageData,O as default};
