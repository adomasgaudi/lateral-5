import React from "react";
import styled, { css } from "styled-components";
import tw, { theme } from "twin.macro";
import Footer from "../app/bones/layout/Footer";
import Header from "../app/bones/layout/Header";
import { Link } from "../app/bones/layout/Header.styles";
import { Card } from "../share/bones/components/Card";
import { ContainX } from "../share/bones/components/Contain";
import Head from "../share/bones/components/Head";
import { im } from "../static/img";

const BlogList = () => {
  return (
    <>
      <Head title="Analysis Paralysis" />
      <Header />

      <ContainX.Brilliant>
        <Link href="blogs/health/exercise_habits/1" cls="mb-5">
          <Card.W3_7img
            img={im.random1.src}
            classIn="p-3 flex flex-col gap-3 items-start"
          >
            <h3 className="md:h_3 md:mt-0">Exercise Habits Lv1</h3>
            <p className="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              blanditiis nobis sit placeat ratione hic molestias totam, corporis
              illo quia.
            </p>
          </Card.W3_7img>
        </Link>
        <Link href="blogs/health/exercise_habits/2" cls="mb-5">
          <Card.W3_7img
            img={im.random1.src}
            classIn="p-3 flex flex-col gap-3 items-start"
          >
            <h3 className="md:h_3 md:mt-0">Exercise Habits Lv2</h3>
            <p className="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              blanditiis nobis sit placeat ratione hic molestias totam, corporis
              illo quia.
            </p>
          </Card.W3_7img>
        </Link>
      </ContainX.Brilliant>
      <Footer />
    </>
  );
};

export default BlogList;
