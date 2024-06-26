import React, { useContext, useEffect, useRef } from "react";
import "../../styles/pricing.css";
import { UserContext } from "../..";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import moment from "moment";

const MembershipsMain = () => {
  const { userStore } = useContext(UserContext);
  const subscription = userStore?.user?.subscription;
  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            Gym <span className="highlights">Pricing</span> Plan
          </h2>
          <p>Pleasant and very profitable offers at the lowest prices</p>
          {userStore?.user?.subscription ? <h3>Your entrance code: <span>{userStore?.user?.entranceCode}</span> </h3> : null}
        </div>
        {/* pricing wrapper */}
        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duratior="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">1 Month Membership</h2>
              <h2 className="pricing section__title">
                $50 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  1 month access
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Standart option
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  3 classes per week
                </li>
              </ul>
              <button
                className={`register__btn ${
                  subscription === "1_month" ? "disabled__btn" : ""
                }`}
                disabled={subscription === "1_month"}
                onClick={() =>
                  userStore?.setIsChangeSubscriptionModalOpen(true, "1_month")
                }
              >
                {subscription === "1_month"
                  ? `Expired at: ${moment(
                      userStore?.user?.subscriptionExpiredAt
                    ).format("DD MMM yyyy")}`
                  : "Subscribe"}
              </button>
            </div>
          </div>
          <div
            className="pricing__item pricing__item-02"
            data-aos="fade-up"
            data-aos-duratior="2000"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">1 Year Membership</h2>
              <h2 className="pricing section__title">
                $25 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  12 month access
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Best option
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimitted classes per week
                </li>
              </ul>
              <button
                className={`register__btn ${
                  subscription === "1_year" ? "disabled__btn" : ""
                }`}
                disabled={subscription === "1_year"}
                onClick={() =>
                  userStore?.setIsChangeSubscriptionModalOpen(true, "1_year")
                }
              >
                {subscription === "1_year"
                  ? `Expired at: ${moment(
                      userStore?.user?.subscriptionExpiredAt
                    ).format("DD MMM yyyy")}`
                  : "Subscribe"}
              </button>
            </div>
          </div>

          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duratior="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">3 Months Membership</h2>
              <h2 className="pricing section__title">
                $40 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  3 month access
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Premium option
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  5 classes per week
                </li>
              </ul>
              <button
                className={`register__btn ${
                  subscription === "3_months" ? "disabled__btn" : ""
                }`}
                disabled={subscription === "3_months"}
                onClick={() =>
                  userStore?.setIsChangeSubscriptionModalOpen(true, "3_months")
                }
              >
                {subscription === "3_months"
                  ? `Expired at: ${moment(
                      userStore?.user?.subscriptionExpiredAt
                    ).format("DD MMM yyyy")}`
                  : "Subscribe"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default observer(MembershipsMain);
