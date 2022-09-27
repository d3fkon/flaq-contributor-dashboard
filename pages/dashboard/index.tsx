import { Container } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import ContentContainer from '../../components/dashboard/ContentContainer'
import PipelineTable from '../../components/dashboard/PipelineTable'
import { getAllCampaigns } from '../../api/campaigns'

const Dashboard = () => {
  const [campaignsData, setCampaigns] = useState(undefined)

  useEffect(() => {
    const fetchCampaigns = async () => {
      const campaigns = await getAllCampaigns()
      setCampaigns(campaigns)
    }

    fetchCampaigns()

    return () => {
      setCampaigns(undefined)
    }
  }, [])

  return (
    <Container mt="18" border="2" mx="0" maxW="100%">
      <ContentContainer />
      <PipelineTable />

      {/* Handle the campaigns data based on the business requirments.  */}
      {campaignsData !== undefined && (
        <div>{JSON.stringify(campaignsData, null, 2)}</div>
      )}
    </Container>
  )
}

Dashboard.PageLayout = DashboardLayout

export default Dashboard
