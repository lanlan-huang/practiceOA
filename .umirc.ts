import { defineConfig } from 'umi';
const {resolve} = require('path');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 别名映射
  alias: {
    // api: resolve(__dirname, './src/services/'), 
    components: resolve(__dirname, './src/components'),
    // config: resolve(__dirname, './src/utils/config'),
    // themes: resolve(__dirname, './src/themes'),
    util: resolve(__dirname, './src/util'),
    common:resolve(__dirname,'./src/common')
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
});
