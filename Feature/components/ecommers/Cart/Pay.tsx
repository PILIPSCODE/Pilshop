// import React from "react";
// import { useAppSelector } from "@/redux/store";
// import { useDispatch } from "react-redux";
// import { Appdispatch } from "@/redux/store";
// import { Payy } from "@/redux/features/cart-Slice";
// import Location from "./location";
// import Rincian from "./Rincian";
// import PaymentGate from "./PaymentGate";

// type ko = {
//   modalRef: React.RefObject<HTMLDialogElement>;
//   PricePay: Number | String;
//   Subtotal:Number
// };
// const Pay = (proops: ko) => {
//   const dispact = useDispatch<Appdispatch>();
//   const Pay = useAppSelector((state) => state.CartReducer.pay);
//   const Payment = useAppSelector((state) => state.CartReducer.paymentgateway);
//   console.log(Payment)

//   return (
//     <div data-theme="dark">
//       <dialog ref={proops.modalRef} className="modal overflow-y-scroll c">
//         <form method="dialog" className="modal-box w-11/12  max-w-5xl c">
//           <Location />
//           <div className="mt-3 w-11/12 flex flex-col mx-auto bg-slate-600 items-center h-72 rounded-md c overflow-y-scroll">
//             {Pay.map((el, index) => (
//               <div
//                 className="w-11/12 bg-base-200 conttainer-cart  flex rounded-lg my-2 h-28 max-lg:w-10/12 max-sm:w-11/12 max-[490px]:flex max-[490px]:flex-col max-[490px]:h-auto"
//                 key={index}
//               >
//                 <div className="w-28 h-full flex items-center justify-center  mx-1 max-[490px]:w-full  ">
//                   <img
//                     className="max-w-full max-h-24 max-[490px]:max-h-full rounded-md max-[490px]:w-1/2"
//                     src={`${el.product.img}`} 
//                   />
//                 </div>

//                 <div className="flex flex-grow">
//                   <div className="flex flex-col justify-center w-48 max-xl:w-20 max-[490px]:w-full my-2 max-[490px]:text-start">
//                     <h1 className=" max-xl:text-lg max-md:text-base max-[567px]:text-sm  max-[490px]:text-base text-xl">
//                       {el.product.ProductName}
//                     </h1>
//                     <h2>Qty:{String(el.jmlh)} </h2>
//                   </div>
//                   <div className="flex-grow flex justify-around items-center">
//                     <div className="flex items-center w-56 max-md:w-32  max-[567px]:text-sm ">
//                       <h1 className="mx-2">
//                         {String(Number(el.product.Price) * Number(el.jmlh))} $
//                       </h1>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <Rincian PricePay={proops.PricePay} SubTotal={proops.Subtotal}/>
//           {/* <PaymentGate/> */}
//           <div className="modal-action items-center">
//             <h1>{String(proops.PricePay) } $</h1>
//             <div
//             style={{background:"#10F5CC"}}
//               className="btn text-white"
//               onClick={(e) => {
//                 e.preventDefault()
//                 Payment.paymentWith !== "" ? dispact(Payy()) : alert("isi dahulu Alamat & metode Pembayaran")
               
//               }}
//             >
//               Pay
//             </div>
//             
//           </div>
//         </form>
//       </dialog>
//     </div>
//   );
// };

// export default Pay;
