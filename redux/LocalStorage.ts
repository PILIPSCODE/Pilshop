import { getCookie, setCookie } from "cookies-next";
import { Carti } from "./interface/Cart";

export const LocalStorage = () => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const existingDataJSON = localStorage.getItem("cartItems");
    const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
    if (existingDataJSON) {
      return existingData;
    } else {
      return [];
    }
  }
};

export const FavSet = (body: Carti) => {
  const getcookie = getCookie("Favorite");
  getcookie ? "" : setCookie("Favorite", []);
  const favorite = getcookie ? JSON.parse(String(getcookie)) : [];
  const deliffav = favorite.find((e: any) => e.product.id === body.id);
  if (deliffav) {
    const newdata = favorite.filter((e: any) => e.product.id !== body.id);
    setCookie("Favorite", JSON.stringify(newdata));
    return newdata;
  } else {
    favorite.push({ product: body, liked: true });
    setCookie("Favorite", JSON.stringify(favorite));
    return favorite;
  }
};

export const CartSet = (body: Carti) => {
  const getcookie = getCookie("CartItems");
  getcookie ? "" : setCookie("CartItems", []);
  const favorite = getcookie ? JSON.parse(String(getcookie)) : [];
  const deliffav = favorite.find((e: any) => e.product.id === body.id);
  if (deliffav) {
    const newdata = favorite.filter((e: any) => e.product.id !== body.id);
    setCookie("CartItems", JSON.stringify(newdata));
    return newdata;
  } else {
    favorite.push({ product: body, jmlh: 1 });
    setCookie("CartItems", JSON.stringify(favorite));
    return favorite;
  }
};
