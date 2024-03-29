import React from "react";
import classes from "./Title.module.scss";

interface TitleProps {
  text: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  textAlign?: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { text, fontSize, fontWeight, color, textAlign } = props;
  return (
    <div
      className={`${classes[fontSize]} ${classes[fontWeight]} ${
        classes[color]
      } ${classes[textAlign ? textAlign : "center"]}`}
    >
      {text}
    </div>
  );
};

export default Title;
