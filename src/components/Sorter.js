import React, { useState, useEffect } from 'react';
import { bubbleSort } from '../helpers/sorters';
import { Button, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const Sorter = () => {
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const [ windowHeight, setWindowHeight ] = useState(window.innerHeight);
  const barWidth = 10;
  const barMargin = 1;
  // const barWidth = 30;
  // const barMargin = 2;
  const contentHeight = windowHeight - 100;
  const maxBars = Math.floor(windowWidth / (barWidth + barMargin) - 10);

  return (
    <SorterDisplay
      windowWidth={windowWidth}
      setWindowWidth={setWindowWidth}
      windowHeight={windowHeight}
      setWindowHeight={setWindowHeight}
      barWidth={barWidth}
      barMargin={barMargin}
      maxBars={maxBars}
      contentHeight={contentHeight}
    />
  )
}

const useStyles = makeStyles({
  arrContainer: props => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    height: props.contentHeight,
    marginTop: 30,
    padding: 0,
    border: '1px solid red',
  }),
  arrBarWrapper: {
    position: 'absolute',
    bottom: 0,
    padding: 0,
    margin: 0,
    whiteSpace: 'nowrap',
    border: '1px solid green'
  },
  arrBar: props => ({
    display: 'inline-block',
    marginBottom: -4,
    marginLeft: props.barMargin / 2,
    marginRight: props.barMargin / 2,
    padding: 0,
    width: props.barWidth,
    backgroundColor: 'blue'
  })
})

const SorterDisplay = props => {
  const sorters = { bubbleSort };
  const [ arr, setArr ] = useState([]);
  const [ disabled, setDisabled ] = useState(false);
  const { 
    // windowWidth,
    // windowHeight,
    // setWindowWidth,
    // setWindowHeight,
    // barWidth,
    // barMargin,
    maxBars,
    contentHeight
  } = props;

  const classes = useStyles(props);

  useEffect(() => {
    generateRandomArray()
  }, [])

  const generateRandomArray = () => {
    setDisabled(false);
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let bar of arrayBars) {bar.style.backgroundColor = 'blue'};
    const randomArr = Array.from({length: maxBars}, () => Math.floor(Math.random() * contentHeight));
    setArr(randomArr);
  }

  const sortingMethod = async sortMethod => {
    await setDisabled(true);
    const timeouts = sorters[sortMethod](arr);
    document.getElementById('generate-array')
    .addEventListener('click', () => {
      for (let i of timeouts) {
        clearTimeout(i);
      }
    })
  }
  
  return (
    <>
      <Container className={classes.arrContainer}>
        <Box className={classes.arrBarWrapper}>
          {arr.map((val, idx) => (
            <div style={{height: val}} className={clsx(classes.arrBar, 'array-bar')} key={idx}></div>
          ))}
        </Box>
      </Container>
      <Button id='generate-array' onClick={generateRandomArray}>Reset Data</Button>
      <Button disabled={disabled} onClick={() => sortingMethod('bubbleSort')}>Bubble Sort</Button>
    </>
  )
}

export default Sorter;