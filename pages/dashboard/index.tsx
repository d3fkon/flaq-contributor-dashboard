import { Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import ContentContainer from '../../components/dashboard/ContentContainer';
import PipelineTable from '../../components/dashboard/PipelineTable';
import { getAllCampaigns } from '../../api/campaigns';
import useSWR from 'swr';
import { useAxios } from '../../hooks/useAxios';
import ICampaignsData, { ICampaigns } from '../../api/datatypes/Campaigns';

const Dashboard = () => {
  // const [loading, error, data] = useAxios('creators/campaigns', 'GET', null);
  const data = [
    {
      _id: '6329b187533a8b1cb40f12e1',
      username: 'muaazkhan',
      email: 'muaaz.beis.16@acharya.ac.in',
      discordId: '725682204138537042',
      campaigns: [
        {
          _id: '631daf52d898d09ff6e25075',
          title: 'What are tokens?',
          contentType: 'Video',
          status: 'Approved',
          image: 'string',
          articles: [
            {
              url: 'string',
              title: 'string',
              iconUrl: 'string',
            },
          ],
          quizzes: [],
          createdAt: '2022-09-11T09:50:10.171Z',
          updatedAt: '2022-09-11T09:50:10.171Z',
          __v: 0,
          description1: 'Tokens are of two types',
        },
        {
          _id: '63204858df5000e32913deb7',
          title: 'test title ',
          contentType: 'Articles',
          status: 'Pipeline',
          image:
            'https://flaq-assets.s3.ap-south-1.amazonaws.com/upload/Screenshot from 2022-09-11 14-21-47.png',
          articles: [
            {
              url: 'scsdcs',
              title: 'test ttielsdc',
              iconUrl:
                'https://flaq-assets.s3.ap-south-1.amazonaws.com/upload/Screenshot from 2022-09-06 16-20-43.png',
            },
          ],
          quizzes: [],
          createdAt: '2022-09-13T09:07:36.057Z',
          updatedAt: '2022-09-13T09:07:36.057Z',
          __v: 0,
        },
      ],
      createdAt: '2022-09-20T12:26:47.755Z',
      updatedAt: '2022-09-20T12:26:47.755Z',
      __v: 0,
    },
  ];

  return (
    <Container mt="18" border="2" mx="0" maxW="100%">
      <ContentContainer data={data} />
      <PipelineTable data={data} />
    </Container>
  );
};

Dashboard.PageLayout = DashboardLayout;

export default Dashboard;
