import React, { FC, useEffect } from "react";
import "twin.macro";
import { ContainX } from "../../../share/bones/components/Contain";
// import { Div50 } from "../../../share/bones/components/Fifty";
import Image from "next/image";
import { im } from "../../../static/img";
import random from "../../../static/img/random1.jpg";
import { Div } from "../../../share/bones/components/Div";
import { Card } from "../../../share/bones/components/Card";
import { Link } from "../layout/Header.styles";
import NegMargin from "../../../share/bones/components/Margin";
import { useSquare } from "../../../share/utils/tools/useTools";

type Props = {};

const In2: FC<Props> = () => {
  console.log(random.src, "jo");
  useSquare("square");
  return (
    <>
      <ContainX.H0p3 classIn="flex flex-col gap-8 items-start mb-60 ">
        <div>
          <div className="p font-bold text-blue-500">Tagline</div>
          <h1 className="h_2">Food</h1>
        </div>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          perferendis voluptatum iure voluptate animi ut asperiores non?
          Perferendis, amet eligendi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magni, quo Lorem ipsum dolor sit amet consectetur
          adipisicing elit. At, nulla.
        </p>
      </ContainX.H0p3>

      <ContainX.H0p3 classIn="items-center" classOut="bg-blue-200 ">
        <Div.S size="50" className="">
          <Card.W3_7img
            img={im.random1.src}
            classIn="p-3 flex flex-col gap-3 items-start"
          >
            <h2 className="h_2">Diet</h2>
            <p className="p_sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              nemo ut quisquam temporibus nostrum ex obcaecati distinctio{" "}
            </p>
            <Link href="/bloglist">
              <div className="shadowHov_thick rounded-md py-1 px-3 font_btn_1">
                READ
              </div>
            </Link>
          </Card.W3_7img>
        </Div.S>
        <Div.S size="50" className="h-full ">
          <NegMargin>
            <img
              id="square"
              src={im.random2.src}
              alt="d"
              className="rounded-xl object-cover "
            />
          </NegMargin>
        </Div.S>
      </ContainX.H0p3>
    </>
  );
};

export default In2;
