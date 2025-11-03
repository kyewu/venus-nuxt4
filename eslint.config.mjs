// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Vue 相关规则
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default', 'Index', 'About', '[id]']
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 3 },
        multiline: { max: 1 }
      }
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below'
      }
    ],

    // TypeScript 相关规则
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',

    // 通用规则
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error'
  }
})

// 注意：
// - 当前配置采用分离方案：ESLint 负责代码质量检查，Prettier 负责格式化
// - Prettier 通过 package.json 中的 format 脚本和 lint-staged 独立运行
// - eslint-config-prettier 和 eslint-plugin-prettier 已安装但未在此配置中使用
//   如果将来需要让 ESLint 检查 Prettier 格式，可以取消注释并集成它们
