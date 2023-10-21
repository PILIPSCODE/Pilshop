"use client";
import { useState } from "react";
const ProductDy = dynamic(() => import('./Product'))
import Badge from "./Badge";
import Hero from "./Hero";
import dynamic from "next/dynamic";
import Navbar from "./NavBar";
import RandomStore from "./ForSale";

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
