import s from "./dashboard-header.module.scss";
import { Icons } from "../icons/icons";

const DashboardHeader = () => {
  return (
    <div className={s.header}>
      <div className={s.portfolio}>
        <div className={s.btn}>
          <Icons.IconDotsVertical />
        </div>
        <div>
          <h3>Portfolio</h3>
          <div>
            <span>Total 42.5k Sales</span>
            <div>
              <span>+18%</span>
              <Icons.IconArrowUp />
            </div>
          </div>

          <div className={s.panelIcons}>
            <div className={s.user}>
              <Icons.IconUser />
              <span>Ms Era</span>
            </div>
            <div className={s.pie}>
              <Icons.IconPie />
            </div>
            <div className={s.exchange}>
              <Icons.IconExchange />
            </div>
          </div>
        </div>
      </div>
      <div className={s.purValue}></div>
      <div className={s.currValue}></div>
    </div>
  );
};

export default DashboardHeader;
