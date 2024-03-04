import React from "react";

const PdfList = () => {
  const pdfFiles = ["ArnosGrove.pdf", "Brookdale.pdf", "StationRoad.pdf"];

  return (
    <div>
      {pdfFiles.map((fileName, index) => (
        <div key={index}>
          <a href={process.env.PUBLIC_URL + `/${fileName}`} download={fileName}>
            Download {fileName}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PdfList;
