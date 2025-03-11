

import ContactBottom from "@/components/Contact-Bottom/ContactBottom";
import FAQ from "@/components/SEO/FAQ";
import Hero from "@/components/SEO/Hero";
import Insight from "@/components/SEO/Insight";
import Portfolio from "@/components/SEO/Portfolio";
import Service from "@/components/SEO/Service";
import React from "react";

const page = () => {
  return (
    <>
    <Hero/>
    <Portfolio/>
    <Service/>
    <Insight/>
    <ContactBottom/>
    <FAQ/>
    </>
  );
};

export default page;