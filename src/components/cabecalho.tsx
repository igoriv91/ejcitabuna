import logo from "/src/assets/logo.png";

export function Cabecalho() {
  return (
    <div className=" bg-white shadow-xl relative">
      <div className="flex items-center h-28 py-4 max-w-[1366px] m-auto">
        <img src={logo} alt="" className="h-full" />
        <div>
          <p className="text-3xl font-bold ml-4">
            Encontro de Jovens com Cristo
          </p>
          <p className="ml-4">Diocese de Itabuna - BA</p>
        </div>
      </div>
    </div>
  );
}
