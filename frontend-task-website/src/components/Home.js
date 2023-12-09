import "./styles/Home.css";
import Image1 from "../assets/image/IMAGE1.svg";
import Image2 from "../assets/image/IMAGE2.svg";
import Image3 from "../assets/image/IMAGE3.svg";
import { useState } from "react";
import Card from "./Card";

const Home = () => {
  // const CardOption = [
  //   {
  //     title: "Masterclass",
  //     description: "Real-world learnings from the best.",
  //     image: Image1,
  //     color: "#F18F01",
  //   },
  //   {
  //     title: "Webinar",
  //     description: "Learn Industry relevant skills online.",
  //     image: Image2,
  //     color: "#115D98",
  //   },
  //   {
  //     title: "Podcast",
  //     description: "Learn Industry trends from the experts.",
  //     image: Image3,
  //     color: "#147B85",
  //   },
  // ];
  const CardOption = [
    {
      title: "Masterclass",
      description: "Real-world learnings from the best.",
      image: "1",
      color: "#F18F01",
    },
    {
      title: "Webinar",
      description: "Learn Industry relevant skills online.",
      image: "2",
      color: "#115D98",
    },
    {
      title: "Podcast",
      description: "Learn Industry trends from the experts.",
      image: "3",
      color: "#147B85",
    },
  ];
  return (
    <>
      <div className="home-container">
        <div className="home-left">
          <div className="group-1">
            <div className="text-wrapper">Explore.</div>
            <div className="text-wrapper">Upskill.</div>
            <div className="text-wrapper">Elevate.</div>
          </div>
          <div className="group-2">
            <div className="dn-button">
              <div className="discover-now">Discove Now</div>
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="home-right">
          <div className="card-container">
            {CardOption.map((cardDetail, i) => (
              <Card
                key={i}
                cardDetail={cardDetail}
                defaultCardDetail={CardOption[0]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
