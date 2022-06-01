import React from "react";
import Header from "../app/bones/layout/Header";
import Footer from "../app/bones/layout/Footer";
import Head from "../share/bones/components/Head";
import tw from "twin.macro";
import In1 from "../app/bones/containers/In1";
import In2 from "../app/bones/containers/In2";

export default function Home() {
  return (
    <>
      <Head title="Overanalysed" />
      <Header />
      <In1 />
      <In2 />
      <Footer />
    </>
  );
}
