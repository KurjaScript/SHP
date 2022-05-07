1. vue-cli 脚手架初始化项目
node + webpack + 淘宝镜像

node_modules 文件夹：项目依赖文件夹

public 文件夹：一般放置一些静态资源，比如图片，需要注意，放在 public 文件夹中的静态资源，webpack 进行打包的时候会原封不动打包到 dist 文件夹中。

src 文件夹（源代码文件夹）：
    assets 文件夹：一般也是放置静态资源（一般放置多个组件共用的静态资源），需要注意，放置在 assets 文件夹里面的静态资源，在 webpack 打包的时候，webpack 会把静态资源当做一个模块，打包到 JS 文件里面。
    components 文件夹：一般放置的是非路由组件（全局组件）
    App.vue：唯一的根组件，Vue 当中的组件（.vue）
    main.js：程序的入口文件，也是整个程序最先执行得文件

babel.config.js 文件：配置文件（babel 相关）

package.json 文件：项目的‘身份证’，记录项目叫做什么、项目当中有哪些依赖、项目怎么运行。

package-lock.json：缓存性文件

2. 项目的其他配置
2.1 项目运行起来的时候，让浏览器自动打开
--- package.json
 "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

  2.2 eslint 校验功能关闭
  --- 在根目录下，创建一个 vue.config.js，在里面配置：
  module.exports = {
      // 关闭 eslint
      lintOnSave: false
  }
  比如，声明一个变量却没有使用，eslint 校验工具会报错

  2.3 src 文件夹简写方式，配置别名。@
  在根目录中创建 jsconfig.json 文件，配置别名 @ 提示
  {
      "compilerOptions": {
          "baseUrl": "./",
          "path": {
              "@/*": ["src/*"]
          }
      },
      "exclude": ["node_modules", "dist"]
  }

3. 项目路由的分析
前端所谓路由：KV 键值对
key：URL（地址标签栏中的路径）
value：响应的路由组件
注意：项目上中下结构

路由组件：
HOME 首页路由组件、Search 搜索路由组件、login 登录路由、register 注册路由
非路由组件：
Header（在以上四个组件）、Footer（在首页、搜索页，不在登录页和注册页）

4. 完成非路由组件 Header 和 Footer 的业务
在项目中，不再以 HTML + CSS 为主，主要搞业务、逻辑
在开发项目的时候：
(1) 书写静态页面 (HTML + CSS)
(2) 拆分组件
(3) 获取服务器的数据动态展示
(4) 完成相应的动态业务逻辑

注意1：创建组件的时候，组件结构 + 组件样式 + 图片资源
注意2：项目采用 less 样式，浏览器不识别 less 样式，需要通过 less、less-loader 进行处理 less，把 less 样式变为 css 样式，浏览器才可以识别。
cnpm install --save less less-loader@5
注意3：如果想让组件识别 less 样式，需要 style 标签上加上 lang="less"

4.1 使用组件的步骤(非路由组件)
-创建或定义组件
-引入
-注册

