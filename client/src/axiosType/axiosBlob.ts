import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Modal } from 'antd-mobile';
import baseConfig from 'util/baseConfig';

let baseURL = baseConfig[process.env.ENV || 'beta'];
// 待调整
const instance: AxiosInstance = axios.create({
  baseURL: `/api`,
  headers: {
    'X-Login-Token': window.token,
    'app-id': 'top',
    // 'Content-Type': 'application/octet-stream',
  },
  responseType: 'json',
  withCredentials: true,
  transformResponse: [
    (data): void => {
      let result = null;
      try {
        result = JSON.parse(data);
      } catch (e) {
        // console.log('接口异常', e.stack);
      }
      return result;
    },
  ],
});

instance.interceptors.response.use(
  (response): AxiosResponse => {
    return response;
  },
  (error): object => {
    // token过期
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 910000
    ) {
      Modal.alert('友情提示', '登录已过期，是否重新登录?', [
        { text: '取消' },
        {
          text: '确定',
          onPress: (): void => {
            // 清掉token
            window.location.href = '/reset/token';
          },
        },
      ]);
    }
    return error.response ? error.response : error;
  },
);

export default instance;
