import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menu: {
    position: 'fixed',
    bottom: 0,
    height: theme.spacing(8),
    width: '100%',
    backgroundColor: theme.palette.grey[800],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const Menu = props => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      { props.children }
    </div>
  )
}

export default Menu;