import { FC } from "react";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar: FC = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg head-nav sticky-top">
        <div className="container-fluid">
          <div className="d-flex justify-content-center w-50">
            <Link
              style={{ fontSize: "16px" }}
              to="/"
              className="navbar-brand brand-text"
            >
              Yu n Vegetable
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="nav justify-content-center collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className="nav-link mx-2 text-white"
                style={{ fontSize: "14px" }}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link
                className="nav-link mx-2 text-white"
                style={{ fontSize: "14px" }}
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="nav-link mx-2 text-white"
                style={{ fontSize: "14px" }}
                to="/about"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center w-50">
          <div className="">
            <div className="position-relative">
              <FontAwesomeIcon icon={faBell} size="lg" inverse />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navbar };
