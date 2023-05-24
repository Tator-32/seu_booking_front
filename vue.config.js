const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  devServer: {
    proxy: {
      '/api':{
        // /proxy_url 这个用来和根路径 baseURL 进行匹配
        target: 'https://apis.map.qq.com',  // 这个是填写跨域的请求域名+端口号，也就是要请求的URL(不包含URL路径)
        changeOrigin: true, 
        secure:false ,
        ws:true,
        pathRewrite: {   // 路径重写
            '^/api': '/' // 替换target中的请求地址，原请求为 http://127.0.0.1:8000/kuayu 实际请求为 http://127.0.0.1:8000/proxy_url/kuayu  
        }
      }
    }
  },
})
