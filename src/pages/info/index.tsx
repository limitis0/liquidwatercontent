import React, { useEffect, useState } from "react";
import Title from "../../components/title/Title";
import classes from "./info.module.scss";
import { getInfoContent } from "../../utilities/api";
import { InfoContent } from "../../types/data";
import ProfilePic from "../../assets/img/cat.jpg";
import Content from "../../components/content/Content";

interface InfoProps {}

const Info: React.FC<InfoProps> = () => {
  // page content (text)
  const [model, setModel] = useState({} as InfoContent);

  useEffect(() => {
    const infoContent = async () => {
      const res = await getInfoContent();
      console.log({ res });

      const arrangedRes = {
        section1: {
          content: res[0].INFO_ABSTRACT,
        },
        section2: {
          title: res[0].INFO_TITLE_1,
          content: res[0].INFO_CONTENT_1,
        },
        section3: {
          title: res[0].INFO_TITLE_2,
          content: res[0].INFO_CONTENT_2,
        },
        section4: {
          title: res[0].INFO_TITLE_3,
          content: res[0].INFO_CONTENT_3,
        },
      };

      console.log({ arrangedRes });

      setModel(arrangedRes);
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
            textAlign={window.innerWidth < 900 ? " center" : "start"}
          />
        )}
        <img
          className={classes.section1_img}
          src={ProfilePic}
          alt="profile pic"
        />
      </div>

      {model.section2 && model.section3 && model.section4 && (
        <div className={classes.section_others_container}>
          <div className={classes.section_other_container}>
            <Title
              text={model.section2.title}
              fontSize="small"
              fontWeight="bold"
              color="dark"
              textAlign={window.innerWidth < 900 ? " center" : "start"}
            />
            <Content
              text={model.section2.content}
              color="dark"
              fontWeight="regular"
              fontSize="medium"
              textAlign={window.innerWidth < 900 ? " center" : "start"}
            />
          </div>

          <div className={classes.section_other_container}>
            <Title
              text={model.section3.title}
              fontSize="small"
              fontWeight="bold"
              color="dark"
              textAlign={window.innerWidth < 900 ? " center" : "start"}
            />
            <Content
              text={model.section3.content}
              color="dark"
              fontWeight="regular"
              fontSize="medium"
              textAlign={window.innerWidth < 900 ? " center" : "start"}
            />
          </div>

          <div className={classes.section_other_container}>
            <Title
              text={model.section4.title}
              fontSize="small"
              fontWeight="bold"
              color="dark"
              textAlign={window.innerWidth < 900 ? " center" : "start"}
            />
            <Content
              text={model.section3.content}
              color="dark"
              fontWeight="regular"
              fontSize="medium"
              textAlign={window.innerWidth < 900 ? " center" : "start"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
