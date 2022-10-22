import { FC } from "react";
import bgProfile from "../../../assets/img/bg-profile.jpg";
import profile from "../../../assets/img/yf-profile.png";

const LeftContent: FC = () => {
  return (
    <>
      <div className="card d-flex flex-column flex-wrap">
        <div
          className="card-header d-flex justify-content-center align-items-center flex-column"
          style={{
            background: `url(${bgProfile}) center center / contain no-repeat`,
            backgroundSize: "cover",
            width: "14rem",
          }}
        >
          <img
            src={profile}
            style={{ width: 70 }}
            alt="img-profile"
            className="w-full mt-3"
          />
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="fw-bolder">Yusuf Firmansyah</span>
          <span
            className="badge bg-success text-white mt-1"
            style={{ fontSize: "12px", backgroundColor: "#eee" }}
          >
            CEO / Founder
          </span>
        </div>

        <div className="card-body"></div>

        <div></div>
      </div>
    </>
  );
};

export default LeftContent;
