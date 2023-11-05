import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Appdispatch } from "@/redux/store";
import {
  filterCategory,
  filterMaxprice,
  filterMinprice,
  filterbyRate,
  resetFilter,
} from "@/redux/features/cart-Slice";

type on = {
  in:String
}
const Drawer = (proops:on) => {
  const [value, setvalue] = useState(5);

  const dispact = useDispatch<Appdispatch>();

  type User = {
    badge: String;
  };
  const badge: User[] = [
    {
      badge: "#Fashion dan Pakaian",
    },
    {
      badge: "#Kecantikan dan Perawatan Pribadi",
    },
    {
      badge: "#Rumah Tangga dan Furnitur",
    },
    {
      badge: "#Makanan dan Minuman",
    },
    {
      badge: "#Olahraga dan Aktivitas Luar Ruangan",
    },
    {
      badge: "#Mainan dan Hiburan",
    },
    {
      badge: "#Perlengkapan Bayi dan Anak",
    },
    {
      badge: "#Perjalanan dan Aksesoris",
    },
    {
      badge: "#Kendaraan dan Aksesori",
    },
    {
      badge: "#Barang Elektronik",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, xorn: String) => {
    e.preventDefault();
    xorn === "max"
      ? dispact(filterMaxprice({Filter:value,in:proops.in}))
      : dispact(filterMinprice({Filter:value,in:proops.in}));
  };

  const handleRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispact(filterbyRate({Filter:Number(e.target.value),in:proops.in}))
  };

  return (
    <div className="font-popins">
      <div className="drawer drawer-end ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
      
          <label htmlFor="my-drawer-4" className="drawer-button ">
            <FaFilter size={25} />
          </label>
        </div>
        <div className="drawer-side  z-50 items-center ">
          <label
            htmlFor="my-drawer-4"
            className="drawer-overlay bg-transparent"
          ></label>
          <div className="menu p-4 translate-x-9 w-80  rounded-2xl mx-2 bg-base-200 text-base-content flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Filter</h1>
            <form onSubmit={(e) => handleSubmit(e, "max")}>
              <h1>MaxPrice:</h1>
              <input
                onChange={(e) => {
                  setvalue(Number(e.target.value));
                }}
                type="number"
                className="w-full p-2 rounded-xl"
                placeholder="5 $"
              />
            </form>
            <form onSubmit={(e) => handleSubmit(e, "min")}>
              <h1>MinPrice:</h1>
              <input
                onChange={(e) => {
                  setvalue(Number(e.target.value));
                }}
                type="number"
                className="w-full p-2 rounded-xl "
                placeholder="5 $"
              />
            </form>
            <h1>Sort By Category:</h1>
            <select
              onChange={(e) => dispact(filterCategory({Filter:e.target.value,in:proops.in}))}
              className="select select-ghost w-full max-w-xs bg-base-300"
            >
              {badge.map((e, index) => (
                <option key={index}>{e.badge}</option>
              ))}
            </select>
            <div className="w-full flex justify-center">
              <div className="rating rating-lg rating-half">
              <input
                  type="radio"
                  name="rating-10"
                  className="rating-hidden"
                  onChange={(e) => handleRate(e)}
                
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-orange-400 mask mask-star-2 mask-half-1"
                  onChange={(e) => handleRate(e)}
                  value={0.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-orange-400 mask mask-star-2 mask-half-2"
                  onChange={(e) => handleRate(e)}
                  value={1}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-orange-400 mask mask-star-2 mask-half-1"
                  onChange={(e) => handleRate(e)}
                  value={1.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-orange-400 mask mask-star-2 mask-half-2"
                  onChange={(e) => handleRate(e)}
                  value={2}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-orange-400 mask mask-star-2 mask-half-1"
                  onChange={(e) => handleRate(e)}
                  value={2.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-orange-400 mask mask-star-2 mask-half-2"
                  onChange={(e) => handleRate(e)}
                  value={3}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-orange-400 mask mask-star-2 mask-half-1"
                  onChange={(e) => handleRate(e)}
                  value={3.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-orange-400 mask mask-star-2 mask-half-2"
                  onChange={(e) => handleRate(e)}
                  value={4}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-orange-400 mask mask-star-2 mask-half-1"
                  onChange={(e) => handleRate(e)}
                  value={4.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-orange-400 mask mask-star-2 mask-half-2"
                  onChange={(e) => handleRate(e)}
                  value={5}
                />
               
              </div>
            </div>
            <button
              onClick={() => dispact(resetFilter(proops.in))}
              className="btn btn-error"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
