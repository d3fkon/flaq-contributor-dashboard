import { flaqAxios } from "./config/axios"

export const getAllCampaigns = async () => {
    const response = await flaqAxios().get("/campaigns/all")
    console.log({response})
}