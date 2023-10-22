import { Box, BoxProps, CloseButton, Flex, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { NavItem } from '../NavItem';

export interface LinkItemProps {
  name: string;
  icon: IconType;
  routePath?: string;
}

interface Props extends BoxProps {
  onClose: () => void;
  linkItems: LinkItemProps[];
}

export const SidebarContent = ({ onClose, linkItems, ...rest }: Props) => {
  return (
    <Box
      borderRightWidth='1px'
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='3xl' fontFamily='monospace' fontWeight='bold'>
          Manager
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} routePath={link.routePath}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
