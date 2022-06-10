import React, { FC } from "react";
import tw from "twin.macro";
import { BlurW, InBlur } from "../../../../../app/bones/components/Blur";
import { Quote } from "../../../../../app/bones/components/Quote";
import { audio } from "../../../../../static/audio/webaudio";
import { texts } from "../Exr1.texts";

type Props = {
  position: any;
};

const Pt1: FC<Props> = ({ position }) => (
  <>
    <h3 className="h_3m">
      Reasons why bodybuilders create good exercising habits.
    </h3>

    <h3 className="h_4m">
      Reason one - some muscles are more difficult to train than others
    </h3>
    <audio controls>
      <source src={audio.reason1} type="audio/mpeg" />
    </audio>
    <BlurW click={position}>
      <>
        <p className="p">
          Although training different muscles seems equally good and is
          indiscriminantly suggested, you might have found that
          <b> some muscles are much more exhausting to train than others.</b>
        </p>
        <p className="p">{` There are at least two reasons that
        could explain this. First, some types of exercises utilizing best practices and activating some "key" forgotten muscles might simply be unclear and difficult due to you having never done them. 
        `}</p>
        <p className="p">{`Second, the exercises might be clear but the muscle itself might be rarely used or simply not trained in a long time thus using it would be uncomfortable.`}</p>
        <p className="p">
          {" "}
          <Quote>{`"Muscle builders" usually focus on main muscle groups
        and repeat familiar exercises. Check.`}</Quote>{" "}
        </p>
      </>
      {texts.reason1}
    </BlurW>

    <h3 className="h_4m">Reason two - High rep ranges are exhausting</h3>
    <audio controls>
      <source src={audio.reason2} type="audio/mpeg" />
    </audio>
    <BlurW click={position}>
      <>
        <p className="p">{` Training in high rep ranges. Some muscles require
        larger rep ranges. If you're trying to build muscle, then the useful exercise volume would be when you get close to your
        max ability, your max reps, however, depending on the resistance of the
        exercise your maximum amount of reps can vary. Realistically, people commonly choose weights that end up setting their max reps somewhere in the range of 10reps to 50reps.`}</p>
        <b className="">{` Unsurprisingly, reaching that max
        rep of 50reps is a lot more difficult than say doing a 10rep max even though both only count as one set.`}</b>
        <p className="p">{`Ignoring the fact that a 50rep max is not optimal for muscle size/strength growth, there is still the problem that it's just exhausting. `}</p>
        <Quote>
          {`"Muscle builders" usually do high resistance/weight exercises, thus reaching max reps in say 5 to 20 reps. Check.`}
        </Quote>
      </>
      {texts.reason2}
    </BlurW>

    <h3 className="h_4m"> Reason three - diet</h3>
    <BlurW click={position}>
      <>
        <p className="p">{`A lot of young guys are desperate to improve their physique. They will most definitely not miss the opportunity to eat 2g/kg of protein per day or even use other more controversial supplements. By doing this they're not only improving
        their muscle growth, but consequentially, this also rewards them with
        the dopamine to keep going back to the gym.  `}</p>
        <p className="p">{`Additionally, their diet is
        also a constant reminder of what they're doing. They're not annoyingly
        surprised when it's time to go the gym. On the contrary, they have been
        consciously eating exactly what they need, and they can't wait to return and see what gains they've achieved.`}</p>
        <Quote>
          {" "}
          {`"Muscle-builders" make sure that their efforts actually show results, and by doing that they reward themselves and stay aware and focused.`}
        </Quote>
      </>
      <p className="p">par3</p>
    </BlurW>

    <h3 className="h_4m"> Reason four - healthy social pressure </h3>
    <BlurW click={position}>
      <>
        <p className="p">{`Young guys show off frequently. They know their max abilities for each exercise and they know their competition. Those two alone are very powerful psychological tools by themselves. Social comparison together with modeling their self-identity and logging experience and improvements.`}</p>
        <Quote>
          {" "}
          {`"Muscle-builders" know the numbers of their abilities, they compete and they brag amongst themselves. Check. `}
        </Quote>
      </>
      <p className="p">discipline is just part of the equation</p>
    </BlurW>
  </>
);

export default Pt1;
