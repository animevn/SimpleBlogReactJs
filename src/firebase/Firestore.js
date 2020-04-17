import React, {createContext, useEffect, useState} from "react";
import firebase from "./Firebase";

export const FirestoreContext = createContext(null);

export const FirestoreProvider = ({children})=>{
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  // const [lastRecord, setLastRecord] = useState(null);
  // const [medium, setMedium] = useState(null);

  useEffect(()=>{
    const group = firebase.firestore().collectionGroup("blogs").orderBy("time", "desc");
    group.limit(limit).onSnapshot(snapshot => {
      setLoading(true);
      let temp = [];
      snapshot.forEach(doc=>temp.push({...doc.data(), postId: doc.id}));
      setPosts(temp);
      setLoading(false);
    });

  }, [limit]);

  // //lazyload this way not very good because can not update latest change
  // useEffect(()=>{
  //   const group = firebase.firestore().collectionGroup("blogs").orderBy("time", "desc");
  //   let temp = [];
  //   if (lastRecord === null){
  //     const group = firebase.firestore().collectionGroup("blogs")
  //     .orderBy("time", "desc");
  //     group.limit(10).onSnapshot(snapshot => {
  //       setLoading(true);
  //       // snapshot.forEach(doc=>setPosts(old=>[ ...old, {...doc.data(), postId: doc.id}]));
  //       snapshot.forEach(doc=>temp.push({...doc.data(), postId: doc.id}));
  //       setMedium(snapshot.docs[snapshot.size - 1]);
  //       setLoading(false);
  //     });
  //   }else {
  //     group.limit(10).startAfter(lastRecord).onSnapshot(snapshot => {
  //       setLoading(true);
  //       // setPosts([]);
  //       // snapshot.forEach(doc=>setPosts(old=>[ ...old, {...doc.data(), postId: doc.id}]));
  //       snapshot.forEach(doc=>temp.push({...doc.data(), postId: doc.id}));
  //       setLoading(false);
  //       setMedium(snapshot.docs[snapshot.size - 1]);
  //       if (snapshot.size < 10){
  //         alert("end of files");
  //       }
  //     });
  //   }
  //   setPosts(temp);
  //
  // }, [lastRecord]);

  return (
    <FirestoreContext.Provider value={{posts, loading, limit, setLimit}}>
      {children}
    </FirestoreContext.Provider>
  );
};