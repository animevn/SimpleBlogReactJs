import React, {useContext} from "react";
import {AuthContext} from "../firebase/Auth";
import UserIcon from "./UserIcon";

function Header(props) {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="container-fluid bg-warning shadow px-0">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-4 px-0">

          <button className="btn navbar-toggler navbar-button" data-toggle="collapse"
                  data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="row navbar-header">
            <a className="navbar-brand brand-title" href="/">
              <div className="brand-text text-center">BLOG WORLD</div>
            </a>

            <UserIcon currentUser={currentUser}/>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className={"nav-item " + props.home}>
              <a className="nav-link font-weight-bold" href="/">HOME</a>
            </li>
            <li className={"nav-item " + props.about}>
              <a className="nav-link font-weight-bold" href="/about">ABOUT US</a>
            </li>
            <li className={"nav-item " + props.contact}>
              <a className="nav-link font-weight-bold" href="/contact">CONTACT US</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
