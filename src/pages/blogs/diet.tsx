import React from "react";
import styled, { css } from "styled-components";
import tw, { theme } from "twin.macro";
import Footer from "../../app/bones/layout/Footer";
import Header from "../../app/bones/layout/Header";
import { ContainX } from "../../share/bones/components/Contain";
import Head from "../../share/bones/components/Head";

const Diet = () => {
  return (
    <>
      <Head title="Analysis Paralysis" />
      <Header />
      <ContainX.H800p3>diet</ContainX.H800p3>
      <Footer />
    </>
  );
};

export default Diet;
