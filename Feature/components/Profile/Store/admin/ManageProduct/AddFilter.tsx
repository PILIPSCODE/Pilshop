import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaEdit, FaFilter} from "react-icons/fa";
import EditFilter from "./EditFilter";
import DeleteFilter from "./DeleteFilter";


const AddFilter = (props:{userStore:any}) => {
  const [edit,setedit] = useState("")
  const [add,setAdd] =useState({email:props.userStore.email,UserStoreids:props.userStore.id,tag:""})
  const router =useRouter()
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      
      const res = await axios.post(`/api/product/addFilters`,add)
      if(res.status === 200){
        toast.success("Added Filter")
        router.refresh()
      }
      return console.log(res.status)
    
    } catch (error) {
      console.log(error)
      toast.error("Limit 5 Category")

    }
  }


  return (
    <div className="font-popins">
      <div className="drawer drawer-end ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content absolute  -top-10 right-5">
          <label htmlFor="my-drawer-4" className="drawer-button   text-white">
            <FaFilter size={35} className="bg-black p-2 rounded-lg" />
          </label>
        </div>
        <div className="drawer-side z-50 items-center ">
          <label
            htmlFor="my-drawer-4"
            className="drawer-overlay bg-transparent"
          ></label>
          <div className="menu p-4 w-80  rounded-2xl mx-2 bg-base-200 text-base-content flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Category</h1>
            <form className="flex gap-2" onSubmit={(e) => handleSubmit(e)}>
              <input placeholder="Add Category" required className="w-full px-2 rounded-md" onChange={(e) => setAdd({email:add.email,UserStoreids:add.UserStoreids,tag:e.target.value})} />
              <button className="bg-info p-1 rounded-lg">add</button>
            </form>
            {props.userStore.ownerTags.map((e:any,index:any) => (

            <div key={index} className=" my-1 form-control flex gap-2 flex-row">
              <input
                type="radio"
                name="radio-7"
                className="radio radio-info"
              />
              {edit === e.tag?
              <EditFilter setedit={setedit} filter={e}/>
              :
              <p>{e.tag}</p>
              }
              <div className="flex absolute gap-2 right-3">
              <FaEdit onClick={() => {setedit(e.tag)}}/>
              <DeleteFilter filter={e}/>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFilter;
