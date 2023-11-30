"use client";
import React, { useState } from "react";
import { FaCheckCircle, FaImage } from "react-icons/fa";
import { CldUploadButton } from "next-cloudinary";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
const AddProduct = (params: { userCurrent: any }) => {
  const productObject = {
    ProductName: "",
    Price: 0,
    Tag: "",
    stock: 0,
    Description: "",
    OwnerTag: "",
    userStoreIds: "" || params.userCurrent?.usersStore.id,
    img: "",
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
  const handleaddpro = async (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    try {
      
      if (product.img !== "" || product.userStoreIds !== "") {
        const res = await axios.post("/api/product", product);
        if (res.status === 200) {
          setProduct(productObject);
          toast.success("Successfully added");
        } else {
          toast.error(res.data);
        }
      } else {
        return toast.error("invalid Data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={(form) => handleaddpro(form)}
      className="w-10/12 max-md:w-full relative flex  mt-10  gap-4 text-black p-20 max-sm:p-8 bg-base-300 rounded-xl max-xl:flex-col"
    >
      <div className="w-4/12 border relative bg-base-200 gap-2 flex justify-center max-xl:justify-start items-center rounded-xl max-xl:border-none ">
        {product.img !== "" ? (
          <>
            <Image
              fill
              alt="AddImgProduct"
              className="max-xl:hidden w-full h-full rounded-xl"
              src={product.img}
            />
            <h1 className="xl:hidden text-green-400 flex gap-2 font-bold">
              Image Added <FaCheckCircle size={25} />
            </h1>
          </>
        ) : (
          <>
            <CldUploadButton
              options={{ maxFiles: 1 }}
              className="w-full h-full flex justify-center items-center gap-2 "
              onUpload={(cloud: any) =>
                setProduct({
                  OwnerTag: product.OwnerTag,
                  userStoreIds: product.userStoreIds,
                  ProductName: product.ProductName,
                  Tag: product.Tag,
                  stock: product.stock,
                  Price: product.Price,
                  Description: product.Description,
                  img: cloud?.info?.secure_url,
                })
              }
              uploadPreset="duvpylgq"
            >
              <FaImage size={25} />
              <h1 className="max-xl:hidden">Upload Your Image Here</h1>
            </CldUploadButton>
          </>
        )}
      </div>

      <div className="flex flex-col flex-grow items-center gap-4">
        <div className=" w-full">
          <h1 className="font-bold">ProductName:</h1>
          <input
            type="text"
            defaultValue={product.ProductName}
            onChange={(e) =>
              setProduct({
                OwnerTag: product.OwnerTag,
                userStoreIds: product.userStoreIds,
                ProductName: e.target.value,
                Tag: product.Tag,
                stock: product.stock,
                Price: product.Price,
                Description: product.Description,
                img: product.img,
              })
            }
            placeholder="Pilshirt X"
            required
            className=" px-2 focus:outline-none h-10   bg-base-100    w-full"
          />
        </div>
        <div className=" w-full">
          <h1 className="font-bold">Price:</h1>
          <input
            type="number"
            required
            defaultValue={product.Price}
            onChange={(e) =>
              setProduct({
                OwnerTag: product.OwnerTag,
                userStoreIds: product.userStoreIds,
                ProductName: product.ProductName,
                Tag: product.Tag,
                stock: product.stock,
                Price: Number(e.target.value),
                Description: product.Description,
                img: product.img,
              })
            }
            placeholder="$"
            className="  px-2 focus:outline-none h-10  bg-base-100      w-full"
          />
        </div>
        <div className=" w-full">
          <h1 className="font-bold">Stock:</h1>
          <input
            type="number"
            placeholder="0"
            onChange={(e) =>
              setProduct({
                OwnerTag: product.OwnerTag,
                userStoreIds: product.userStoreIds,
                ProductName: product.ProductName,
                Tag: product.Tag,
                stock: Number(e.target.value),
                Price: product.Price,
                Description: product.Description,
                img: product.img,
              })
            }
            required
            defaultValue={product.stock}
            className="  px-2 focus:outline-none h-10 bg-base-100     w-full"
          />
        </div>
        <div className=" w-full">
          <h1 className="font-bold">Description:</h1>
          <textarea
            required
            maxLength={500}
            onChange={(e) =>
              setProduct({
                OwnerTag: product.OwnerTag,
                userStoreIds: product.userStoreIds,
                ProductName: product.ProductName,
                Tag: product.Tag,
                stock: product.stock,
                Price: product.Price,
                Description: e.target.value,
                img: product.img,
              })
            }
            placeholder="max-500 Length"
            defaultValue={product.Description}
            className="  px-2 focus:outline-none bg-base-100   resize-none h-20 w-full"
          ></textarea>
        </div>
        <div className="flex gap-1">
          <select
            onChange={(e) =>
              setProduct({
                OwnerTag: product.OwnerTag,
                userStoreIds: product.userStoreIds,
                ProductName: product.ProductName,
                Tag: e.target.value,
                stock: product.stock,
                Price: product.Price,
                Description: product.Description,
                img: product.img,
              })
            }
            defaultValue={"Select Badge"}
            className="select select-info w-full max-w-xs"
          >
            <option disabled>Select Badge</option>
            {badge.map((el, index) => (
              <option className="flex gap-2" key={index}>
                #{el.badge}
              </option>
            ))}
          </select>
          <select onChange={(e) =>
              setProduct({
                OwnerTag: e.target.value,
                userStoreIds: product.userStoreIds,
                ProductName: product.ProductName,
                Tag: product.Tag,
                stock: product.stock,
                Price: product.Price,
                Description: product.Description,
                img: product.img,
              })
            }
            defaultValue={"Select Your Filter"}
            className="select select-info w-full max-w-xs"
          >
            <option disabled>Select Your Category</option>

            <option className="flex gap-2">Baju</option>
            <option className="flex gap-2">Celana</option>
            <option className="flex gap-2">Tas</option>
          </select>
        </div>
        <div className="modal-action w-full flex justify-end">
          <button className="btn">Kirim</button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
