import { getHeapSortAnimations } from '../animations';
import { animateComplete } from '../../components/CompleteMessage';

const mapSpeed = {
  slow: 300,
  normal: 100,
  fast: 10
}

const heapSort = (arr, theme, speed) => {
  const animations = getHeapSortAnimations(arr);
  const arrayBars = document.getElementsByClassName('array-bar');
  let timeouts = [];
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
        barOneStyle.backgroundColor = theme.palette.custom.defaultBars;
        if (!animations[i + 1] || animations[i + 1][0] !== barTwoIdx) {
          barTwoStyle.backgroundColor = sorted ? theme.palette.secondary.dark : theme.palette.custom.defaultBars;
        }
      }, mapSpeed[speed || 'normal'])
      timeouts.push(animateTimeout2);
      if (i === animations.length - 1) {
        animateComplete();
      }
    }, i * mapSpeed[speed || 'normal']);
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

export default heapSort;