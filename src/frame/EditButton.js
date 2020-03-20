import React, {useContext} from "react";
import {AuthContext} from "../firebase/Auth";

function EditButtons(props) {

  const {currentUser} = useContext(AuthContext);

  if (currentUser && currentUser.uid === props.post.author){
    return (
      <div className="container pt-1">
        <div className="btn-group float-right shadow">
          <form className="btn-group" method="post" action="/edit">
            <button className="btn btn-group btn-success btn-lg"
                    name="edit" type="submit">
              &nbsp; Edit &nbsp;
            </button>
          </form>

          <form className="btn-group float-right" method="post" action="/delete">
            <button className="btn btn-group btn-danger float-right btn-lg"
                    name="delete" type="submit">
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