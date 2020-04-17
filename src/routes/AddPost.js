import React, {useContext} from "react";
import firebase from "../firebase/Firebase";
import {AuthContext} from "../firebase/Auth";
import {useHistory} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
const width = {xs:"90%", sm:"550px", md:"550px", lg:"550px", xl:"550px"};

function AddPost() {
  const history = useHistory();
  const {currentUser} = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    const {title, body} = event.target.elements;
    const url = title.value.replace(/\s/g, "-").toLowerCase();
    const post = {
      title:title.value,
      url:url,
      body:body.value,
      author:currentUser.uid,
      time: new Date()
    };
    firebase.firestore().collection("blog").doc(currentUser.uid).collection("blogs").doc().set(post)
    .then(()=> history.push("/"));
  }

  return (
    <Container>
      <Box display="flex" flexDirection="row" justifyContent="center" mt={2}>
        <Box component="form" onSubmit={handleSubmit}
             display="flex" flexDirection="column" justifyContent="center" alignItems="center"
             width={width} >

          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
               borderRadius={5} pl={1} overflow="hidden" height={45} boxShadow={3}
               mt={5} bgcolor="primary.main" width={1} >
            <Box width={0.25}>
              <Typography>Post Title</Typography>
            </Box>

            <Box component="input" fontSize={20} width={0.75} height={1} borderColor="transparent"
                 id="title" name="title" required/>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
               borderRadius={5} pl={1} overflow="hidden" boxShadow={3} borderColor="transparent"
               mt={5} width={1} component="textarea" rows="5" fontSize="1.2rem" required
               id="body" name="body">

          </Box>

          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center"
               width={0.6} mt={1}>
            <FormControlLabel control={
              <Checkbox color="secondary"/>
            } label={
              <Box color="secondary.main">
                Remember me.
              </Box>
            } />
          </Box>

          <Button type="submit" variant="outlined" color="secondary" size="large">
            Submit
          </Button>

        </Box>

      </Box>
    </Container>
  )
}

export default AddPost;