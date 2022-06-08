import React, { FC, useState } from "react";
import "twin.macro";
import { BlurW, InBlur } from "../../../../app/bones/components/Blur";
import Footer from "../../../../app/bones/layout/Footer";
import Header from "../../../../app/bones/layout/Header";
import HeaderFixed from "../../../../app/bones/layout/HeaderFixed";
import { ContainX } from "../../../../share/bones/components/Contain";
import Head from "../../../../share/bones/components/Head";
import { sec1p1 } from "./1.texts";

type Props = {};

const drop = <>text2</>;
const Diet2: FC<Props> = () => {
  const [position, setPosition] = useState<boolean>(false);
  const goHandle = () => {
    setPosition((prev) => !prev);
  };

  return (
    <>
      <Head title="Analysis Paralysis" />
      <HeaderFixed />
      <Header />
      <ContainX.Brilliant classIn="fadeInUp">
        <p
          className="p_tag hover:border-b-blue-500 hover:border-b"
          onClick={goHandle}
        >
          Lvl 1 UP!
        </p>
        <h1 className="h_2 mb-5">
          Why you should become a bodybuilder for a year
        </h1>

        <h3 className="h_3m ">{`You won't get muscular yet.`}</h3>
        <BlurW classBlur="" click={position}>
          <p className="p">
            {`You might think that its not what you want, but just entertain
              this idea for a second. First of all, basically no one becomes
              super bulk in a year, it takes years, plural. So, let's see what exactly would be the benefit of bodybuilding for a year.`}
          </p>
          <InBlur>{sec1p1}</InBlur>
        </BlurW>
        <h3 className="h_3m">{`Training consistently`}</h3>
        <BlurW click={position}>
          <>
            <p className="p">{`Let's address probably the most important issue in exercising, namely how to do it consistently.`}</p>
            <p className="p">{`To see how we could attain this elusive goal, let's take a look at a working example.`}</p>
            <p className="p">{`It seems quite common to find young
        guys that just can't stop going to the gym and they keep talking about
        how they feel addicted to the "burn".`}</p>
          </>
        </BlurW>
        <p className="p">
          {`Doing it consistently and creating a habit out of it. in my opinion is not adressed enough. So let me give you some pointers.  Now, "generic musclehead" and
        "discipline" do not associate in my head that well, so I think it's
        worth considering this as an example that that has the specific
        environment to successfully habituate this unhabituable task. Reasons
        why bodybuilders create good exercising habits. Reason one. Although
        exercising different muscles seems is equally good and indiscriminantly
        suggested, you might have found that some muscles are much more
        exhausting to train than others. There are atleast two reasons that
        could explain this. First, some muscles are not trained that often,
        making the exercise unclear, difficult, and the route to max reps a
        never ending torture. "Muscleheads" usually focus on large muscle groups
        and repeat familiar exercises. Check. Reason two. Some muscles require
        larger rep ranges. Usefull exercise volume is when you get close to your
        max ability, your max reps, however depending on the resistance of the
        exercise that could be anywhere from 1 to infinite reps (walking), or
        more realistically from 3 to 100 reps. Unsurprisingly, reaching that max
        rep of 80reps is a lot more difficult than say doing a 5rep max.
        "Muscleheads" usually do hight resistance/weight exercises, thus
        reaching max reps in say 5 to 20 reps. Check. Reason three. A lot of
        young guys are desperate to improve their phisique. Thus they will most
        definetely not miss the opportunity to eat 2g/kg of protein per day or
        even use other suplements. By doing this they're not only improving
        their muscle growth, but consequentially, this also rewards them with
        the dopamine to keep going back to the gym. Additionally, their diet is
        also a constant reminder of what they're doing. They're not annoyingly
        surprised when it's time to go the gym. On the contrary, they have been
        consciously eating exactly what they need, be that proteins or carbs,
        and they can't wait to return and see the next days gains. Reason four.
        Young guys show off frequently. They know their max abilities for each
        exercise and they know their competition. Thats to very powerfull
        psychological tools right there. Social comparison/pressure and logging
        experience and improvements.`}
        </p>
      </ContainX.Brilliant>
      <Footer />
    </>
  );
};

export default Diet2;
