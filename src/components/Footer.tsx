import { RiCodeSSlashFill, RiHeartFill } from "@remixicon/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center font-medium p-4">
      Design and developed by{" "}
      <a
        href="https://github.com/divy-koushik-mishra"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiHeartFill className="inline-block text-red-600" />
        @divy-koushik-mishra
      </a>{" "}
      {""}
      <RiCodeSSlashFill className="inline-block" />
    </footer>
  );
};

export default Footer;
