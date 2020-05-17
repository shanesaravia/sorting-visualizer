import { getBubbleSortAnimations } from '../animations';
import { animateComplete } from '../../components/CompleteMessage';

const mapSpeed = {
  slow: 150,
  normal: 16,
  fast: 2
}

const bubbleSort = (arr, theme, speed) => {
  const animations = getBubbleSortAnimations(arr);
  const arrayBars = document.getElementsByClassName('array-bar');
  let timeouts = []
  for (let i = 0; i < animations.length; i++) {
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
      const animateTimeout2 = setTimeout(() => {
        barOneStyle.backgroundColor = i + 1 === animations.length ? theme.palette.secondary.dark : theme.palette.custom.defaultBars;
        barTwoStyle.backgroundColor = sorted ? theme.palette.secondary.dark : theme.palette.custom.defaultBars;
      }, 2 * mapSpeed[speed || 'normal'])
      timeouts.push(animateTimeout2);
      // Complete Animation
      if (i === animations.length - 1) {
        animateComplete();
      }
    }, i * mapSpeed[speed || 'normal'])
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

export default bubbleSort;