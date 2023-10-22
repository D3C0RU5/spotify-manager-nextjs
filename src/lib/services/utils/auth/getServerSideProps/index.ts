import { authOptions } from '@/src/app/api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth/next';

export async function getServerSideProps() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
