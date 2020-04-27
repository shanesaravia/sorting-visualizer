import configs from '../../configs';
import { getMergeSortAnimations } from '../animations';
import { animateComplete } from '../../components/CompleteMessage';

const mergeSort = (arr, theme) => {
  const animations = getMergeSortAnimations(arr);
  const arrayBars = document.getElementsByClassName('array-bar');
  let timeouts = [];
  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, newHeight, sorted] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = barTwoIdx !== null ? arrayBars[barTwoIdx].style : null;
    const animateTimeout = setTimeout(() => {
      if (newHeight) {
        barOneStyle.backgroundColor = theme.palette.secondary.dark;
        barOneStyle.height = `${newHeight}px`;
      } else {
        barOneStyle.backgroundColor = theme.palette.custom.movingBars;
        if (barTwoStyle !== null) {
          barTwoStyle.backgroundColor = theme.palette.custom.movingBars;
        }
      }
      setTimeout(() => {
        if (animations[i+1]) {
          if (animations[i+1][0] !== barOneIdx) {
            barOneStyle.backgroundColor = sorted ? theme.palette.secondary.dark : theme.palette.custom.defaultBars;
          }
          if (barTwoStyle && animations[i+1][1] !== barTwoIdx) {
            barTwoStyle.backgroundColor = theme.palette.custom.defaultBars;
          }
        }
      }, configs.animationSpeed * 8)
      if (i === animations.length - 1) {
        animateComplete();
      }
    }, i * configs.animationSpeed * 8);
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

export default mergeSort;