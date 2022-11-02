import { defineConfig } from 'umi';
const { resolve } = require('path');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 开启dva，在这里写就不用return返回state数据了
  dva:{immer:true},
  // 别名映射
  alias: {
    // api: resolve(__dirname, './src/services/'), 
    components: resolve(__dirname, './src/components'),
    // config: resolve(__dirname, './src/utils/config'),
    // themes: resolve(__dirname, './src/themes'),
    util: resolve(__dirname, './src/util'),
    common: resolve(__dirname, './src/common')
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
    },
  }
});
