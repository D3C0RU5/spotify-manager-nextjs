'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { Chakra as ChakraProvider } from './Chakra';
import AuthProvider from './AuthContext';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <AuthProvider>{children}</AuthProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
