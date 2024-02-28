"use client";
import React from "react";
import { cookies } from "next/headers";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const logoutHandler = () => {
    fetch("http://localhost:8000/api/v1/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // refreshToken,
      }),
    });
    router.push("/auth/login");
  };
  return (
    <div>
      Dashboard
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  );
};

export default Page;
