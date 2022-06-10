import React, { FC, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { base } from "../../../share/utils/tools/baseHOC";

type PropsT = {
  props?: any;
};

const Blur: FC<any> = (props) => {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    setVisible((prev) => props.click);
  }, [props.click]);

  const changeProp = () => {
    setVisible((prev) => !prev);
  };

  const Outer = styled.div`
    ${tw`relative overflow-hidden bg-white `}
  `;

  const Inner1 = styled.div<any>(({ isVisible }) => [
    ` transform: translateX(${isVisible ? `0%` : `100%`});`,
  ]);

  const Inner = styled(Inner1)`
    ${tw`absolute top-0 w-full h-full `}
  `;

  return (
    <Outer {...props} onDoubleClick={changeProp}>
      {props.children[0]}
      <Inner isVisible={visible} className={props.classBlur}>
        {props.children[1]}
      </Inner>
    </Outer>
  );
};

const InBlur = ({ children }: any) => {
  const [onNum, setOnNum] = useState<number>(1);
  const clickHandler = (num) => {
    setOnNum(num);
  };
  return (
    <div className="flex flex-row flex-wrap">
      {children[onNum]}
      <div>
        <button
          className="px-1 border rounded-md mr-1"
          onClick={() => setOnNum(0)}
        >
          1
        </button>
        <button
          className="px-1 border rounded-md mr-1"
          onClick={() => setOnNum(1)}
        >
          &
        </button>
        <button
          className="px-1 border rounded-md mr-1"
          onClick={() => setOnNum(2)}
        >
          2
        </button>
      </div>
    </div>
  );
};

const BlurR = base(Blur, {
  classBlur:
    "flex justify-center items-center text-red-500 backdrop-blur-md bg-[#de4e53]/10 text-[#223e46] font-[500] p-3 rounded-md",
});

const BlurW = base(Blur, {
  classBlur:
    "flex justify-center items-center text-red-500 backdrop-blur-md bg-[#fff]/10 text-[#223e46] font-[500] p-3 rounded-md",
});

export { Blur, BlurW, BlurR, InBlur };
