"use client"
import AddtoCart from "../../ecommers/Landing/AddtoCart";
import React, {  useState } from "react";
import NavStore from "@/Feature/components/Profile/Store/NavStore";
import BuyNow from "../../ecommers/Landing/BuyNow";
import LikesProduct from "../../ecommers/Landing/LikesProduct";
import Image from "next/image";
import { AiFillCaretUp } from "react-icons/ai";
import FilterOwner from "./FilterOwner";

const ProductStore = (props: { contentStore: any }) => {
  const [filter,setfilter] = useState("Overview")
  const [filterOwner,setfilterOwner] = useState("")
  const [Details, setDetails] = useState("");
  const HandleClick = (e: String) => {
    Details === e ? setDetails("") : setDetails(`${e}`);
  };
  return (
    <>
     <NavStore filter={filter}  setfilter={setfilter}/>
     <FilterOwner filterStore={props.contentStore} setfilterOwner={setfilterOwner}/>
    <div className="w-11/12 mx-auto gap-6 flex flex-row mt-3 pb-6 ">
      <div className="grid-cols-3  grid max-[485px]:grid-cols-2 min-[1024px]:grid-cols-3 min-[980px]:grid-cols-5 sm:grid-cols-3 min-[1415px]:grid-cols-5 min-[1155px]:grid-cols-4 gap-3 md:gap-5 ">
        {props.contentStore.products?.sort((a:any,b:any) => {
          if(filter === "low"){
            return a.Price - b.Price
          }else if (filter === "high"){
            return b.Price - a.Price
          }
        }).filter(((e:any) => {
           if(filter === "Overview" || filter === "low" ||filter === "high"){
            return e
          }else if (filter === ""){
            return e.OwnerTag === ""
          }
         
        })).filter((e:any) => {
           if(filterOwner === e.OwnerTag){
            return  filterOwner === e.OwnerTag
          }else if(filter === "" || filterOwner ===""){
            return e
          }
        }).map((e:any,index:any) => (

         <div key={index} className="flex flex-col   relative font-poppins">
          <div className="w-full h-96 max-lg:h-72  max-sm:h-52 relative rounded-xl bg-white">
            <Image
              alt={`product${index}`}
              width={500}
              height={300}
              src={`${e.img}`}
              className="w-full h-full  rounded-xl"
            />
            <div
              onClick={() => HandleClick(e.id)}
              className={`block p-1 rounded-md   bg-gray-900/50 text-white absolute bottom-2 right-2 z-10`}
            >
              <AiFillCaretUp
                className={`${
                  Details === e.id
                    ? "rotate-180  text-red-600"
                    : "rotate-0 text-blue-500"
                } duration-300 text-3xl max-lg:text-xl`}
              />
            </div>
          </div>
          <div
            className={`w-full text-white flex flex-col    backdrop-blur-sm h-full duration-300 absolute ${
              Details === e.id ? "opacity-1 " : "opacity-0 "
            } bg-black/50  rounded-xl`}
          >
            <div className="w-full flex justify-center items-center mt-2 whitespace-normal break-words">
              <h1 className=" p-2 bg-black rounded-full text-center w-10/12 md:text-xl text-xs ok">
                {e.ProductName}
              </h1>
            </div>
            <div className="w-full flex justify-between  items-center mt-2 whitespace-normal break-words">
              <h1 className="ms-2  md:text-lg text-xs ok">
                {Number(e.Price)} $
              </h1>
              <h1 className="me-2  md:text-lg text-xs ok">
                {Number(e.Rate)} ⭐
              </h1>
            </div>

            <div className="flex-grow flex justify-center max-sm:flex-col  items-center gap-2">
              <div className="border p-1">
                <AddtoCart AddQty={e} />
              </div>
            </div>
            <div className="w-full h-24 relative rounded-t-full text-center max-sm:h-20 bg-black">
              <h1 className="md:text-xl mb-3 text-xs">
                Qty: {Number(e.stock)}
              </h1>
              <BuyNow product={e} />
              <LikesProduct liked={e.id} product={e} />
            </div>
          </div>
        </div> 
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductStore;
