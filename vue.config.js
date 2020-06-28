module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 默认暴露
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
