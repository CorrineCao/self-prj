// 提取公共配置
const baseConfig: { [key: string]: string } = {
    production: '//localhost:3000',
    off: '//localhost:3000',
    test: '//localhost:3000',
    beta: '//localhost:3000',
  };
export default baseConfig;