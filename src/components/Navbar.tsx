"use client";
import { RiArrowRightUpLine, RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [navRoute, setNavRoute] = useState("");
  useEffect(() => {
    if (!isLoggedIn) {
      setNavRoute("/signup");
    } else {
      setNavRoute("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <nav className="w-full rounded-full bg-gray-300 px-5 py-3 flex justify-between items-center">
      <div className="Navlogo">
        <Link href={"/"}>
          <h2 className="text-lg font-medium">
            <RiMenuLine className="inline-block cursor-pointer hover:bg-[#aeafb3] rounded-full p-[2px] " />{" "}
            Do Note
          </h2>
        </Link>
      </div>
      <div className="menuItems">
        <Link href={navRoute}>
          <button className="border px-3 py-2 rounded-full border-black hover:bg-[#c8cbd1]">
            {!isLoggedIn ? `Sign-up ` : `Dashboard`}
            <RiArrowRightUpLine className="inline-block" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
