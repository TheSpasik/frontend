import React, { useContext } from "react";
import { UserContext } from "../..";
import "../../styles/start.css";
import trainerImg from "../../assets/img/gympic.png";

const Start = () => {
  const { userStore } = useContext(UserContext);
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duratior="1500"
            />
          </div>
          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duratior="1500"
          >
            <h2 className="section__title">
              Ready to gain
              <span className="highlights"> muscles?</span>
            </h2>
            <p>
              Welcome to the gym, where sweat fuels dreams and determination
              breeds champions. Let's push limits, defy odds, and rewrite our
              stories of triumph. This is where greatness begins
            </p>
            {userStore?.isAuth ? (<></>
              
            ) : (
              <button
                className="register__btn"
                onClick={() => userStore?.setIsAuthModalOpen(true)}
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
