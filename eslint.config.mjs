import uni from '@uni-helper/eslint-config'

export default uni(
  {
    unocss: true,
    rules: {
      'no-console': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
    },
  },
)
