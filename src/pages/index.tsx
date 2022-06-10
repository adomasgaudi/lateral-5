import React from "react";
import Header from "../app/bones/layout/Header";
import Footer from "../app/bones/layout/Footer";
import Head from "../share/bones/components/Head";
import "twin.macro";
import In1 from "../app/bones/containers/In1";
import In2 from "../app/bones/containers/In2";
import HeaderFixed from "../app/bones/layout/HeaderFixed";

export default function Home() {
  return (
    <div className="relative">
      <Head title="Overanalysed" />
      <HeaderFixed />
      <Header />
      <In1 />
      <In2 />
      <Footer />
    </div>
  );
}
