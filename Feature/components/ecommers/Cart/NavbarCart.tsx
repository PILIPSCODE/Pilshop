import { Dispatch, SetStateAction, useState } from "react";
import { CekOut, SearchProductCart,  ifCek, totalIsSelect } from "@/redux/features/cart-Slice";
import { useAppSelector } from "@/redux/store";
import { AiFillCaretUp } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Appdispatch } from "@/redux/store";
import Link from "next/link";
import { useRef } from "react";
import { FaHouseUser } from "react-icons/fa";
import Pay from "./Pay";
import Drawer from "./Drawer";
import CartQty from "../Landing/CartQty";
type ko = {
  select: Boolean;
  setSelect: Dispatch<SetStateAction<boolean>>;
};

type voucer = {
  img: String;
  name: String;
  Diskon: number;
};

const NavbarCart = (props: ko) => {
  const [sl, setsl] = useState(false);
  const [slvoucher, setSlvoucher] = useState("default");
  const [search, setSearch] = useState('');
  const [bagiv, setbagiv] = useState(0);
  const dispact = useDispatch<Appdispatch>();
  const totalslect = useAppSelector(totalIsSelect);
  const price = bagiv >= 1 && totalslect >= 1  ? totalslect - (totalslect / 100) * bagiv :""
  


  const modalRef = useRef<HTMLDialogElement>(null);

  const HandleCek = () => {
     totalslect >= 1 ? dispact(CekOut()) && modalRef.current?modalRef.current.showModal():"" : alert("Pilih terlebih dahulu")
  };
  const Voucher: voucer[] = [
    {
      img: "/Diskon1.png",
      name: "Diskon1",
      Diskon: 10,
    },
    {
      img: "/Diskon2.png",
      name: "Diskon2",
      Diskon: 20,
    },
    {
      img: "/Diskon3.png",
      name: "Diskon3",
      Diskon: 30,
    },
  ];

  const handleClick = () => {
    props.setSelect(!props.select);
    let cek = {
      id: "ALL",
      iscek: props.select,
    };
    dispact(ifCek(cek));
  };
 
const HandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  dispact(SearchProductCart({Filter:e.target.value,in:"CART"}))
  setSearch(e.target.value)
}
  return (
    <div className="flex justify-center font-poppins ">
      <div className="w-7/12 bg-base-200 conttainer-cart fixed z-40 flex rounded-lg  h-16 max-lg:w-10/12 max-sm:w-11/12 shadow-md shadow-slate-700">
        <div className="flex items-center gap-3 mx-2">
          <h1 className="max-sm:hidden">Pilih Semua</h1>
          <input type="checkbox" onClick={handleClick} />
        </div>
        <div className="flex h-full flex-grow items-center">

          <input
            type="text"
            value={search}
            placeholder="Search And Enter"
            className="w-10/12 h-10 max-sm:w-full rounded-lg p-2" 
           onChange={HandleChange}
          />
        </div>
        <div className="flex items-center justify-center gap-3 mx-5">
          <CartQty/>
          <Drawer in={"CART"}/>
          <Link href="/">
            <FaHouseUser size={25} />
          </Link>
        </div>
      </div>
      <div className="w-7/12  bg-base-200 conttainer-cart fixed z-10 bottom-0 flex  justify-between  h-28 max-lg:w-10/12 max-sm:w-11/12 shadow-lg shadow-slate-700">
        <div className="flex items-center mx-3">
          <div data-theme="dark" className="w-60 h-15  max-[475px]:w-36 max-[475px]:h-11  rounded-md relative  flex items-center justify-end">
            {slvoucher === "default" ? (
              <h1 className="text-2xl w-full text-center max-[567px]:text-sm  max-[490px]:text-base">
                Select Your Voucher
              </h1>
            ) : (
              slvoucher === 'default'?<h1 className=" ">Select Your Voucher</h1>: <img src={slvoucher} className="max-w-full  h-auto rounded-lg " />
            )}
            <div
              onClick={() => {
                totalslect >=1 ?   setsl(!sl) :alert('pilih terlebih dahulu')
              
              }}
              className="absolute mx-2 text-gray-600 bg-slate-100/60"
            >
              <AiFillCaretUp
                className={`${sl ? "" : "rotate-180"} duration-300`}
              />
            </div>
            <div className="absolute  right-1 w-40 -translate-y-20  ">
              <div className="flex flex-col-reverse">
                <div data-theme="dark" className={`${sl ? "  flex flex-col gap-2" : "hidden"} `}>
                  {Voucher.map((e, index) => (
                    <div key={index}>

                      <img
                        
                        className="border rounded-md text-white"
                        alt="Remove"
                        onClick={() => {
                          setSlvoucher(`${e.img}`), setbagiv(e.Diskon);
                        }}
                        src={`${e.img}`}
                      />
                    </div>
                  ))}
                  <h1 onClick={() =>  setSlvoucher(`default`)} >Remove</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <div className=" flex gap-3 absolute right-2 top-2 ">
            <h1>Total Price:</h1>

            <div className={`flex gap-1`}>
              <p className={`${bagiv >= 1 && totalslect >= 1 ? "line-through" : ""}`}>
                {totalslect}
              </p>{" "}
              {price} $
            </div>
          </div>
          <button
            style={
              totalslect >= 1
                ? { background: "#10F5CC" }
                : { background: "rgb(71 85 105 /1)" }
            }
            className=" btn m-2 text-black hover:text-white hover:bg-slate-600"
            onClick={HandleCek}
          >
            CheckOut
          </button>
        </div>
      </div>
      <Pay modalRef={modalRef} Subtotal={totalslect} PricePay={price !== "" ? price :totalslect}/>
    </div>
  );
};

export default NavbarCart;
