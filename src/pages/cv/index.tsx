import React, { useEffect, useState } from "react";
import classes from "./cv.module.scss";
import { getCvData } from "../../utilities/api";
import { CvContent } from "../../types/data";

interface CVProps {}

const CV: React.FC<CVProps> = () => {
  const [model, setModel] = useState({} as CvContent);

  const handleDownloadOnClick = () => {
    window.open(model.cvLink);
  };

  const handleFrameWidth = (originalFrame: any) => {
    if (window.innerWidth < 670) {
      const adjustedFrame = originalFrame.replace("640", "280");
      return adjustedFrame;
    } else return originalFrame;
  };
  useEffect(() => {
    const CVContent = async () => {
      const res = await getCvData();
      console.log({ res });

      const arrangedRes = {
        cvIframe: res[0].CV_FRAME,
        cvLink: res[0].CV_LINK,
      };

      console.log({ arrangedRes });
      setModel(arrangedRes);
    };

    CVContent();
  }, []);

  return (
    <div className={classes.pdf_viewer}>
      {model.cvIframe && (
        <div className={classes.pdf_container}>
          <div
            className={classes.btn_container}
            onClick={() => handleDownloadOnClick()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M19 13V18C19 18.55 18.55 19 18 19H6C5.45 19 5 18.55 5 18V13C5 12.45 4.55 12 4 12C3.45 12 3 12.45 3 13V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13ZM13 12.67L14.88 10.79C15.27 10.4 15.9 10.4 16.29 10.79C16.68 11.18 16.68 11.81 16.29 12.2L12.7 15.79C12.31 16.18 11.68 16.18 11.29 15.79L7.7 12.2C7.31 11.81 7.31 11.18 7.7 10.79C8.09 10.4 8.72 10.4 9.11 10.79L11 12.67V4C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4V12.67Z"
                fill="#EEEFE9"
              />
            </svg>
            DOWNLOAD PDF
          </div>
          <div
            className={classes.google_pdf_frame}
            dangerouslySetInnerHTML={{
              __html: handleFrameWidth(model.cvIframe),
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default CV;
