import './testimonial-card.css'

const TestimonialCard = ({ id, title, imgUrl, experience, color }) => {
  return (
    <div
      className="about__item"
      key={id}
      style={{ boxShadow: `0 0 6px ${color}` }}
    >
      <div className="about__img">
        <img src={imgUrl} alt="about" className="about__img-cursor" />
      </div>
      <div className="info">
        <div className="about__info">
          <h3 className="about__name">
            <h5 className="about__name-title">{title}</h5>
          </h3>
          <p className="about__name-experience">{experience}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
