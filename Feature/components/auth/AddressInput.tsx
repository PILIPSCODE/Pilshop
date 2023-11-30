"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type props = {
  setuserReq:React.Dispatch<React.SetStateAction<{
    name: string;
    email: any;
    bio: string;
    link: string;
    Adress: string;
}>>,
   userReq:{
    name: string;
    email: any;
    bio: string;
    link: string;
    Adress: string;
}
}
const AddreesC = (props:props) => {
  const [data, setData] = useState([]);
  const [cities, setCities] = useState("");
  const [onfocuss,setOnfocuss] =useState(false)
  const [cliked,setCliked] =useState(false)
  useEffect(() => {
    const Address = async () => {
      const city = await fetch("/api/addrees");
      const data = await city.json();
      setData(data.rajaongkir.results);
    };
    Address();
    return(() => {
    })
  }, []);
  console.log(props.userReq)

  console.log(data)
  return (
    <div>
      <div className="relative">
        <h1>Addrees City</h1>
        <input
          required
          type="text"
          onFocus={() => setOnfocuss(true)}
          onBlur={() => {
            if(cliked){
              setTimeout(() => {setOnfocuss(false)},300) 
            }else{
              toast.error("click the city options")
            }
          }
            
          }
          id="otherInput"
          value={cities}
          onChange={(e) => {
            setCities(e.target.value);
          }}
          name="otherInput"
          placeholder="Example:Surakarta"
          className="input input-success relative max-lg:w-11/12 max-lg:mx-3 w-80 "
        />
        <div
          className={`absolute ${onfocuss? "":"hidden"} p-2 translate-y-16 rounded-lg overflow-y-scroll -bottom-full z-50 w-full h-32 bg-base-300 text-white border`}
        >
          {data
            .filter((e: any) => {
              if(cities !== ""){
               return e.city_name.toLowerCase().includes(
                  cities.toLowerCase());
                }
                return e
            })
            .map((e: any, index: any) => {
              return(
              <h1 onClick={(res) => {setCliked(!cliked),setOnfocuss(false) ,setCities(e.city_name), props.setuserReq({email:`${props.userReq.email}`,name:`${props.userReq.name}`,link:`${props.userReq.link}`,bio:`${props.userReq.bio}`,Adress:e.city_id})}} className="hover:bg-blue-300" key={index}>
                {e.city_name}
              </h1>
              )
            }
              
            )}
        </div>
      </div>
    </div>
  );
};

export default AddreesC;
