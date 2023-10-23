// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { FaHeart} from "react-icons/fa";
// import CartQty from "./CartQty";
// import { signOut } from "next-auth/react";
// import Image from "next/image";

// import React from "react";
// type props = {
//   session: any;
// };

// const Navbar = (props: props) => {
//   const [sideprofile, SetSideProfile] = useState(false);
//   return (
//     <div className="flex justify-center shadow-lg ">

//     <div className="flex py-5  w-11/12 max-sm:w-full justify-between items-center  z-50  text-white font-poppins">
//       <div className="flex mr-3  rounded-lg">
//         <h1 className="bg-gradient-to-b max-md:hidden from-blue-300 to-blue-500 bg-clip-text text-transparent text-3xl font-poppins font-bold p-1">Wimerce</h1>
//       </div>
//       <div className="form-control w-7/12 overflow-x-hidden flex flex-row-reverse items-center gap-1">
//         <input
//           type="text"
//           placeholder={"Search And Enter"}
//           className={`h-10 w-full text-black bg-gray-300 sm:rounded-lg  max-sm:duration-300   pl-6`}
//         />
       
//       </div>
//       <div className="flex-none flex lg:gap-3 items-center">
//         <div className="flex gap-2 mr-2">
//         <Link href="/favorite" className="flex gap-1 text-black">
//           <FaHeart size={25} />
//           <h1 className="max-lg:hidden">Favorite</h1>
//         </Link>
//           <Link href="/Cart">
//             <label className="flex gap-1 text-black ">
//               <CartQty />
//               <h1 className="max-lg:hidden">Cart</h1>
//             </label>
//           </Link>
      
//         </div>
//         {props.session !== null ? (
//           <div className="relative ">
//             <label
//               tabIndex={1}
//               className="avatar"
//             >
//               <div className="w-10 relative">
//                 <Image
//                   sizes="(max-width:100%)"
//                   alt={"kkewoko"}
//                   fill
//                   src={`${
//                     props.session?.image !== undefined &&
//                     props.session?.image !== null
//                       ? props.session?.image
//                       : "/profile-no-log.png"
//                   }`}
//                   onClick={() => {
//                     SetSideProfile(!sideprofile);
//                   }}
//                   className="bg-white  rounded-full"
//                 />
//               </div>
//             </label>
//             <ul
//               tabIndex={1}
//               className={`menu menu-sm text-black  mt-4 p-2 shadow bg-base-100 rounded-box w-52 duration-300 absolute z-20  ${
//                 sideprofile ? " -right-12" : "-right-96"
//               }`}
//             >
//               <li>
//                 <Link
//                   href={`/${props.session?.name}`}
//                   className="justify-between"
//                   shallow
//                 >
//                   Profile
//                 </Link>
//               </li>
//               <li className={`${props.session.usersStore ? "" : "hidden"}`}>
//                 <Link href={`/admin/Dasboard`}>Dashboard</Link>
//               </li>
//               <li>
//                 <a>Settings</a>
//               </li>
//               <li>
//                 <a onClick={() => signOut()}>Logout</a>
//               </li>
//             </ul>
//           </div>
//         ) : (
//           <Link href={"/auth/SignIn"} className="btn btn-warning">
//             SignIn
//           </Link>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Navbar;
