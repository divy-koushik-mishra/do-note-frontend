"use client";
import axios from "axios";
import { use, useEffect, useState } from "react";

export default function Page({ params }: { params: { userId: string } }) {
  //  get user id from local storage accessToken
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    if (typeof window !== "undefined") {
      setAccessToken(localStorage.getItem("accessToken"));
      axios
        .get("http://localhost:8000/api/v1/users/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setUserDetails(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          window.location.href = "/auth/logout";
        });

      if (!accessToken) {
        window.location.href = "/auth/logout";
      }
    }
  });

  //  send access token to server to get user id as header

  //  if user id is not found, redirect to login
  //  if user id is found, fectch data from server using axios
  //  if data is not found, redirect to login
  //  if data is found, render the page with the data
  return <div>My Post: {userDetails.email}</div>;
}
