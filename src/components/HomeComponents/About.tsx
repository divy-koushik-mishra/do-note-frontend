import React from "react";
import Card from "./utils/Card";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center w-full ">
      <div className="aboutLeft  md:w-1/2 text-3xl ">
        <h3 className="md:w-4/6 font-medium my-4 p-2">
          Empowering you to Organize, Achieve and Thrive Everyday.
        </h3>
        <div className="cards w-full  flex ">
          <Card
            title="Note Taking"
            content="Capture and organize your thoughts effortlessly with our intuitive note-taking feature."
          />
          <Card
            title="Todo List"
            content="Stay on top of your tasks with customizable lists and reminders for increased productivity."
          />
        </div>
      </div>
      <div className="aboutRight md:w-1/4 bg-gradient-to-r from-[#FCD9DF] to-[#CFE0F8]  my-4 mx-2  p-8 rounded-3xl ">
        <h2 className="text-3xl font-medium text-center my-2">Planner PRO</h2>
        <p className="  text-base">
          Our AI-powered day planner helps you organize tasks and schedules
          effortlessly.
          <br />
          <strong className="text-xl"> Features:</strong> <br />
          <strong> Intelligent Scheduling: </strong>
          <br />
          AI suggests optimal schedules based on tasks and priorities. Easily
          personalize your schedule. <br />
          <strong> Seamless To-Do List Integration: </strong>
          Integrates seamlessly with your to-do list. Stay organized and
          productive. <br />
          <strong>Adaptive AI:</strong> <br />
          AI adapts to your preferences over time. Helps you make the most of
          your day.
        </p>
      </div>
    </section>
  );
};

export default About;
