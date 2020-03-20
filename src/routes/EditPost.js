import React, {useEffect, useState} from "react";
import firebase from "../firebase/Firebase";
import {withRouter, useLocation} from "react-router-dom";

function EditPost({history}) {
  const location = useLocation();
  const [state, setState] = useState({title:"", body:""});

  useEffect(()=>{
    setState({title:location.state.title, body:location.state.body});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleInput(event) {
    let {name, value} = event.target;
    if (name === "title") {
      setState({...state, title: value});
    }
    if (name === "body") {
      setState({...state, body: value});
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const {title, body} = event.target.elements;
    firebase.firestore().collection("blog").doc(location.state.author).collection("blogs")
    .doc(location.state.postId).update({title:title.value, body:body.value})
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
                   placeholder="Post title" aria-label="" name="title" required
                   value={state.title} onChange={handleInput}
            />
              <div className="valid-feedback">
                Title OK.
              </div>
              <div className="invalid-feedback">
                Please fill title of post
              </div>
          </div>

          <div className="input-group mb-3">
            <textarea className="form-control text-justify" id="text_area" value={state.body}
                  name="body" rows="5" placeholder="Post body" required onChange={handleInput}>
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

export default withRouter(EditPost);