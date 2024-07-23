import { ReactElement } from "react";
import logo from "/src/assets/logo.png";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaCross } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { Titulo } from ".";

interface PropsCardIdentidade {
  icon: ReactElement;
  titulo: string;
  descricao: string;
  corBg: string;
  corIcon: string;
}

function CadIdentidade(props: PropsCardIdentidade) {
  return (
    <div className="w-full flex mb-8">
      <div
        className={`rounded-full ${props.corBg} h-14 w-14 mr-4 flex justify-center items-center`}
      >
        <IconContext.Provider
          value={{ className: `${props.corIcon} text-2xl` }}
        >
          {props.icon}
        </IconContext.Provider>
      </div>
      <div className="flex-1">
        <p className="text-xl font-bold ">{props.titulo}</p>
        <p className="text-slate-600">{props.descricao}</p>
      </div>
    </div>
  );
}

export function Identidade() {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full m-20 max-w-[1366px] min-[1300px]:flex gap-16">
        <div className="mb-8 w-[550px] ml-auto mr-auto">
          <div className="bg-identidade bg-cover h-[500px] w-[500px] rounded-3xl z-10 relative"></div>
          <div className="border-2 border-red-600 rounded-3xl h-[500px] w-[500px] relative -mt-[450px] ml-[50px] "></div>
          <img
            src={logo}
            alt="logo"
            className="bg-yellow-400 rounded-3xl shadow-2xl h-[150px] relative -mt-[150px] ml-[320px] animate-float z-10"
          />
        </div>
        <div className="mb-8">
          <div className="mb-8">
            <Titulo
              tituloVermelho="Identidade"
              tituloGrande="Jesus é louco de amor por você"
            />
            <p className="text-center text-slate-600">
              Buscamos dentro da realidade paroquial conduzir, através de
              encontros, partilhas, formações e orações, os jovens à revelação
              do mistério do Deus vivo e assim proporcionar um amadurecimento
              cristão tendo base no amor, na fé e na esperança. Ademais, também
              se integra a essa proposta, estimular e integrar, nos jovens, as
              dimensões da celebração, da evangelização e do serviço ao próximo
              e, em especial, à Diocese a qual ele esteja vinculado.
            </p>
          </div>
          <div>
            <CadIdentidade
              titulo="Amor"
              descricao="Proporcionar aos jovens uma vivenda dentro da dimenção do amor de Deus, praticando a caridade, acolhimento e serviço ao próximo."
              icon={<FaHandHoldingHeart />}
              corBg="bg-red-100"
              corIcon="fill-red-600"
            />
            <CadIdentidade
              titulo="Fé"
              descricao="Deus é o centro de toda nossa motivação de existir, por isso, temos a responsabilidade de mostrar para os jovens todos os carísmas da nossa igreja."
              icon={<FaCross />}
              corBg="bg-blue-100"
              corIcon="fill-blue-600"
            />
            <CadIdentidade
              titulo="Esperança"
              descricao="Nascemos na intenção de fazer a diferênça no mundo, mostrando para todos uma igreja jovem alegre e divertida e desde 1991 que estamos fazendo o nosso melhor com esperança de continuar por muito mais tempo."
              icon={<FaLeaf />}
              corBg="bg-green-100"
              corIcon="fill-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
