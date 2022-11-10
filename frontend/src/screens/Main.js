import React, { useState } from "react";
import "./Main.css";
import { Link, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import mainChicken from "../assets/images/main-chicken.jpg";
import mainPizza from "../assets/images/main-pizza.jpg";
import logo from "../assets/images/mainlogo.svg";
// import mainCook from "../assets/images/main-cook.jpg";

function Main(props) {
  const location = useLocation();
  const [fade, setFade] = useState("");
  const [menu, setMenu] = useState("");
  const menuToggle = () => {
    if (menu === "") {
      setMenu("active");
    } else {
      setMenu("");
    }
  };
  return (
    <div id="main" data-barba="wrapper">
      <div className="trans-left-img">
        <img
          src={mainChicken}
          alt="main-left-img"
          className="trans-left-img__img"
        />
      </div>
      <div className="trans-right-img">
        <img
          src={mainPizza}
          alt="main-right-img"
          className="trans-right-img__img"
        />
      </div>
      <div className="trans-clip">
        <div className="trans-clip-mask"></div>
      </div>
      <div className="main-container">
        <header className="main-header">
          <div className="header__container">
            <div className="header__head">
              <div
                className={`header__head-circle ${
                  menu === "active" ? "--active" : ""
                }`}
                onClick={menuToggle}
              >
                <div className="header__head-circle-in">
                  <img src={logo} alt="logo" className="head-circle-logo" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className={`main-ground ${menu === "active" ? "--active" : ""}`}>
          <div className="ground-left">
            <div className="ground-left__img-wrapper">
              <img
                src={mainChicken}
                alt="ground-left-img"
                className="ground-left__img"
              />
            </div>
            <div className="ground-left__title">
              <h1>BRAVO!!</h1>
            </div>
          </div>
          <div className={`middle-menu ${menu === "active" ? "--active" : ""}`}>
            {/* <div className="middle-menu__bg">
              <img src={mainCook} alt="main-cook" />
            </div> */}
            <div className="middle-menu__analysis">
              <Link to="/anal" style={{ textDecoration: "none" }}>
                <div className="middle-menu__analysis-title">상권분석</div>
              </Link>
            </div>
            <div className="middle-menu__analysis-description"></div>
            <div className="middle-menu__ranking">
              <Link to="/ranking" style={{ textDecoration: "none" }}>
                <div
                  className="middle-menu__ranking-title"
                  onClick={() => setFade("fade")}
                >
                  인기매장
                </div>
              </Link>
            </div>
            <div className="middle-menu__ranking-description"></div>
            <div className="middle-menu__user">
              <div>by 도움반친구들</div>
            </div>
          </div>
          <div className={`ground-right ${fade ? { menuToggle } : ""}`}>
            <div className="ground-right__img-wrapper">
              <img
                src={mainPizza}
                alt="ground-right-img"
                className="ground-right__img"
              />
            </div>
            <div className="ground-right__title">
              <h1>
                SILVER
                <br />
                LIFE!!
              </h1>
            </div>
            <div className="ground-right__admin">
              <div className="middle-menu__user-login">
                <Link to="/login" className="middle-menu__user-login__link">
                  LOGIN
                </Link>
              </div>
              <div className="middle-menu__user-join">
                <Link to="/join" className="middle-menu__user-join__link">
                  JOIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
