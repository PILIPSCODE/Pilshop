'use client'
import React, { useEffect, useState } from "react";
import { Appdispatch, useAppSelector } from "@/redux/store";
import { likedpro } from "@/redux/features/cart-Slice";
import { FaHeart } from "react-icons/fa";
import { Wishlists } from "@/redux/features/cart-Slice";
import { useDispatch } from "react-redux";
import { Carti } from "@/redux/interface/Cart";
import { FavSet } from "@/redux/LocalStorage";
type Liked = {
  liked: String;
  product: Carti;
};

const LikesProduct = (props: Liked) => {
  const [fav,setFav] = useState<Boolean | undefined>(false)
  const favselec = useAppSelector((state) => likedpro(state, props.liked));
  const dispact = useDispatch<Appdispatch>();

  useEffect(() => {
    setFav(favselec)
  },[favselec])


  const handleClick = () => {
    dispact(Wishlists(props.product));
    FavSet(props.product);
  };
  if (!fav)
    return (
      <div>
        <FaHeart
          onClick={handleClick}
          className="text-xl text-white max-sm:text-sm"
        />
      </div>
    );
  return (
    <div>
      <FaHeart
        onClick={handleClick}
        className="  text-red-600 text-xl max-sm:text-sm"
      />
    </div>
  );
};

export default LikesProduct;
