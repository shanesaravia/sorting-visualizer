import configs from '../../configs';
import { getBubbleSortAnimations } from '../animations';
import { animateComplete } from '../../components/CompleteMessage';

const bubbleSort = (arr, theme) => {
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
      setTimeout(() => {
        barOneStyle.backgroundColor = i + 1 === animations.length ? theme.palette.secondary.dark : theme.palette.custom.defaultBars;
        barTwoStyle.backgroundColor = sorted ? theme.palette.secondary.dark : theme.palette.custom.defaultBars;
      }, configs.animationSpeed * 2)
      // Complete Animation
      if (i === animations.length - 1) {
        animateComplete();
      }
    }, i * configs.animationSpeed)
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

export default bubbleSort;