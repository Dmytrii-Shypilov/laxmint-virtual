import { useState, useEffect } from "react";
// import s from './agreement.module.scss'
import { pdf } from "@react-pdf/renderer";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import MyDocument from "./Document/MyDocument";
const PdfGeneratorViewer = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [link, setLink] = useState(null);

  useEffect(() => {
    const generatePDF = async () => {
      const blob = await pdf(<MyDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Sales Deed Agreement";
      setLink(link);
    };

    generatePDF();
  }, []);

  const onPdfDownload = () => {
    if (!link) return;
    link.click();
  };

  return (
    <div>
      {pdfUrl && (
        <div
          style={{
            height: "300px",
            width: "100%",
            // margin: "0 auto",
            overflowY: "auto",
            border: "1px solid gray",
            borderRadius: 3,
          }}
        >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfUrl} />
          </Worker>
        </div>
      )}
      <button onClick={onPdfDownload}>Download pdf</button>
    </div>
  );
};

export default PdfGeneratorViewer;
