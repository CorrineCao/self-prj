export interface PrivilegeMapType {
    [key: string]: boolean;
}

export interface ErrType {
  message?: string;
  data: {
    message: string;
  };
}

export interface AxiosSearchParamType {
  url?: string;
  params?: {
    [key: string]: any;
  };
  callback(data?: object|number): void;
  errCbk?(res?: ErrType): void;
  finalCbk?(): void;
}

export interface AxiosBlobSearchParamType {
  url?: string;
  params?: {
    [key: string]: string | Blob;
  };
  callback(data?: object): void;
  errCbk?(res?: ErrType): void;
  finalCbk?(): void;
}