import { ChakraComponent, Button, ButtonProps } from '@chakra-ui/react';

type ButtonComponent = ChakraComponent<'button', {}>;

export const ToggleTheme = ((props: ButtonProps) => (
  <Button {...props} />
)) as ButtonComponent;
