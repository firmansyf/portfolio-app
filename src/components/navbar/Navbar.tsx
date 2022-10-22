import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faComment } from "@fortawesome/free-solid-svg-icons";
import { Navbar as Head, Nav, Container } from "react-bootstrap";

const Navbar: FC = () => {
  const activeClassName = {
    color: "#000",
    textDecoration: "underline",
  };

  const unactiveClassName = {
    textDecoration: "none",
  };

  return (
    <>
      <Head bg="" expand="lg" className="sticky-top shadow-sm">
        <Container>
          <Head.Brand href="#">YuFood</Head.Brand>
          <Head.Toggle aria-controls="basic-navbar-nav" />
          <Head.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto section-link w-full">
              <NavLink className="mx-1 nav-link" to="/">
                Beranda
              </NavLink>
              <NavLink className="mx-1 nav-link" to="/blog">
                Blog
              </NavLink>
              <NavLink className="mx-1 nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="mx-1 nav-link" to="/article">
                Article
              </NavLink>
              <NavLink className="mx-1 nav-link" to="/career">
                Career
              </NavLink>
            </Nav>
          </Head.Collapse>

          <div className="d-flex justify-content-center w-full">
            <div className="mx-2">
              <div className="position-relative">
                <FontAwesomeIcon icon={faBell} style={{ fontSize: 17 }} />
              </div>
            </div>

            <div className="mx-2">
              <div className="position-relative">
                <FontAwesomeIcon icon={faComment} style={{ fontSize: 17 }} />
                <span
                  style={{ fontSize: 10 }}
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                >
                  10
                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Head>
    </>
  );
};

export { Navbar };
