# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/flingyp/YToolUse/compare/v1.1.0...v1.2.0) (2022-07-25)


### ✏️ Documentation | 文档

* Get Started Perfect ([1680d65](https://github.com/flingyp/YToolUse/commit/1680d65c3abf0bbf6ad88424825be1cc524b0d11))


### ✨ Features | 新功能

* creat deply-docs actions ([11742fc](https://github.com/flingyp/YToolUse/commit/11742fce80a475edc1aed10aedcba8d2b99ceab1))
* **useIsMobile:** new Function ([0d9b51d](https://github.com/flingyp/YToolUse/commit/0d9b51d789690f384b239bee704440af1cec1d20))


### 🐛 Bug Fixes | Bug 修复

* 处理文档打包报 window is not defined错误 ([64e1bc7](https://github.com/flingyp/YToolUse/commit/64e1bc79635d3645db8cdab4c83e7a90e902ffeb))
* actions syntax error ([69145eb](https://github.com/flingyp/YToolUse/commit/69145eb5640ec9f98b8349f022fdc0c62091c055))
* actions syntax error ([f386759](https://github.com/flingyp/YToolUse/commit/f386759b04d2cb6a5bf061b59c6a1214e6dcc348))
* change build command ([fc97761](https://github.com/flingyp/YToolUse/commit/fc977619992c606f68b277ba751e044b51c734a1))
* change build path ([8d46db1](https://github.com/flingyp/YToolUse/commit/8d46db199d4c26d361a721f50ce50b25fe37f042))
* change gh-pages build folder ([e7ca96f](https://github.com/flingyp/YToolUse/commit/e7ca96f766813d8712a70c0a3eee376ff9437de1))
* docs install dependency ([d9ad80b](https://github.com/flingyp/YToolUse/commit/d9ad80b9fa85b12aada7c41ebcbb9020ec61d348))
* update deploy-docs file format ([c2dde3e](https://github.com/flingyp/YToolUse/commit/c2dde3ef96fa60e2fa816c6630caa63342fdcc17))

## [1.1.0](https://github.com/flingyp/YToolUse/compare/v1.0.0...v1.1.0) (2022-07-24)


### 📦‍ Build System | 打包构建

* auto generate entry file by buildEntry.ts script file ([7509b85](https://github.com/flingyp/YToolUse/commit/7509b85d84072c7975081950528df4cd736f635f))


### ✏️ Documentation | 文档

* 修改文档相关样式。站点图片，代码块 ([8b9ce96](https://github.com/flingyp/YToolUse/commit/8b9ce96bc0f6225f3b7e071f0662aa6e97cc03ad))
* **script/dosc.ts:** auto generate docs sideBar script file ([b3fafc0](https://github.com/flingyp/YToolUse/commit/b3fafc01192e9693b2c0a104bd8879342abfbee2))


### ✨ Features | 新功能

* 删除core模块，添加Number Functions模块 ([189e1ea](https://github.com/flingyp/YToolUse/commit/189e1ea8f28f9738150dbcbaac7625f0ee5d9f66))


### ♻️ Code Refactoring | 代码重构

* 添加template模板模块。docs模板、function模板 ([4c59c82](https://github.com/flingyp/YToolUse/commit/4c59c82b42e344c1aa9a025e0e8f38353332b382))

## 1.0.0 (2022-07-23)


### 🚀 Chore | 构建/工程依赖/工具

* delete @ytooluse/core package ([e3dcf26](https://github.com/flingyp/YToolUse/commit/e3dcf2637a6b57d315e96318e8c480d37d6f5e3e))
* delete first-release ([8259c2b](https://github.com/flingyp/YToolUse/commit/8259c2bb076997e63e45ff36d9b27601f3db27bf))
* **release:** 0.0.0 ([10eaead](https://github.com/flingyp/YToolUse/commit/10eaeadd9d43a77d7eee755db748be4f6d2e94ce))
* **release:** 0.0.1 ([a2d1399](https://github.com/flingyp/YToolUse/commit/a2d139920823a9729836cc3efbea5c8e674733a9))
* **release:** 0.1.0 ([8df5f0d](https://github.com/flingyp/YToolUse/commit/8df5f0d196a0b4239bb26657026e33724ca1f26c))
* **release:** 0.1.0 ([f4341e6](https://github.com/flingyp/YToolUse/commit/f4341e679a30c7698cc572d4d62c675d292afb83))
* **release:** 0.1.1 ([e609ca4](https://github.com/flingyp/YToolUse/commit/e609ca4a68e2d3a7feddefbd2f91e2b52a83e14e))
* update versionrc.json file ([3b69e92](https://github.com/flingyp/YToolUse/commit/3b69e92f7615f80faf5d65fa9babb624711d0ff8))


### 🐛 Bug Fixes | Bug 修复

* 处理execSync()命令无法正常进行问题 ([47ef7a1](https://github.com/flingyp/YToolUse/commit/47ef7a1ada9cec702d8eb1531d83e56117e48c5a))
* fix husky warining ([c0b3f02](https://github.com/flingyp/YToolUse/commit/c0b3f0244ff07f4c98b93dcd90c2cdb366b2447b))


### ♻️ Code Refactoring | 代码重构

* 发布时执行一次测试用例，watch=false ([22b5ac9](https://github.com/flingyp/YToolUse/commit/22b5ac940328d5a2e3563eebd5c3ca4f4793799b))


### ✨ Features | 新功能

* 更改包名为WebTool，初始化文档docs ([fef60a8](https://github.com/flingyp/YToolUse/commit/fef60a8d1724aac9538cf48c9c4388b6097b893b))
* add .versionrc.json file ([2a4084a](https://github.com/flingyp/YToolUse/commit/2a4084aee2863dd20898fd2f6fbf00315853a321))
* add eslint and prettier ([0b51cf9](https://github.com/flingyp/YToolUse/commit/0b51cf9c36e73a88e9eeb41c0fd07db7fbafc551))
* add vitest frame and useRandomInteger function ([9b1eb03](https://github.com/flingyp/YToolUse/commit/9b1eb03c302541802fffa8ab43dff8733ab8906b))
* config husky lint-staged commitlint commitizen ([b3157e6](https://github.com/flingyp/YToolUse/commit/b3157e6c3f6d470c28280f513f4870b4ccc68835))
* create script/release.ts to auto release ([b5e6b27](https://github.com/flingyp/YToolUse/commit/b5e6b2751d2a3281e894d119bfeb2199781a33a3))
* delete esbuild build tool ([d25b0ba](https://github.com/flingyp/YToolUse/commit/d25b0ba5ca3a82f3bf4f8d2c04764dc96d90af33))
* feat unbuild tool ([97b10f7](https://github.com/flingyp/YToolUse/commit/97b10f7f07c49a737d65b0e50a0167c8b37b7921))
* first publish ytooluse and @ytooluse/core packages ([7819724](https://github.com/flingyp/YToolUse/commit/7819724d97f4a40abcf28959a6c57c7799202f85))
* init ytools ([b1d435f](https://github.com/flingyp/YToolUse/commit/b1d435f85053c6b9691f03d421c36b1d1f1b0895))
* initial ([6442b64](https://github.com/flingyp/YToolUse/commit/6442b64e40c2ad9d007fba28d15901cf3da21111))
* integrate rollup bundle tool ([e8c112f](https://github.com/flingyp/YToolUse/commit/e8c112ff039f06a43bce564169af8e88944dc525))
* integrate workspace and add example list ([eb7145d](https://github.com/flingyp/YToolUse/commit/eb7145d93235027839e73d50c14b3249f29e53be))
* package name is @flypeng/tool ([cf086c9](https://github.com/flingyp/YToolUse/commit/cf086c99c8081c1e86fad4e2b6def2bde7e31d5a))
