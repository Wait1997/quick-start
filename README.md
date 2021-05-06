# quick-start

### eslint 与 prettier

- eslint 定义代码约定
- prettier 执行自动格式化基础上 ESLint 规则

### prettier

1. `npm install --save-dev prettier`

   - 安装依赖文件

2. `touch .prettierrc`

   - 终端输入
   - 生成一个 JSON 文件.prettierrc 以将我们的配置放入其中

   ```json
   # semi 末尾是否添加分号
   # Object、Array最后是否添加逗号
   # singleQuote 是否使用单引号
   # printWidth 但行字符最长的长度
   {
     "semi": true,
     "trailingComma": "none",
     "singleQuote": true,
     "printWidth": 80
   }
   ```

3. `npm install --save-dev eslint-config-prettier eslint-plugin-prettier`
   - eslint-config-prettier：关闭所有可能干扰 Prettier 规则的 ESLint 规则
   - eslint-plugin-prettier：将更漂亮的规则转换为 ESLint 规则

### eslint

plugins

- elsint
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin

1. `eslint-config-airbnb` 使用
   package:
   - eslint-config-airbnb
   - eslint
   - eslint-plugin-import
   - eslint-plugin-react
   - eslint-plugin-react-hooks
   - eslint-plugin-jsx-a11y
     > eslint-config-airbnb 开启(react-hooks)使用 需要在 extends 中 add `['airbnb','airbnb/hooks']`
2. `@typescript-eslint/eslint-plugin` 使用
   package:

   - @typescript-eslint/parser
   - @typescript-eslint/eslint-plugin
     > tips:
     > It is important that you use the same version number for @typescript-eslint/parser and @typescript-eslint/eslint-plugin
     > use:

   ```javaScript
   {
     "parser": "@typescript-eslint/parser",
     "plugins": ["@typescript-eslint"],
     "rules": {
       "@typescript-eslint/rule-name": "error"
     }
   }
   #or
   {
     "extends": ["plugin:@typescript-eslint/recommended"]
   }
   ```

3. `eslint-plugin-promise` 使用 Promise 语法写成最佳实践
   package:

   - npm install eslint-plugin-promise --save-dev
     use:

   ```javaScript
   # 使用推荐的语法
   {
     "extends": ["plugin:promise/recommended"]
   }
   ```

4. `eslint-plugin-unicorn`使用 提供了更多有用的配置项，比如我会用来规范关于文件命名的方式
   package:
   - npm install --save-dev eslint eslint-plugin-unicorn
     use:
   ```javaScript
   # 使用推荐的语法
   {
     "extends": ["plugin:promise/recommended"]
   }
   ```
5. `eslint-config-prettier` 使用 插件会禁用所有和 prettier 起冲突的规则
   package:
   - npm install eslint-config-prettier -D

### stylelint

> npm install stylelint stylelint-config-standard -D

1. 然后在项目根目录新建 .stylelintrc.js 文件，输入以下内容
   ```javaScript
   # glob模式
   module.exports = {
      extends: ['stylelint-config-standard'],
      rules: {
       'comment-empty-line-before': null,
       'declaration-empty-line-before': null,
       'function-name-case': 'lower',
       'no-descending-specificity': null,
       'no-invalid-double-slash-comments': null,
       'rule-empty-line-before': 'always',
      },
      ignoreFiles: ['node_modules/**/*', 'build/**/*']
   }
   ```
2. 优秀的 plugins

   ```shell
   npm install stylelint-order stylelint-config-rational-order stylelint-declaration-block-no-ignored-properties -D

   ```

### tool

1. `.gitignore` 输入 Add gitignore 命令 生成 .gitignore 文件
2. `.npmrc` 终端 `touch .npmrc` 命令 在该文件内输入配置 `registry=https://registry.npm.taobao.org/`

### EditorConfig 统一编辑器风格

1. vscode 安装相应的扩展 EditorConfig For vs Code
2. vscode 中使用快捷键 ctrl+shift+p 打开命令台，输入 Generate .editorcofig 即可快速生成 .editorconfig 文件
