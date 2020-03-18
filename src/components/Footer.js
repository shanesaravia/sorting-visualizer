import React from 'react';
import { AppBar, Toolbar, Typography, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BubblesIcon from '@material-ui/icons/BubbleChart';
import ResetIcon from '@material-ui/icons/RotateLeft';

const useStyles = makeStyles(theme => ({
  appbar: {
    // position: 'absolute',
    // bottom: 0,
    // height: 30
  },
  button: {
    backgroundColor: "A5A5A5 !important",
    // '&:hover': {
    //   backgroundColor: 'green'
    // }
  }
}))

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation>
      <BottomNavigationAction
        label="Reset Data"
        icon={<ResetIcon />}
        className={classes.button}
        onClick={() => console.log('clicked')}
      />
      <BottomNavigationAction className={classes.button} label="Bubble Sort" icon={<BubblesIcon />} />
    </BottomNavigation>
    // <AppBar className={classes.appbar}>
    //   <Toolbar>
    //     <Typography variant="h6">Scroll to see button</Typography>
    //   </Toolbar>
    // </AppBar>
  )
}

export default Footer;