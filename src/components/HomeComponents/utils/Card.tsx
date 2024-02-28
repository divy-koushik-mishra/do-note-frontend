import React from "react";

interface CardProps {
  title?: string;
  content: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="w-1/2 bg-gradient-to-r from-[#FCD9DF] to-[#CFE0F8]  mx-1  py-3 px-2 md:px-5 md:h-60 rounded-3xl items-center flex flex-col  ">
      <h2 className="text-2xl md:text-3xl  font-medium text-center">
        {props.title || `Card Title`}
      </h2>
      <p className="  text-base">{props.content}</p>
    </div>
  );
};

export default Card;
