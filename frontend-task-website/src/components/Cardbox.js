import React, { useState, useEffect } from "react";
import "./styles/Cardbox.css";

const Card = ({ setWHover, image, cardNo, card }) => {
  return (
    <div
      className={`card-box`}
      onMouseEnter={() => setWHover(cardNo, card)}
      onMouseLeave={() => setWHover(1)}
    >
      <img className={`card-image`} src={image} alt="" />
      <div className={`card-info`}>
        <div className="card-head">
          <div
            className={`card-color`}
            style={{ "--background": card.color }}
          ></div>
          <div className={`card-title`}>{card.title}</div>
        </div>
        <div className={`card-description`}>{card.description}</div>
      </div>
    </div>
  );
};

const getFile = (str) => {
  return require(`../assets/image/IMAGE${str}.svg`);
};

const getImages = () => {
  const arr = [];
  const obj = {};
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      arr.push(i.toString().concat(j.toString()));
    }
  }
  for (let i = 0; i < arr.length; i++) {
    obj[`IMAGE${arr[i]}`] = getFile(arr[i]);
  }
  return obj;
};

const preloadImages = (images) => {
  for (const key in images) {
    if (Object.hasOwnProperty.call(images, key)) {
      const img = new Image();
      img.src = images[key];
    }
  }
};

const Cardbox = () => {
  const [wHover, setWHover] = useState(1);
  const [images, setImages] = useState(getImages());
  const CardOption = [
    {
      title: "Masterclass",
      description: "Real-world learnings from the best.",
      cardNo: "1",
      color: "#F18F01",
    },
    {
      title: "Webinar",
      description: "Learn Industry relevant skills online.",
      cardNo: "2",
      color: "#115D98",
    },
    {
      title: "Podcast",
      description: "Learn Industry trends from the experts.",
      cardNo: "3",
      color: "#147B85",
    },
  ];

  useEffect(() => {
    preloadImages(images);
  }, [images]);

  return (
    <>
      <div className="card-container">
        {CardOption.map((card) => (
          <Card
            key={card.cardNo}
            image={
              images[`IMAGE${wHover.toString().concat(card.cardNo.toString())}`]
            }
            setWHover={setWHover}
            cardNo={card.cardNo}
            card={card}
          />
        ))}
      </div>
    </>
  );
};

export default Cardbox;
