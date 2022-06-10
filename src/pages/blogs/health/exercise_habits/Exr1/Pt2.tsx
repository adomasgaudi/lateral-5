import React, { FC } from "react";
import tw from "twin.macro";
import { BlurW, InBlur } from "../../../../../app/bones/components/Blur";
import { audio } from "../../../../../static/audio/webaudio";
import Consistency from "../Exr1.texts";

type Props = {
  position: any;
};

const Pt1: FC<Props> = ({ position }) => (
  <>
    <h3 className="h_3m">{`Consistency without discipline`}</h3>
    <audio controls>
      <source src={audio.consistency} type="audio/mpeg" />
    </audio>
    <BlurW click={position}>
      <>
        <p className="p">
          {`Probably the most practically important issue in exercising is how to do it consistently. And by no means is this an easy feat. To see how we could attain this elusive goal, let's not postulate as to what might or might not work, but let's instead look at an example that already works.`}
        </p>
        <p className="p">{``}</p>
        <p className="p">{`I would wager, many of you have met or likely even know a person who though having their life in slight disarray, would not ever miss the chance to hit the gym for the 6th time that week and afterwards not limit themselves in sharing their experience of the "burn" that they endured.`}</p>
        <p className="p">
          {` Clearly that requires a great amount of discipline. And these folks, let's appropriately call them "muscle builders", do not symbolize self-control in my book. I'm not saying that muscle-ly guys who enjoy working out are not disciplined.`}{" "}
          <strong>
            {`I'm saying that they don't have to be and yet they can still
                succeed to exercise consistently.`}
          </strong>
        </p>
        <p className="p">{`That is why I think it's
        worth considering this as an example and see what are the circumstances that help them habituate this unhabituable task.`}</p>
      </>
      {Consistency}
    </BlurW>
  </>
);

export default Pt1;
