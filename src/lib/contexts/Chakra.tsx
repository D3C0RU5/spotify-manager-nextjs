import { ReactNode } from 'react';
import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
} from '@chakra-ui/react';
import customTheme from '../styles/theme';

interface ChakraProps {
  children: ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return (
    <>
      <ColorModeScript
        initialColorMode={customTheme.config?.initialColorMode}
        type='cookie'
      />
      <ChakraProvider
        colorModeManager={cookieStorageManager}
        theme={customTheme}
      >
        {children}
      </ChakraProvider>
    </>
  );
};
