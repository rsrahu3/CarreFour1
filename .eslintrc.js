module.exports = {
  extends: 'rallycoding',
  // parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'no-unused-expressions': 'off',
    'function-paren-newline': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'no-useless-concat': 'off',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'react/sort-comp': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'prefer-template': 'off',
    'no-plusplus': 'off',
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
    'import/no-extraneous-dependencies': 'off'
  }
};
