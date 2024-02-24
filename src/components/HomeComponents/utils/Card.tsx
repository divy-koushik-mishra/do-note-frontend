import React from "react";

const Card = (props: String) => {
  return (
    <div className="w-1/2 bg-gradient-to-r from-[#FCD9DF] to-[#CFE0F8]  mx-1  py-3 px-5 h-60 rounded-3xl ">
      <h2 className="text-3xl font-medium text-center">
        {props.title || `Card Title`}
      </h2>
      <p className="  text-base">{props.content}</p>
    </div>
  );
};

export default Card;
