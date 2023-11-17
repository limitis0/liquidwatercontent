import React from "react";
import { Document, pdfjs } from "react-pdf";
import classes from "./cv.module.scss";

interface CVProps {}

const CV: React.FC<CVProps> = () => {
  // worker
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  return (
    <div className={classes.pdf_viewer}>
      <div style={{ width: "70%" }}>
        <Document file="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" />
      </div>
    </div>
  );
};

export default CV;
