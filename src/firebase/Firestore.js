import React, {createContext, useEffect, useState} from "react";
import firebase from "./Firebase";

export const FirestoreContext = createContext(null);

export const FirestoreCollection = ({children})=>{
  const [posts, setPosts] = useState([]);
  const db = firebase.firestore().collection("blog");

  useEffect(()=>{
    db.onSnapshot(snapshot => {
      setPosts([]);
      snapshot.forEach(doc=>setPosts(old=>[doc.data(), ...old]));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <FirestoreContext.Provider value={{posts}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export const FirestoreGroup = ({children})=>{
  const [post, setPost] = useState([]);
  const group = firebase.firestore().collectionGroup("blogs");

  useEffect(()=>{
    group.onSnapshot(snapshot => {
      setPost([]);
      snapshot.forEach(doc=>setPost(old=>[doc.data(), ...old]));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <FirestoreContext.Provider value={{post}}>
      {children}
    </FirestoreContext.Provider>
  );
};