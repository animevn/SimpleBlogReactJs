import React, {useContext, useEffect} from "react";
import {ShareRoute} from "../frame/ShareRoutes";

function About() {

  const {setRoute} = useContext(ShareRoute);
  useEffect(()=>{
    setRoute({home:"", about:"active", contact:""});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h2 className="pt-4">About Holmes</h2>
      <p className="text-justify">
        Though not the first fictional detective, Sherlock Holmes is arguably the best known.
        By the 1990s there were already over 25,000 stage adaptations, films, television
        productions and publications featuring the detective, and Guinness World Records lists
        him as the most portrayed literary human character in film and television history.
        Holmes's popularity and fame are such that many have believed him to be not a fictional
        character but a real individual; numerous literary and fan societies have been
        founded on this pretense. Avid readers of the Holmes stories helped create the modern
        practice of fandom. The character and stories have had a profound and lasting effect
        on mystery writing and popular culture as a whole, with the original tales as well as
        thousands written by authors other than Conan Doyle being adapted into stage and radio
        plays, television, films, video games, and other media for over one hundred years.
      </p>
    </div>

  );
}

export default About;