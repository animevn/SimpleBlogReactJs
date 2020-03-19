import React, {useContext, useEffect} from "react";
import {ShareRoute} from "../frame/ShareRoutes";

function Home() {

  const {setRoute} = useContext(ShareRoute);
  useEffect(()=>{
    setRoute({home:"active", about:"", contact:""});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h2 className="pt-4 home">Home</h2>

      <p className="text-justify my-3">

        &emsp; Sherlock Holmes is a fictional private detective created by British author Sir Arthur
        Conan
        Doyle. Referring to himself as a "consulting detective" in the stories, Holmes is known for
        his proficiency with observation, deduction, forensic science, and logical reasoning that
        borders on the fantastic, which he employs when investigating cases for a wide variety of
        clients, including Scotland Yard.
      </p>
    </div>

  );
}

export default Home;