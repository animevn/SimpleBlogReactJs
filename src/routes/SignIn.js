import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import firebase from "../firebase/Firebase";
import {AuthContext} from "../firebase/Auth";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockIcon from '@material-ui/icons/Lock';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const width = {xs:"90%", sm:"550px", md:"550px", lg:"550px", xl:"550px"};
const boxWidth = {xs:"85%", sm:0.6, md:0.6, lg:0.6, xl:0.6};

const SignIn = ()=>{
  const {currentUser}= useContext(AuthContext);
  if (currentUser) return <Redirect to="/"/>;

  const handleSignIn = (event)=>{
    event.preventDefault();
    const {email, password} = event.target.elements;
    try{
      firebase.auth().signInWithEmailAndPassword(email.value, password.value).then();
    }catch (e) {
      alert(e);
    }
  };

  return (
    <Grid container direction="row" justify="center">

      <Box component="form" onSubmit={handleSignIn}
           display="flex" flexDirection="column" justifyContent="center" alignItems="center"
           width={width} >

        <Box mt={10} fontSize={100}
             display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <LockIcon color="primary" fontSize="inherit"/>
        </Box>

        <Box mt={5} >
          <Typography component="div" variant="h3">
            <Box color="secondary.main" fontWeight="fontWeightBold">
              Please Sign in
            </Box>
          </Typography>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
             border={1} borderRadius={5} pl={1} overflow="hidden" height={45} boxShadow={3}
             width={boxWidth} mt={5} bgcolor="primary.main" borderColor="secondary.main">

          <Box width={0.35} color="secondary.main">
            Email
          </Box>

          <Box component="input" border={0} fontSize={20} width={0.65} height={1}
               borderLeft={1} id="email" borderColor="secondary.main" name="email" required/>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
             border={1} borderRadius={5} pl={1} overflow="hidden" height={45} boxShadow={3}
             width={boxWidth} mt={2} bgcolor="primary.main" borderColor="secondary.main">
          <Box width={0.35} color="secondary.main">
            Password
          </Box>

          <Box component="input" border={0} fontSize={20} width={0.65} height={1}
               borderLeft={1} id="password" borderColor="secondary.main" name="password" required/>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
             width={boxWidth} mt={1}>
          <FormControlLabel control={
            <Checkbox color="secondary"/>
          } label={
            <Box color="secondary.main">
              Remember me.
            </Box>
          } />
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="stretch"
             border={1} borderRadius={5} overflow="hidden" height={45} bgcolor="primary.main"
             width={boxWidth} mt={1} boxShadow={3} borderColor="secondary.main" >
          <Button variant="text" size="large" fullWidth type="submit">
            <Box color="secondary.main">Sign in</Box>
          </Button>
        </Box>

      </Box>
    </Grid>
  );
};

export default SignIn;

