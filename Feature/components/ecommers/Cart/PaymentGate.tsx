// import React, { useState } from "react";
// import { AiFillCaretUp } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { Appdispatch } from "@/redux/store"; 
// import { setpaymentwith } from "@/redux/features/cart-Slice";
// type nobank = {
//   img: String,
//   name:String
// };

// const nobankTransfer: nobank[] = [
//   {
//     img: "/Dana.png",
//     name: 'Dana'
//   },
//   {
//     img: "/gopay.png",
//     name: 'Gopay'
//   },
//   {
//     img: "/ovo.png",
//     name: 'ovo'
//   },
// ];

// const bankTransfer: nobank[] = [
//   {
//     img: "/Bni.png",
//     name: 'Bni'
//   },
//   {
//     img: "/bca.png",
//     name: 'Bca'
//   },
//   {
//     img: "/bri.png",
//     name: 'Bri'
//   },
//   {
//     img: "/mandiri.png",
//     name: 'mandiri'
//   },
// ];


// const PaymentGate = () => {

//   const dispact = useDispatch<Appdispatch>();

//   const handleClick = (e:nobank) => {
//     setIsCheked(`${e.img}`)
//     dispact(setpaymentwith({paymentWith:e.name}))
//   }
//   const [isCheked,setIsCheked] = useState('')
//   const [paymet,setpaymet] = useState("")
//   return (
//     <div className="w-full flex  mt-5  justify-center">
//       <div className="w-11/12 flex flex-col items-start bg-slate-600 p-2 rounded-md">
//         <h1 className="text-xl font-bold my-2 ">Payment Method</h1>
//         <div className="flex border rounded-md my-2 items-center p-2 gap-2">
//         <h1  className="">Tanpa Transfer</h1>
//         <AiFillCaretUp onClick={() => paymet === "nobank" ? setpaymet("") : setpaymet('nobank')} className={`duration-300 ${paymet === "nobank" ? "rotate-180" : ""}`}/>
//         </div>
//         <div className={`no-Bank flex-wrap  flex gap-2 ${paymet === "nobank" ? "" : "hidden"}  justify-start`}>
//           {nobankTransfer.map((e, index) => (
//             <div
//               key={index}
//               className="flex justify-around w-32 items-center py-2 rounded-md  bg-slate-300"
//             >
//               <img src={`${e.img}`} className="w-20" />
//               <div
//                 onClick={() => handleClick(e)}
//                 className={`h-5 w-5 border border-black rounded-full ${
//                   isCheked === e.img ? "bg-red-300" : ""
//                 }`}
//               ></div>
//             </div>
//           ))}
//         </div>
//         <div className="flex border rounded-md my-2 items-center p-2 gap-2">
//         <h1  className="">Bank Transfer</h1>
//         <AiFillCaretUp onClick={() => paymet === "bank" ? setpaymet("") : setpaymet('bank')} className={`duration-300 ${paymet === "bank" ? "rotate-180" : ""}`}/>
//         </div>
//         <div className={`no-Bank flex flex-wrap  gap-2 ${paymet === "bank" ? "" : "hidden"}  justify-start`}>
//           {bankTransfer.map((e, index) => (
//             <div
//               key={index}
//               className="flex justify-around w-32 items-center py-2 rounded-md  bg-slate-300"
//             >
//               <img src={`${e.img}`} className="w-20" />
//               <div
//                 onClick={() => handleClick(e)}
//                 className={`h-5 w-5 border border-black rounded-full ${
//                   isCheked === e.img ? "bg-red-300" : ""
//                 }`}
//               ></div>
//             </div>
//           ))}
//         </div>
      
//       </div>
//     </div>
//   );
// };

// export default PaymentGate;
