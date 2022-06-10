import React, { FC } from "react";
import tw from "twin.macro";
import { BlurW, InBlur } from "../../../../../app/bones/components/Blur";
import { audio } from "../../../../../static/audio/webaudio";

type Props = {
  position: any;
};

const Pt1: FC<Props> = ({ position }) => (
  <>
    <BlurW className="" click={position}>
      <>
        <p className="p ">
          {`You might think that growing a lot of muscle is not what you want, but just entertain
              this idea for a second. No one becomes
              super bulk in a year, it takes years, plural.`}
        </p>
        <p className="pm">{`So, let's see what exactly would be the benefit of bodybuilding for a year.`}</p>
      </>
      <>jo</>
    </BlurW>
    <h4 className="h_4m">Abstract</h4>
    <p className="pm mb-40 text-[#525252] border-2 border-[#f77993]  p-2 -mx-2 rounded-md">
      {`Taking stereotypical muscle-builders as a working real life example we can destructure quite a few good habit building tips for exercising. Namely doing simple familiar exercises, isolating large muscles, doing low rep high weight exercises, taking care of our diet and filling our social circle with competition and reinforcement.`}
    </p>
  </>
);

export default Pt1;
