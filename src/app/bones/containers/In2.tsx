import React, { FC, useEffect } from "react";
import "twin.macro";
import { ContainX } from "../../../share/bones/components/Contain";
// import { Div50 } from "../../../share/bones/components/Fifty";
import Image from "next/image";
import { im } from "../../../static/img";
import random from "../../../static/img/random1.jpg";
import In2Card from "../components/InCard";
import { Div } from "../../../share/bones/components/Fifty";
import { useSquare } from "../../../share/utils/tools/useSquare";

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
        <Div.S
          size="50"
          className="flex border mr-5 overflow-hidden rounded-xl min-h-[250px] bg-white shadow-trello-2"
        >
          <Div.S size="30">
            <img src={random.src} alt="d" className="h-full object-cover " />
          </Div.S>
          <Div.S size="70" className="p-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam, eligendi?
            </p>
          </Div.S>
        </Div.S>
        <Div.S size="50" className="h-full ">
          <img
            id="square"
            src={im.random2.src}
            alt="d"
            className="rounded-xl -my-20 object-cover "
          />
        </Div.S>
      </ContainX.H0p3>
    </>
  );
};

export default In2;
