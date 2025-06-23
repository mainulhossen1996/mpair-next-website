"use client"
import React, { useContext } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AuthContext } from "../AuthProvider/AuthProvider";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Articles", href: "/admin/dashboard/articles" },
  { label: "Career", href: "/admin/dashboard/career" },
  { label: "Applicants", href: "/admin/dashboard/applicants" },
  { label: "Queries", href: "/admin/dashboard/queries" },
  { label: "visitor", href: "/admin/dashboard/visitor" },
];

const Sidebar = () => {
  const path = usePathname();
  const { logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout().then().catch();
  };


  return (
    <section className="h-[90vh] w-52 bg-gray-200 text-white sticky  mt-24 left-0  p-6 space-y-2 rounded-tr-md">
         {navItems.map((item, index) => {
        const isActive = path === item.href;

        return (
          <div
            key={`${item?.href}-${index}`}
            className=" flex flex-col justify-start items-center"
          >
            <Link
              href={item?.href}
              className={`w-4/5 text-center py-2 rounded-md transition-all text-lg ${isActive
                  ? "bg-white text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-white hover:bg-blue-500"
                }`}
            >
              {item?.label}
            </Link>
          </div>
        );
      })}

      <div className="flex justify-center items-end ">
        <button onClick={handleLogOut} className="mt-44 rounded-md w-4/5 text-base bg-violet-500  font-medium py-[2px] h-[44px]" >
          Log out
        </button>
      </div>
    </section>
  );
};

export default Sidebar
