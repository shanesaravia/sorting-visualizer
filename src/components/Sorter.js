import React, { useState, useEffect } from 'react';
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  heapSort,
  quickSort
} from '../helpers/visualizations';
import { Button, Container, Box, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Menu from './Menu';
import clsx from 'clsx';

const Sorter = props => {
  const { setSwitchDisabled, speed } = props;
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const [ windowHeight, setWindowHeight ] = useState(window.innerHeight);
  const barWidth = 10;
  const barMargin = 1.5;
  const contentHeight = windowHeight - 140;
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
      setSwitchDisabled={setSwitchDisabled}
      speed={speed}
    />
  )
}

const useStyles = makeStyles(theme => ({
  arrContainer: props => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    height: props.contentHeight,
    marginTop: 70,
    padding: 0,
  }),
  arrBarWrapper: {
    position: 'absolute',
    bottom: 0,
    padding: 0,
    margin: 0,
    whiteSpace: 'nowrap',
  },
  arrBar: props => ({
    display: 'inline-block',
    marginBottom: -4,
    marginLeft: props.barMargin / 2,
    marginRight: props.barMargin / 2,
    padding: 0,
    width: props.barWidth,
    backgroundColor: theme.palette.custom.defaultBars
  }),
  menuButton: {
    margin: theme.spacing(0, 1),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
      padding: 2
    }
  },
  resetButton: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    fontWeight: 900,
    '&:hover': {
      // color: theme.palette.common.white
      backgroundColor: '#D0D0D0'
    }
  }
}))

const SorterDisplay = props => {
  const sorters = {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    heapSort,
    quickSort
  };
  const [ arr, setArr ] = useState([]);
  const [ disabled, setDisabled ] = useState(false);
  const { 
    // windowWidth,
    // windowHeight,
    setWindowWidth,
    setWindowHeight,
    // barWidth,
    // barMargin,
    maxBars,
    contentHeight,
    setSwitchDisabled,
    speed
  } = props;
  const theme = useTheme();
  const classes = useStyles(props);

  useEffect(() => {
    generateRandomArray()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxBars, contentHeight])

  const generateRandomArray = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    setDisabled(false);
    setSwitchDisabled(false);
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let bar of arrayBars) { bar.style.backgroundColor = theme.palette.custom.defaultBars };
    const randomArr = Array.from({length: maxBars}, () => Math.floor(Math.random() * contentHeight));
    setArr(randomArr);
  }
  
  const sortingMethod = async sortMethod => {
    await setDisabled(true);
    await setSwitchDisabled(true);
    const timeouts = sorters[sortMethod](arr, theme, speed);
    if (timeouts) {
      document.getElementById('generate-array')
      .addEventListener('click', () => {
        for (let i of timeouts) {
          clearTimeout(i);
        }
      })
    }
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
      <Menu>
        <Button id='generate-array' className={clsx(classes.menuButton, classes.resetButton)} onClick={generateRandomArray}>Reset Data</Button>
        <Tooltip title={<span>Time Complexity: O(n²)<br />Space Complexity: O(1)</span>}>
          <span>
            <Button className={classes.menuButton} disabled={disabled} onClick={() => sortingMethod('bubbleSort')}>
              Bubble Sort
            </Button>
          </span>
        </Tooltip>
        <Tooltip title={<span>Time Complexity: O(n²)<br />Space Complexity: O(1)</span>}>
          <span>
            <Button className={classes.menuButton} disabled={disabled} onClick={() => sortingMethod('selectionSort')}>
              Selection Sort
            </Button>
          </span>
        </Tooltip>
        <Tooltip title={<span>Time Complexity: O(n²)<br />Space Complexity: O(1)</span>}>
          <span>
            <Button className={classes.menuButton} disabled={disabled} onClick={() => sortingMethod('insertionSort')}>
              Insertion Sort
            </Button>
          </span>
        </Tooltip>
        <Tooltip title={<span>Time Complexity: O(n log(n))<br />Space Complexity: O(n)</span>}>
          <span>
            <Button className={classes.menuButton} disabled={disabled} onClick={() => sortingMethod('mergeSort')}>
              Merge Sort
            </Button>
          </span>
        </Tooltip>
        <Tooltip title={<span>Time Complexity: O(n log(n))<br />Space Complexity: O(1)</span>}>
          <span>
            <Button className={classes.menuButton} disabled={disabled} onClick={() => sortingMethod('heapSort')}>
              Heap Sort
            </Button>
          </span>
        </Tooltip>
        <Tooltip title={<span>Time Complexity: O(n²)<br />Space Complexity: O(log(n))<br />[Hoare Partitioning Scheme]</span>}>
          <span>
            <Button className={classes.menuButton} disabled={disabled} onClick={() => sortingMethod('quickSort')}>
              Quick Sort
            </Button>
          </span>
        </Tooltip>
      </Menu>
    </>
  )
}

export default Sorter;