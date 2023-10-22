"use client";

import { Grid } from "@chakra-ui/react";
import { CardPerson, StatusTagEnum } from "../CardPerson";

export const ListCards = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
      gap={6}
      justifyItems={"center"}
    >
      <CardPerson
        name="Guilherme"
        debt="0.00"
        status="Em dia amor"
        subtitle="Paranaense com muito amor!"
        avatar="/guilherme.png"
        statusTag={StatusTagEnum.STAR}
      />
      <CardPerson
        name="Taynara"
        debt="0.00"
        status="Em dia"
        subtitle="Ditadura da xoxota!!!"
        avatar="/taynara.jpg"
        statusTag={StatusTagEnum.NORMAL}
      />
      <CardPerson
        name="Lyvia"
        debt="0.00"
        status="Em dia"
        subtitle="Guten Tag"
        avatar="/lyvia.png"
      />
      <CardPerson
        name="Carlos"
        debt="0.00"
        status="Em dia"
        subtitle="Taylor fã s2"
        avatar="/carlos.png"
      />
      <CardPerson
        name="Henrique"
        debt="9,999,999.99"
        status="140 mil anos pagos"
        subtitle="Carlos tbm"
        avatar="henrique.jpg"
      />
      <CardPerson
        name="Gisele"
        debt="0.00"
        status="Em dia"
        subtitle="A psicóloga chegou"
        avatar="/gisele.jpeg"
      />
    </Grid>
  );
};
