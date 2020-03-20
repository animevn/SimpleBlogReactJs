import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {FirestoreContext} from "../firebase/Firestore";
import EditButtons from "../frame/EditButton";


function Post() {
  const {url} = useParams();
  const {posts} = useContext(FirestoreContext);

  const showPost = posts.filter(post=> {return post.url === url});

  if (showPost.length > 0){
    const post = showPost[0];
    return (
      <div className="container">
        <EditButtons post={post}/>

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

export default Post;