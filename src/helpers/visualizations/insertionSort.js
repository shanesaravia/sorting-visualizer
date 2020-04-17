import configs from '../../configs';
import { getInsertionSortAnimations } from '../animations';
import { animateComplete } from '../../components/CompleteMessage';

const insertionSort = (arr, theme) => {
  const animations = getInsertionSortAnimations(arr);
  const arrayBars = document.getElementsByClassName('array-bar');
  let timeouts = [];
  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, swap, sorted] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    const animateTimeout = setTimeout(() => {
      barTwoStyle.backgroundColor = theme.palette.custom.movingBars;
      if (swap) {
        const temp = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp;
      }
      barOneStyle.backgroundColor = sorted ? theme.palette.secondary.dark : theme.palette.text.primary;
      if (i === animations.length - 1) {
        animateComplete();
      }
    }, i * configs.animationSpeed * 2);
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

export default insertionSort;