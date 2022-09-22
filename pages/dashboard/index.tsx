import { Container, Box, Text, Stack, Flex, Input ,Icon} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { BsCardImage } from "react-icons/bs";
import Image from "next/image";
const Dashboard = () => {
  return (
    <Container mx="0" maxW={{ base: 320, sm: 480, md: 720, lg: 1200 }}>
      <Box w="100%" textAlign={"center"} my="6">
              <Text fontWeight={"800"} fontSize="20px" fontFamily={"Inter"}>Create Content</Text>
              
              <Stack mt="12">
                  <Flex>
                      <Box >
                          <Icon
                              mr="4"
                              fontSize="64"
                              _groupHover={{
                                  color: "white",
                              }}
                              as={BsCardImage}
                          />
                      </Box>
                      <Box>
                          <Input />
                      </Box>
                </Flex>
              </Stack>
      </Box>
    </Container>
  );
};

Dashboard.PageLayout = DashboardLayout;

export default Dashboard;
