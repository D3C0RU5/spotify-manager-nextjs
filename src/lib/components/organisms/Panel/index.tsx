'use client';

import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { FiHome, FiMail } from 'react-icons/fi';
import { MobileNav } from '../MobileNav';
import { LinkItemProps, SidebarContent } from '../../molecules/SidebarContent';

const LinkItems: Array<LinkItemProps> = [
  {
    name: 'Home',
    icon: FiHome,
    routePath: '/',
  },
  {
    name: 'Contact',
    icon: FiMail,
    routePath: '/contact',
  },
  // { name: "Trending", icon: FiTrendingUp },
  // { name: "Explore", icon: FiCompass },
  // { name: "Favourites", icon: FiStar },
  // { name: "Settings", icon: FiSettings },
];

interface Props {
  children: React.ReactNode;
}

export const Panel = ({ children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH='100vh'>
      <SidebarContent
        linkItems={LinkItems}
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent linkItems={LinkItems} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p={6}>
        {children}
      </Box>
    </Box>
  );
};
