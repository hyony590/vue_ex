const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {  //HTR(핫모듈교체)기능 구현
    hot: true
  }
})
