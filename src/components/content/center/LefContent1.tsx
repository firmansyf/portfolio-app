import { FC } from "react";
import JhonDue from "../../../assets/img/jhon-due.png";
import Food1 from "../../../assets/img/indo-food.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faHeart,
  faThumbsUp,
  faShare,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp as ThumbsUp,
  faCommentDots as Comment,
} from "@fortawesome/free-regular-svg-icons";

const Content1: FC = () => {
  return (
    <>
      <div className="card mt-2" style={{ width: "34rem" }}>
        <div className="mt-2 mx-2">
          <FontAwesomeIcon icon={faEllipsis} size="xl" className="float-end" />
        </div>
        <div className="d-flex m-2 align-items-center position-relative">
          <img
            src={JhonDue}
            style={{ width: 45, height: 45 }}
            alt="profile-user"
          />
          <div className="d-flex mx-2 flex-column">
            <span className="fw-bolder" style={{ fontSize: "14px" }}>
              Jhon Due
            </span>
            <span className="text-secondary" style={{ fontSize: "12px" }}>
              1045 pengikut
            </span>
            <span className="text-secondary" style={{ fontSize: "12px" }}>
              3hr
            </span>
          </div>
          <button className="btn btn-sm bg-success text-white position-absolute mx-1 end-0">
            Follow
          </button>
        </div>

        <div className="d-flex flex-column">
          <div className="m-3">
            <span> emmm... Yummy its a delicious food, thank...</span>
          </div>
          <div className="d-flex">
            <img
              src={Food1}
              style={{ width: "100%" }}
              alt="content"
              className=""
            />
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex mt-2 mb-2 mx-1 emation">
              <div className="badge bg-primary position-relative" title="Like">
                <FontAwesomeIcon icon={faThumbsUp} className="text-white" />
                <span className="badge rounded-pill bg-primary">77</span>
              </div>
              <div className="badge bg-danger position-relative mx-1">
                <FontAwesomeIcon icon={faHeart} className="text-white" />
                <span className="badge  bg-danger">99+</span>
              </div>
            </div>

            <div className="d-flex w-100 align-items-center justify-content-between comment">
              <span style={{ fontSize: "12px", color: "grey" }}>
                jhon Robert dan 350 lainnya
              </span>
              <span
                className="mx-2"
                style={{ fontSize: "12px", color: "grey" }}
              >
                100 Komentar
              </span>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-around card-footer"
          style={{ backgroundColor: "white" }}
        >
          <div>
            <FontAwesomeIcon
              icon={ThumbsUp}
              size="xl"
              className="text-primary"
            />
            <span className="mx-1">Like</span>
          </div>
          <div>
            <FontAwesomeIcon icon={Comment} size="xl" className="text-" />
            <span className="mx-1">Comment</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faShare}
              size="xl"
              className="text-secondary"
            />
            <span className="mx-1">Bagikan</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faPaperPlane}
              size="xl"
              className="text-dark"
            />
            <span className="mx-1">Kirim</span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Content1 };
