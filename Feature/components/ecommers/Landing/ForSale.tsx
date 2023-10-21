"use client";
import React, { useState } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AddtoCart from "./AddtoCart";
import BuyNow from "./BuyNow";
import LikesProduct from "./LikesProduct";
import { AiFillCaretUp } from "react-icons/ai";
import { HiReceiptPercent } from "react-icons/hi2";
type props = {
  products: any;
};

const RandomStore = (props: props) => {
  const [Details, setDetails] = useState("");
  const HandleClick = (e: String) => {
    Details === e ? setDetails("") : setDetails(`${e}`);
  };
  return (
    <div className="w-11/12 m-auto font-poppins forsale  my-9 rounded-lg">
      <div className="flex gap-2 items-center justify-center px-4 bg-blue-300">
        <HiReceiptPercent size={25} />
        <h1 className=" py-4 text-2xl max-md:text-base rounded-t-lg w-full font-bold ">
          Product With Discount
        </h1>
      </div>
      <div className="w-full p-3  h-96 max-sm:h-72 ">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={true}
          breakpoints={{
            1280: {
              spaceBetween: 20,
              slidesPerView: 5,
            },
            990: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
            700: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            400: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          className="w-full h-full "
        >
          {props.products.map((e: any, index: any) => (
            <SwiperSlide  key={index}>
              <div
              key={index}
              className="flex flex-col w-full  h-full overflow-hidden border border-black  relative font-poppins"
            >
              <div className="w-full h-full bg-white  relative  ">
                <div
                  className={`duration-150 ${
                    Details === e.id ? "h-full" : "h-4/6"
                  } relative`}
                >
                  <Image
                    alt={`product${index}`}
                    fill
                    src={`${e.img}`}
                    className="w-full h-full object-cover bg-gray-400 "
                  />
                </div>
          
                <div className="absolute top-2 right-3  z-50">
                  <LikesProduct liked={e.id} product={e} />
                </div>
                <div className=" bg-white relative h-full z-40">
                  <div className="flex flex-col gap-1 justify-end px-2">
                    <h1 className="  md:text-base max-md:text-sm max-sm:text-xs ok">
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
                  </div>
                </div>
              </div>

              <div
                onClick={() => HandleClick(e.id)}
                className={`w-full text-white flex flex-col ${
                  Details === e.id ? "opacity-0" : "opacity-100"
                }  h-full duration-300 absolute bg-black/50 justify-between`}
              >
                <div className="flex mt-3 flex-col items-start">
                  <h1 className="px-2  bg-black md:text-lg text-xs ok">
                    {Number(e.Price)} $
                  </h1>
                <div className="flex justify-end w-full">
                  <h1 className="bg-white text-red-600">Discount 30%</h1>
                </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RandomStore;
