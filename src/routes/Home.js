import React, {useContext, useEffect} from "react";
import {ShareRoute} from "../frame/ShareRoutes";
import {AuthContext} from "../firebase/Auth";
import {useHistory} from "react-router-dom";
import {FirestoreContext} from "../firebase/Firestore";

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
    <div className="container pt-1">
      <button className="btn btn-warning btn-lg float-right text-dark shadow" onClick={onAddClick}>
        Add post
      </button>
    </div>
  ) : null;

  const showPosts = posts.map((post, index)=>{
    function onUrlClick() {
      history.push(post.url);
    }

    return (
      <div key={index} className="container px-0">
        <h2>{post.title}</h2>
        <p className="text-justify my-3">
          {post.body.substring(0, 100) + " ..."}
          <button className="text-link btn mb-1" onClick={onUrlClick}>
            Read more
          </button>
        </p>
      </div>
    );
  });

  return (
    <div className="container">

      {addButton}

      <h2 className="pt-4 home">Home</h2>
      <p className="text-justify my-3">
        &emsp; Sherlock Holmes is a fictional private detective created by British author Sir Arthur
        Conan
        Doyle. Referring to himself as a "consulting detective" in the stories, Holmes is known for
        his proficiency with observation, deduction, forensic science, and logical reasoning that
        borders on the fantastic, which he employs when investigating cases for a wide variety of
        clients, including Scotland Yard.
      </p>

      {showPosts}

    </div>

  );
}

export default Home;