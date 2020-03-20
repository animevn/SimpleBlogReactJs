import React, {useContext} from "react";
import {useParams, withRouter} from "react-router-dom";
import {FirestoreContext} from "../firebase/Firestore";
import EditButtons from "../frame/EditButton";


function Post({history}) {
  const {url} = useParams();
  const {posts} = useContext(FirestoreContext);

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
      <div className="container">
        <EditButtons post={post} backToHome={comeback} backToEdit={edit}/>

        <div className="container mt-1">
          <h2 className="pt-4">{post.title}</h2>
          <p className="text-justify my-3">{post.body}</p>
        </div>
      </div>
    )
  }else {
    return <div></div>;
  }
}

export default withRouter(Post);