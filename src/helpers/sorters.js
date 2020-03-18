import { getBubbleSortAnimations } from './animations';

const animationSpeed = 10;
const primaryColor = 'blue';
const secondaryColor = 'yellow';
const sortedColor = 'green';

const bubbleSort = arr => {
  const animations = getBubbleSortAnimations(arr);
  const arrayBars = document.getElementsByClassName('array-bar');
  let timeouts = []
  for (let i=0; i<animations.length; i++) {
    const [barOneIdx, barTwoIdx, swap, sorted] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    const animateTimeout = setTimeout(() => {
      barOneStyle.backgroundColor = secondaryColor;
      barTwoStyle.backgroundColor = secondaryColor;
      if (swap) {        
        const temp = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp
      }
      setTimeout(() => {
        barOneStyle.backgroundColor = i+1 === animations.length ? sortedColor : primaryColor;
        barTwoStyle.backgroundColor = sorted ? sortedColor : primaryColor;
      }, animationSpeed * 2)
    }, i * animationSpeed)
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

export {
  bubbleSort
}