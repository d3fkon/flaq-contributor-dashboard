import { flaqAxios } from './config/axios';

export const uploadFile = async (fileUploaded: any) => {
  try {
    const response = await flaqAxios()({
      method: 'post',
      url: 'utils/aws/file-upload',
      data: {
        fileName: fileUploaded.name.split('.')[0],
        fileExtention: fileUploaded.name.split('.').pop(),
      },
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
