import { Dispatch, SetStateAction, useState,useRef} from "react";
import { CekOut, SearchProductCart,  ifCek, totalIsSelect } from "@/redux/features/cart-Slice";
import { useAppSelector } from "@/redux/store";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Appdispatch } from "@/redux/store";
import Link from "next/link";
import { FaHouseUser } from "react-icons/fa";
import PayModal from "./Pay";
import Drawer from "./Drawer";
import CartQty from "../Landing/CartQty";
type ko = {
  select: Boolean;
  email:any;
  setSelect: Dispatch<SetStateAction<boolean>>;
  orderId:string,
};


const NavbarCart = (props: ko) => {

  const [sl, setsl] = useState(false);
  const [search, setSearch] = useState('');
  const [orderid,setOrderids] = useState('');
  const [bagiv, setbagiv] = useState(0);
  const dispact = useDispatch<Appdispatch>();
  const totalslect = useAppSelector(totalIsSelect);
  const coupun = bagiv >= 1 && totalslect >= 1  ? totalslect - (totalslect / 100) * bagiv :""
  const price = Math.floor(Number(coupun))
  
  const modalRef = useRef<HTMLDialogElement>(null)
  const Pay = useAppSelector((state) => state.CartReducer.pay);



  const HandleCek = async() => {
     if(totalslect >= 1 ) {
      dispact(CekOut()) 
      modalRef.current?.show()
      const res = await axios.post("/api/orderidsgenerate",{email:props.email})
      setOrderids(res.data.id)
      }
      else{
        alert("Pilih terlebih dahulu")
      } 
  };

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
          <div className="w-60 h-15  max-[475px]:w-36 max-[475px]:h-11  rounded-md relative  flex items-center justify-end">
          <input onChange={(e) => {e.target.value === "wism30%"? setbagiv(30):(e.target.value === "pilshop"? setbagiv(40):(e.target.value === "wimerce"?setbagiv(20):setbagiv(0)))}} type="text" className="input-group-lg input-info w-full px-2 mt-3" placeholder="input Coupon here" />
            <div
              onClick={() => {
                totalslect >=1 ?   setsl(!sl) :alert('pilih terlebih dahulu')
              
              }}
              className="absolute mx-2 text-gray-600 bg-slate-100/60"
            >
            </div>
            <div className="absolute  right-1 w-40 -translate-y-20  ">
           
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
            className=" btn m-2 mt-4 text-black hover:text-white hover:bg-slate-600"
            onClick={HandleCek}
          >
            CheckOut
          </button>
        </div>
      </div>
      <PayModal orderId={orderid? orderid :props.orderId} modalRef={modalRef} Subtotal={totalslect} PricePay={coupun !== "" ? price :totalslect}/>
      
       <button className="btn text-white">CheckOut</button>
    </div>
  );
};

export default NavbarCart;
