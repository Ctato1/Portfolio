import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../styles/about.css";
import aboutData from "../assets/data/about-data";
import Testimonial from "../components/Testimonial/Testimonial";

const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <Row>
          <Col lg="12">
            <h1 className="page__title">About</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <div className="about_desc">
              My name is Tato Dznelashvili. I’m a frontend software engineer &
              freelance web developer in Georgia. I'm passionate about music,
              technology and helathy life Whether you're a business owner
              looking to get started on web development project with a freelance
              web developer, a developer looking to collaborate on something
              cool, or just wanting to say hi, shoot me a message and let's
              <a href="#contact">work together</a>
            </div>
          </Col>
        </Row>
        <Row>
          <div>
            <Testimonial aboutData={aboutData} />
          </div>
        </Row>
      </Container>
      
    </section>
  );
};

export default About;
