import React from "react";
import Footer from "./frame/Footer";
import {Route, BrowserRouter} from "react-router-dom";
import Login from "./routes/Login";
import {AuthProvider} from "./firebase/Auth";
import SignIn from "./routes/SignIn";
import Register from "./routes/Register";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="main">
        {/*app goes in here*/}

        <AuthProvider>
          <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/register" component={Register}/>
          </BrowserRouter>
        </AuthProvider>

        {/*app goes in here*/}

      <Footer/>
    </div>
  );
}

export default App;
