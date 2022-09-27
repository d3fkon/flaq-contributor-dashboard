import { ReactNode } from 'react'
import { Box, Flex, Link, Stack } from '@chakra-ui/react'

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200',
    }}
    href={'#'}
  >
    {children}
  </Link>
)

const Navbar = () => {
  return (
    <>
      <Box bg="#F8F9FA" px={4} borderBottom={'solid 2px #877979'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}></Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar
