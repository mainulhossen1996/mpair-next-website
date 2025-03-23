'use client'
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, ChevronDown } from 'lucide-react';


const Navbar2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState({ service: "tab1", product: "tab1" });
  const [dropdownState, setDropdownState] = useState({ service: false, product: false });

  const dropdownRef = useRef(null);
  const dropdownRefPro = useRef(null);
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleResDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Servicetabs = [
    { id: "tab1", title: "UI/UX Design", description: "From wireframes to final designs, we ensure a seamless user experience.", image: "/image/ui-nav.png", url: "/service/ui" },
    { id: "tab2", title: "Cloud Software", description: "Build responsive, modern, and high-performing websites.", image: "/image/ui-nav.png", url: "/service/cloud-software" },
    { id: "tab4", title: "Robotics & IoT", description: "Strategies to boost your online presence and engagement.", image: "/image/ui-nav.png", url: "/service/robotics-iot" },
    { id: "tab5", title: "SEO & Marketing", description: "Creative designs that make your brand stand out.", image: "/image/ui-nav.png", url: "/service/seo" },
  ];

  const Producttabs = [
    { id: "tab1", title: "SchoolSys", description: "A solution that integrates various administrative and academic processes within an educational institution.", image: "/image/product/schoolsys.png" },
    { id: "tab2", title: "Emventory", description: "Build responsive, modern, and high-performing websites.", image: "/image/product/emventory.png" },
    { id: "tab3", title: "Someekoron", description: "Creating robust and user-friendly mobile applications.", image: "/image/product/someekoron.png" },
    { id: "tab4", title: "DocAppoint", description: "Strategies to boost your online presence and engagement.", image: "/image/product/docAppoint.png" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownState((prevState) => ({ ...prevState, service: false }));
      }
      if (dropdownRefPro.current && !dropdownRefPro.current.contains(event.target)) {
        setDropdownState((prevState) => ({ ...prevState, product: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (type) => {
    setDropdownState((prevState) => ({ ...prevState, [type]: !prevState[type] }));
  };

  const handleTabChange = (type, id) => {
    setActiveTab((prevState) => ({ ...prevState, [type]: id }));
  };

  const handleTabClick = (type) => {
    setDropdownState((prevState) => ({ ...prevState, [type]: false }));
  }

  return (
    <>
    <div className="absolute lg:top-3 left-0 right-0 z-50">
      <div
        className="max-w-screen-xl mx-auto py-4 lg:px-0 px-4 flex justify-between items-center relative  transition-all duration-300"
        
        id="navBar"
      >
        <Link href="/home" className="">
          <img className="lg:h-[30px] h-[24px] w-auto object-contain" src="/image/Logo-White.svg" alt="mPair Technologies" height={300} width={300}/>
        </Link>
  
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/contact-us" className={`font-medium flex items-center ${pathname === "/contact-us" ? "text-white" : "text-white"}`}>
            <Button className="bg-[#0077ff] hover:bg-[#0055ff] px-6 py-2 gap-2 flex rounded-full">
              <Mail size={20}/><p className="">Contact Us</p>
            </Button>
          </Link>
        </div>
  
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="rounded-md focus:outline-none ">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" stroke="white" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  
    {/* Fixed center-item section */}
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-5 px-10 transition-all duration-300 lg:block hidden
    ${
      shadow ? "navBar text-gray-800" : "text-white"
    }`}>
      <div className="flex gap-12 center-item">
        <div className="relative" ref={dropdownRef}>
          <div onClick={() => toggleDropdown('service')} className="font-medium cursor-pointer text-[14px]  hover:text-[#008CFF]" aria-expanded={dropdownState.service}>
            Service
          </div>
  
          {dropdownState.service && (
            <div className="absolute left-0 top-12 mt-2 bg-[#f9f9f9] border border-gray-200 rounded-lg p-4 h-[330px] w-[45vw]">
              <div className="flex gap-4 w-full mx-auto mt-10">
                <div className="flex flex-col gap-4 w-2/5">
                  {Servicetabs.map((tab) => (
                    <Link key={tab.id} href={tab.url}>
                      <p
                        className={`py-2 px-6 text-left ${activeTab.service === tab.id ? "text-xl font-semibold text-blue-600" : "text-xl font-semibold text-gray-800 "}`}
                        onMouseEnter={() => handleTabChange('service', tab.id)}
                        onClick={() => handleTabClick('service')}
                      >
                        {tab.title}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="flex-1 p-6 pt-0"
                style={{
                  borderImage: 'linear-gradient(to bottom, transparent, #565656, transparent) 1',
                  borderLeft: '1px dashed transparent',
                }}>
                  {Servicetabs.map(
                    (tab) =>
                      activeTab.service === tab.id && (
                        <div key={tab.id}>
                          <p className="text-gray-700 text-end text-sm">{tab.description}</p>
                          <div className="flex justify-end">
                          <Image src={tab.image} alt={tab.title} width={400} height={400} className="mt-4 h-[180px] object-contain" />
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
  
        <div className="relative" ref={dropdownRefPro}>
          <div onClick={() => toggleDropdown('product')} className="font-medium cursor-pointer text-[14px]  hover:text-[#008CFF]" aria-expanded={dropdownState.product}>
            Product
          </div>
  
          {dropdownState.product && (
            <div className="absolute left-0 top-12 mt-2 bg-[#f9f9f9] border border-gray-200 rounded-lg p-4 h-[330px] w-[45vw]">
              <div className="flex gap-4 w-full mx-auto mt-10">
                <div className="flex flex-col gap-4 w-2/5">
                  {Producttabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`py-2 px-6 text-left ${activeTab.product === tab.id ? "text-xl font-semibold text-blue-600" : "text-xl font-semibold text-gray-800"}`}
                      onMouseEnter={() => handleTabChange('product', tab.id)}
                      onClick={() => handleTabClick('product')}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
                <div className="flex-1 p-6 pt-0"
                style={{
                  borderImage: 'linear-gradient(to bottom, transparent, #565656, transparent) 1',
                  borderLeft: '1px dashed transparent',
                }}>
                  {Producttabs.map(
                    (tab) =>
                      activeTab.product === tab.id && (
                        <div key={tab.id} className="mt-10">
                          <div className="flex justify-end">
                           <Image src={tab.image} alt={tab.title} width={400} height={400} className="w-[200px] object-contain" />
                           </div>
                          <p className="text-gray-700 mt-4 text-end text-sm">{tab.description}</p>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
  
        <Link href="/client" className={`font-medium hover:text-[#008CFF] text-[14px] ${pathname === "/client" ? "text-[#008CFF]" : ""}`}>Work</Link>
        <Link href="/about" className={`font-medium hover:text-[#008CFF] text-[14px] ${pathname === "/about" ? "text-[#008CFF]" : ""}`}>We Are</Link>
        <Link href="/" className={`font-medium hover:text-[#008CFF] text-[14px] ${pathname === "/" ? "text-[#008CFF]" : ""}`}>Career</Link>
      </div>
    </div>
  
    {isMenuOpen && (
           <div className="fixed inset-0 bg-white z-50">
           <div className="flex justify-between border-b p-4">
           <Link href="/home" className="">
                   <img className="lg:h-[30px] h-[24px] w-auto object-contain" src="/image/mPair.png" alt="mPair Technologies" height={300} width={300}/>
                 </Link>
                 <button onClick={() => setMenuOpen(false)} className="self-end">
                   <svg
                     className="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M6 18L18 6M6 6l12 12"
                     />
                   </svg>
                 </button>
                 </div>
                 <div className="flex flex-col items-center p-4">

        {/* Menu Links */}
        <Link href="/home">
          <p className="py-2 font-semibold text-center hover:text-[#008CFF]">
            Home
          </p>
        </Link>

        {/* Service Dropdown */}
        <div className="w-full flex flex-col items-center">
          <button
            className="py-2 font-semibold text-center flex items-center gap-1 hover:text-[#008CFF]"
            onClick={() => toggleResDropdown("service")}
          >
            Service
          </button>
          {openDropdown === "service" && (
            <div className="flex flex-col items-center w-full">
              <Link href="/service/ui">
                <p className="py-1 text-sm hover:text-[#008CFF]">
                  UI/UX Design
                </p>
              </Link>
              <Link href="/service/cloud-software">
                <p className="py-1 text-sm hover:text-[#008CFF]">
                  Cloud Software
                </p>
              </Link>
              <Link href="/service/robotics-iot">
                <p className="py-1 text-sm hover:text-[#008CFF]">
                  Robotics & IoT
                </p>
              </Link>
              <Link href="/service/seo">
                <p className="py-1 text-sm hover:text-[#008CFF]">
                  SEO & Marketing
                </p>
              </Link>
            </div>
          )}
        </div>

        {/* Product Dropdown */}
        <div className="w-full flex flex-col items-center">
          <button
            className="py-2 font-semibold text-center flex items-center gap-1 hover:text-[#008CFF]"
            onClick={() => toggleResDropdown("product")}
          >
            Products
          </button>
          {openDropdown === "product" && (
            <div className="flex flex-col items-center w-full">
              <Link href="/product/emventory">
                <p className="py-1 text-sm hover:text-[#008CFF]">Emventory</p>
              </Link>
              <Link href="/product/schoolsys">
                <p className="py-1 text-sm hover:text-[#008CFF]">SchoolSys</p>
              </Link>
              <Link href="/product/someekoron">
                <p className="py-1 text-sm hover:text-[#008CFF]">Someekoron</p>
              </Link>
              <Link href="/product/docappoint">
                <p className="py-1 text-sm hover:text-[#008CFF]">docAppoint</p>
              </Link>
            </div>
          )}
        </div>

        <Link href="/client">
          <p className="py-2 font-semibold text-center hover:text-[#008CFF]">
            Work
          </p>
        </Link>
        <Link href="/about">
          <p className="py-2 font-semibold text-center hover:text-[#008CFF]">
            We Are
          </p>
        </Link>
        <Link href="/career">
          <p className="py-2 font-semibold text-center hover:text-[#008CFF]">
            Career
          </p>
        </Link>

        {/* Contact Us Button */}
        <Link href="/contact-us">
          <Button className="bg-[#0077ff] hover:bg-[#0055ff] px-6 py-2 gap-2 flex rounded-full text-white">
            <Mail size={20} />
            <p>Contact Us</p>
          </Button>
        </Link>
      </div>
      </div>
    )}
  </>
  );
};

export default Navbar2;
