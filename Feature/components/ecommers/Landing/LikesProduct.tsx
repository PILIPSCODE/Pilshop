import React from "react";
import { Appdispatch, useAppSelector } from "@/redux/store";
import { likedpro } from "@/redux/features/cart-Slice";
import { FaHeart } from "react-icons/fa";
import { Wishlists } from "@/redux/features/cart-Slice";
import { useDispatch } from "react-redux";
import { Carti } from "@/redux/interface/Cart";
import axios from "axios";
import { FavSet } from "@/redux/LocalStorage";
type Liked = {
  liked: String;
  product: Carti;
};

const LikesProduct = (props: Liked) => {
  const qty = useAppSelector((state) => likedpro(state, props.liked));
  const dispact = useDispatch<Appdispatch>();

  const handleClick = () => {
    dispact(Wishlists(props.product));
    FavSet(props.product);
  };
  if (!qty)
    return (
      <div>
        <FaHeart
          onClick={handleClick}
          className="absolute bottom-3 left-3 text-2xl"
        />
      </div>
    );
  return (
    <div>
      <FaHeart
        onClick={handleClick}
        className="absolute bottom-3 left-3 text-red-600 text-2xl"
      />
    </div>
  );
};

export default LikesProduct;
