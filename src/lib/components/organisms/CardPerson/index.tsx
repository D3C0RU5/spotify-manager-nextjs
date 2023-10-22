import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export enum StatusTagEnum {
  NORMAL = 0,
  WARN = 1,
  STAR = 2,
}
interface Props {
  name: string;
  subtitle: string;
  status: string;
  debt: string;
  statusTag?: StatusTagEnum;
  avatar: string;
}

export const CardPerson = ({
  name,
  subtitle,
  status,
  debt,
  statusTag = StatusTagEnum.NORMAL,
  avatar,
}: Props) => {
  const ButtonColor = () => {
    if (statusTag === StatusTagEnum.NORMAL) {
      return 'green.500';
    }
    if (statusTag === StatusTagEnum.STAR) {
      return 'linear-gradient(20deg,#eeb755,#f6db02)';
    }
    if (statusTag === StatusTagEnum.WARN) {
      return 'red.500';
    }
  };
  const statusColor = () => {
    if (statusTag === StatusTagEnum.NORMAL) {
      return 'green.500';
    }
    if (statusTag === StatusTagEnum.STAR) {
      return '#eeb755';
    }
    if (statusTag === StatusTagEnum.WARN) {
      return 'red.500';
    }
  };

  return (
    <Box w={'full'} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
      <Image
        h={'120px'}
        w={'full'}
        src={
          statusTag === StatusTagEnum.STAR
            ? '/yellow-spotify.webp'
            : '/wallpaper.gif'
        }
        objectFit='cover'
        alt='#'
      />
      <Flex justify={'center'} mt={-12}>
        <Avatar
          size={'xl'}
          src={avatar}
          css={{
            border: '2px solid white',
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {name}
          </Heading>
          <Text color={'gray.500'} textAlign={'center'}>
            {subtitle}
          </Text>
        </Stack>

        <Stack direction={'row'} justify={'center'} spacing={6}>
          <Stack spacing={0} align={'center'}>
            <Text fontWeight={600} color={statusColor()} fontSize={20}>
              R$ {debt}
            </Text>
            <Text fontSize={'sm'} color='gray.400'>
              {status}
            </Text>
          </Stack>
        </Stack>

        <Button
          w={'full'}
          mt={8}
          bg={ButtonColor()}
          color={'white'}
          rounded={'md'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
        >
          Send a message (soon)
        </Button>
      </Box>
    </Box>
  );
};
