'use client'
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState({ service: "tab1", product: "tab1" });
  const [dropdownState, setDropdownState] = useState({ service: false, product: false });

  const dropdownRef = useRef(null);
  const dropdownRefPro = useRef(null);
  const pathname = usePathname();

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
    { id: "tab1", title: "UI/UX Design", description: "From wireframes to final designs, we ensure a seamless user experience.", image: "/image/ui-nav.png", url: "/ui" },
    { id: "tab2", title: "Cloud Software", description: "Build responsive, modern, and high-performing websites.", image: "/image/ui-nav.png", url: "/cloud-software" },
    { id: "tab4", title: "Robotics & IoT", description: "Strategies to boost your online presence and engagement.", image: "/image/ui-nav.png", url: "/robotics-iot" },
    { id: "tab5", title: "SEO & Marketing", description: "Creative designs that make your brand stand out.", image: "/image/ui-nav.png", url: "/seo" },
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
    <div className="absolute top-3 left-0 right-0 z-50">
      <div
        className="max-w-screen-xl mx-auto py-4 flex justify-between items-center relative rounded-full transition-all duration-300"
        
        id="navBar"
      >
        <Link href="/home" className="ps-6">
          <img className="h-[30px] w-auto object-contain" src="/image/mPair.png" alt="mPair Technologies" height={300} width={300}/>
        </Link>
  
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/contact-us" className={`font-medium flex items-center ${pathname === "/contact-us" ? "text-white" : "text-white"}`}>
            <Button className="bg-[#0077ff] hover:bg-[#0055ff] px-6 py-2 gap-2 flex rounded-full">
              <Mail size={20}/><p className="">Contact Us</p>
            </Button>
          </Link>
        </div>
  
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="p-2 rounded-md focus:outline-none focus:bg-gray-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  
    {/* Fixed center-item section */}
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-5 px-10 transition-all duration-300
    ${
      shadow ? " navBar" : ""
    }`}>
      <div className="hidden md:flex gap-12 center-item">
        <div className="relative" ref={dropdownRef}>
          <div onClick={() => toggleDropdown('service')} className="font-medium cursor-pointer text-[14px] text-gray-800 hover:text-[#008CFF]" aria-expanded={dropdownState.service}>
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
          <div onClick={() => toggleDropdown('product')} className="font-medium cursor-pointer text-[14px] text-gray-800 hover:text-[#008CFF]" aria-expanded={dropdownState.product}>
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
  
        <Link href="/client" className={`font-medium hover:text-[#008CFF] text-[14px] ${pathname === "/client" ? "text-[#008CFF]" : "text-gray-800"}`}>Work</Link>
        <Link href="/about" className={`font-medium hover:text-[#008CFF] text-[14px] ${pathname === "/about" ? "text-[#008CFF]" : "text-gray-800"}`}>We Are</Link>
        <Link href="/" className={`font-medium hover:text-[#008CFF] text-[14px] ${pathname === "/" ? "text-[#008CFF]" : "text-gray-800"}`}>Career</Link>
      </div>
    </div>
  
    {isMenuOpen && (
      <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center p-5 z-50">
        <button onClick={() => setMenuOpen(false)} className="self-end p-2">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <Link href="/home"><p className="py-2 font-semibold text-center hover:text-[#008CFF]">Home</p></Link>
        <Link href="/features"><p className="py-2 font-semibold text-center hover:text-[#008CFF]">Features</p></Link>
        <Link href="/services"><p className="py-2 font-semibold text-center hover:text-[#008CFF]">Services</p></Link>
        <Link href="/contact-us"><p className="py-2 font-semibold text-center hover:text-[#008CFF]">Contact Us</p></Link>
      </div>
    )}
  </>
  );
};

export default Navbar;
