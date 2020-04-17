import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import UserIcon from "./UserIcon";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from '@material-ui/core/Drawer';
import useMediaQuery from "@material-ui/core/useMediaQuery";

const padding = {xs:0, sm:1, md:1, lg:1, xl:1};
const margin = {xs:3, sm:5, md:10, lg:15, xl:20};
// const fontSize = {xs:"1.5rem", sm:"2rem", md:"2.5rem", lg:"3rem", xl:"3rem"};

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Header() {
  const history = useHistory();
  const classes = useStyles();
  const match = useMediaQuery("(min-width:960px)");
  const [state, setState] = useState(false);


  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  function onAbout() {
    history.push("/about");
  }

  function onContact() {
    history.push("/contact");
  }

  const onTitleClick = (event)=>{
    event.preventDefault();
    history.push("/");
  };


  const navBarList = (
    <List>
      <ListItem button onClick={onTitleClick}>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button onClick={onAbout}>
        <ListItemText primary="About" />
      </ListItem>

      <ListItem button onClick={onContact}>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  const listOfNavItems = ()=>(
    <div className={classes.list} role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box bgcolor="background.default" height="100vh" pt={5}>
        <Button variant="outlined" color="secondary">
          Just choose it
        </Button>
        {navBarList}
      </Box>

    </div>
  );

  const menu = (
    <>
      <IconButton color="secondary" onClick={toggleDrawer(true)}>
        <Box fontSize={50} display="flex" flexDirection="row" justifyContent="center">
          <MenuIcon color="secondary" fontSize="inherit"/>
        </Box>
      </IconButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {listOfNavItems()}
      </Drawer>
    </>
  );

  const titleName = (
    <Button onClick={onTitleClick}>
      <Typography component="div" variant="h3">
        <Box fontWeight={500} color="secondary.main">
          Simple Blog
        </Box>
      </Typography>
    </Button>
  );

  const headerFor960Down = (
    <Box fontWeight="fontWeightBold"
         display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
      {menu}
      {titleName}
      <UserIcon/>
    </Box>
  );

  const headerFor960Up = (
    <Box fontWeight="fontWeightBold" mx={{...margin}}
         display="flex" flexDirection="row" justifyContent="space-between">
      <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center">
        <UserIcon/>
        {titleName}
      </Box>

      <Box display="flex" width={0.4}
           flexDirection="row" justifyContent="space-between" alignItems="flex-end">

        <Box width={0.33}>
          <Button fullWidth variant="text" color="secondary" onClick={onTitleClick} >
            <Typography variant="h6">Home</Typography>
          </Button>
        </Box>

        <Box width={0.33}>
          <Button fullWidth variant="text" color="secondary" onClick={onAbout} >
            <Typography variant="h6">About</Typography>
          </Button>
        </Box>

        <Box width={0.33}>
          <Button fullWidth variant="text" color="secondary" onClick={onContact} >
            <Typography variant="h6">Contact</Typography>
          </Button>
        </Box>

      </Box>

    </Box>
  );

  const header = ()=>{
    if (match){
      return headerFor960Up;
    }else {
      return headerFor960Down;
    }
  };


  return (
    <Box bgcolor="primary.main" boxShadow={3}>
      <Container>
        <Box py={{...padding}}>
          {header()}
        </Box>
      </Container>
    </Box>

  );
}

export default Header;
