"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checknox, setChecknox] = useState(false);

  const router = useRouter();

  const handleRegister = (e: React.MouseEvent) => {
    if (!fullname || !username || !email || !password) {
      alert("Please fill all the fields");
      e.preventDefault();
      return;
    }

    if (!checknox) {
      alert("Please agree to the terms and conditions");
      e.preventDefault();
      return;
    }

    e.preventDefault();
    //  api post request
    axios
      .post("http://localhost:8000/api/v1/users/register", {
        fullname,
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 201) {
          alert("User created successfully");
          router.push("/auth/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // clear form
    setFullname("");
    setUsername("");
    setEmail("");
    setPassword("");
    setChecknox(false);
  };
  return (
    <section className="flex justify-center bg-[url('/form_bg_img.jpg')] bg-no-repeat bg-cover rounded-3xl my-1 py-4 ">
      <div className="border border-gray-600 px-4 bg-blur backdrop-filter backdrop-blur-md">
        <Card color="transparent" shadow={false} placeholder={undefined}>
          <Typography variant="h4" color="blue-gray" placeholder={undefined}>
            Sign Up
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-normal"
            placeholder={undefined}
          >
            Nice to meet you! Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3"
                placeholder={undefined}
              >
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="John Doe"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                crossOrigin={undefined}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3"
                placeholder={undefined}
              >
                Your Username
              </Typography>
              <Input
                size="lg"
                placeholder="username"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                crossOrigin={undefined}
              />
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
                crossOrigin={undefined}
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
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                  placeholder={undefined}
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              checked={checknox}
              onChange={(e) => setChecknox(e.target.checked)}
              crossOrigin={undefined}
            />
            <Button
              className="mt-6"
              fullWidth
              onClick={handleRegister}
              placeholder={undefined}
            >
              sign up
            </Button>
            <Typography
              color="gray"
              className="mt-4 text-center font-normal"
              placeholder={undefined}
            >
              Already have an account?{" "}
              <Link href="/auth/login" className="font-medium text-gray-900">
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Page;
