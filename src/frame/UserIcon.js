import React from "react";
import firebase from "../firebase/Firebase";

function UserIcon(props) {

  function onLogoutClick() {
    if (props.currentUser){
      firebase.auth().signOut().catch(err=>alert(err));
    }
  }

  function onDeleteUser() {
    if (props.currentUser){
      firebase.auth().currentUser.delete().catch(err=>alert(err));
    }
  }

  if (props.currentUser){
    return (
      <div className="dropdown">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-brand brand-image dropdown-toggle" id="dropdownMenuLink"
           data-toggle="dropdown">
          <img className="dropdown-toggle profile-image"
               src="/images/user-check.svg" alt="user-login" />
        </a>
        <div className="dropdown-menu dropdown-menu-right bg-warning">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="dropdown-item">{props.currentUser.email}</a>
          <button className="dropdown-item" onClick={onDeleteUser}>Delete Account</button>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Profile</a>
          <a className="dropdown-item" href="/">Your posts</a>
          <a className="dropdown-item" href="/">Recycle Bin</a>
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={onLogoutClick}>Logout</button>
        </div>
      </div>
    )
  }else {
    return (
      <a className="navbar-brand brand-image" href="/login">
        <img className="profile-image" src="/images/user-circle.svg" alt="user-not-login"/>
      </a>
    )
  }
}

export default UserIcon;