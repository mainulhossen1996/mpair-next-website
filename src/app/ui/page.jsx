
import React from "react";
import Hero from "@/components/UI/Hero";
import ContactBottom from "@/components/Contact-Bottom/ContactBottom";
import Principle from "@/components/UI/Principle";
import Work from "@/components/UI/Work";
import Articles from "@/components/UI/Articles";
import FAQ from "@/components/UI/FAQ";


const page = () => {
  return (
    <>
     <Hero/>
     <Work/>
     <Principle/>
     <Articles/>
     <FAQ/>
     <ContactBottom/>
    
     
    </>
  );
};

export default page;