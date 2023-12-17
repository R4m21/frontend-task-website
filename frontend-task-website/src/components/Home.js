import "./styles/Home.css";
import Cardbox from "./Cardbox";

const Home = () => {
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
          <Cardbox />
        </div>
      </div>
    </>
  );
};

export default Home;
