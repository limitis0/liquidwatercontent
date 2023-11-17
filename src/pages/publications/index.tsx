import React, { useEffect, useState } from "react";
import classes from "./publications.module.scss";

import { PublicationContent } from "../../types/data";
import { getPublicationContent } from "../../utilities/api";
import Timeline from "../../components/timeline/Timeline";

interface PublicationsProps {}

const Publications: React.FC<PublicationsProps> = () => {
  const [model, setModel] = useState([{}] as PublicationContent[]);

  const monthNumAdjust = (monthNum: string) => {
    if (monthNum && monthNum.length === 1) {
      return 0 + monthNum;
    } else return monthNum;
    // return monthNum;
  };

  useEffect(() => {
    const publicationContent = async () => {
      const res = await getPublicationContent();
      console.log({ res });

      const arrangedRes = res.map(
        (data: { MONTH: any; YEAR: any; TITLE: any; ABSTRACT: any }) => ({
          month: data.MONTH,
          year: data.YEAR,
          title: data.TITLE,
          abstract: data.ABSTRACT,
        })
      );

      console.log({ arrangedRes });
      setModel(arrangedRes);
    };

    publicationContent();
  }, []);
  return (
    <div className={classes.publication_container}>
      {model[0].month ? (
        model.map((data) => (
          <Timeline
            key={`${data.year}${data.title}`}
            year={data.year}
            month={monthNumAdjust(data.month)}
            title={data.title}
            abstract={data.abstract}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Publications;
