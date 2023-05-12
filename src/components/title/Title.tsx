import React from "react";
import classes from "./Title.module.scss";

interface TitleProps {
  text: string;
  fontSize: string;
  fontWeight: string;
  color: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { text, fontSize, fontWeight, color } = props;
  return (
    <div
      className={`${classes[fontSize]} ${classes[fontWeight]} ${classes[color]}`}
    >
      {text}
    </div>
  );
};

export default Title;
