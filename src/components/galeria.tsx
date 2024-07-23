import { Titulo } from ".";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import identidade from "/src/assets/identidade.png";
import encontro from "/src/assets/encontro.png";
import galeria1 from "/src/assets/galeria1.png";
import galeria2 from "/src/assets/galeria2.png";
import galeria3 from "/src/assets/galeria3.png";
import galeria4 from "/src/assets/galeria4.png";
import galeria5 from "/src/assets/galeria5.png";
import { Card, CardContent } from "./ui/card";

const fotos = [
  identidade,
  encontro,
  galeria1,
  galeria2,
  galeria3,
  galeria4,
  galeria5,
];

export function Galeria() {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full m-20 max-w-[1366px]">
        <Titulo
          tituloVermelho="Galeria"
          tituloGrande="Sou católico graças a Deus"
        />
        <div>
          <Dialog>
            <DialogTrigger className="flex">
              <div className="flex gap-4 flex-wrap justify-center">
                {fotos.map((foto, i) => {
                  return (
                    <Card key={i} className="w-96 h-96 flex items-center">
                      <CardContent className="p-4">
                        <img
                          src={foto}
                          alt=""
                          className="rounded-lg max-h-[90vh]"
                        />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </DialogTrigger>
            <DialogContent className="p-0 border-none bg-transparent w-[90vw] max-w-none">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {fotos.map((foto, i) => {
                    return (
                      <CarouselItem
                        className="flex justify-center items-center"
                        key={i}
                      >
                        <img
                          src={foto}
                          alt=""
                          className="rounded-lg max-h-[90vh]"
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
