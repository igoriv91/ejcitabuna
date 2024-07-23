import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import diocesano from "/src/assets/diocesano.png";
import mangabinha from "/src/assets/mangabinha.png";
import buerarema from "/src/assets/buerarema.png";
import jardimPrimavera from "/src/assets/jardimPrimavera.png";
import saoCaetano from "/src/assets/saoCaetano.png";
import saoJoseVitoria from "/src/assets/saoJoseVitoria.png";
import centro from "/src/assets/centro.png";
import fatima from "/src/assets/fatima.png";
import itape from "/src/assets/itape.png";
import florestaAzul from "/src/assets/florestaAzul.png";
import santaLuzia from "/src/assets/santaLuzia.png";
import ferradas from "/src/assets/ferradas.png";
import conceicao from "/src/assets/conceicao.png";
import potiragua from "/src/assets/potiragua.png";
import { Titulo } from ".";

interface PropsCardRedeSocial {
  imagem: string;
  titulo: string;
  descricao: string;
  url: string;
}

function CardRedeSocial(props: PropsCardRedeSocial) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <a href={props.url} target="_blank">
          <Card>
            <CardHeader>
              <img
                src={props.imagem}
                alt=""
                className="rounded-full mb-4 h-[150px] w-[150px] ml-auto mr-auto"
              />
              <CardTitle className="text-center">{props.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-slate-600">{props.descricao}</p>
            </CardContent>
          </Card>
        </a>
      </div>
    </CarouselItem>
  );
}

export function RedesSociais() {
  return (
    <div className="flex items-center justify-center bg-slate-100">
      <div className="w-full m-20 max-w-[1366px]">
        <Titulo
          tituloVermelho="Redes Sociais"
          tituloGrande="Aonde mandar eu irei"
        />
        <div className="mx-20">
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              <CardRedeSocial
                imagem={diocesano}
                titulo="Diocesano"
                descricao="Diocese de Itabuna-BA"
                url="https://www.instagram.com/ejcdioceseitabuna"
              />
              <CardRedeSocial
                imagem={mangabinha}
                titulo="Mangabinha"
                descricao="Paróquia Santa Maria Goretti"
                url="https://www.instagram.com/ejcmangabinha/"
              />
              <CardRedeSocial
                imagem={buerarema}
                titulo="Buerarema"
                descricao="Paróquia Senhora Sant'Ana"
                url="https://www.instagram.com/ejcbuerarema/"
              />
              <CardRedeSocial
                imagem={jardimPrimavera}
                titulo="Jardim Primavera"
                descricao="Paróquia Senhor do Bonfim"
                url="https://www.instagram.com/ejcjardimprimavera/"
              />
              <CardRedeSocial
                imagem={saoCaetano}
                titulo="São Caetano"
                descricao="Paróquia Santa Rita de Cassia"
                url="https://www.instagram.com/ejcscaetano/"
              />
              <CardRedeSocial
                imagem={saoJoseVitoria}
                titulo="São José"
                descricao="Paróquia São José"
                url="https://www.instagram.com/ejc_saojose/"
              />
              <CardRedeSocial
                imagem={centro}
                titulo="Centro"
                descricao="Paróquia São Judas Tadeu"
                url="https://www.instagram.com/ejccentro/"
              />
              <CardRedeSocial
                imagem={fatima}
                titulo="Fatima"
                descricao="Paróquia Nossa Senhora de Fátima"
                url="https://www.instagram.com/ejc.fatima/"
              />
              <CardRedeSocial
                imagem={itape}
                titulo="Itapé"
                descricao="Paróquia Bom Jesus de Itapé"
                url="https://www.instagram.com/ejc_itape/"
              />
              <CardRedeSocial
                imagem={florestaAzul}
                titulo="Floresta Azul"
                descricao="Paróquia Senhora Santana"
                url="https://www.instagram.com/ejcflorestaazul/"
              />
              <CardRedeSocial
                imagem={santaLuzia}
                titulo="Santa Luzia"
                descricao="Paróquia de Santa Luzia"
                url="https://www.instagram.com/ejcsluzia/"
              />
              <CardRedeSocial
                imagem={ferradas}
                titulo="Ferradas"
                descricao="Paróquia Nossa Senhora da Conceição"
                url="https://www.instagram.com/ejcferradas/"
              />
              <CardRedeSocial
                imagem={conceicao}
                titulo="Conceição"
                descricao="Paróquia Nossa Senhora da Conceição"
                url="https://www.instagram.com/ejc.conceicao/"
              />
              <CardRedeSocial
                imagem={potiragua}
                titulo="Potiraguá"
                descricao="Paróquia Santa Terezinha"
                url="https://www.instagram.com/ejc.potiragua/"
              />
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
