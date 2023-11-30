"use client";
import ProductDy from "./Product"
import Badge from "./Badge";
import Hero from "./Hero";
import RandomStore from "./ForSale";
import Navbar from "@/Feature/components/ecommers/Landing/NavBar";
import Footer from "./Footer";
import { useEffect } from "react";

type props = {
  session: any;
  products: any;
};
const Landing = (props: props) => {

  useEffect(() => {
    const handleScroll = () => {
      let scY = window.scrollY;
      console.log(scY)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div  data-theme="pastel" className="justify-center ">
      <Navbar session={props.session} />

      <Badge setProfile={"Untuk Anda"}/>
      <Hero/>
      <div className="w-11/12 m-auto">
      <RandomStore products={props.products}/>
      <ProductDy filterproduct={"Untuk Anda"} title={`Product Recommend For You`} product={props.products}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;
