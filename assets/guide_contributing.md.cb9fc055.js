import{_ as e,c as n,o as t,a as o}from"./app.4bb9f0d6.js";const f=JSON.parse('{"title":"Contributing","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduce","slug":"introduce","link":"#introduce","children":[]},{"level":2,"title":"Development","slug":"development","link":"#development","children":[]},{"level":2,"title":"Contributing","slug":"contributing-1","link":"#contributing-1","children":[{"level":3,"title":"Existing functions","slug":"existing-functions","link":"#existing-functions","children":[]},{"level":3,"title":"New functions","slug":"new-functions","link":"#new-functions","children":[]},{"level":3,"title":"About Test","slug":"about-test","link":"#about-test","children":[]}]},{"level":2,"title":"Other Attention","slug":"other-attention","link":"#other-attention","children":[]}],"relativePath":"guide/contributing.md"}'),i={name:"guide/contributing.md"},a=o(`<h1 id="contributing" tabindex="-1">Contributing <a class="header-anchor" href="#contributing" aria-hidden="true">#</a></h1><h2 id="introduce" tabindex="-1">Introduce <a class="header-anchor" href="#introduce" aria-hidden="true">#</a></h2><p><strong>@flypeng/tool</strong> 是一个集成平时开发中常用又实用的工具函数的这么一个工具箱。它就像是哆啦 A 梦的 <strong>百宝袋</strong> 是一个可以想用就可以掏出来的工具箱。</p><p>采用 Monnorepo 的形式，所以一共分为两大分包，<code>@flypeng/browser</code>（非 Node 环境下的 Hook（但包含 Browser 和 Node 环境都通用的模块）） 和 <code>@flypeng/node</code> （Node 环境下才可使用的 Hook）</p><h2 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-hidden="true">#</a></h2><p>Clone 本仓库到本地并且安装依赖</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C9D1D9;">pnpm install</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#24292F;">pnpm install</span></span>
<span class="line"></span></code></pre></div><p>启动两个终端后分别执行 <code>pnpm dev</code> 和 <code>pnpm docs:dev</code></p><p>后访问 <code>http://localhost:3000/flypeng-tool/</code></p><h2 id="contributing-1" tabindex="-1">Contributing <a class="header-anchor" href="#contributing-1" aria-hidden="true">#</a></h2><h3 id="existing-functions" tabindex="-1">Existing functions <a class="header-anchor" href="#existing-functions" aria-hidden="true">#</a></h3><p>对于已存在的函数如果有更好的写法或优化，可进行讨论并修改</p><h3 id="new-functions" tabindex="-1">New functions <a class="header-anchor" href="#new-functions" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>对于开发新函数首先先确认是否是需要使用 Node 环境下的的 API。如果是 Node 环境下的钩子函数请在 <code>packages/Node/useNodeHook.ts</code> 文件下进行开发，然后在 <code>packages/Node/index.ts</code> 文件中按照已有的钩子函数添加一条注释代码（为了读取 Node 模块下钩子函数的名称以便于文档的生成）。</p></div><p>准备开发新函数时，项目的根目录下存在 Template 目录，里面有 Docs Template、Function Template，请根据模板进行书写或者按照已有的钩子函数进行编码。</p><p>函数尽量编写测试用例和 Demo 演示，函数文档尽量书写简洁规范。</p><h3 id="about-test" tabindex="-1">About Test <a class="header-anchor" href="#about-test" aria-hidden="true">#</a></h3><p>针对测试用例的编写，由于相关钩子功能预览需要在文档中展示，但是在浏览器下 Node 环境的 API 无法使用。所以如果是 <code>@flypeng/node</code> 包中的钩子函数，请在 <code>playground</code> 编写测试用例并且运行 <code>pnpm run test:node</code> 来查看效果</p><p>而非 Node 环境下的钩子函数尽量编写测试用例并且在文档中进行展示</p><h2 id="other-attention" tabindex="-1">Other Attention <a class="header-anchor" href="#other-attention" aria-hidden="true">#</a></h2><p>其他注意事项参考 <a href="./devFunction.html#attention">Dev Function</a> 内容</p>`,21),s=[a];function d(c,r,l,p,h,u){return t(),n("div",null,s)}const b=e(i,[["render",d]]);export{f as __pageData,b as default};
