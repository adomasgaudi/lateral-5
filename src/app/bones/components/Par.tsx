import React, { FC, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const DivViz = styled.div<any>(({ isVisible }) => [
  `display: ${isVisible ? `flex` : `none`};`,
]);

const Par: FC<Props> = ({ children }) => {
  const [viz, setViz] = useState<boolean>(false);
  const changeProp = () => {
    setViz((prev) => !prev);
  };

  return (
    <div className="p glow_side bg-white relative " onClick={changeProp}>
      {children}
      <DivViz
        id="double"
        className=" fadeInUp15 w-full h-full backdrop-blur-sm bg-[f47460]/50 top-0 left-0 absolute flex justify-center items-center transition-all"
        isVisible={viz}
      >
        <p className="p font-[600] w-[80%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eum
          sequi quidem non. Sit minima quos accusantium? Explicabo, nesciunt
          illum?
        </p>
      </DivViz>
    </div>
  );
};

export default Par;
