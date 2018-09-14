module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'BloomConditionals',
      externals: {
        react: 'React'
      }
    }
  }
}
