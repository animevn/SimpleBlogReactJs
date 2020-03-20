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
import Header from "./frame/Header";
import {ShareRouteProvider} from "./frame/ShareRoutes";
import AddPost from "./routes/AddPost";
import {FirestoreProvider} from "./firebase/Firestore";
import Post from "./routes/Post";
import EditPost from "./routes/EditPost";

function App() {

  return (
    <div className="main">
      <div className="container-fluid px-0">
        {/*app goes in here*/}

        <AuthProvider>

          <ShareRouteProvider>
            <BrowserRouter>
              <Header/>
              <FirestoreProvider>
                <Route exact path="/" component={Home}/>
              </FirestoreProvider>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signin" component={SignIn}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/addpost" component={AddPost}/>
              <Route exact path="/editpost" component={EditPost}/>

              <FirestoreProvider>
                <Route path="/:url" component={Post}/>
              </FirestoreProvider>

            </BrowserRouter>
          </ShareRouteProvider>

        </AuthProvider>

        {/*app goes in here*/}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
