import React, { FC } from "react";
import tw from "twin.macro";
import { BlurW, InBlur } from "../../../../../app/bones/components/Blur";
import { audio } from "../../../../../static/audio/webaudio";

type Props = {
  position: any;
};

const Pt1: FC<Props> = ({ position }) => (
  <>
    <h4 className="h_4m">Abstract</h4>
    <p className="pm mb-40">
      {`Taking stereotypical muscle-builders as a working real life example we can destructure quite a few good habit building tips for exercising. Namely doing simple familiar exercises, isolating large muscles, doing low rep high weight exercises, taking care of our diet and filling our social circle with competition and reinforcement.`}
    </p>

    <h3 className="h_3m">{`Intro word`}</h3>
    {/* <audio controls>
      <source src={audio.intro} type="audio/mpeg" />
    </audio> */}
    <BlurW classBlur="" click={position}>
      <>
        <p className="pm">
          {`You might think that growing a lot of muscle is not what you want, but just entertain
              this idea for a second. No one becomes
              super bulk in a year, it takes years, plural.`}
        </p>
        <p className="pm">{`So, let's see what exactly would be the benefit of bodybuilding for a year.`}</p>
      </>
      <>jo</>
    </BlurW>
  </>
);

export default Pt1;
