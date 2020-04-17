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
import Zoom from "@material-ui/core/Zoom";
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
  fab: {
    position: "fixed",
    bottom: theme.spacing(10),
    right: theme.spacing(5),
  },
}));

function Home() {
  const classes = useStyles();
  const history = useHistory();
  const {currentUser} = useContext(AuthContext);
  const {setRoute} = useContext(ShareRoute);
  const {posts, loading} = useContext(FirestoreContext);

  useEffect(()=>{
    setRoute({home:"active", about:"", contact:""});
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAddClick = ()=>{
    history.push("/addpost");
  };

  const addButton = !!currentUser ? (
    <Zoom timeout={1000} in="true" unmountOnExit>
      <Fab className={classes.fab} color="primary" size="medium" onClick={onAddClick}>
        <AddIcon />
      </Fab>
    </Zoom>
  ) : <></>;

  const showHomePosts = ()=>{
    if (posts.length === 0){
      if (loading === null){
        return (
          <Box display="flex" justifyContent="space-around">
            <CircularProgress/>
            <CircularProgress color="secondary"/>
            <CircularProgress color="primary"/>
          </Box>
        )
      }else {
        return (
          <></>
        );
      }
    }else {
      return showPosts;
    }
  };

  const showPosts = posts.map((post)=>{
    function onUrlClick() {
      history.push(post.url);
    }
    return (
      <Box key={post.title}>

        <Typography componet="div" variant="h5">
          <Box color="secondary.main" mt={2} fontWeight="fontWeightBold">
            {post.title}
          </Box>
        </Typography>

        <Typography component="div">
          <Box mt={1} fontWeight="fontWeightRegular" textAlign="justify">
            {post.body.substring(0, 200) + " ..."}
            <Button variant="text" onClick={onUrlClick} style={{"textTransform":"none"}}>
              <Box color="blue" mb={0.5}>Read more</Box>
            </Button>
          </Box>
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
        <Box my={2} fontWeight="fontWeightRegular" textAlign="justify">
          &emsp; Sherlock Holmes is a fictional private detective created by British author Sir Arthur
          Conan
          Doyle. Referring to himself as a "consulting detective" in the stories, Holmes is known for
          his proficiency with observation, deduction, forensic science, and logical reasoning that
          borders on the fantastic, which he employs when investigating cases for a wide variety of
          clients, including Scotland Yard.
        </Box>
      </Typography>

      {showHomePosts()}

    </Container>

  );
}

export default Home;