import React from "react";

const Hero = () => {
  return (
    <section className="rounded-3xl w-full  bg-[url('/heroImage.jpg')] bg-no-repeat bg-cover p-14 my-1">
      <h2 className="text-center text-4xl font-bold">Do Note</h2>
      <div className="heroLeft w-1/2 text-5xl leading-[3.3rem] font-semibold">
        <h2 className="">Next-Gen</h2>
        <h2 className="">Note-taking App</h2>
        <h2 className=""> Infused With</h2>
        <h2 className=" ">A.I.</h2>
        <p className="w-[90%] text-base font-normal">
          This next-generation note-taking app combines cutting-edge AI
          technology with a sleek, user-friendly interface. It offers
          intelligent features such as automatic organization, to-do list, smart
          day planner, making it effortless to capture, organize, and share
          ideas. Whether you are a student, professional, or creative thinker,
          this app will revolutionize the way you take and manage notes and make
          your daily to-do list and get a day planner according to your to-do.
        </p>
      </div>
      <div className="heroRight"></div>
    </section>
  );
};

export default Hero;
