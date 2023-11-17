import React, { useState } from "react";
import classes from "./Timeline.module.scss";
import Content from "../content/Content";
import Title from "../title/Title";

interface TimelineProps {
  month: string;
  year: string;
  title: string;
  abstract: string;
}

const Timeline: React.FC<TimelineProps> = (props) => {
  const { month, year, title, abstract } = props;
  const [toggleContent, setToggleContent] = useState(false);

  const handleToggleContent = () => setToggleContent(!toggleContent);

  return (
    <div className={classes.timeline_container}>
      <div className={classes.date_container}>
        <Content
          text={`${month}/`}
          color="dark"
          fontWeight="regular"
          fontSize="medium"
          textAlign="start"
        />
        <Content
          text={year}
          color="dark"
          fontWeight="regular"
          fontSize="medium"
          textAlign="start"
        />
      </div>
      <div className={classes.shape_container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <circle cx="6.5" cy="6.5" r="6.5" fill="#8E936D" />
        </svg>
        <div className={classes.line}></div>
      </div>
      <div className={classes.pub_content_container}>
        <Title
          text={title}
          fontSize="small"
          fontWeight="bold"
          color="dark"
          textAlign="start"
        />
        {window.innerWidth > 900 ? (
          <Content
            text={abstract}
            color="dark"
            fontWeight="regular"
            fontSize="medium"
            textAlign="start"
          />
        ) : (
          <>
            <div onClick={() => handleToggleContent()}>
              {toggleContent ? (
                <div className={classes.content_container}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                      fill="#8E936D"
                    />
                  </svg>
                  <Content
                    text={abstract}
                    color="dark"
                    fontWeight="regular"
                    fontSize="medium"
                    textAlign="start"
                  />
                </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    stroke="#8E936D"
                  />
                  <path
                    d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
                    fill="#8E936D"
                  />
                </svg>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Timeline;
