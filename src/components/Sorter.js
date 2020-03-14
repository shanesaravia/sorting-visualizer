import React, { useState, useEffect } from 'react';
import { bubbleSort } from '../algorithms/bubbleSort';
import { Button, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Sorter = () => {
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const [ windowHeight, setWindowHeight ] = useState(window.innerHeight);
  const barWidth = 5;
  const barMargin = 1;
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
  const [ arr, setArr ] = useState([]);
  const { 
    windowWidth,
    windowHeight,
    setWindowWidth,
    setWindowHeight,
    barWidth,
    barMargin,
    maxBars,
    contentHeight
  } = props;

  const classes = useStyles(props);
  // console.log('test: ', bubbleSort(arr));
  console.log('windowWidth: ', windowWidth);
  console.log('windowHeight: ', windowHeight);

  useEffect(() => {
    generateRandomArray()
  }, [])

  const generateRandomArray = () => {
      const randomArr = Array.from({length: maxBars}, () => Math.floor(Math.random() * contentHeight));
      setArr(randomArr);
  }

  const randomInt = (min, max) => (
    Math.floor(Math.random()* (max - min + 1) + min)
  )

  return (
    <>
      <Container className={classes.arrContainer}>
        <Box className={classes.arrBarWrapper}>
          {arr.map((val, idx) => (
            <div style={{height: val}} className={classes.arrBar} key={idx}></div>
          ))}
        </Box>
      </Container>
      <Button onClick={generateRandomArray}> Generate Data</Button>
    </>
  )
}

export default Sorter;