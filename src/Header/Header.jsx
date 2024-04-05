import { useEffect } from "react";
import HomePageView from "../Home/Home";
import "./Header Max width600px.css";
import "./Header Min width600px.css";
import { closeModalMenu } from "./Modal Menu/Handle Modal Menu/Handle Modal Menu";
function HeaderView() {
  useEffect(() => {
    document.addEventListener("scroll", (e) => handleScroll(e));
    const menu = document.querySelector(".header__box__nav--menu");
    const localItemMenuTop = menu.getBoundingClientRect().top;
    console.log(localItemMenuTop);
  });
  return (
    <header id="header">
      <div className="header__box--nav layout">
        <div className="header__nav--logo">
          <img src="./logo/logo.png" alt="" />
        </div>
        <div className="header__container__nav--menu layout" >
          <div className="header__box__nav--menu"  onClick={closeModalMenu}>
            <div className="header__nav--menu--title">Menu</div>
            <div className="header__nav--menu">
              <div className="header__nav--menu--1"></div>
              <div className="header__nav--menu--2"></div>
              <div className="header__nav--menu--3"></div>
            </div>
          </div>
        </div>
      </div>

      <HomePageView />
    </header>
  );
}

export default HeaderView;
