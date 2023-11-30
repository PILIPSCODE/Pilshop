import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Carti,
  CartItems,
  cekCheked,
  FiltNumber,
  FiltString,
  payment,
  Wishlist,
} from "../interface/Cart";
import { RootState } from "../store";
import { getCookie, setCookie } from "cookies-next";
import {  CartSet, updatedecrement, updateIncrement } from "../LocalStorage";
export interface CartState {
  cartItems: CartItems[];
  Wishlist: Wishlist[];
  qty: Number;
  pay: CartItems[];
  paymentgateway: payment;
}
const initialState: CartState = {
  cartItems: [],
  Wishlist: [],
  qty: 0,
  pay: [],
  paymentgateway: {
    paymentWith: "",
  },
};

const DataFavCookie = getCookie("Favorite");
const datafav = DataFavCookie ? JSON.parse(String(DataFavCookie)) : "";
datafav ? (initialState.Wishlist = datafav) : "";
if (datafav) {
  initialState.Wishlist = datafav;
}

const DataCart = getCookie("CartItems");
DataCart ? "" : setCookie("CartItems", []);
const data = DataCart ? JSON.parse(String(DataCart)) : "";
if (DataCart) {
  initialState.cartItems = data.reverse();
  initialState.qty = data.length;
}

export const Cart = createSlice({
  name: "ProductCart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<any>) => {
      const item = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );

      if (item) {
        if (
          typeof item.jmlh === "number" &&
          item.jmlh <= Number(item.product.stock) - 1
        ) {
          item.jmlh++;
          updateIncrement(action.payload.id)
        } else {
          console.log("stock habis");
        }
      } else {
        state.cartItems.push({ product: action.payload, jmlh: 1 });
        if (typeof state.qty === "number") state.qty++;

        CartSet(action.payload);
      }
    },
    decrement: (state, action: PayloadAction<any>) => {
      const item = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );

      if (item) {
        if (typeof item.jmlh === "number") item.jmlh >= 1 ? (item.jmlh--,updatedecrement(action.payload.id)): "";
        if (item.jmlh === 0) {
          CartSet(action.payload);
          // noStorage
        
          if (typeof state.qty === "number") state.qty--;
          state.cartItems = state.cartItems.filter(
            (el) => el.product.id !== action.payload.id
          );
        }
      }
    },
    ifCek: (state, action: PayloadAction<cekCheked>) => {
      if (action.payload.id === "ALL") {
        state.cartItems.filter(
          (el) => (el.product.isChecked = !action.payload.iscek)
        );
      } else {
        const item = state.cartItems.find(
          (el) => el.product.id === action.payload.id
        );
        if (item) {
          item.product.isChecked = !item.product.isChecked;
        }
      }
    },
    CekOut: (state) => {
      const wkwk = state.cartItems.filter((e) => {
        return e.product.isChecked === true;
      });
      state.pay = wkwk;
    },
    setpaymentwith: (state, action: PayloadAction<payment>) => {
      state.paymentgateway = {
        paymentWith: action.payload.paymentWith,
      };
    },
    Payy: (state) => {
      const wkwk = state.cartItems.filter((e) => {
        return e.product.isChecked !== true;
      });
      state.paymentgateway = {
        paymentWith: "",
      };
      state.cartItems = wkwk;
      state.pay = [];
      state.qty = wkwk.length;
    },
    Wishlists: (state, action: PayloadAction<any>) => {
      const item = state.Wishlist.find(
        (el) => el.product.id === action.payload.id
      );
      item
        ? (state.Wishlist = state.Wishlist.filter(
            (el) => el.product.id !== item.product.id
          ))
        : state.Wishlist.push({ product: action.payload, liked: true });
    },
    unFav: (state) => {
      state.Wishlist = [];
      setCookie("Favorite", []);
    },

    // Filter and Search
    filterMaxprice: (state, action: PayloadAction<FiltNumber>) => {
      let datas: [] =
        state.cartItems.length === 0 || state.Wishlist.length === 0
          ? action.payload.in === "CART"
            ? data
            : datafav
          : action.payload.in === "CART"
          ? state.cartItems
          : state.Wishlist;
      const cartItems = datas.filter(
        (e: any) => e.product.Price <= action.payload.Filter
      );
      action.payload.in === "CART"
        ? (state.cartItems = cartItems)
        : (state.Wishlist = cartItems);
    },
    filterMinprice: (state, action: PayloadAction<FiltNumber>) => {
      let datas: [] =
        state.cartItems.length === 0 || state.Wishlist.length === 0
          ? action.payload.in === "CART"
            ? data
            : datafav
          : action.payload.in === "CART"
          ? state.cartItems
          : state.Wishlist;
      const cartItems = datas.filter(
        (e: any) => e.product.Price >= action.payload.Filter
      );
      action.payload.in === "CART"
        ? (state.cartItems = cartItems)
        : (state.Wishlist = cartItems);
    },
    filterCategory: (state, action: PayloadAction<FiltString>) => {
      let datas: [] =
        state.cartItems.length === 0 || state.Wishlist.length === 0
          ? action.payload.in === "CART"
            ? data
            : datafav
          : action.payload.in === "CART"
          ? state.cartItems
          : state.Wishlist;
      const cartItems = datas.filter(
        (e: any) => e.product.Tag === action.payload.Filter
      );
      action.payload.in === "CART"
        ? (state.cartItems = cartItems)
        : (state.Wishlist = cartItems);
    },
    SearchProductCart: (state, action: PayloadAction<FiltString>) => {
      let datas: [] =
        state.cartItems.length === 0 || state.Wishlist.length === 0
          ? action.payload.in === "CART"
            ? data
            : datafav
          : action.payload.in === "CART"
          ? state.cartItems
          : state.Wishlist;
      const cartItems = datas.filter((items: any) =>
        items.product.ProductName.toLowerCase().includes(
          action.payload.Filter.toLowerCase()
        )
      );
      action.payload.Filter === ""
        ? action.payload.in === "CART"
          ? (state.cartItems = data)
          : (state.Wishlist = datafav)
        : action.payload.in === "CART"
        ? (state.cartItems = cartItems)
        : (state.Wishlist = cartItems);
    },
    filterbyRate: (state, action: PayloadAction<FiltNumber>) => {
      let datas: [] =
        state.cartItems.length === 0 || state.Wishlist.length === 0
          ? action.payload.in === "CART"
            ? data
            : datafav
          : action.payload.in === "CART"
          ? state.cartItems
          : state.Wishlist;
      const cartItems = datas.filter(
        (e: any) => e.product.Rate === action.payload.Filter
      );
      action.payload.in === "CART"
        ? (state.cartItems = cartItems)
        : (state.Wishlist = cartItems);
    },
    resetFilter: (state, action: PayloadAction<String>) => {
      action.payload === "CART"
        ? (state.cartItems = data)
        : (state.Wishlist = datafav);
    },
  },
});

const CartItem = (state: RootState) => state.CartReducer.cartItems;
const Wish = (state: RootState) => state.CartReducer.Wishlist;

export const totalIsSelect = createSelector([CartItem], (cartItem) =>
  cartItem
    .filter((cartItem) => cartItem.product.isChecked === true)
    .reduce(
      (previousValue: number, currentValue: CartItems) =>
        previousValue +
        Number(currentValue.jmlh.valueOf()) *
          Number(currentValue.product.Price),
      0
    )
);

export const QtySelector = createSelector(
  [CartItem, (CartItem, productid: String) => productid],
  (CartItem, productid) =>
    CartItem.find((el) => el.product.id === productid)?.jmlh
);

export const likedpro = createSelector(
  [Wish, (Wish, productid: String) => productid],
  (CartItem, productid) =>
    CartItem.find((el) => el.product.id === productid)?.liked
);

export const {
  increment,
  decrement,
  ifCek,
  CekOut,
  Payy,
  unFav,
  setpaymentwith,
  filterCategory,
  resetFilter,
  filterMaxprice,
  filterMinprice,
  filterbyRate,
  SearchProductCart,
  Wishlists,
} = Cart.actions;
export default Cart.reducer;
