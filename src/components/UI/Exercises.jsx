import React from "react";
import "../../styles/exercises.css";
import muscles from "../../assets/img/program1.png";
import yoga from "../../assets/img/program3.png";
import weights from "../../assets/img/program4.png";

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights">Exercise</span>
          </h2>
          <p>
            Exercises make you stronger, better and feel yourself comfortable
            around the people.
          </p>
        </div>
        {/* exercise list */}
        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duratior="1500"
          >
            <span className="exercise__icon">
              <img src={muscles} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Make Muscles</h4>
              <p>
                Creating tension that's temporarily making the muscle fibers
                smaller or contracted.
              </p>
            </div>
          </div>
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duratior="1500"
          >
            <span className="exercise__icon">
              <img src={yoga} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Basic Yoga</h4>
              <p>
                Diaphragmatic this is the most common breathing technique you'll
                find in yoga.
              </p>
            </div>
          </div>
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duratior="1500"
          >
            <span className="exercise__icon">
              <img src={weights} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Weight Lifting</h4>
              <p>
                Attempts a maximum weight single lift of a barbell loaded with
                weight plates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
