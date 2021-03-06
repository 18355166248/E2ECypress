const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true, // 支持extend方法内的template渲染dom
  // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
  chainWebpack: config => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('mixins', resolve('src/mixins'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
  },
}
