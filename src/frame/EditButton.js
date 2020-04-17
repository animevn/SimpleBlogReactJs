import React, {useContext} from "react";
import {AuthContext} from "../firebase/Auth";
import firebase from "../firebase/Firebase";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
  box: {
    position: "fixed",
    bottom: theme.spacing(10),
    right: theme.spacing(5),
  },
}));

function EditButtons(props) {
  const classes = useStyles();
  const {currentUser} = useContext(AuthContext);

  const onDeleteClick = ()=>{
    firebase.firestore().collection("blog").doc(props.post.author).collection("blogs")
    .doc(props.post.postId).delete().then();
    props.backToHome();
  };

  const onEditClick = ()=>{
    props.backToEdit(props.post);
  };

  if (currentUser && currentUser.uid === props.post.author){
    return (
      <Box className={classes.box} mr={0} ml="auto" mt={1} border={1} borderColor="red"
           borderRadius={3} boxShadow={3}
           flexDirection="row" justifyContent="center" display="flex">
        <Box width={0.5}>
          <Button variant="text" color="secondary" onClick={onEditClick}>
            Edit
          </Button>
        </Box>

        <Box width={0.5} borderLeft={1} borderColor="red">
          <Button variant="text" color="secondary" onClick={onDeleteClick}>
            Delete
          </Button>
        </Box>


      </Box>
    );
  }else {
    return <></>;
  }
}

export default EditButtons;