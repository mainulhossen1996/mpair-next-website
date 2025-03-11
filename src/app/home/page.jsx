
import Expert from "@/components/Home/Expert";
import Hero from "@/components/Home/Hero";
import How from "@/components/Home/How";
import Pair from "@/components/Home/Pair";
import Product from "@/components/Home/Product";
import Recent from "@/components/Home/Recent";
import Article from "@/components/Home/Article";
import React from "react";
import ContactBottom from "@/components/Contact-Bottom/ContactBottom";

const page = () => {
  return (
    <>
     <Hero/>
     <Pair/>
     <Expert/>
     <Recent/>
     <Product/>
     <How/>
     <Article/>
     <ContactBottom/>
    </>
  );
};

export default page;