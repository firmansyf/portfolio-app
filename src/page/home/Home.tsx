import { FC } from "react";
import { CenterContent } from "../../components/content/center/SectionCenter";
import LeftContent from "../../components/content/left/SectionLeft";
import { LeftContenSecond } from "../../components/content/left/SectionSecondLeft";
import { RightContent } from "../../components/content/right/SectionRight";

const Home: FC = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-4 home-conter">
        <div className="d-flex justify-content-center">
          <div className="left d-flex flex-column mx-3 md">
            <LeftContent />
            <LeftContenSecond />
          </div>
          <div className="center mb-3 mx-3">
            <CenterContent />
          </div>
          <div className="right mx-3">
            <RightContent />
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
