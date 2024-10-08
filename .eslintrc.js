const { eslint } = require('@mkas3/eslint');

module.exports = {
  ...eslint.next,
  overrides: [
    {
      ...eslint.next.overrides[0],
      rules: {
        ...eslint.next.overrides[0].rules,
        '@typescript-eslint/no-misused-promises': 'off'
      }
    }
  ]
};
