import { Container, Row, Col } from "reactstrap";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

import "../styles/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_fuo11sg',
        'template_08aii2l',
        form.current,
        'OoJfzT5GhswGej3Rz'
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Successfully sent!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        },
        (error) => {
          toast.error("Something went wrong", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <Container>
        <Row>
          <Col lg="12">
            <h1 className="contact__title page__title">Contact</h1>
          </Col>
        </Row>
        <Row>
          <form ref={form} onSubmit={sendEmail} className="form">
            <div className="email-username">
              <Col lg="6" className="form__line">
                <input
                  type="text"
                  name="user_name"
                  placeholder="name"
                  required
                />
              </Col>

              <Col lg="6" className="form__line">
                <input
                  type="email"
                  name="user_email"
                  placeholder="email"
                  required
                />
              </Col>
            </div>

            <Col lg="12" className="form__line">
              <textarea
                name="message"
                rows="3"
                placeholder="message"
                required
              />
            </Col>
            <br />
            <Col lg="12">
              <button type="submit" className="btn submit__btn">
                Send
              </button>
            </Col>
          </form>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
