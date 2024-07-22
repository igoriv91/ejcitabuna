import identidade from "/src/assets/identidade.png";

export default function Identidade() {
  return (
    <div className="flex items-center justify-center bg-slate-50 ">
      <div className="w-full m-20 max-w-[1366px]">
        <div className="h-[50vh] mb-8">
          <div></div>
          <div className="border-2 border-red-600 rounded-3xl h-[90%] w-[90%] relative -mt-[50%]"></div>
          <img src="" alt="" />
        </div>
        <div className="text-center mb-8">
          <p className="text-red-600 font-bold text-lg ">Identidade</p>
          <p className="text-5xl font-bold my-2">
            Jesus é louco de amor por você
          </p>
        </div>
      </div>
    </div>
  );
}
