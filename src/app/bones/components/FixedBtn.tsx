import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

type Props = {};

const FloatingBtn = styled.button`
  font-weight: 600;
  ${tw`w-10 h-10 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 mb-1 select-none`}
`;

const FixedBtn: FC<Props> = () => (
  <div className="fixed top-[60%] right-2 z-10 flex flex-col items-end">
    <FloatingBtn type="button">1</FloatingBtn>
    <FloatingBtn type="button">2</FloatingBtn>
    <FloatingBtn type="button">3</FloatingBtn>
  </div>
);

export default FixedBtn;
