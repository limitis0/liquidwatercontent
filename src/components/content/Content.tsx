import React from "react";
import classes from "./Content.module.scss";

interface ContentProps {
  text: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  textAlign?: string;
}

const Content: React.FC<ContentProps> = (props) => {
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

export default Content;
