import React from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  slider: {
    width: theme.spacing(16)
  }
}))

const Speedbar = props => {
  const { disabled, setSpeed } = props;
  const classes = useStyles();

  const marks = [
    {
      value: 0,
      label: 'slow',
    },
    {
      value: 50,
      label: 'normal',
    },
    {
      value: 100,
      label: 'fast',
    },
  ];

  const handleChange = (e, val) => {
    switch(val) {
      case 0:
        setSpeed('slow');
        break;
      case 50:
        setSpeed('normal');
        break;
      case 100:
        setSpeed('fast');
        break;
      default:
        setSpeed('normal');
    }
  };

  return (
    <Slider
      className={classes.slider}
      onChangeCommitted={handleChange}
      disabled={disabled}
      defaultValue={50}
      step={null}
      valueLabelDisplay='off'
      track={false}
      marks={marks}
    />
  )
}

export default Speedbar;