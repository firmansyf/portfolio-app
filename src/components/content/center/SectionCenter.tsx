import { FC } from "react";
import ShopIcon from "../../../assets/icon/shopp_1.png";
import { Content1 } from "./LefContent1";
import { CenterSecondContent } from "./SectionSecondCenter";

const CenterContent: FC = () => {
  return (
    <>
      <div className="d-flex flex-column flex-wrap">
        <div
          className="section_1 card d-flex flex-column flex-wrap"
          style={{ width: "34rem" }}
        >
          <div className="icon w-full d-flex justify-content-center align-items-center">
            <img src={ShopIcon} alt="icon-shopp" style={{ width: 300 }} />
          </div>
          <div className="d-flex flex-column">
            <span className="fs-5 m-2 text-center">
              Halo Yusuf, Selamat datang dan selemat berbelanja di YuFood Kawan!
            </span>
            <span
              className="text-center text-secondary"
              style={{ fontSize: "16px" }}
            >
              {" "}
              Berbelanjalah dengan bijak sesuai dengan apa yang kalian butuhkan
            </span>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <button className="btn btn-sm btn-outline-success">
                Explore more
              </button>
            </div>
          </div>
        </div>

        <div className="section_2 d-flex flex-column">
          <CenterSecondContent />
        </div>
        <div className="section_2 d-flex flex-column">
          <Content1 />
        </div>
      </div>
    </>
  );
};

export { CenterContent };
