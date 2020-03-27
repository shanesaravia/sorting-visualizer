import { getBubbleSortAnimations } from './animations';

const animationSpeed = 8;

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
        barTwoStyle.height = temp
      }
      setTimeout(() => {
        barOneStyle.backgroundColor = i + 1 === animations.length ? theme.palette.secondary.dark : theme.palette.text.primary;
        barTwoStyle.backgroundColor = sorted ? theme.palette.secondary.dark : theme.palette.text.primary;
      }, animationSpeed * 2)
    }, i * animationSpeed)
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

export {
  bubbleSort
}