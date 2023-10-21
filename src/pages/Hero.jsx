import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import "../styles/hero.css";
import ProfImg1 from "../assets/images/prf.jpg";
import ProfImg2 from "../assets/images/prf2.jpg";

const Hero = () => {
  const [isImage, setIsImage] = useState(true);

  return (
    <section className="hero mt-5 py-5" >
      <Container>
        <Row className="row__section">
          <Col lg="9" md='7'>
            <main className="main-content" id="main-content">
              <div className="titleCont">
                <h6 className="main-title" id="main-title">
                  <span>“Smart people learn from everything </span>
                  <br />
                  <span>and everyone, average people from</span>
                  <br />
                  <span>their experiences, stupid people already</span>
                  <br />
                  <span>have all the answers.”</span>
                  <br />
                  <span className="titleCont__author"> - Socrates</span>
                </h6>
              </div>
            </main>
          </Col>
          <Col lg="3" md='5'>
            <div className="hero__img">
              {isImage ? (
                <img
                  src={ProfImg1}
                  alt="Profile"
                  className="prof__img"
                  onClick={() => setIsImage((prev) => (prev = !prev))}
                />
              ) : (
                <img
                  src={ProfImg2}
                  alt="Profile"
                  className="prof__img"
                  onClick={() => setIsImage((prev) => (prev = !prev))}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
