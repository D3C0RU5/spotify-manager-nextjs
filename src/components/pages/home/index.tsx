import HomeTemplate from "@/src/components/templates/home";
import { getServerSideProps } from "@/src/services/utils/auth/getServerSideProps";

export default async function HomePage() {
  const session = await getServerSideProps();
  return <>{session === undefined ? "Y shall not pass" : <HomeTemplate />}</>;
}
