import React, { FC } from "react";
import { ContainX } from "../../../share/bones/components/Contain";
import { Div } from "../../../share/bones/components/Div";
import Image from "next/image";
import { im } from "../../../static";
import tw from "twin.macro";
import { Link } from "../layout/Header.styles";

type Props = {};

const In1: FC<Props> = () => (
  <ContainX.H800p3 classIn="md:flex-row flex-col-reverse">
    <Div.S size={55} className="px-5">
      <div className="flex flex-col gap-8 items-start aniamte fadeInUp">
        <h1 className="hero ">
          <span className="text_grad_3">Overanalysed.</span>
          <br />
          <span>Blogs about anyting: </span>
          <span>Food</span>
        </h1>
        <div>
          <p className="p_xl mb-2">
            Every blog in here is on its path to be analyzed at different levels
            to create scientific-ish schemes that allow to abstract and
            re-envision any idea.
          </p>
          <p className="p_xl font-bold">
            Basically, an analysis-focused and an analysis-aware blog.
          </p>
        </div>
        <Link href="/bloglist" cls="btn_glow">
          See Blogs
        </Link>
      </div>
    </Div.S>
    <Div.S size={45} classList="">
      <div tw="">
        <Image src={im.random3} alt="cube" tw="-m-14" />
      </div>
    </Div.S>
  </ContainX.H800p3>
);

export default In1;
