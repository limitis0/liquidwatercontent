import React from "react";
import { Document, pdfjs } from "react-pdf";
import classes from "./cv.module.scss";

interface CVProps {}

const CV: React.FC<CVProps> = () => {
  // worker
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  return (
    <div className={classes.pdf_viewer}>
      <div style={{ width: "70%" }}>
        <Document file="https://github.com/limitis0/liquidwatercontent/blob/main/public/sample_pdf.pdf" />
      </div>
    </div>
  );
};

export default CV;
