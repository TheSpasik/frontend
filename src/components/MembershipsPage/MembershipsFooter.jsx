import React from "react";

import Logo from "../../assets/img/dumble.png";

const MembershipsFooter = () => {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duratior="1500">
    <div className="container">
      <div className="footer__wrapper">
        <div className="footer__box">
          <div className="logo">
            <div className="logo__img">
              <img src={Logo} alt="" />
            </div>
            <h2>BroGym</h2>
          </div>
          <p>
            In the BroGym, sweat writes the story of resilience, where iron
            forges muscles and determination shapes destinies
          </p>
        </div>
        <div className="footer__box">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__links">
            <li>
              <a href="#">Our program</a>
            </li>
            <li>
              <a href="#">Our plan</a>
            </li>
            <li>
              <a href="#">Become a member</a>
            </li>
          </ul>
        </div>

        <div className="footer__box">
          <h4 className="footer__title">Quick links</h4>
          <ul className="footer__links">
            <li>
              <a href="#schedule">Info</a>
            </li>
            <li>
              <a href="#pricing-plan">Memberships</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
          </ul>
        </div>

        <div className="footer__box">
          <h4 className="footer__title">Contact us</h4>
          <ul className="footer__links">
            <li>
              <a href="#">Kharkiv, Ukraine</a>
            </li>
            <li>
              <a href="#">Nauki Avenue, 14</a>
            </li>
            <li>
              <a href="#">+380971234567</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        Copyright - 2024 developed by Illia Spasonov. All rights reserved.
      </p>
    </div>
  </footer>
  );
};

export default MembershipsFooter;