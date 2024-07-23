import logo from "/src/assets/logo.png";
export function Banner() {
  return (
    <div className="bg-papel min-[1300px]:h-[70vh] max-[1300px]:min-h-[780px] bg-cover items-center justify-center flex">
      <div className="min-[1300px]:flex px-12 max-w-[1366px] max-[1300px]:text-center py-10 items-center">
        <div className="w-full mb-10 max-w-[635px]">
          <p className="text-red-600 font-bold pl-2 text-lg">Bem vindo ao</p>
          <p className="text-6xl font-bold my-8">
            EJC - Encontro de Jovens com Cristo
          </p>
          <p className="pl-2 text-lg text-s">
            Movimento a serviço da Igreja Católica Apostólica Romana, que tem
            como carisma{" "}
            <b>“Em Deus a essência da alegria, do serviço e na humildade”</b>
          </p>
        </div>
        <div className="w-full flex items-center justify-center h-[50vh] max-w-[635px]">
          <img src={logo} alt="" className="animate-coracao " />
        </div>
      </div>
    </div>
  );
}
