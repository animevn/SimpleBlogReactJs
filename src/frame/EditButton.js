import React, {useContext} from "react";
import {AuthContext} from "../firebase/Auth";
import firebase from "../firebase/Firebase";

function EditButtons(props) {

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
      <div className="container pt-1">
        <div className="btn-group float-right shadow">
          <form className="btn-group">
            <button className="btn btn-group btn-success btn-lg" onClick={onEditClick}>
              &nbsp; Edit &nbsp;
            </button>
          </form>
          <form className="btn-group float-right">
            <button className="btn btn-group btn-danger float-right btn-lg" onClick={onDeleteClick}>
              Delete
            </button>
          </form>

        </div>
      </div>
    );
  }else {
    return <div></div>;
  }
}

export default EditButtons;