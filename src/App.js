import React from "react";
import Header from "./frame/Header"
import Footer from "./frame/Footer";
import {Route, BrowserRouter} from "react-router-dom";
import Login from "./auth/Login";
import {AuthProvider} from "./firebase/Auth";
import SignIn from "./auth/SignIn";
import Register from "./auth/Register";

function App() {
  return (
    <div className="main">
      <div className="container-fluid px-0">
        <Header/>
        {/*app goes in here*/}

        <AuthProvider>
          <BrowserRouter>
            <Route exact path="/" component={Login}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/register" component={Register}/>
          </BrowserRouter>
        </AuthProvider>

        {/*app goes in here*/}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
