'use client';

import { Grid } from '@chakra-ui/react';
import { CardPerson, StatusTagEnum } from '../CardPerson';

export const ListCards = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
        '2xl': 'repeat(5, 1fr)',
      }}
      gap={6}
      justifyItems={'center'}
    >
      <CardPerson
        name='Gisele'
        debt='0.00'
        status='🏆 Oscar do pagamento em dia! 🏆'
        subtitle='A psicóloga chegou'
        avatar='/gisele.jpeg'
        statusTag={StatusTagEnum.STAR}
      />
      <CardPerson
        name='Guilherme'
        debt='12.00'
        status='Deve Junho e Julho'
        subtitle='Paranaense com muito amor!'
        avatar='/guilherme.png'
        statusTag={StatusTagEnum.WARN}
      />
      <CardPerson
        name='Carlos'
        debt='6.00'
        status='Deve julho'
        subtitle='Taylor fã s2'
        avatar='/carlos.png'
        statusTag={StatusTagEnum.WARN}
      />
      <CardPerson
        name='Taynara'
        debt='0.00'
        status='Em dia'
        subtitle='Ditadura da xoxota!!!'
        avatar='/taynara.jpg'
      />
      <CardPerson
        name='Henrique'
        debt='9,999,981.99'
        status='140 mil anos pagos'
        subtitle='Carlos tbm'
        avatar='henrique.jpg'
      />
    </Grid>
  );
};
