import { Box, useStyleConfig, BoxProps } from '@chakra-ui/react';

interface CustomBoxProps extends BoxProps {
  variant: string;
}

export const CustomBox = (props: CustomBoxProps) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('CustomBox', { variant });

  return <Box __css={styles} {...rest} />;
};
