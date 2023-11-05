"use client"
import React, { FormEvent, useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Appdispatch } from "@/redux/store";
import { Payy } from "@/redux/features/cart-Slice";
import Rincian from "./Rincian";
import Details from "./CustomerDetails";
import axios from "axios";
type ko = {
  modalRef: React.RefObject<HTMLDialogElement>;
  PricePay: Number | String;
  Subtotal:Number
};
const Pay = (proops: ko) => {
  const dispact = useDispatch<Appdispatch>();
  const [CustomerDetails,setCustomerDetails] = useState({firstname:"",lastname:"",phone:"",email:""})
  const [tokenpayment,settokenpayment] = useState('')
  const Pay = useAppSelector((state) => state.CartReducer.pay);
  const Payment = useAppSelector((state) => state.CartReducer.paymentgateway);
  const Orderpay = {
      order_id:"006",
      total:String(proops.PricePay),
      CustomerDetails,
      listItem:Pay
  }

  const handleSubmit = async(e:FormEvent) => {
    e.preventDefault()
    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    }
    const response = await axios.post(`http://localhost:8000/payment`,Orderpay,config)
    settokenpayment(response.data.token)

     
  }
  
  useEffect(() => {

 



    if(tokenpayment){
            (window as any).snap.pay(tokenpayment,{
               onSuccess:(transaction:any) => {
                   console.log("Success",transaction)
               },
               onPending:(transaction:any) => {
                   console.log("Pending",transaction)
               },
               onError:(transaction:any) => {
                   console.log("Error",transaction)
               },
               onClose:(transaction:any) => {
                   console.log("customer closed the popup without finishing the payment",transaction)
               }
           })
        }
  },[tokenpayment])
  return (
    <div data-theme="dark">
      <dialog ref={proops.modalRef} className="modal overflow-y-scroll c">
        <form onSubmit={(e) => handleSubmit(e)} method="dialog" className="modal-box w-11/12 full max-w-5xl c">
          <div onClick={() => proops.modalRef.current?.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</div>
          <Details customerDetails={CustomerDetails} setCustomer={setCustomerDetails} />
          <div className="mt-3 w-11/12 flex flex-col mx-auto bg-slate-600 items-center h-72 rounded-md  overflow-y-scroll">
            {Pay.map((el, index) => (
              <div
                className="w-11/12 bg-base-200 conttainer-cart  flex rounded-lg my-2 h-28 max-lg:w-10/12 max-sm:w-11/12 max-[490px]:flex max-[490px]:flex-col max-[490px]:h-auto"
                key={index}
              >
                <div className="w-28 h-full flex items-center justify-center  mx-1 max-[490px]:w-full  ">
                  <img
                    className="max-w-full max-h-24 max-[490px]:max-h-full rounded-md max-[490px]:w-1/2"
                    src={`${el.product.img}`} 
                  />
                </div>

                <div className="flex flex-grow">
                  <div className="flex flex-col justify-center w-48 max-xl:w-20 max-[490px]:w-full my-2 max-[490px]:text-start">
                    <h1 className=" max-xl:text-lg max-md:text-base max-[567px]:text-sm  max-[490px]:text-base text-xl">
                      {el.product.ProductName}
                    </h1>
                    <h2>Qty:{String(el.jmlh)} </h2>
                  </div>
                  <div className="flex-grow flex justify-around items-center">
                    <div className="flex items-center w-56 max-md:w-32  max-[567px]:text-sm ">
                      <h1 className="mx-2">
                        {String(Number(el.product.Price) * Number(el.jmlh))} $
                      </h1>
                    </div>
                  </div>
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
        </form>
      </dialog>
    </div>
  );
};

export default Pay;
