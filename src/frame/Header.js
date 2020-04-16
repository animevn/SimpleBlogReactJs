import React from "react";
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
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from '@material-ui/core/Drawer';

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

  const [state, setState] = React.useState(false);

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

  const list = ()=>(
    <div className={classes.list} role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box bgcolor="background.default" height="100vh" pt={5}>

        <Button variant="outlined" color="secondary">
          Just choose it
        </Button>

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
      </Box>

    </div>
  );

  const onTitleClick = (event)=>{
    event.preventDefault();
    history.push("/");
  };

  return (
    <Box bgcolor="primary.main" py={{...padding}} boxShadow={3}>

      <Box fontWeight="fontWeightBold" mx={{...margin}}
           display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">

        <>
          <IconButton color="secondary" onClick={toggleDrawer(true)}>
            <Box fontSize={50} display="flex" flexDirection="row" justifyContent="center">
              <MenuIcon color="secondary" fontSize="inherit"/>
            </Box>
          </IconButton>
          <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </>

        <Button onClick={onTitleClick}>
          <Typography component="div" variant="h3">
            <Box fontWeight={500} color="secondary.main">
              Simple Blog
            </Box>
          </Typography>
        </Button>
        <UserIcon/>

      </Box>

    </Box>

  );
}

export default Header;
