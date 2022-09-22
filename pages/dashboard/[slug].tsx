import React from 'react'
import { useRouter } from 'next/router'
import DashboardLayout from '../../layouts/DashboardLayout'
import { Container, Text } from '@chakra-ui/react'

const Demo = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <Container>
            <Text fontSize="24px" fontFamily={"Inter"}>
                {slug} Page will go here
            </Text>
        </Container>
    )
}

Demo.PageLayout = DashboardLayout;
export default Demo