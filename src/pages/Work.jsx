import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/work.css";

import products from "../assets/data/work-data";
import WorkCard from "../components/UI/WorkCard";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

const Work = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "E-commerce") {
      const filteredProducts = products.filter(
        (item) => item.category === "E-commerce"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Movie") {
      const filteredProducts = products.filter(
        (item) => item.category === "Movie"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Mini") {
      const filteredProducts = products.filter(
        (item) => item.category === "Mini"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  const { ref, inView } = useInView({
    threshold:.293
  });
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.4,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "70%",
      });
    }
  }, [inView]);

  return (
    <section id="work" className="work" ref={ref}>
      <Container>
        <Row>
          <Col lg="12">
            <h1 className="page__title" >Work</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <div className="work__category mt-4">
              <button
                className={`all__btn ${
                  category === "ALL" ? "workBtnActive" : ""
                }`}
                onClick={() => setCategory("ALL")}
              >
                All
              </button>
              <button
                className={`all__btn ${
                  category === "E-commerce" ? "workBtnActive" : ""
                }`}
                onClick={() => setCategory("E-commerce")}
              >
                E-commerce
              </button>

              <button
                className={`all__btn ${
                  category === "Movie" ? "workBtnActive" : ""
                }`}
                onClick={() => setCategory("Movie")}
              >
                Movie
              </button>

              <button
                className={`all__btn ${
                  category === "Mini" ? "workBtnActive" : ""
                }`}
                onClick={() => setCategory("Mini")}
              >
                Mini
              </button>
            </div>
          </Col>
          {allProducts.map((item, index) => (
            <Col lg="4" md="6" sm="6" xs="12" className="mt-5" key={item.id} >
              <div >
       
                <WorkCard item={item} key={index} animation={animation}/>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Work;
