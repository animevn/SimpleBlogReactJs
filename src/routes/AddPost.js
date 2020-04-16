import React, {useContext} from "react";
import firebase from "../firebase/Firebase";
import {AuthContext} from "../firebase/Auth";
import {useHistory} from "react-router-dom";

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
      author:currentUser.uid
    };
    firebase.firestore().collection("blog").doc(currentUser.uid).collection("blogs").doc().set(post)
    .then(()=> history.push("/"));
  }

  return (
    <div className="container mt-4 px-0 mx-auto">

      <div className="card col-sm-12 col-11 shadow-sm p-4 mx-auto">
        <form className="was-validated" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-warning">Post Title</span>
            </div>
            <input type="text" className="form-control" id="post_title" autoComplete="on"
                   placeholder="Post title" aria-label="" name="title" required/>
              <div className="valid-feedback">
                Title OK.
              </div>
              <div className="invalid-feedback">
                Please fill title of post
              </div>
          </div>

          <div className="input-group mb-3">
            <textarea className="form-control text-justify" id="text_area"
                  name="body" rows="5" placeholder="Post body" required>
            </textarea>
            <div className="valid-feedback">
              Post content OK.
            </div>
            <div className="invalid-feedback">
              Please fill post body
            </div>
          </div>

          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox"
                     name="remember" required /> I agree on conditions.
                <div className="valid-feedback">
                  Requirement OK.
                </div>
                <div className="invalid-feedback">
                  Check this checkbox to continue.
                </div>
            </label>
          </div>
          <button type="submit" className="btn btn-warning">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default AddPost;