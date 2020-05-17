import { getSelectionSortAnimations } from '../animations';
import { animateComplete } from '../../components/CompleteMessage';

const mapSpeed = {
  slow: 100,
  normal: 12,
  fast: 2
}

const selectionSort = (arr, theme, speed) => {
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
        arrayBars[prevMinIdx].style.backgroundColor = theme.palette.custom.defaultBars;
      } else if(prevMinIdx !== null) {
        arrayBars[prevMinIdx].style.backgroundColor = theme.palette.custom.movingBars;
      }
      if (swap) {
        const temp = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp;
        barOneStyle.backgroundColor = theme.palette.custom.defaultBars;
      }
      const animateTimeout2 = setTimeout(() => {
        if (swap) {
          barTwoStyle.backgroundColor = theme.palette.secondary.dark;
        } else if (barOneIdx !== barTwoIdx) {
          barTwoStyle.backgroundColor = theme.palette.custom.defaultBars;
        }
      }, mapSpeed[speed || 'normal'])
      timeouts.push(animateTimeout2);
      // Complete Animation
      if (i === animations.length - 1) {
        animateComplete();
      }
    }, i * mapSpeed[speed || 'normal']);
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

export default selectionSort;