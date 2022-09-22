import React, { ReactNode } from "react";
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
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import {
  FiHome,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { BsCalendar2Event, BsNewspaper } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { IconType } from "react-icons";
import { ReactText } from "react";
// import RightSideBar from "../components/dashboard/RightSideBar";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "Events", icon: BsCalendar2Event, href: "/events" },
  { name: "Library", icon: BiLibrary, href: "/library" },
  { name: "Newsletter", icon: BsNewspaper, href: "/newsletter" },
  { name: "Store", icon: FiSettings, href: "/store" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={"#1B1B1B"}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box color="white" ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={"#1B1B1B"}
      borderRight="1px"
      borderRightColor={"#4c4646"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <HStack>
          <Image width={"50"} height="50" src={"/img/logo.svg"} />
          <Box>
            <Text
              fontFamily={"Poppins"}
              fontWeight="700"
              fontSize={"24px"}
              color={"#ffffff"}
            >
              Flaq
            </Text>
          </Box>
        </HStack>
        <CloseButton
          color={"white"}
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} href={link.href} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
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
    <NextLink href={`/dashboard${href}`}>
      <Link
        color="white"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#3482F6",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    </NextLink>
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
      bg={"#1B1B1B"}
      borderBottomWidth="1px"
      borderBottomColor={"#4c4646"}
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        color="white"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack>
        <Image width={"50"} height="50" src={"/img/logo.svg"} />
        <Box>
          <Text
            fontFamily={"Poppins"}
            fontWeight="700"
            fontSize={"24px"}
            color={"#ffffff"}
          >
            Flaq
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
};
