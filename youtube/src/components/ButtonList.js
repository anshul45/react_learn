import React from "react";
import Button from "./Button";

const List = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Socker",
  "News",
  "Cooking",
  "New to You",
  "Watched",
];

const ButtonList = () => {
  return (
    <div className="flex ml-2.5">
      {List.map((button, index) => (
        <Button name={button} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
