import React from "react";
import classes from "./Title.module.scss";

interface TitleProps {
  text: string;
  fontSize: string;
  fontWeight: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { text, fontSize, fontWeight } = props;
  return (
    <div className={`${classes[fontSize]} ${classes[fontWeight]}`}>{text}</div>
  );
};

export default Title;
