import { FC } from "react";
import Profile from "../../../assets/img/yf-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import JhonDue from "../../../assets/img/jhon-due.png";

const RightContent: FC = () => {
  const dataStory = [
    {
      img: Profile,
      name: "Yusuf Firmansyah",
      pengikut: "1.4500",
      position: "CEO",
    },
    { img: JhonDue, name: "Jhon Due", pengikut: "1045", position: "User" },
    { img: Profile, name: "Alex Khan", pengikut: "2000", position: "User" },
    { img: Profile, name: "David Machano", pengikut: "500", position: "User" },
    {
      img: Profile,
      name: "Al Firmansyah",
      pengikut: "23,000",
      position: "CTO",
    },
  ];

  return (
    <>
      <div
        className="card d-flex flex-column flex-wrap"
        style={{ width: "18rem" }}
      >
        {Array.isArray(dataStory) &&
          dataStory?.map(({ img, name, pengikut, position }: any) => {
            return (
              <>
                <div className="d-flex justify-content-between align-items-center m-3">
                  <div className="d-flex  border">
                    <img
                      src={img}
                      style={{ width: 50 }}
                      alt="img-profile"
                      className="w-full"
                    />
                  </div>
                  <div className="d-flex align-items-center flex-wrap flex-column mx-2">
                    <span className="fw-bolder" style={{ fontSize: "13px" }}>
                      {name}
                    </span>
                    <span
                      className=""
                      style={{ fontSize: "10px", opacity: ".8" }}
                    >
                      {position}, {pengikut} pengikut
                    </span>
                  </div>
                  <div className=""> </div>
                  <div className="position-relatice w-full">
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      size="lg"
                      className="top-0"
                    />
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export { RightContent };
