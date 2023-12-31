import { Container, Row } from "reactstrap";
import Logo from "../../assets/images/logo.png";
import "./header.css";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";

import CV from "../CV/Tato-CV.pdf";

const Header = () => {
  const nav__links = [
    {
      title: "About",
      path: "#about",
    },

    {
      title: "Work",
      path: "#work",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];
  const logoRef = useRef(null);

  const barRef = useRef(null);
  const navLinkRef = useRef(null);

  const toggleBar = () => {
    barRef.current.classList.toggle("active");
    navLinkRef.current.classList.toggle("active__header-links");
  };

  const navigate = useNavigate();

  const downloaded = () => {
    toast.success("CV has been downloaded");
  };
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div
              className="logo"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/");
              }}
              ref={logoRef}
            >
              <img src={Logo} alt="Logo" className="w-50" />
            </div>
            <div className="nav-res" ref={navLinkRef} onClick={toggleBar}>
              <div className="nav-links" ref={navLinkRef}>
                {nav__links.map((nav, index) => (
                  <a href={nav.path} key={index}>
                    {nav.title}
                  </a>
                ))}
                <div className="header-resume">
                  <a href={CV} download="CV" onClick={downloaded}>
                    <Button className="btn" variant="outline-info">
                      Resume
                    </Button>
                  </a>
                  <a href="https://github.com/Ctato1" target="_blank" rel="noreferrer">
                    <Button className="btn git__btn" variant="outline-info">
                      GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="bar-links" ref={barRef} onClick={toggleBar}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
