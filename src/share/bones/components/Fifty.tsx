import React, { ReactNode } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { base } from "../../utils/tools/baseHOC";
import { Contain } from "./Contain";

const FiftyFiftyRight = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};
const FiftyFiftyLeft = ({ children, ...props }: any) => {
  return <div {...props}> {children}</div>;
};

const R = base(FiftyFiftyRight, {
  className: "w-full md:w-[50%] ",
});
const L = base(FiftyFiftyLeft, {
  className: "w-full md:w-[50%] justify-center items-center",
});

const S = styled.div<any>(({ size }) => [
  `width: ${size}%;`,
  `${tw`w-full justify-center items-center`}`,
]);

export const Div = {
  S50: {
    R,
    L,
  },
  S,
};
