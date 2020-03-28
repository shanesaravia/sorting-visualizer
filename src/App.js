import React, { useEffect, useState } from 'react';
import './App.css';
import Sorter from './components/Sorter';
import CompleteMessage from './components/CompleteMessage';
import { CssBaseline, Switch, Typography } from '@material-ui/core';
import { ThemeProvider, makeStyles, useTheme } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './themes';

const useStyles = makeStyles(theme => ({
  theme: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.text.primary
  }
}))

function App() {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  
  useEffect(() => {    
    const userTheme = localStorage.getItem('theme') || 'dark';
    if (userTheme === 'dark') {
      setChecked(true);
    }
  }, [checked])
  
  const handleChange = () => {
    const val = !checked;
    setChecked(val);
    val ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
    // Set bars to correct color
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let bar of arrayBars) { 
      bar.style.backgroundColor = val ? theme.palette.common.white : theme.palette.common.black;
    };
  }

  return (
    <ThemeProvider theme={checked ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="App">
        <CompleteMessage />
        <div className={classes.theme}>
          <Switch
            disabled={disabled}
            color='primary'
            checked={checked}
            onChange={handleChange}
            name="Theme"
            inputProps={{ 'aria-label': 'Theme Selection' }}
          />
          <Typography color='textPrimary'>Dark Mode</Typography>
        </div>
        <Sorter setSwitchDisabled={setDisabled} />
      </div>
    </ThemeProvider>
  );
}

export default App;
