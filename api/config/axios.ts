import axios from 'axios';
import { isDevelopementEnvironment } from '../../utils/devDetect';
import { AxiosError, AxiosRequestConfig } from 'axios';
import useAuthenticationStore from '../../stores/authenticationStore';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const getBaseUrl = () => {
  if (isDevelopementEnvironment()) {
    return publicRuntimeConfig.dev_base_url;
  } else {
    return publicRuntimeConfig.prod_base_url;
  }
};

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = useAuthenticationStore.getState().authData.accessToken;

  if (token !== undefined) {
    config.headers!.Authorization = `Bearer ${token}`;
  } else {
    if (config.url !== '/auth/discord-auth') {
      console.error("BAD BOI, don't request this without a token");
      window.location.replace('/');
    } else {
      // ALlow Login API.
      console.error('No access token found.');
    }
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

export const flaqAxios = () => {
  // Create custom Axios instance.
  const axiosInstance = axios.create({
    baseURL: getBaseUrl(),
  });

  /**
   * Incept all incoming requests and add the Authorization header.
   * If there's no token in the local storage, then navigate to login page.
   */
  axiosInstance.interceptors.request.use(onRequest, onRequestError);

  return axiosInstance;
};
