import { useState } from "react";
import "./work-card.css";
import Loading from "../Loading/Loading";


const WorkCard = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading && <Loading />}
      <div className="product__item" >
        <div className="product__img">
          <img src={item.imgUrl}  alt={item.title} onLoad={handleImageLoad} />
        </div>

        {!isLoading && (
          <div className="product__content">
            <h1 className="product__content-title">{item.title}</h1>
            <span className="product__content-desc">{item.shortDesc}</span>
            <a href={item.website} target="_blank" rel="noopener noreferrer">
              <button className="btn info__btn">Visit Website</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
