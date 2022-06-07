import React, { FC } from "react";
import "twin.macro";
import Footer from "../../../../app/bones/layout/Footer";
import Header from "../../../../app/bones/layout/Header";
import HeaderFixed from "../../../../app/bones/layout/HeaderFixed";
import { ContainX } from "../../../../share/bones/components/Contain";
import Head from "../../../../share/bones/components/Head";
import { im } from "../../../../static/img";

type Props = {};

const Diet3: FC<Props> = () => (
  <>
    <Head title="Analysis Paralysis" />
    <HeaderFixed />
    <Header />
    <ContainX.Brilliant classIn="aniamte fadeInUp">
      <h3 className="h_3 mt-0">Habit actions classification</h3>
      <p className="p">The habit cycle </p>
      <p className="p"></p>
      <p>
        Habits have a cue that leads to an action and a reward. This reward then
        later creates a craving that inspires a new cue. That is the habit
        cycle.
      </p>
      <div className="flex justify-center w-full">
        <img src={im.skHabitCycle.src} alt="habit" className="w-80" />
      </div>
      <p className="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates
        explicabo ad harum ipsum laudantium aliquam saepe excepturi consequuntur
        libero, reprehenderit optio itaque. Eos cum quisquam exercitationem
        recusandae sit eaque sapiente incidunt fugiat sed cupiditate, autem aut
        tenetur tempore dignissimos sunt repellendus quo nulla deleniti
        voluptatibus veritatis qui eum quia.
      </p>
      <img src={im.skHabitActions.src} alt="habit" className="w-80" />
    </ContainX.Brilliant>
    <Footer />
  </>
);

export default Diet3;
