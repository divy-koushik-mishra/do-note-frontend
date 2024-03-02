"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // get accessToken
    const accessToken = localStorage.getItem("accessToken");
    // logout post request
    axios
      .post(
        "http://localhost:8000/api/v1/users/logout",
        {},
        {
          //  send accessToken as header
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);

        // remove accessToken
        localStorage.removeItem("accessToken");
        // remove refreshToken
        localStorage.removeItem("refreshToken");
        router.push("/auth/login");
      })
      .catch((err) => {
        console.log(err);
      });

    // redirect to login page
    if (!accessToken) {
      router.push("/auth/login");
    }
  }, [router]);
  return <div>You are being Logged out and redirected to Login Page</div>;
};

export default Page;
