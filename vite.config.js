import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // 환경 변수 로드

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/map': {
          target: 'https://naveropenapi.apigw.ntruss.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/map/, ''),
          secure: false,
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('x-ncp-apigw-api-key-id', env.VITE_NAVER_CLIENT_ID);
              proxyReq.setHeader('x-ncp-apigw-api-key', env.VITE_NAVER_MAP_API_KEY);
            });
            proxy.on('error', (err) => {
              console.error('Proxy Error:', err);
            });
          }
        }
      }
    }
  };
});
