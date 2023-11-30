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
    <div className="w-11/12 mx-auto gap-6 flex flex-row mt-1 pb-6 ">
      <div className="grid-cols-3 w-full py-3 px-2 grid max-[583px]:grid-cols-2 md:grid-cols-3   max-lg:grid-cols-3 min-[1415px]:grid-cols-5 min-[1155px]:grid-cols-4 gap-3 md:gap-5 ">
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

          <div
          key={index}
         
          className="flex flex-col w-full overflow-hidden border  border-black  relative font-poppins"
        >
          <div className="w-full h-96 bg-white  max-sm:h-72 relative max-[400px]:h-64 ">
            <div
              className={`duration-150 ${
                Details === e.id ? "h-full" : "h-4/6 max-sm:h-3/5"
              } relative`}
            >
              <Image
                alt={`product${index}`}
                fill
                src={`${e.img}`}
                className="w-full h-full object-cover bg-gray-400 "
              />
            </div>
         
            <div className="absolute top-2 right-3  z-40">
              <LikesProduct liked={e.id} product={e} />
            </div>
            <div className=" bg-white relative h-full z-40">
              <div className="flex flex-col gap-1 justify-end px-2">
                <h1 className="  md:text-base max-md:text-sm max-sm:text-xs  ok">
                  {e.ProductName}
                </h1>
                <div className="flex gap-3">
                
                    <AddtoCart AddQty={e} />
                
                  <BuyNow product={e} />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className=" md:text-base text-xs ok">
                    {Number(e.Rate)} ⭐ | Selled 10 k
                  </h1>
                </div>
                <h1 className="md:text-base text-xs ok">
                {Number(e.Price)} $
              </h1>
              </div>
            </div>
          </div>

          <div
           onClick={() => HandleClick(e.id)}
            className={`w-full text-white flex flex-col ${
              Details === e.id ? "opacity-0" : "opacity-100"
            }  h-full duration-300 absolute bg-black/50 justify-between`}
          >
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductStore;
