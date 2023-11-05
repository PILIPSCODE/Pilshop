"use client"

type CustomerDetails ={
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
}
type props = {
  setCustomer:React.Dispatch<React.SetStateAction<CustomerDetails>>,
  customerDetails: CustomerDetails
}

const Details = (props:props) => {
  return (
    <div className="w-full gap-3 flex justify-center  items-center flex-col">
      <h1 className=" w-11/12">Nama Depan</h1>
      <textarea onChange={(e) => props.setCustomer({firstname:e.target.value,lastname:props.customerDetails.lastname,email:props.customerDetails.email,phone:props.customerDetails.phone})}  placeholder="" className="px-2  resize-none w-11/12 h-8 max-[560px]:h-16 max-[310px]:h-20 bg-transparent outline-none border-b-2" ></textarea>
      <h1 className=" w-11/12">Nama Belakang</h1>
      <textarea  onChange={(e) => props.setCustomer({firstname:props.customerDetails.firstname,lastname:e.target.value,email:props.customerDetails.email,phone:props.customerDetails.phone})} placeholder="" className="px-2  resize-none w-11/12 h-8 max-[560px]:h-16 max-[310px]:h-20 bg-transparent outline-none border-b-2" ></textarea>
      <h1 className=" w-11/12">Email</h1>
      <textarea  onChange={(e) => props.setCustomer({firstname:props.customerDetails.firstname,lastname:props.customerDetails.lastname,email:e.target.value,phone:props.customerDetails.phone})} placeholder="" className="px-2  resize-none w-11/12 h-8 max-[560px]:h-16 max-[310px]:h-20 bg-transparent outline-none border-b-2" ></textarea>
      <h1 className=" w-11/12">Nomer Hp</h1>
      <textarea  onChange={(e) => props.setCustomer({firstname:props.customerDetails.firstname,lastname:props.customerDetails.lastname,email:props.customerDetails.email,phone:e.target.value})} placeholder="" className="px-2  resize-none w-11/12 h-8 max-[560px]:h-16 max-[310px]:h-20 bg-transparent outline-none border-b-2" ></textarea>
      <h1 className=" w-11/12">Alamat Pengiriman</h1>
      <textarea  placeholder="Contoh:JawaTengah, Sukoharjo, Baki, Pandeyan RT 02, RW 05" className="px-2  resize-none w-11/12 h-8 max-[560px]:h-16 max-[310px]:h-20 bg-transparent outline-none border-b-2" ></textarea>
    </div>
  );
};

export default Details;
