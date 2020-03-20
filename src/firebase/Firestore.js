import React, {createContext, useEffect, useState} from "react";
import firebase from "./Firebase";

export const FirestoreContext = createContext(null);

export const FirestoreProvider = ({children})=>{
  const [posts, setPosts] = useState([]);
  const group = firebase.firestore().collectionGroup("blogs");

  useEffect(()=>{
    group.onSnapshot(snapshot => {
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