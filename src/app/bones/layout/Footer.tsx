import React from "react";
import { Logo } from "./Header.styles";

const Footer = () => {
  return (
    <footer>
      <div className="h-[100px] " />
      <div className="border h-[300px] pt-20 pb-10">
        <div className="flex items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <Logo />
            <p className="text-gray-300 font-bold">
              {`Be careful children, that's a lot of sodium`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
