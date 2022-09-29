import { flaqAxios } from './config/axios';

export const approvalApi = async (data: any) => {
  try {
    const response = await flaqAxios()({
      method: 'post',
      url: '/admin/level2',
      data: { ...data },
    });

    return {
      success: true,
      status: response.status,
      response: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error,
    };
  }
};
