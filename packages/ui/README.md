# 功能

- 集成`shadcn-ui`
-

# 说明

`shadcn-ui` 并不是一个独立发布的组件库，我们只是把各个组件的源码放在这个项目里，需要注意一下事项：

- 各个组件可以被monorepo中的各个项目应用
- 这个项目不会执行构建和编译，构建和编译的过程在引用的项目里进行
- 谁引用、谁构建，所以要在引用的项目里配置`next.config.js`

```js
// ......
/** @type {import("next").NextConfig} */
const config = {
// ......
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@acme/ui",
  ],
// ......
};
export default config;

```
