"use client"
import React, { FormEvent, useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Appdispatch } from "@/redux/store";
import Image from "next/image";
import Rincian from "./Rincian";
import Details from "./CustomerDetails";
import axios from "axios";
import { useRouter } from "next/navigation";
import { DeleteProductinCart } from "@/redux/LocalStorage";
type ko = {
  modalRef: React.RefObject<HTMLDialogElement>;
  PricePay: Number | String;
  Subtotal:Number,
  orderId:string,
};
const Pay = (proops: ko) => {
  const dispact = useDispatch<Appdispatch>();
  const [CustomerDetails,setCustomerDetails] = useState({firstname:"",lastname:"",phone:"",email:""})
  const [tokenpayment,settokenpayment] = useState('')
  const router = useRouter()
  const Pay = useAppSelector((state) => state.CartReducer.pay);
  const [Detail, setDetails] = useState("");
  const HandleClick = (e: String) => {
    Detail === e ? setDetails("") : setDetails(`${e}`);
  };

  const config = {
    headers:{
        "Content-Type": "application/json"
    }
}

//Submit from Payment
  const handleSubmit = async(e:FormEvent) => {
    e.preventDefault()
    const Orderpay = {
        order_id:proops.orderId,
        total:String(proops.PricePay),
        CustomerDetails,
        listItem:Pay
    }
    const response = await axios.post(`http://localhost:8000/payment`,Orderpay,config)
    await axios.post(`/api/transaction`,{orderId:proops.orderId,data:Pay})
    settokenpayment(response.data.token)
    
     
  }
  

// Transaction Update
  useEffect(() => {
    if(tokenpayment){
            (window as any).snap.pay(tokenpayment,{
               onSuccess:async(transaction:any) => {
                   await axios.put(`/api/orderidsgenerate/${proops.orderId}`,{Method:transaction.payment_type,Status:"Success",expired:true})
                   await DeleteProductinCart(Pay)
                   setCustomerDetails({firstname:"",lastname:"",phone:"",email:""})
                   proops.modalRef.current?.close()
               },
               onPending:(transaction:any) => {
                   console.log("Pending",transaction)
               },
               onError:(transaction:any) => {
                   console.log("Error",transaction)
               },
               onClose: async(transaction:any) => {
                await axios.delete(`/api/transaction`,{data:{orderId:proops.orderId}})
                   console.log("customer closed the popup without finishing the payment",transaction)
               }
           })
        }
  },[tokenpayment])

  return (
    <div data-theme="dark">
      <dialog ref={proops.modalRef} className="modal py-16 overflow-x-hidden  c">
          <div onClick={() => proops.modalRef.current?.close()} className="btn btn-sm z-50  text-lg btn-circle btn-ghost absolute right-10 bg-black top-2">✕</div>
        <form onSubmit={(e) => handleSubmit(e)} method="dialog" className=" modal-full py-16 px-4 ">
          <div className="md:w-7/12 m-auto">

          <Details customerDetails={CustomerDetails} setCustomer={setCustomerDetails} />
          <div className="grid-cols-3  my-6 rounded-lg bg-slate-600 w-11/12 m-auto text-black py-3 px-2 grid max-[583px]:grid-cols-2 md:grid-cols-2   max-lg:grid-cols-2 min-[1415px]:grid-cols-3 min-[1155px]:grid-cols-3 gap-3 md:gap-5 ">
            {Pay.map((el, index) => (
                <div
                key={index}
               
                className="flex flex-col w-full overflow-hidden border  border-black  relative font-poppins"
              >
                <div className="w-full h-96 bg-white  max-sm:h-72 relative max-[400px]:h-64 ">
                  <div
                    className={`duration-150 ${
                      Detail === el.product.id ? "h-full" : "h-4/6 max-sm:h-3/5"
                    } relative`}
                  >
                    <Image
                      alt={`product${index}`}
                      fill
                      src={`${el.product.img}`}
                      className="w-full h-full object-cover bg-gray-100 "
                    />
                  </div>
               
                 
                  <div className=" bg-gray-100 relative h-full z-40">
                    <div className="flex flex-col gap-1 justify-end px-2">
                      <h1 className="  md:text-base max-md:text-sm max-sm:text-xs  ok">
                        {el.product.ProductName}
                      </h1>
                      <h1 className="md:text-base text-xs ok">
                      {Number(el.product.Price)* Number(el.jmlh)} $
                    </h1>
                      <h1 className="md:text-base text-xs ok">
                      Qty:{Number(el.jmlh)} 
                    </h1>
                    </div>
                  </div>
                </div>
  
                <div
                 onClick={() => HandleClick(el.product.id)}
                  className={`w-full text-white flex flex-col ${
                    Detail === el.product.id ? "opacity-0" : "opacity-100"
                  }  h-full duration-300 absolute bg-black/50 justify-between`}
                >
                </div>
              </div>
            ))}
          </div>
          <Rincian PricePay={proops.PricePay} SubTotal={proops.Subtotal}/>
          {/* <PaymentGate/> */}
          <div className="modal-action items-center">
            <h1>{String(proops.PricePay) } $</h1>
            <button
            type="submit"
            style={{background:"#10F5CC"}}
              className="btn text-white"
            >
              Pay
            </button>
            
          </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Pay;
