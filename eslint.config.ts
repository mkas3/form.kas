import { eslint } from '@mkas3/eslint';

export default eslint({
  exports: true,
  imports: true,
  jsonc: false,
  jsxA11y: true,
  next: true,
  react: true,
  stylistic: true,
  tailwind: true,
  typescript: {
    filesTypeAware: [''],
    tsconfigPath: 'tsconfig.json'
  }
}, {
  rules: {
    'no-console': 'warn',
    'react-refresh/only-export-components': 'off'
  }
});
