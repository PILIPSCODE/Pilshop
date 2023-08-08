"use client"
import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BsFillPencilFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
const EditProduct = (props:{product:any}) => {

 const modalRef = useRef<HTMLDialogElement>(null)
 const [loading,setloading] = useState(false)
 const router = useRouter()
  
  const productObject = {
    ProductName: props.product.ProductName,
    Price: props.product.Price,
    Tag: props.product.Tag,
    stock: props.product.stock,
    Description: props.product.Description,
    
  };
  const [product, setProduct] = useState(productObject);
  type badge = {
    badge: String;
  };
  const badge: badge[] = [
    {
      badge: "Fashion dan Pakaian",
    },
    {
      badge: "Kecantikan dan Perawatan Pribadi",
    },
    {
      badge: "Rumah Tangga dan Furnitur",
    },
    {
      badge: "Makanan dan Minuman",
    },
    {
      badge: "Olahraga dan Aktivitas Luar Ruangan",
    },
    {
      badge: "Mainan dan Hiburan",
    },
    {
      badge: "Perlengkapan Bayi dan Anak",
    },
    {
      badge: "Perjalanan dan Aksesoris",
    },
    {
      badge: "Kendaraan dan Aksesori",
    },
    {
      badge: "Barang Elektronik",
    },
  ];
console.log(product.Tag)
  const handleaddpro = async(form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    setloading(true)
    const res = await axios.put(`/api/product/${props.product.id}`,product)
    if(!res){
      loading? toast.loading("Sabar Ya 😊😊") : ""
    }
    if(res.status === 200){
      setloading(false)
      toast.success("Edit Successfully")
      router.refresh()
      modalRef.current?.close()
     
        
    }else{
      return toast.error("invalid Data")
    }
  };
  return (
    <>
    <dialog  ref={modalRef} className="modal overflow-y-scroll c">
        <form
        method="dialog"
          onSubmit={(form) => handleaddpro(form)}
          className="modal-box  w-10/12 max-sm:w-full z-40 relative flex  flex-col items-center gap-3 text-black "
        >
          <div className=" w-full">
            <h1 className="font-bold">ProductName:</h1>
            <input
              type="text"
              defaultValue={props.product.ProductName}
              onChange={(e) => setProduct({ProductName: e.target.value,Tag:product.Tag,stock:product.stock,Price:product.Price,Description:product.Description})}
              placeholder="Pilshirt X"
              required
              className=" px-2 focus:outline-none h-10   bg-base-200    w-full"
            />
          </div>
          <div className=" w-full">
            <h1 className="font-bold">Price:</h1>
            <input
              type="number"
              required
              defaultValue={props.product.Price}
              onChange={(e) => setProduct({ProductName: product.ProductName,Tag:product.Tag,stock:product.stock,Price:Number(e.target.value),Description:product.Description,})}
              placeholder="$"
              className="  px-2 focus:outline-none h-10  bg-base-200      w-full"
            />
          </div>
          <div className=" w-full">
            <h1 className="font-bold">Stock:</h1>
            <input
              type="number"
              placeholder="0"
              onChange={(e) => setProduct({ProductName: product.ProductName,Tag:product.Tag,stock:Number(e.target.value),Price:product.Price,Description:product.Description,})}
              required
              defaultValue={props.product.stock}
              className="  px-2 focus:outline-none h-10 bg-base-200     w-full"
            />
          </div>
          <div className=" w-full">
            <h1 className="font-bold">Description:</h1>
            <textarea
              required
              maxLength={500}
              onChange={(e) => setProduct({ProductName: product.ProductName,Tag:product.Tag,stock:product.stock,Price:product.Price,Description:e.target.value,})}
              placeholder="max-500 Length"
              defaultValue={props.product.Description}
              className="  px-2 focus:outline-none bg-base-200   resize-none h-20 w-full"
            ></textarea>
          </div>
          <div className="flex gap-1">
            <select
            onChange={(e) => setProduct({ProductName: product.ProductName,Tag:e.target.value,stock:product.stock,Price:product.Price,Description:product.Description,}) }
              defaultValue={"Select Badge"}
              className="select select-info w-full max-w-xs"
            >
              <option disabled>Select Badge</option>
              {badge.map((el, index) => (
                <option className="flex gap-2"  key={index}>
                  #{el.badge}
                </option>
              ))}
            </select>
            <select
              defaultValue={props.product.Tag}
              className="select select-info w-full max-w-xs"
            >
              <option disabled>Select Your Filter</option>

              <option className="flex gap-2">Baju</option>
              <option className="flex gap-2">Celana</option>
              <option className="flex gap-2">Tas</option>
            </select>
          </div>
          <div className="modal-action w-full flex justify-end">
            <button className="btn btn-info" type="submit">Edit</button>
            <div className="btn btn-error" onClick={() => modalRef.current?.close()} >Close</div>
          </div>
        </form>
    </dialog>
    <div className="bg-base-300 p-2 rounded-lg">
            <BsFillPencilFill className="text-info" onClick={() => modalRef.current?.showModal()} />
      </div>
    </>
  );
};

export default EditProduct;
