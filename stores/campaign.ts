import create from 'zustand';
import { flaqAxios } from '../api/config/axios';
import { ICampaigns } from '../api/datatypes/Campaigns';
export interface CampaignActions {
  campaign: Array<ICampaigns>;
  fetchCreatorCampaign: () => void;
  fetchAdminCampaign: () => void;
}
const useCampaignStore = create<CampaignActions>((set) => ({
  campaign: [],
  fetchCreatorCampaign: async () => {
    const response = await flaqAxios().get('creators/campaigns');
    const data = await response.data;
    set({ campaign: response?.data[0].campaigns });
  },
  fetchAdminCampaign: async () => {
    const response = await flaqAxios().get('admin/campaigns');
    const data = await response.data;
    set({ campaign: data });
  },
}));

export default useCampaignStore;
