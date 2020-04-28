import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({
  menu: {
    position: 'fixed',
    bottom: 0,
    height: theme.spacing(8),
    width: '100%',
    backgroundColor: theme.palette.grey[800],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      overflowX: 'scroll',
      overflowY: 'hidden',
      justifyContent: 'space-between',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    }
  },
  arrowContainer: {
    padding: '1px 10px',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  arrowLeft: {
    position: 'fixed',
    left: -18,
    bottom: 0,
    zIndex: 1,
    opacity: 0.5,
    height: theme.spacing(8),
    width: 'auto'
  },
  arrowRight: {
    position: 'fixed',
    right: -18,
    bottom: 0,
    zIndex: 1,
    opacity: 0.5,
    height: theme.spacing(8),
    width: 'auto'
  }
}))

const Menu = props => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <div className={classes.arrowContainer}>
        <ArrowLeftIcon className={classes.arrowLeft} />
      </div>
      { props.children }
      <div className={classes.arrowContainer}>
        <ArrowRightIcon className={classes.arrowRight} />
      </div>
    </div>
  )
}

export default Menu;