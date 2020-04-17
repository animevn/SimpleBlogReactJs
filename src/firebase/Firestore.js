import React, {createContext, useEffect, useState} from "react";
import firebase from "./Firebase";

export const FirestoreContext = createContext(null);

export const FirestoreProvider = ({children})=>{
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(null);
  const group = firebase.firestore().collectionGroup("blogs");

  useEffect(()=>{
    group.onSnapshot(snapshot => {
      setLoading(snapshot.size);
      setPosts([]);
      snapshot.forEach(doc=>setPosts(old=>[{...doc.data(), postId: doc.id}, ...old]));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <FirestoreContext.Provider value={{posts, loading}}>
      {children}
    </FirestoreContext.Provider>
  );
};