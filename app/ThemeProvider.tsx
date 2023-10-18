import { ReactNode } from "react";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const theme = extendBaseTheme({
  components: {},
});

export const ThemeProvider = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
