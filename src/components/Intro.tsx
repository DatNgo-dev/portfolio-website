import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Hi, I'm Dat Ngo
      </h1>

      <p className="text-base md:text-xl mb-3 font-medium">
        Software Developer
      </p>

      <p className="text-sm max-w-xl mb-6 font-bold leading-loose">
        I come from a biomedical science background with a career in laboratory
        technician. Although I've enjoyed my work, I've realized that my true
        passion lies in software development. I love the challenge of solving
        complex problems and the sense of satisfaction that comes from creating
        something that works.
        <br /> <br />I found that I enjoyed the technical aspects of software
        development more than the biomedical side, and that's what ultimately
        led me to pursue this new field. I'm excited to bring my skills and
        experience to a new role where I can focus on developing software and
        applications that make a difference in people's lives.
      </p>
    </div>
  );
};

export default Intro;
