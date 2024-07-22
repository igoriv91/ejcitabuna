import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import encontro from "/src/assets/encontro.png";
import evangelizar from "/src/assets/evangelizar.png";
import perserveranca from "/src/assets/perseveranca.png";
import engajamento from "/src/assets/engajamento.png";
import essencia from "/src/assets/essencia.png";

interface PropsCardAtividade {
  imagem: string;
  titulo: string;
  descricao: string;
}

function CardAtividade(props: PropsCardAtividade) {
  return (
    <Card className="w-[335px]">
      <CardHeader>
        <img
          src={props.imagem}
          alt=""
          className="rounded-md mb-4 h-[160px] co"
        />
        <CardTitle className="text-center">{props.titulo}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-slate-600">{props.descricao}</p>
      </CardContent>
    </Card>
  );
}

export function Atividades() {
  return (
    <div className="flex items-center justify-center bg-slate-50 ">
      <div className="w-full m-20 max-w-[1366px]">
        <div className="text-center mb-8">
          <p className="text-red-600 font-bold text-lg ">Nossos Objetivos</p>
          <p className="text-5xl font-bold my-2">Jovens Evangelizando Jovens</p>
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          <CardAtividade
            imagem={encontro}
            titulo="Encontros"
            descricao="Realizar encontros querigmáticos anuais por paróquia, no intuito de abrir a oportunidade de engajamento de novos jovens e viabilizar o exercício do serviço."
          />
          <CardAtividade
            imagem={evangelizar}
            titulo="Evangelizar"
            descricao="Evangelizar os jovens ajudando na sua formação cristã, promovendo o crescimento pessoal, uma experiência do amor de Deus e o segmento de Jesus Cristo partilhando a fé com o próximo."
          />
          <CardAtividade
            imagem={perserveranca}
            titulo="Perseverança"
            descricao="Realizar atividades de pós-encontro, tendo como norte a integração dos jovens que vivenciaram o encontro com os que já fazem parte do movimento e o amadurecimento pessoal e cristão destes."
          />
          <CardAtividade
            imagem={engajamento}
            titulo="Engajamento"
            descricao="Promover o engajamento pastoral, comunitário e social."
          />
          <CardAtividade
            imagem={essencia}
            titulo="Essência"
            descricao="Buscar ser a essência de Deus nas três características principais do EJC que
            Deus nos deu, o serviço, a constante alegria e vivência na humildade."
          />
        </div>
      </div>
    </div>
  );
}
