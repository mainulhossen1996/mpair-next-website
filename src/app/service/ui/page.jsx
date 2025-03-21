
import React from "react";
import Hero from "@/components/UI/Hero";
import ContactBottom from "@/components/Contact-Bottom/ContactBottom";
import Principle from "@/components/UI/Principle";
import Work from "@/components/UI/Work";
import Articles from "@/components/UI/Articles";
import FAQ from "@/components/UI/FAQ";
import { Service } from "@/components/UI/Service";


const page = () => {
  return (
    <>
     <Hero/>
     <Work/>
     <Principle/>
     <Service/>
     <Articles/>
     <FAQ/>
     <ContactBottom/>
    
     
    </>
  );
};

export default page;