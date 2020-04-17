import React from "react";
import Header from "./frame/Header"
import Footer from "./frame/Footer";
import {Route, BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./firebase/Auth";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {FirestoreProvider} from "./firebase/Firestore";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import AddPost from "./routes/AddPost";
import EditPost from "./routes/EditPost";
import Post from "./routes/Post";
import Login from "./routes/Login";
import SignIn from "./routes/SignIn";
import Register from "./routes/Register";
import {ShareRouteProvider} from "./frame/ShareRoutes";

function App() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" minHeight="100vh">
      <Grid>
        {/*app goes in here*/}

        <AuthProvider>
          <ShareRouteProvider>
            <BrowserRouter>
              <FirestoreProvider>
                <Header/>
              </FirestoreProvider>
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
      </Grid>
      <Footer/>
    </Box>
  );
}

export default App;
