import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: '/upload/',
  headers: {
    'X-Login-Token': window.token,
  },
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
  (response): AxiosResponse => response,
  (error): object => {
    // token过期
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 910000
    ) {
      window.location.href = '/logout';
    }
    return error.response ? error.response : error;
  },
);

export default instance;
