import { AxiosSearchParamType, AxiosBlobSearchParamType } from 'util/typesEnum';
import { Toast } from 'antd-mobile';
import axiosBlob from '../axiosType/axiosBlob';
import axios from '../axiosType/axios';

export default {
  getJson: ({
    url,
    params,
    callback,
    finalCbk,
    errCbk,
  }: AxiosSearchParamType): void => {
    axios.get(url, { params }).then((res): void => {
      if (res.status === 200) {
        callback(res.data);
      } else {
        if (errCbk) {
          errCbk(res);
        } else {
          Toast.fail(res.data ? res.data.message : '', 3);
        }
      }
      if (finalCbk) {
        finalCbk();
      }
    });
  },

  postJson: ({
    url,
    params,
    callback,
    finalCbk,
    errCbk,
  }: AxiosSearchParamType): void => {
    axios.post(url, params).then((res): void => {
      if (res.status === 200) {
        callback(res.data);
      } else {
        if (errCbk) {
          errCbk(res);
        } else {
          Toast.fail(res.data ? res.data.message : '', 3);
        }
      }
      if (finalCbk) {
        finalCbk();
      }
    });
  },

  putJson: ({
    url,
    params,
    callback,
    finalCbk,
    errCbk,
  }: AxiosSearchParamType): void => {
    axios.put(url, params).then((res): void => {
      if (res.status === 200) {
        callback(res.data);
      } else {
        if (errCbk) {
          errCbk(res);
        } else {
          Toast.fail(res.data ? res.data.message : '', 3);
        }
      }
      if (finalCbk) {
        finalCbk();
      }
    });
  },

  delJson: ({
    url,
    params,
    callback,
    finalCbk,
    errCbk,
  }: AxiosSearchParamType): void => {
    axios.delete(url, { data: params }).then((res): void => {
      if (res.status === 200) {
        callback(res.data);
      } else {
        if (errCbk) {
          errCbk(res);
        } else {
          Toast.fail(res.data ? res.data.message :'', 3);
        }
      }
      if (finalCbk) {
        finalCbk();
      }
    });
  },

  delForm: ({
    url,
    params,
    callback,
    finalCbk,
    errCbk,
  }: AxiosSearchParamType): void => {
    axios.delete(url, { params }).then((res): void => {
      if (res.status === 200) {
        callback(res.data);
      } else {
        if (errCbk) {
          errCbk(res);
        } else {
          Toast.fail(res.data ? res.data.message : '', 3);
        }
      }
      if (finalCbk) {
        finalCbk();
      }
    });
  },

  postForm: ({
    url,
    params,
    callback,
    finalCbk,
    errCbk,
  }: AxiosSearchParamType): void => {
    const formData = new URLSearchParams();
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const key in params) {
      formData.append(key, params[key]);
    }
    axios.post(url, formData).then((res): void => {
      if (res.status === 200) {
        callback(res.data);
      } else {
        if (errCbk) {
          errCbk(res);
        } else {
          Toast.fail(res.data ? res.data.message : '', 3);
        }
      }
      if (finalCbk) {
        finalCbk();
      }
    });
  },

  putForm: ({
    url,
    params,
    callback,
    finalCbk,
    errCbk,
  }: AxiosSearchParamType): void => {
    const formData = new URLSearchParams();
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const key in params) {
      formData.append(key, params[key]);
    }
    axios.put(url, formData).then((res): void => {
      if (res.status === 200) {
        callback(res.data);
      } else {
        if (errCbk) {
          errCbk(res);
        } else {
          Toast.fail(res.data ? res.data.message : '', 3);
        }
      }
      if (finalCbk) {
        finalCbk();
      }
    });
  },

  postBlobForm: ({
    url,
    params,
    callback,
    finalCbk,
    errCbk,
  }: AxiosBlobSearchParamType): void => {
    const formData = new FormData();
    for (const key in params) {
      formData.append(key, params[key]);
    }
    axiosBlob.post(url, formData, { timeout: 3000 }).then((res): void => {
      if (res.status === 200) {
        callback(res.request.response);
      } else {
        if (errCbk) {
          errCbk(res);
        } else {
          Toast.fail(res.data ? res.data.message : '', 3);
        }
      }
      if (finalCbk) {
        finalCbk();
      }
    });
  },

  getForm: ({
    url,
    params,
    callback,
    finalCbk,
    errCbk,
  }: AxiosSearchParamType): void => {
    axios.get(url, { params }).then((res): void => {
      if (res.status === 200) {
        callback(res.data);
      } else {
        if (errCbk) {
          errCbk(res);
        } else {
          Toast.fail(res.data ? res.data.message : '', 3);
        }
      }
      if (finalCbk) {
        finalCbk();
      }
    });
  },

};
