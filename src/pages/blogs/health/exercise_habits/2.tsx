import React, { FC } from "react";
import tw from "twin.macro";
import Footer from "../../../../app/bones/layout/Footer";
import Header from "../../../../app/bones/layout/Header";
import { Link } from "../../../../app/bones/layout/Header.styles";
import { ContainX } from "../../../../share/bones/components/Contain";
import Head from "../../../../share/bones/components/Head";

type Props = {};

const Diet1: FC<Props> = () => (
  <>
    <Head title="Analysis Paralysis" />
    <Header />
    <ContainX.Brilliant classIn="flex-col items-start aniamte fadeInUp">
      <Link href="/blogs/diet/1">habits</Link>
      <Link href="/blogs/diet/2">exercise</Link>
      <Link href="/blogs/diet/3">ideas</Link>
      <p className="p_tag">Lvl 2</p>
      <h1 className="h_2 mb-5">
        Why you should become a bodybuilder for a year
      </h1>

      <h3 className="h_3 mb-5">{`You won't get muscular yet.`}</h3>
      <p className="p">
        <ul>
          <li>Habit forming is an the most important part of exercising</li>
          <li>
            Habit forming cycle has three main parts: the cue, the
            action/process and the reward
          </li>
          <li>To increase adherance to the cue, simplify the action.</li>
          <li>
            To increase adherance to the cue, simplify and clarify the action.
          </li>
          <li>Increase reward and motive</li>
        </ul>
      </p>

      <Link href="/blogs/diet/2" cls="font-btn-1 btn-1">
        next
      </Link>
    </ContainX.Brilliant>
    <Footer />
  </>
);

export default Diet1;
