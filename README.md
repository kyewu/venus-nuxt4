# Nuxt Minimal Starter

Project includes Nuxt4, Vue3, Eslint9, prettier, typescript and Husky.
Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# 代码规范配置说明

本项目已配置完整的代码规范工具链，包括 ESLint、Prettier、EditorConfig 和 Git Hooks。

## 📦 已安装的配置

### 1. ESLint

- **配置位置**: `eslint.config.mjs`
- **使用**: `@nuxt/eslint` 模块提供的基础配置 + 自定义规则
- **自定义规则**:
  - Vue 组件命名规范
  - TypeScript 未使用变量检查
  - 代码质量规则（禁止 console、debugger 等）

### 2. Prettier

- **配置位置**: `.prettierrc.json`
- **忽略文件**: `.prettierignore`
- **格式化规则**:
  - 无分号
  - 单引号
  - 2 空格缩进
  - 100 字符行宽

### 3. EditorConfig

- **配置位置**: `.editorconfig`
- **统一编辑器行为**:
  - UTF-8 编码
  - LF 行尾
  - 2 空格缩进

### 4. Git Hooks (Husky + lint-staged)

- **配置位置**: `.husky/pre-commit`
- **功能**: 提交前自动运行 ESLint 和 Prettier

### 5. VS Code 配置

- **配置位置**: `.vscode/settings.json` 和 `.vscode/extensions.json`
- **功能**: 保存时自动格式化，推荐插件列表

## 🚀 安装步骤

### 第一步：解决 pnpm store 位置问题（如果遇到）

如果安装依赖时遇到 `ERR_PNPM_UNEXPECTED_STORE` 错误，执行：

```bash
# 删除旧的 node_modules（使用本地 store 时）
rm -rf node_modules

# 重新安装依赖
pnpm install
```

### 第二步：安装代码规范相关依赖

```bash
# 必需依赖
pnpm add -D prettier husky lint-staged

# 注意：eslint-config-prettier 和 eslint-plugin-prettier 不是必需的
# 当前配置采用分离方案，ESLint 和 Prettier 各司其职
# 如果将来需要在 ESLint 中集成 Prettier 检查，可以再安装这两个包
```

**注意**：如果遇到 store 位置错误，先执行第一步，然后再执行此步骤。

### 第三步：初始化 Husky

**注意**：Husky 9.x 版本不再需要手动运行 `husky install`，`package.json` 中的 `prepare` 脚本会自动处理。

如果需要手动验证，可以运行：

```bash
pnpm exec husky install
```

但通常不需要，因为 `prepare` 脚本会在 `pnpm install` 时自动运行。

### 第四步：验证配置

```bash
# 检查 ESLint
pnpm lint

# 检查 Prettier
pnpm format:check

# 自动修复代码格式
pnpm lint:fix
pnpm format
```

## 📝 可用脚本

在 `package.json` 中已添加以下脚本：

- `pnpm lint` - 运行 ESLint 检查
- `pnpm lint:fix` - 自动修复 ESLint 错误
- `pnpm format` - 使用 Prettier 格式化所有文件
- `pnpm format:check` - 检查文件是否符合 Prettier 格式

## 🔧 VS Code 插件推荐

项目已配置推荐插件列表，VS Code 会自动提示安装：

- ESLint (`dbaeumer.vscode-eslint`)
- Prettier (`esbenp.prettier-vscode`)
- EditorConfig (`editorconfig.editorconfig`)
- Volar (`vue.volar`) - Vue 3 支持
- TypeScript Vue Plugin (`vue.vscode-typescript-vue-plugin`)

## ⚙️ 配置说明

### ESLint 规则说明

- **Vue 规则**: 强制多词组件名（Index、About 等例外）、自闭合标签等
- **TypeScript 规则**: 检查未使用变量（以 `_` 开头的变量除外）、禁止使用 `any` 类型
- **通用规则**: 允许 `console.warn` 和 `console.error`，禁止 `debugger`

### Prettier 配置说明

- **代码风格**: 无分号、单引号、尾随逗号无
- **格式化**: 2 空格缩进、100 字符行宽

### Git Hooks 说明

提交代码时会自动：

1. 对修改的 `.js`, `.ts`, `.vue` 文件运行 ESLint 并自动修复
2. 对所有匹配的文件运行 Prettier 格式化

如果检查失败，提交将被阻止。

## 🔍 故障排除

### 问题 1: `.nuxt/eslint.config.mjs` 找不到

**原因**: `.nuxt` 目录是 Nuxt 构建时生成的  
**解决**: 运行 `pnpm dev` 或 `pnpm build` 生成该目录

### 问题 2: Husky hooks 不生效

**解决**:

```bash
pnpm exec husky install
chmod +x .husky/pre-commit
```

### 问题 3: Prettier 和 ESLint 冲突

**说明**: 当前配置采用分离方案，ESLint 负责代码质量检查，Prettier 负责格式化  
**验证**:

- 运行 `pnpm lint` 检查代码质量
- 运行 `pnpm format:check` 检查代码格式
- 两者通过 `lint-staged` 在 Git commit 时协同工作

## 📚 更多信息

- [Nuxt ESLint 文档](https://eslint.nuxt.com)
- [Prettier 文档](https://prettier.io/docs/en/)
- [EditorConfig 文档](https://editorconfig.org/)
- [Husky 文档](https://typicode.github.io/husky/)
