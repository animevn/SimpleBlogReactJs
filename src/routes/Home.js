import React, {useContext, useEffect} from "react";
import {ShareRoute} from "../frame/ShareRoutes";
import {AuthContext} from "../firebase/Auth";
import {useHistory} from "react-router-dom";
import {FirestoreContext} from "../firebase/Firestore";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Home() {
  const history = useHistory();
  const {currentUser} = useContext(AuthContext);
  const {setRoute} = useContext(ShareRoute);
  const {posts} = useContext(FirestoreContext);

  useEffect(()=>{
    setRoute({home:"active", about:"", contact:""});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAddClick = ()=>{
    history.push("/addpost");
  };

  const addButton = !!currentUser ? (
    <Box>
      <Fab color="primary" size="medium" onClick={onAddClick}>
        <AddIcon />
      </Fab>
    </Box>
  ) : <></>;

  const showPosts = posts.map((post, index)=>{
    function onUrlClick() {
      history.push(post.url);
    }

    return (
      <Box key={index}>
        <h2>{post.title}</h2>
        <Typography component="div">
          {post.body.substring(0, 100) + " ..."}
          <Button variant="text" onClick={onUrlClick} style={{"text-transform":"none"}}>
            <Box color="blue" mb={0.5}>Read more</Box>
          </Button>
        </Typography>
      </Box>
    );
  });

  return (
    <Container>

      {addButton}

      <Typography componet="div" variant="h4">
        <Box color="secondary.main" mt={2} fontWeight="fontWeightBold">
          Home
        </Box>
      </Typography>

      <Typography component="div">
        <Box mt={2} fontWeight="fontWeightRegular" textAlign="justify">
          &emsp; Sherlock Holmes is a fictional private detective created by British author Sir Arthur
          Conan
          Doyle. Referring to himself as a "consulting detective" in the stories, Holmes is known for
          his proficiency with observation, deduction, forensic science, and logical reasoning that
          borders on the fantastic, which he employs when investigating cases for a wide variety of
          clients, including Scotland Yard.
        </Box>
      </Typography>

      {showPosts}

    </Container>

  );
}

export default Home;