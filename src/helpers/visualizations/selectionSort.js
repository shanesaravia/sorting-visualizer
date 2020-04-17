import configs from '../../configs';
import { getSelectionSortAnimations } from '../animations';
import { animateComplete } from '../../components/CompleteMessage';

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
      }, configs.animationSpeed)
      // Complete Animation
      if (i === animations.length - 1) {
        animateComplete();
      }
    }, i * configs.animationSpeed);
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

export default selectionSort;