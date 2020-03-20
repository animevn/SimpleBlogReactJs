import React, {useContext, useState} from "react";
import UserIcon from "./UserIcon";
import {ShareRoute} from "./ShareRoutes";
import {withRouter} from "react-router-dom";

function Header({history}) {
  const {route} = useContext(ShareRoute);
  const [navShow, setNavShow] = useState(false);

  function toggler() {
    setNavShow(old=> !old);
  }

  function onBigTitleClick(event) {
    event.preventDefault();
    history.push("/");
  }

  function onHomeClick(event) {
    event.preventDefault();
    toggler();
    history.push("/");
  }

  function onAboutClick(event) {
    event.preventDefault();
    toggler();
    history.push("/about");
  }

  function onContactClick(event) {
    event.preventDefault();
    toggler();
    history.push("/contact");
  }

  return (
    <div className="container-fluid bg-warning shadow px-0">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-4 px-0">

          <button className="btn navbar-toggler navbar-button" onClick={toggler}
                  data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="row navbar-header">
            <button className="navbar-brand btn brand-title" onClick={onBigTitleClick}>
              <div className="brand-text text-center">BLOG WORLD</div>
            </button>

            <UserIcon/>
          </div>

          <div className={"collapse navbar-collapse " + (navShow? "show" : "")} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className={"nav-item " + route.home}>
                <button className="nav-link btn font-weight-bold" onClick={onHomeClick}>
                  HOME
                </button>
              </li>
              <li className={"nav-item " + route.about}>
                <button className="nav-link btn font-weight-bold" onClick={onAboutClick}>
                  ABOUT US
                </button>
              </li>
              <li className={"nav-item " + route.contact}>
                <button className="nav-link btn font-weight-bold" onClick={onContactClick}>
                  CONTACT US
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default withRouter(Header);
