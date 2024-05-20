import React, { useContext, useEffect, useRef } from "react";
import "../../../styles/header.css";
import logo from "../../../assets/img/dumble.png";
import { UserContext } from "../../..";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/exercises",
    display: "Exercises",
  },

  {
    path: "/memberships",
    display: "Memberships",
  },
  {
    path: "/QR",
    display: "QR",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current?.classList.add("sticky__header");
    } else {
      headerRef.current?.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.addEventListener("scroll", headerFunc);
  }, []);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const targetAttr = e.target.getAttribute("href");
  //   const location = document.querySelector(targetAttr).offsetTop;

  //   window.scrollTo({
  //     left: 0,
  //     top: location - 80,
  //   });
  // };
  const { userStore } = useContext(UserContext);
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* LOGO */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>BroGym</h2>
          </div>

          {/* navigation menu */}

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item">
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="nav__right">
            {userStore?.isAuth ? (
              <p>Hi, <Link to={userStore?.user?.role === 'admin' ? '/admin' : '/exercises'}>{userStore?.user?.name}</Link></p>
            ) : (
              <button
                className="register__btn"
                onClick={() => userStore?.setIsAuthModalOpen(true)}
              >
                Register
              </button>
            )}
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
