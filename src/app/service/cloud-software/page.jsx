
import FAQ from "@/components/Cloud/FAQ";
import Hero from "@/components/Cloud/Hero";
import Insights from "@/components/Cloud/Insights";
import Solution from "@/components/Cloud/Solution";
import Work from "@/components/Cloud/Work";
import ContactBottom from "@/components/Contact-Bottom/ContactBottom";
import React from "react";



const page = () => {
  return (
    <>
    <Hero/>
    <Insights/>
    <Work/>
    <Solution/>
    <FAQ/>
    <ContactBottom/>
    </>
  );
};

export default page;