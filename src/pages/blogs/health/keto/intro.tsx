import React, { FC } from "react";
import tw from "twin.macro";
import Footer from "../../../../app/bones/layout/Footer";
import Header from "../../../../app/bones/layout/Header";
import { ContainX } from "../../../../share/bones/components/Contain";
import Head from "../../../../share/bones/components/Head";

type Props = {};

const Keto1: FC<Props> = () => (
  <>
    <Head title="Analysis Paralysis" />
    <Header />
    <ContainX.Brilliant classIn="aniamte fadeInUp"></ContainX.Brilliant>
    <Footer />
  </>
);

export default Keto1;
