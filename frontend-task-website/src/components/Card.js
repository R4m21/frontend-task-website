import "./styles/Card.css";

const Card = ({ cardDetail }) => {
  return (
    <div className={`card-box card-box${cardDetail.image}`}>
      {/* <img src={cardDetail.image} /> */}
      <div className={`card-image card-image${cardDetail.image}`}></div>
      <div className={`card-info card-info${cardDetail.image}`}>
        <div className="card-head">
          <div className={`card-color card-color${cardDetail.image}`}></div>
          <div className={`card-title card-title${cardDetail.image}`}>
            {cardDetail.title}
          </div>
        </div>
        <div className={`card-description card-description${cardDetail.image}`}>
          {cardDetail.description}
        </div>
      </div>
    </div>
  );
};

export default Card;
