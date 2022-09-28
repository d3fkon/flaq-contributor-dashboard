import { flaqAxios } from './config/axios';

export const uploadDoc = async (url: string, inputFormData: any) => {
  try {
    const response = await flaqAxios().put(url, inputFormData);
    return response.status === 200 ? true : false;
  } catch (error) {
    console.log(error);
  }
};

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
    const { key, url } = response.data;
    const isUploaded = await uploadDoc(url, fileUploaded);
    if (isUploaded) {
      const accessFile = `https://flaq-assets.s3.ap-south-1.amazonaws.com/upload/${fileUploaded.name}`;
      return accessFile;
    } else {
      console.log('something went wrong try again');
      return false;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
