import { Box, Flex, FlexProps, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { useRouter } from 'next/navigation';

interface Props extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  routePath?: string | undefined;
}

export const NavItem = ({ icon, children, routePath, ...rest }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    if (routePath) {
      router.replace(routePath);
    }
  };

  return (
    <Box
      as='a'
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      onClick={handleClick}
    >
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'green.500',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};
