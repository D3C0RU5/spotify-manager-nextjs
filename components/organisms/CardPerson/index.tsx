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
} from "@chakra-ui/react";

interface Props {
  name: string;
  subtitle: string;
  status: string;
  debt: string;
  warning: boolean;
  avatar: string;
}

export const CardPerson = ({
  name,
  subtitle,
  status,
  debt,
  warning,
  avatar,
}: Props) => {
  return (
    <Box
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Image
        h={"120px"}
        w={"full"}
        src="/wallpaper.gif"
        objectFit="cover"
        alt="#"
      />
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"xl"}
          src={avatar}
          css={{
            border: "2px solid white",
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {name}
          </Heading>
          <Text color={"gray.500"} textAlign={"center"}>
            {subtitle}
          </Text>
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text
              fontWeight={600}
              color={warning ? "red.500" : "green.500"}
              fontSize={20}
            >
              R$ {debt}
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              {status}
            </Text>
          </Stack>
        </Stack>

        <Button
          w={"full"}
          mt={8}
          bg={warning ? "red.500" : "green.500"}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Send a message (soon)
        </Button>
      </Box>
    </Box>
  );
};
