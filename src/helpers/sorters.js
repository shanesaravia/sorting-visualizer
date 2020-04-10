import { 
  getBubbleSortAnimations,
  getSelectionSortAnimations,
  getInsertionSortAnimations
} from './animations';
import { animateComplete } from '../components/CompleteMessage';

const animationSpeed = 10;

const bubbleSort = (arr, theme) => {
  const animations = getBubbleSortAnimations(arr);
  const arrayBars = document.getElementsByClassName('array-bar');
  let timeouts = []
  for (let i=0; i<animations.length; i++) {
    const [barOneIdx, barTwoIdx, swap, sorted] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    const animateTimeout = setTimeout(() => {
      barOneStyle.backgroundColor = theme.palette.custom.movingBars;
      barTwoStyle.backgroundColor = theme.palette.custom.movingBars;
      if (swap) {        
        const temp = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp;
      }
      setTimeout(() => {
        barOneStyle.backgroundColor = i + 1 === animations.length ? theme.palette.secondary.dark : theme.palette.text.primary;
        barTwoStyle.backgroundColor = sorted ? theme.palette.secondary.dark : theme.palette.text.primary;
      }, animationSpeed * 2)
      // Complete Animation
      if (i === animations.length - 1) {
        animateComplete();
      }
    }, i * animationSpeed)
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

const selectionSort = (arr, theme) => {
  const animations = getSelectionSortAnimations(arr);
  const arrayBars = document.getElementsByClassName('array-bar');
  let timeouts = [];
  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, prevMinIdx, swap] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    const animateTimeout = setTimeout(() => {
      barOneStyle.backgroundColor = theme.palette.custom.movingBars;
      barTwoStyle.backgroundColor = theme.palette.custom.movingBars;
      if (prevMinIdx !== null && barOneIdx !== prevMinIdx) {
        arrayBars[prevMinIdx].style.backgroundColor = theme.palette.text.primary;
      }
      if (swap) {
        const temp = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp;
        barOneStyle.backgroundColor = theme.palette.text.primary;
      }
      setTimeout(() => {
        barTwoStyle.backgroundColor = swap ? theme.palette.secondary.dark : theme.palette.text.primary;
      }, animationSpeed)
      // Complete Animation
      if (i === animations.length - 1) {
        animateComplete();
      }
    }, i * animationSpeed);
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

const insertionSort = (arr, theme) => {
  const animations = getInsertionSortAnimations(arr);
  const arrayBars = document.getElementsByClassName('array-bar');
  let timeouts = [];
  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, swap, sorted] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    const animateTimeout = setTimeout(() => {
      // barOneStyle.backgroundColor = theme.palette.custom.movingBars;
      barTwoStyle.backgroundColor = theme.palette.custom.movingBars;
      if (swap) {
        const temp = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp;
      }
      barOneStyle.backgroundColor = sorted ? theme.palette.secondary.dark : theme.palette.text.primary;
      // setTimeout(() => {
      // }, animationSpeed)
      // Complete Animation
      if (i === animations.length - 1) {
        animateComplete();
      }
    }, i * animationSpeed * 2);
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

export {
  bubbleSort,
  selectionSort,
  insertionSort
}