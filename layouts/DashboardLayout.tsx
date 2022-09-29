import React, { ReactNode, useEffect, useState } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Divider,
  HStack,
  Center,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FiHome, FiSettings, FiMenu } from 'react-icons/fi';
import {
  BsCalendar2Event,
  BsFillPersonFill,
  BsCreditCard2BackFill,
  BsBoxArrowDownLeft,
} from 'react-icons/bs';
import { IoIosHome } from 'react-icons/io';
import { IconType } from 'react-icons';
import { IoIosStats, IoIosBuild, IoIosRocket } from 'react-icons/io';
import { ReactText } from 'react';
import TwitterCard from '../components/Sidebar/TwitterCard';
import useAuthenticationStore from '../stores/authenticationStore';
import { AuthData } from '../api/authentication';
import ApprovalModal from '../components/dashboard/ApprovalModal';
// import RightSideBar from "../components/dashboard/RightSideBar";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: IoIosHome, href: '/' },
  { name: 'Events', icon: IoIosStats, href: '/events' },
  { name: 'Library', icon: BsCreditCard2BackFill, href: '/library' },
  { name: 'Newsletter', icon: IoIosBuild, href: '/newsletter' },
];
const OtherItems: Array<LinkItemProps> = [
  { name: 'Profile', icon: BsFillPersonFill, href: '/profile' },
  { name: 'Refer', icon: IoIosRocket, href: '/refer' },
];
export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout, reset } = useAuthenticationStore();
  const authData = useAuthenticationStore((state) => state.authData);

  // To make sure there's no data mismatch between the server and the client, local state is used to store the auth data.
  const [data, setData] = useState<AuthData>();

  useEffect(() => {
    // TODO: can create a custom hook to return this data or push to login page.
    setData(authData);
  }, [authData]);

  // TODO: This should be a component, use hook to check if data is there and push to login page.
  if (data?.accessToken === undefined) {
    return (
      <>
        <div>Not permitted to access this route</div>
        <Link href={'/'}>go back to Login</Link>
      </>
    );
  }

  return (
    <Box minH="100vh" bg={'#F8F9FA'}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box color="black" ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { logout, reset } = useAuthenticationStore();
  return (
    <Box
      bg={'#F8F9FA'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box>
          <Text
            fontFamily={'Helvetica'}
            fontWeight="700"
            fontSize={'14px'}
            color={'#2D3748'}
            lineHeight={'21px'}>
            Flaq Academy
          </Text>
        </Box>

        <CloseButton
          color={'white'}
          display={{ base: 'flex', md: 'none' }}
          onClick={onClose}
        />
      </Flex>
      <Divider />
      {LinkItems.map((link) => (
        <NavItem key={link.name} href={link.href} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Box p="8">
        <Text
          fontSize="12px"
          fontWeight="700"
          fontFamily={'Helvetica'}
          color="#2D3748">
          Other
        </Text>
      </Box>
      {OtherItems.map((link) => (
        <NavItem key={link.name} href={link.href} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <TwitterCard />
      {/* TODO: Clear proper UI for this. */}
      <Button onClick={logout}>Logout</Button>
      <ApprovalModal />
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  href: string;
}
const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
  return (
    <Box px="6" py="2">
      <Box
        borderRadius={'15px'}
        _hover={{
          boxShadow: '0px 3.5px 5.5px rgba(0, 0, 0, 0.02)',
          bg: '#ffffff',
        }}>
        <NextLink href={`/dashboard${href}`}>
          <Link
            color="#A0AEC0"
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
            <Flex
              align="center"
              p="2"
              mx="4"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              {...rest}>
              <Box
                boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
                borderRadius={'12px'}
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                mr="4"
                width={'30px'}
                height={'30px'}
                bg="white">
                <Icon fontSize="15" color={'#818BF5'} as={icon} />
              </Box>
              <Text
                fontFamily={'Helvetica'}
                color="#A0AEC0"
                fontWeight={'700'}
                fontSize={'12px'}>
                {children}
              </Text>
            </Flex>
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      justifyContent="space-between"
      bg={'#F8F9FA'}
      borderBottomWidth="1px"
      borderBottomColor={'#4c4646'}
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        color="white"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack>
        <Image alt="logo" width={'50'} height="50" src={'/img/logo.svg'} />
        <Box>
          <Text
            fontFamily={'Poppins'}
            fontWeight="700"
            fontSize={'24px'}
            color={'#ffffff'}>
            Flaq
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
};
