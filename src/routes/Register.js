import React, {useContext} from "react";
import {withRouter, Redirect} from "react-router-dom";
import firebase from "../firebase/Firebase";
import {AuthContext} from "../firebase/Auth";
import Header from "../frame/Header";

const Register = ()=>{
  const {currentUser}= useContext(AuthContext);
  if (currentUser) return <Redirect to="/profile"/>;

  const handleRegister = (event)=>{
    event.preventDefault();
    const {email, password} = event.target.elements;
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(err=>{
      alert(err);
    });
  };

  return (
    <div className="container-fluid px-0">
      <Header home="active"/>

      <div className="body-signin text-center">
        <form className="form-signin" onSubmit={handleRegister}>
          <img className="secret_image" src="images/key.svg" alt="key" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                 name="email" required autoFocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control"
                 placeholder="Password"
                 name="password" required />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>

    </div>

  );
};

export default withRouter(Register);
