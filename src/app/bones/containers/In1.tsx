import React, { FC } from "react";
import { ContainX } from "../../../share/bones/components/Contain";
import { Div } from "../../../share/bones/components/Fifty";
import Image from "next/image";
import { im } from "../../../static/img";
import tw from "twin.macro";

type Props = {};

const In1: FC<Props> = () => (
  <ContainX.H800p3>
    <Div.S size={50}>
      <div tw="flex flex-col gap-8">
        <h1 className="hero">
          <span>Overanalysed.</span>
          <br />
          <span>Blogs about anyting: </span>
          <span>Food</span>
        </h1>
        <p className="p_xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
          tempore provident consequuntur debitis eos recusandae inventore illum
          tempora autem veniam nulla maiores fuga! Eius eos molestias enim
          perspiciatis
        </p>
      </div>
    </Div.S>
    <Div.S size={50}>
      <div tw="">
        <Image src={im.random3} alt="cube" tw="-m-14" />
      </div>
    </Div.S>
  </ContainX.H800p3>
);

export default In1;
