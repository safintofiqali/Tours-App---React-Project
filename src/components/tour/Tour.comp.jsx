import { useState } from "react";
const Tour = (props) => {
  const { id, name, info, image, price } = props.tour;
  const removeTour = props.removeTour;
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)} . . .`}</p>
        <button
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "show less" : "show more"}
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};
export default Tour;
