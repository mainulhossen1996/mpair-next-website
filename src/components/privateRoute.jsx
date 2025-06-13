"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/admin/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return user ? children : null;
};

export default PrivateRoute;
