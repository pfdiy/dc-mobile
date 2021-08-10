import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash:true,
  title:"一碗大米饭",
  favicon: '/favicon.ico',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
