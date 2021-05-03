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
