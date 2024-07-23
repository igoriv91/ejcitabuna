interface PropsTitulo {
  tituloVermelho: string;
  tituloGrande: string;
}
export function Titulo({ tituloGrande, tituloVermelho }: PropsTitulo) {
  return (
    <div className="text-center mb-8">
      <p className="text-red-600 font-bold text-lg ">{tituloVermelho}</p>
      <p className="text-5xl font-bold my-2">{tituloGrande}</p>
    </div>
  );
}
