import React, { FC, useState } from "react";
import "twin.macro";
import { BlurW, InBlur } from "../../../../app/bones/components/Blur";
import { Quote } from "../../../../app/bones/components/Quote";
import Footer from "../../../../app/bones/layout/Footer";
import Header from "../../../../app/bones/layout/Header";
import HeaderFixed from "../../../../app/bones/layout/HeaderFixed";
import { ContainX } from "../../../../share/bones/components/Contain";
import Head from "../../../../share/bones/components/Head";
import Pt1 from "./Exr1/Pt1";
import Pt2 from "./Exr1/Pt2";
import Pt3 from "./Exr1/Pt3";

type Props = {};

const Diet2: FC<Props> = () => {
  const [position, setPosition] = useState<boolean>(false);
  const goHandle = () => {
    setPosition((prev) => !prev);
  };

  return (
    <>
      <Head title="Analysis Paralysis" />
      <HeaderFixed />
      <Header />
      <ContainX.Brilliant classIn="fadeInUp">
        <p
          className="p_tag hover:border-b-blue-500 hover:border-b"
          onClick={goHandle}
        >
          Lvl 1 UP!
        </p>
        <h1 className="h_2 mb-10">
          Why you should become a bodybuilder for a year
        </h1>

        <Pt1 position={position} />
        <Pt2 position={position} />
        <Pt3 position={position} />
      </ContainX.Brilliant>
      <Footer />
    </>
  );
};

export default Diet2;
