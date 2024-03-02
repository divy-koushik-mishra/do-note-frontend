"use client";
import React from "react";
import { cookies } from "next/headers";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  //  verift access token
  // const accessToken = localStorage.getItem("accessToken");
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/auth/login");
    }
  }

  return (
    <div>
      Dashboard
      {/* <Button onClick={logoutHandler}>Logout</Button> */}
    </div>
  );
};

export default Page;
