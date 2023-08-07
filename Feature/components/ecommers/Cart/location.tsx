

const Location = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1 className=" w-11/12">Alamat Pengiriman</h1>
      <textarea  placeholder="Contoh:JawaTengah, Sukoharjo, Baki, Pandeyan RT 02, RW 05" className="px-2  resize-none w-11/12 h-8 max-[560px]:h-16 max-[310px]:h-20 bg-transparent outline-none border-b-2" ></textarea>
    </div>
  );
};

export default Location;
