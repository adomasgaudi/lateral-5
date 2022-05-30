import React, { FC } from "react";
import Image from "next/image";
import { Card } from "../../../share/bones/components/Card";
import { im } from "../../../static/img";
import Card1 from "./Card1";

type Props = {};

const In2Card: FC<Props> = () => (
  <>
    {/* <Card.Land className="border mr-5 p-5">
      <div className="-my-5 -ml-5 ">
        <Image src={im.random1} alt="cube" className=" object-cover" />
      </div>
      <p className="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        beatae?
      </p>
    </Card.Land> */}
    <Card1 />
  </>
);

export default In2Card;
