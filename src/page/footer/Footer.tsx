import React from "react";

export default function Footer() {
  const skill = [
    { label: "Javascript Es6" },
    { label: "DOM" },
    { label: "Reactjs" },
    { label: "Rest API" },
    { label: "GIT" },
    { label: "CSS 3" },
    { label: "SASS" },
    { label: "Typescript" },
    { label: "Cypress.io Testing" },
    { label: "Frontend Devlopment" },
    { label: "Figma" },
    { label: "styled Component" },
    { label: "React Hooks" },
    { label: "React Typescript" },
    { label: "Web Development" },
  ];
  return (
    <>
      <div className="skill mt-5">
        <div className="row">
          <h4 className="mx-2">
            <span className="fas fa fa-code"></span>Skill
          </h4>
          <div className="d-flex flex-wrap">
            {Array.isArray(skill) &&
              skill.map(({ label }: any, i: any) => {
                return (
                  <>
                    <span
                      key={i}
                      className="mx-1 mt-2 text-white badge bg-info"
                      style={{ fontSize: "14px" }}
                    >
                      {label}
                    </span>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
