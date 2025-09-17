import s from "./certificate.module.scss";
import { useRef } from "react";
import certificateImage from "../../../assets/certificate.png";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

const Certificate = () => {
  const certRef = useRef(null);
  const pdf = jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [1600, 1130],
  });
  const onPngDownload = async () => {
    if (!certRef.current) return;
    const dataUrl = await toPng(certRef.current, {
      pixelRatio: 3,
      width: 1600,
      height: 1130,
       style: {
      transform: "scale(1)",       // make sure no weird transforms
      transformOrigin: "top left", // keep alignment
      width: "1600px",             // force element width
      height: "1130px",            // force element height
    },
    });

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "certificate.png";
    link.click();
  };

  const onPdfDownload = async () => {
    if (!certRef.current) return;

    const dataUrl = await toPng(certRef.current, { pixelRatio: 3 });

    const img = new Image();
    img.src = dataUrl;

    pdf.addImage(img, "PNG", 0, 0, 1600, 1130);
    pdf.save("certificate.pdf");
  };

  return (
    <div>
      <div ref={certRef} className={s.container}>
        <span className={s.name}>Dmytrii Shypilov</span>
        <img src={certificateImage} className={s.image} />
      </div>
      <button onClick={onPngDownload}>Download PNG</button>
      <button onClick={onPdfDownload}>Download PDF</button>
    </div>
  );
};

export default Certificate;
