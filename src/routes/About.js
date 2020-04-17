import React, {useContext, useEffect} from "react";
import {ShareRoute} from "../frame/ShareRoutes";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function About() {

  const {setRoute} = useContext(ShareRoute);
  useEffect(()=>{
    setRoute({home:"", about:"active", contact:""});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>

      <Typography componet="div" variant="h4">
        <Box color="secondary.main" mt={2} fontWeight="fontWeightBold">
          About Holmes
        </Box>
      </Typography>

      <Typography component="div">
        <Box my={2} fontWeight="fontWeightRegular" textAlign="justify">
          &emsp; Though not the first fictional detective, Sherlock Holmes is arguably the best known.
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
        </Box>
      </Typography>

    </Container>

  );
}

export default About;