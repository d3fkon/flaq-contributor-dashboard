import { useState, useEffect, useCallback } from 'react';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { flaqAxios } from '../api/config/axios';

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(
    axiosParams.method === 'GET' || axiosParams.method === 'get'
  );

  const fetchData = async (params: AxiosRequestConfig) => {
    setLoading(true);
    try {
      const result = await flaqAxios().request(params);
      setResponse(result);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const sendData = useCallback(
    (data: AxiosRequestConfig) => fetchData({ ...axiosParams, ...data }),
    [fetchData]
  );

  useEffect(() => {
    if (axiosParams.method === 'GET' || axiosParams.method === 'get') {
      fetchData(axiosParams);
    }
  }, []);

  return { response, error, loading, sendData };
};

export default useAxios;
