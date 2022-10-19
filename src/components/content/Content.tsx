import { FC, useState, useEffect } from "react";
import Yf from "../../assets/img/yf-profile.png";
import Jd from "../../assets/img/jhon-due.png";
import RajaAmpat from "../../assets/img/raja-ampat.jpg";
import Batik from "../../assets/img/batik.jpg";
import Food from "../../assets/img/indo-food.jpg";

const Content: FC = () => {
  const [dates, setDate] = useState<any>("");
  const [mount, setMount] = useState<any>("");
  const [years, setYears] = useState<any>("");

  useEffect(() => {
    const date = new Date()?.getDate();
    const mount = new Date()?.getMonth();
    const years = new Date()?.getFullYear();
    setDate(date);
    setMount(mount);
    setYears(years);
  }, []);

  const dataContent: any = [
    {
      profile: Yf,
      name: "Yusuf Firmansyah",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure tenetur maxime ex cumque possimus ratione esse totam quae nemo sint blanditiis ut, dolor, harum dolorum  temporibus animi illum corrupti!",
      image: RajaAmpat,
      tags: [
        { label: "Indonesian" },
        { label: "Raja Ampat" },
        { label: "Island" },
      ],
    },
    {
      profile: Jd,
      name: "John Due",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure tenetur maxime ex cumque possimus ratione esse totam quae nemo sint blanditiis ut, dolor, harum dolorum  temporibus animi illum corrupti!",
      image: Batik,
      tags: [
        { label: "Indonesian" },
        { label: "Culture" },
        { label: "Fashion" },
        { label: "Batik" },
      ],
    },
    {
      profile: Yf,
      name: "Yusuf Firmansyah",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure tenetur maxime ex cumque possimus ratione esse totam quae nemo sint blanditiis ut, dolor, harum dolorum  temporibus animi illum corrupti!",
      image: Food,
      tags: [{ label: "Indonesian" }, { label: "Culture" }, { label: "Food" }],
    },
  ];

  return (
    <>
      <div className="">
        {Array.isArray(dataContent) &&
          dataContent?.map(
            ({ description, image, tags, profile, name }: any, i: any) => {
              return (
                <>
                  <div className="d-flex flex-column">
                    <div className="d-flex mt-4 mx-4 align-items-center">
                      <img
                        className="rounded-circle"
                        src={profile}
                        alt="img-profile"
                        style={{
                          width: "70px",
                          height: 70,
                          border: "solid #8C1BAB",
                        }}
                      />

                      <div className="d-flex mx-2 flex-column">
                        <span className="">{name}</span>
                        <p
                          className=""
                          style={{ fontSize: "12px", color: "grey" }}
                        >{`${mount}/${dates}/${years}`}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-column image-content mt-3 mx-4">
                      <div className="mb-2">
                        <img
                          className=""
                          src={image}
                          alt="img-profile"
                          style={{
                            width: "97%",
                            height: "30%",
                            borderRadius: "5px",
                          }}
                        />

                        <div className="d-flex mt-2">
                          {tags?.map(({ label }: any) => {
                            return (
                              <span
                                className="d-flex mx-1 badge text-dark"
                                style={{ backgroundColor: "#eee" }}
                              >
                                #{label}
                              </span>
                            );
                          })}
                        </div>

                        <div className="mt-2">
                          <span className="" style={{ fontSize: "13px" }}>
                            {description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          )}
      </div>
    </>
  );
};

export { Content };
