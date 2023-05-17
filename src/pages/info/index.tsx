import React, { useEffect, useState } from "react";
import Title from "../../components/title/Title";
import classes from "./info.module.scss";
import { getInfoContent } from "../../utilities/api";
import { InfoContent } from "../../types/data";
import ProfilePic from "../../assets/img/cat.jpg";
import Content from "../../components/content/Content";

interface InfoProps {}

const Info: React.FC<InfoProps> = () => {
  const [model, setModel] = useState({} as InfoContent);

  useEffect(() => {
    const infoContent = async () => {
      const res = await getInfoContent();
      console.log({ res });

      setModel(res);
    };

    infoContent();
  }, []);
  return (
    <div className={classes.info_container}>
      <div className={classes.section1_container}>
        {model.section1 && (
          <Content
            text={model.section1.content}
            color="dark"
            fontWeight="regular"
            fontSize="medium"
            textAlign="start"
          />
        )}
        <img
          className={classes.section1_img}
          src={ProfilePic}
          alt="profile pic"
        />
      </div>
    </div>
  );
};

export default Info;
