import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./page/home/Home";

const App: FC = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Home />,
    },
    {
      path: "/blog",
      main: () => <h2 className="blog">Bubblegum</h2>,
    },
    {
      path: "/about",
      main: () => <h2>Shoelaces</h2>,
    },
  ];
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.main />} />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default App;
