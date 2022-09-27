import { flaqAxios } from "./config/axios";

export const getAllCampaigns = async () => {
  try {
    const response = await flaqAxios().get("creators/campaigns");
    console.log({ response });
    return response.data;
  } catch (e) {
    console.log({ e });
  }
};
