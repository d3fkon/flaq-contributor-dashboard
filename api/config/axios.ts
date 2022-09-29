import axios from 'axios';
import { isDevelopementEnvironment } from '../../utils/devDetect';
import { AxiosError, AxiosRequestConfig } from 'axios';
import useAuthenticationStore from '../../stores/authenticationStore';
import getConfig from 'next/config';
import { Roles } from '../authentication';
import { Console } from 'console';
// For using the ENV variables in the client side.
const { publicRuntimeConfig } = getConfig();

export const getBaseUrl = () => {
  if (isDevelopementEnvironment()) {
    return publicRuntimeConfig.dev_base_url;
  } else {
    return publicRuntimeConfig.prod_base_url;
  }
};

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const { accessToken, role } = useAuthenticationStore.getState().authData;
  console.log(role, role === Roles.ADMIN);
  if (accessToken !== undefined) {
    if (role === Roles.ADMIN) {
      config.headers!['x-admin-access-token'] = `${accessToken}`;
    } else {
      config.headers!['x-creator-access-token'] = `${accessToken}`;
    }
  } else {
    if (config.url !== '/auth/discord-auth') {
      // If the user is not authenticated and the request is not for the discord auth, then redirect to the login page.
      console.error('Unauthorized request');
      window.location.replace('/');
    } else {
      // ALlow Login API.
      console.info('Logging in...'); // General logging.
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
