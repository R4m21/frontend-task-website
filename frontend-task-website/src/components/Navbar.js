import "./styles/Navbar.css";
import Logo1 from "../assets/image/Logo1.svg";
import ArrowDown from "../assets/image/Vector 10.svg";
import ArrowUp from "../assets/image/Vector 11.svg";
import Category from "../assets/image/category.svg";
import Logout from "../assets/image/logout.svg";
import Notification from "../assets/image/notification.svg";
import ReceiptText from "../assets/image/receipt-text.svg";
import VideoSquare from "../assets/image/video-square.svg";
import Image2 from "../assets/image/image 104.svg";
import { useState } from "react";

const Navbar = () => {
  const [loginClick, setLoginClick] = useState(false);
  const [myAccClick, setMyAccClick] = useState(false);
  const [knowledgeClick, setKnowledgeClick] = useState(false);
  return (
    <nav
      className={`navbar-container ${knowledgeClick ? "open-navbar-2" : ""}`}
    >
      <div className="navbar-1">
        <div className="nav-brand-logo">
          <img src={Logo1} alt="logo" />
        </div>
        <div className="nav-item-2">
          <div className="nav-item-2-in text-wrapper">What's New</div>
          <div
            className="nav-item-2-in text-wrapper knowledge-hub-dropdown"
            onClick={() => {
              setKnowledgeClick(!knowledgeClick);
              setLoginClick(false);
              setMyAccClick(false);
            }}
          >
            <span>Knowledge Hub</span>
            <img src={!knowledgeClick ? ArrowDown : ArrowUp} />
            {knowledgeClick ? (
              <ul>
                <li>Masterclass</li>
                <li>Webinar</li>
                <li>CB Connect</li>
                <li>Blogs</li>
              </ul>
            ) : (
              <></>
            )}
          </div>
          <div className="nav-item-2-in text-wrapper">CB News</div>
          <div className="nav-item-2-in text-wrapper">Intership</div>
          <div className="nav-item-2-in text-wrapper">About Us</div>
        </div>
        <div className="nav-item-3">
          <div
            className="text-wrapper login-button"
            onClick={() => {
              setLoginClick(true);
              setKnowledgeClick(false);
            }}
          >
            {!loginClick ? (
              "Login"
            ) : (
              <div
                className="my-accocunt-dropdown"
                onClick={() => setMyAccClick(!myAccClick)}
              >
                <span>My Account</span>
                <img src={!myAccClick ? ArrowDown : ArrowUp} />
                {myAccClick && (
                  <div className="nav-dropdown-1">
                    <div>
                      <img src={ReceiptText} />
                      <span>Purchase History</span>
                    </div>
                    <div>
                      <img src={VideoSquare} />
                      <span>Video Stream</span>
                    </div>
                    <div>
                      <img src={Notification} />
                      <span>Notifications</span>
                    </div>
                    <div>
                      <img src={Category} />
                      <span>Settings</span>
                    </div>
                    <div>
                      <img src={Logout} />
                      <span>Log out</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="register-button text-wrapper">Register Now</div>
        </div>
      </div>
      {knowledgeClick ? (
        <div className="navbar-2" onClick={() => setKnowledgeClick(false)}>
          <div className="nav-2-left">
            <div className="nav-2-head">
              Join our <br /> registration list
            </div>
            <div className="nav-2-info">
              And receive updates,
              <br /> expert educational insights,
              <br /> and early access to our platform.
            </div>
            <div className="nav-2-social">
              <div className="join-button">Join</div>
              <div>
                <div className="img email"></div>
                <div className="img facebook"></div>
                <div className="img whatsapp"></div>
                <div className="img twiter"></div>
                <div className="img instagram"></div>
              </div>
            </div>
          </div>
          <div className="nav-2-right">
            <img src={Image2} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
