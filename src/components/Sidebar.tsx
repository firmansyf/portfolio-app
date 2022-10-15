import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "../page/home/Home";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Home />,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];

const Sidebar: FC = () => {
  return (
    <Router>
      <div className="row" style={{ minHeight: "100vh" }}>
        <div
          className="col-3"
          style={{
            // padding: "10px",
            // width: "25%",
            background: "#f0f0f0",
          }}
        >
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link className="text-decoration-none" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none" to="/bubblegum">
                Bubblegum
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none" to="/shoelaces">
                Shoelaces
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="col-6"
          style={{
            // padding: "10px",
            // width: "50%",
            background: "#000",
          }}
        >
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.sidebar />}
              />
            ))}
          </Routes>
        </div>

        <div
          className="col-3 bg-success"
          style={
            {
              // padding: "10px",
              // width: "25%",
            }
          }
        >
          <span>Skill</span>
        </div>
      </div>
    </Router>
  );
};

export { Sidebar };
