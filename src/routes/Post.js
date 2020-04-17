import React, {useContext, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import {FirestoreContext} from "../firebase/Firestore";
import EditButtons from "../frame/EditButton";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function Post() {
  const history = useHistory();
  const {url} = useParams();
  const {posts} = useContext(FirestoreContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showPost = posts.filter(post=> {return post.url === url});

  function comeback() {
    history.push("/");
  }

  function edit(post) {
    history.push({pathname:"/editpost", search:"", state:{...post}});
  }

  if (showPost.length > 0){
    const post = showPost[0];
    return (
      <Container>
        <Box>

          <EditButtons post={post} backToHome={comeback} backToEdit={edit}/>

          <Typography componet="div" variant="h5">
            <Box color="secondary.main" mt={2} fontWeight="fontWeightBold">
              {post.title}
            </Box>
          </Typography>

          <Typography component="div">
            <Box mt={1} fontWeight="fontWeightRegular" textAlign="justify">
              {post.body}
            </Box>
          </Typography>

        </Box>

      </Container>
    )
  }else {
    return <div></div>;
  }
}

export default Post;