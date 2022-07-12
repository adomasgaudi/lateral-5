import React, { FC, useEffect, useState } from "react";
import { ContainX } from "../../../share/bones/components/Contain";
import { Div } from "../../../share/bones/components/Div";
import Image from "next/image";
import { im } from "../../../static";
import tw from "twin.macro";
import { Link } from "../layout/Header.styles";

type Props = {};

const In1: FC<Props> = () => {

  const [col2, setCol2] = useState('gg')
  const [text2, setText2] = useState( `${col2} and bb`)

  let col = 'gg'
  const text = `${col} and bb`

  const gogo = () => {
    console.log(col2);
    setCol2('hh')
    console.log(col2);
  }

  useEffect(() => {
  }, [col2])
  

  return (
    <ContainX.H800p3 classIn="md:flex-row flex-col-reverse">
      <Div.S size={55} className="px-5">
        <div className="flex flex-col gap-8 items-start fadeInUp">
          <h1 className="hero ">
            <span className="text_grad_3">Overanalysed.</span>
            <br />
            <span>Blogs about anything: </span>
            <span>Food</span>
          </h1>
          <div>
            <button onClick={gogo}>{text2} 888888888888</button>
            <p className="p"></p>
            <p className="p_xl mb-2">
              Every blog in here is on its path to be analyzed at different
              levels to create scientific-ish schemes that allow to abstract and
              re-envision any idea.
            </p>
            <p className="p_xl font-bold">
              Basically, an analysis-focused and an analysis-aware blog.
            </p>
          </div>
          <Link href="/blogs" cls="btn_glow">
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
};

export default In1;
