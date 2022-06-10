import React, { FC, ReactNode } from "react";
import tw from "twin.macro";

type Props = {
  children: ReactNode;
};

const Quote: FC<Props> = ({ children }) => (
  <span className="font-[600] bg-gray-100 hover:bg-gray-200 x-1 text-md md:text-lg">
    {children}
  </span>
);

const QuoteBig: FC<Props> = ({ children }) => (
  <p className="inline px-5 my-5 mr-5 text-xl md:text-2xl font-[400] text-gray-500 text-center">
    <span className="bg-red-100 px-1">{children}</span>
  </p>
);

export { Quote, QuoteBig };
