import axios from '../axiosType/axios';
import { PrivilegeMapType } from 'util/typesEnum';

const getUserPrivilege = (): Promise<string[]> =>
  axios.get('/perm/getAll').then(
    (res: any) => {
      if (res.status === 200) {
        return res.data;
      }
      return {};
    }
  );


const injectAccount = (resolve: Function): void => {
  Promise.all([getUserPrivilege()])
    .then(([privilegeList]: [string[]]): void => {
      let privilegeMap: PrivilegeMapType = {};
      privilegeList.forEach((item): void => {
          privilegeMap[item] = true;
      });
      window.privilegeMap = privilegeMap;
      resolve();
    })
    .catch((): void => {
      resolve();
    });
};

export default injectAccount;
