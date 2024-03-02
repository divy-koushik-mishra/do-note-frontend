"use client";

import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = (e: React.MouseEvent) => {
    if (!email || !password) {
      alert("Please fill all the fields");
      e.preventDefault();
      return;
    }

    e.preventDefault();
    console.log(email, password);
    //  api post request
    axios
      .post("http://localhost:8000/api/v1/users/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data.data.accessToken);

        if (res.status === 200) {
          localStorage.setItem("accessToken", res.data.data.accessToken);
          localStorage.setItem("refreshToken", res.data.data.refreshToken);
          alert("User logged in successfully");
          router.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);

        alert("Invalid credentials");
      });
  };
  return (
    <section className="flex justify-center h-screen items-center">
      <Card color="transparent" shadow={false} placeholder={undefined}>
        <Typography variant="h4" color="blue-gray" placeholder={undefined}>
          Login
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal"
          placeholder={undefined}
        >
          Nice to meet you again! Enter your credientials to login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              crossOrigin={"true"}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              crossOrigin={undefined}
            />
          </div>
          <Button
            className="mt-6"
            fullWidth
            onClick={handleLogin}
            placeholder={undefined}
          >
            Login up
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal"
            placeholder={undefined}
          >
            Do not have a account?{" "}
            <Link href="/auth/signup" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </section>
  );
};

export default Page;
