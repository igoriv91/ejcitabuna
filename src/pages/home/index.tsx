import { Banner } from "@/components/banner";
import { Cabecalho } from "../../components";
import { Atividades } from "@/components/atividades";
import Identidade from "@/components/identidade";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <Banner />
      <Atividades />
      <Identidade />
    </>
  );
}
