import { FC } from "react";
import Profile from "../../../assets/img/yf-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faFileVideo,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const CenterSecondContent: FC = () => {
  return (
    <>
      <div className="card mt-2">
        <div className="d-flex m-1">
          <div className="image-profile mx-2">
            <img
              src={Profile}
              width={45}
              height={45}
              alt="profile"
              className="rounded-circle"
            />
          </div>
          <div className="d-flex align-items-center input-group input-group-solid">
            <input
              className="form-control form-control-sm w-full mx-1"
              type="text"
              placeholder="Mulai buat posting"
              style={{
                borderRadius: "30px",
              }}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center mb-2">
          <div className="d-flex align-items-center mx-3">
            <FontAwesomeIcon
              icon={faImages}
              size="lg"
              style={{ color: "#00a771" }}
            />
            <span className="mx-1">Image</span>
          </div>

          <div className="d-flex align-items-center mx-3">
            <FontAwesomeIcon
              icon={faFileVideo}
              style={{ color: "#e31e52" }}
              size="lg"
            />
            <span className="mx-1">Video</span>
          </div>
          <div className="d-flex align-items-center mx-3">
            <FontAwesomeIcon
              icon={faNewspaper}
              style={{ color: "gold" }}
              size="lg"
            />
            <span className="mx-1">Article</span>
          </div>
        </div>
      </div>
    </>
  );
};

export { CenterSecondContent };
