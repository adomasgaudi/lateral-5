import React, { FC } from "react";
import tw from "twin.macro";
import Footer from "../../../../app/bones/layout/Footer";
import Header from "../../../../app/bones/layout/Header";
import { ContainX } from "../../../../share/bones/components/Contain";
import Head from "../../../../share/bones/components/Head";

type Props = {};

const Diet2: FC<Props> = () => (
  <>
    <Head title="Analysis Paralysis" />
    <Header />
    <ContainX.Brilliant classIn="aniamte fadeInUp">
      <p className="p_tag">Lvl 1</p>
      <h1 className="h_2 mb-5">
        Why you should become a bodybuilder for a year
      </h1>

      <h3 className="h_3 mb-5">{`You won't get muscular yet.`}</h3>
      <p className="p">{`You might think that it's not what you want, but just entertain this
        idea for a second. First of all, basically no one becomes super bulk in
        a year, it takes years, plural. `}</p>
      <br />
      <p className="p">
        {`Bulking for a year is not gonna make you
        worse of whatever your goals are. And I sincerely mean that for women as
        well, being a guy. Given that, let's see what exactly would be the
        benefit of bodybuilding for a year. The biggest obsticle to any king of
        exercising is simply doing it.`}
      </p>
      <h3 className="h_3 mb-5">{`Habit forming is the most important factor`}</h3>
      <p className="p">
        {`Doing it consistently and creating a habit out of it. Quite possibly the
        most important issue of exercising in my opinion is not adressed enough.
        So let me give you some pointers. It seems quite common to find young
        guys that just can't stop going to the gym and they keep talking about
        how they feel addicted to the "burn". Now, "generic musclehead" and
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
      <br />
      <br />
      <p className="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus
        explicabo sint perferendis quia, non tenetur modi, cumque dolorum
        laudantium fugit! Sit nam beatae delectus. Nam, quaerat repellat! Veniam
        dolore incidunt maiores! Quod incidunt officia, dolore neque omnis
        reprehenderit autem fuga in eum nam expedita. Nam veniam odio aliquid,
        suscipit?
      </p>
      <br />
      <br />
      <p className="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus
        explicabo sint perferendis quia, non tenetur modi, cumque dolorum
        laudantium fugit! Sit nam beatae delectus. Nam, quaerat repellat! Veniam
        dolore incidunt maiores! Quod incidunt officia, dolore neque omnis
        reprehenderit autem fuga in eum nam expedita. Nam veniam odio aliquid,
        suscipit?
      </p>
      <br />
      <br />
      <p className="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus
        explicabo sint perferendis quia, non tenetur modi, cumque dolorum
        laudantium fugit! Sit nam beatae delectus. Nam, quaerat repellat! Veniam
        dolore incidunt maiores! Quod incidunt officia, dolore neque omnis
        reprehenderit autem fuga in eum nam expedita. Nam veniam odio aliquid,
        suscipit?
      </p>
      <br />
      <br />
      <p className="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus
        explicabo sint perferendis quia, non tenetur modi, cumque dolorum
        laudantium fugit! Sit nam beatae delectus. Nam, quaerat repellat! Veniam
        dolore incidunt maiores! Quod incidunt officia, dolore neque omnis
        reprehenderit autem fuga in eum nam expedita. Nam veniam odio aliquid,
        suscipit?
      </p>
      <br />
      <br />
      <p className="p mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus
        explicabo sint perferendis quia, non tenetur modi, cumque dolorum
        laudantium fugit! Sit nam beatae delectus. Nam, quaerat repellat! Veniam
        dolore incidunt maiores! Quod incidunt officia, dolore neque omnis
        reprehenderit autem fuga in eum nam expedita. Nam veniam odio aliquid,
        suscipit?
      </p>
    </ContainX.Brilliant>
    <Footer />
  </>
);

export default Diet2;
