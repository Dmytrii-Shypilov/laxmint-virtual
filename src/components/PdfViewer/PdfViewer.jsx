import s from "./pdf-view.module.scss";
import { useState } from "react";
import clsx from "clsx";

import Agreement from "./Agreement/Agreement";
import Certificate from "./Certificate/Certificate";

const Tabs =  {
  Agreement: "agreement",
  Certificate: "certificate",
  Receipt: "receipt",
}

const PdfViewer = () => {
  const [tab, setTab] = useState(Tabs.Agreement);

  return (
    <div className={s.viewer}>
      <ul className={s.tabList}>
        <li
          className={clsx(s.tab, { [s.active]: tab === Tabs.Agreement })}
          onClick={() => setTab(Tabs.Agreement)}
        >
          Sales and Purchase Agreement
        </li>
        <li
          className={clsx(s.tab, { [s.active]: tab === Tabs.Receipt })}
          onClick={() => setTab(Tabs.Receipt)}
        >
          Payment Receipt
        </li>
        <li
          className={clsx(s.tab, { [s.active]: tab === Tabs.Certificate })}
          onClick={() => setTab(Tabs.Certificate)}
        >
          Certificate
        </li>
      </ul>
      <div>
        {tab === Tabs.Agreement && <Agreement/>}
        {tab === Tabs.Receipt && <div>Receipt</div>}
        {tab === Tabs.Certificate && <div><Certificate/></div>}
      </div>
    </div>
  );
};

export default PdfViewer;
