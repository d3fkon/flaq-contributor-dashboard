import {
  Container,
  Box,
  Text,
  Stack,
  Flex,
  Input,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { BsCardImage } from "react-icons/bs";
import Image from "next/image";
const Dashboard = () => {
  return (
    <Container border="2" mx="0" maxW={{ base: 320, sm: 480, md: 720, lg: 1200 }}>
      <Box minW="100%" minH="100%" bg="white">

      </Box>
    </Container>
  );
};

Dashboard.PageLayout = DashboardLayout;

export default Dashboard;
