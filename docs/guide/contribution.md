# Contribution

## Development

Clone 本仓库到本地并且安装依赖

::: code-group

```sh [npm]
npm install
```

```sh [yarn]
yarn install
```

```sh [pnpm]
pnpm install
```

:::

- 开发调试工具函数运行 `dev` 命令
- 编写工具函数文档运行 `docs:dev` 命令

## Contributing

### Existing functions

对于已存在的函数如果有更好的写法或优化，可进行讨论并修改

### New functions

:::tip

对于开发新函数首先先确认是否是需要使用 Node 环境下的的 API。如果是 Node 环境下的钩子函数请在 `packages/Node/useNodeHook.ts` 文件下进行编写，然后在 `packages/Node/index.ts` 文件中按照已有的钩子函数添加一条注释代码（为了读取 Node 模块下钩子函数的名称以便于文档的生成）。

:::

准备开发新函数时，项目的根目录下存在 Template 目录，里面有 Docs Template、Function Template，请根据模板进行书写或者按照已有的钩子函数进行编码。

函数尽量编写测试用例和 Demo 演示，函数文档尽量书写简洁规范。

### About Test

针对测试用例的编写，由于相关钩子功能预览需要在文档中展示，但是在浏览器下 Node 环境的 API 无法使用。所以如果是 `@flypeng/node` 包中的钩子函数，请在 `playground` 编写测试用例并且运行 `pnpm run test:node` 来查看效果

而非 Node 环境下的钩子函数尽量编写测试用例并且在文档中进行展示

## Other Attention

其他注意事项参考 [Create Function](./devFunction.md#attention) 内容
