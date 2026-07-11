import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/AI_DAY_D/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // 개발 환경 설정에 따른 HMR(Hot Module Replacement) 활성화 여부 지정
      hmr: process.env.DISABLE_HMR !== 'true',
      // 리소스 낭비를 방지하기 위한 파일 감시 옵션 분기 처리
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
