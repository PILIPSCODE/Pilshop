"use client";
import { useState } from "react";
import ProductDy from "./Product"
import Badge from "./Badge";
import Hero from "./Hero";
import RandomStore from "./ForSale";
import Navbar from "@/Feature/components/ecommers/Landing/NavBar";

type props = {
  session: any;
  products: any;
};
const Landing = (props: props) => {
  const [filterProduct,setFileterProduct] = useState("Untuk Anda")


  return (
    <div  data-theme="pastel" className="justify-center  ">
      <Navbar session={props.session} />
      <Badge setProfile={setFileterProduct} product={props.products}/>
      <Hero/>
      <RandomStore products={props.products}/>
     <ProductDy filterproduct={filterProduct} product={props.products}/>
    </div>
  );
};

export default Landing;
