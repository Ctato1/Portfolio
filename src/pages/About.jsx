import { Container, Row, Col } from "reactstrap";

import "../styles/about.css";
import aboutData from "../assets/data/about-data";
import Testimonial from "../components/Testimonial/Testimonial";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => { 
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.3,
          bounce: 0.4,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-50%",
      });
    }

  }, [inView,animation]);

  return (
    <section id="about" className="about" >
      <Container>
        <section ref={ref} className="d-flex flex-column align-items-start">
          <Row>
            <Col lg="12">
              <h1 className="page__title text-left">About</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <motion.div
                className="about_desc"
                // initial={{opacity:0.3,scale:0.3,y:600}}
                // whileInView={{opacity:1,scale:1,y:0}}
                // transition={{duration:.7}}
                animate={animation}
              >
                My name is Tato Dznelashvili. I’m a frontend software engineer &
                freelance web developer in Georgia. I'm passionate about music,
                technology and helathy life Whether you're a business owner
                looking to get started on web development project with a
                freelance web developer, a developer looking to collaborate on
                something cool, or just wanting to say hi, shoot me a message
                and let's
                <a href="#contact">work together</a>
              </motion.div>
            </Col>
          </Row>
        </section>

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
