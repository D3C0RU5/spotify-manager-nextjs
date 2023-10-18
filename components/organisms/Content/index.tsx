import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { CardPerson } from "../CardPerson";

export const Content = () => {
  return (
    <Flex
      bg={useColorModeValue("white", "gray.800")}
      w={{ base: "full" }}
      p={4}
      justifyItems={"center"}
    >
      <CardPerson
        name="Guilherme"
        debt="6.00"
        status="Em dívida"
        subtitle="Paranaense"
        warning
      />
      <CardPerson
        name="Taynara"
        debt="0.00"
        status="Em dia"
        subtitle="Amor"
        warning={false}
      />
      <CardPerson
        name="Taynara"
        debt="0.00"
        status="Em dia"
        subtitle="Amor"
        warning={false}
      />
      <CardPerson
        name="Taynara"
        debt="0.00"
        status="Em dia"
        subtitle="Amor"
        warning={false}
      />
      <CardPerson
        name="Taynara"
        debt="0.00"
        status="Em dia"
        subtitle="Amor"
        warning={false}
      />
      <CardPerson
        name="Taynara"
        debt="0.00"
        status="Em dia"
        subtitle="Amor"
        warning={false}
      />
    </Flex>
  );
};
