import { getInsertionSortAnimations } from '../animations';
import { animateComplete } from '../../components/CompleteMessage';

const mapSpeed = {
  slow: 200,
  normal: 40,
  fast: 4
}

const insertionSort = (arr, theme, speed) => {
  const animations = getInsertionSortAnimations(arr);
  const arrayBars = document.getElementsByClassName('array-bar');
  let timeouts = [];
  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, swap, sorted] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    const nextAnimation = animations[i + 1];
    const animateTimeout = setTimeout(() => {
      barOneStyle.backgroundColor = theme.palette.custom.movingBars;
      barTwoStyle.backgroundColor = theme.palette.custom.movingBars;
      const animateTimeout2 = setTimeout(() => {
        if (swap) {
          const temp = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }
        if (nextAnimation) {
          if (nextAnimation[0] === barOneIdx || nextAnimation[1] === barOneIdx) {
            barOneStyle.backgroundColor = theme.palette.custom.movingBars;
          } else {
            barOneStyle.backgroundColor = sorted ? theme.palette.secondary.dark : theme.palette.custom.defaultBars;
          }
          if (nextAnimation[1] === barTwoIdx) {
            barTwoStyle.backgroundColor = theme.palette.custom.movingBars;
          } else {
            if (swap || sorted) {
              barTwoStyle.backgroundColor = theme.palette.secondary.dark;
              if (arrayBars[barOneIdx - 1] && swap) {
                arrayBars[barOneIdx - 1].style.backgroundColor = theme.palette.custom.movingBars;
              }
            } else {
              barTwoStyle.backgroundColor = theme.palette.custom.defaultBars;
            }
          }
        } else {
          barOneStyle.backgroundColor = theme.palette.secondary.dark;
          barTwoStyle.backgroundColor = theme.palette.secondary.dark;
        }
      }, mapSpeed[speed || 'normal']);
      timeouts.push(animateTimeout2);
      if (i === animations.length - 1) {
        animateComplete();
      }
    }, i * mapSpeed[speed || 'normal']);
    timeouts.push(animateTimeout);
  }
  return timeouts;
}

export default insertionSort;