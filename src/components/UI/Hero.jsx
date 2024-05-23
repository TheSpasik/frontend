import React, {useContext} from "react";
import { UserContext } from "../..";
import heroImg from "../../assets/img/cena.png";
import dumbleIcon from "../../assets/img/dumble.png";
import "../../styles/hero.css";

const Hero = () => {
  const { userStore } = useContext(UserContext);
  const openURL = () => {
    window.open("https://www.youtube.com/watch?v=JFzimi6_7l8");
  };
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">
          {/* hero content */}
          <div className="hero__content">
            <h2
              className="section__title"
              data-aos="fade-up"
              data-aos-duratior="1500"
            >
              In the truly BroGym <br />
              <span className="highlights">No Pain No Gain</span> rules
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" data-aos-duratior="1800">
              Within the iron walls of the brogym, muscles forge, determination
              shapes, <br />
              and sweat becomes the ink of our dedication.
              <br />
              Here, we sculpt not just bodies, but the very essence of
              resilience and strength.
            </p>
            <div
              className="hero__btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duratior="2000"
            >
              {userStore?.isAuth ? (<></>
              
            ) : (
              <button
                className="register__btn"
                onClick={() => userStore?.setIsAuthModalOpen(true)}
              >
                Get Started
              </button>
            )}
              <button className="watch__btn" onClick={openURL}>
                <span>
                  <i className="ri-play-fill"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>
          {/* hero img */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="heart__rate"
                data-aos="fade-right"
                data-aos-duratior="1500"
              >
                <h5>Heart Rate</h5>
                <span>
                  <i className="ri-heart-pulse-fill"></i>
                </span>
                <h5> 95 BPM</h5>
              </div>
              <div
                className="gym__location"
                data-aos="fade-left"
                data-aos-duratior="1500"
              >
                <span>
                  <i className="ri-map-pin-fill"></i>
                </span>
                <h5>
                  Find a new <br />
                  Gym near you
                </h5>
              </div>
              <div
                className="dumble__icon"
                data-aos="fade-down"
                data-aos-duratior="1500"
              >
                <img src={dumbleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
