import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { NavItem } from "../NavItem";

export interface LinkItemProps {
  name: string;
  icon: IconType;
  onClick?: () => void;
}

interface Props extends BoxProps {
  onClose: () => void;
  linkItems: LinkItemProps[];
}

export const SidebarContent = ({ onClose, linkItems, ...rest }: Props) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="3xl" fontFamily="monospace" fontWeight="bold">
          Manager
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} onClick={link.onClick}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};