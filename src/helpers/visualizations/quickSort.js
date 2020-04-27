import configs from '../../configs';
import { getQuickSortAnimations } from '../animations';
import { animateComplete } from '../../components/CompleteMessage';

const quickSort = (arr, theme) => {
  const { animations, finalSort } = getQuickSortAnimations(arr);
  const arrayBars = document.getElementsByClassName('array-bar');
  let timeouts = [];
  let swappedPivotIdx;
  for (let i = 0; i < animations.length; i++) {
    let [barOneIdx, barTwoIdx, swap, pivotIdx, removePivot, pivot] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    let pivotStyle = arrayBars[pivotIdx].style;
    const animateTimeout = setTimeout(() => {
      barOneStyle.backgroundColor = theme.palette.custom.movingBars;
      barTwoStyle.backgroundColor = theme.palette.custom.movingBars;
      if (swap) {
        if (barOneIdx === pivotIdx) {
          swappedPivotIdx = barTwoIdx;
        }
        if (barTwoIdx === pivotIdx) {
          swappedPivotIdx = barOneIdx;
        }
        const temp = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp;
      }
      
      if (parseInt(pivotStyle.height) !== pivot) {
        pivotIdx = swappedPivotIdx;
        pivotStyle = arrayBars[pivotIdx].style;
      }

      if (pivotIdx !== barOneIdx && pivotIdx !== barTwoIdx) {
        pivotStyle.backgroundColor = theme.palette.primary.dark
      }
      
      setTimeout(() => {
        if (animations[i + 1]) {
          if (animations[i + 1][0] !== barOneIdx) {
            if (barOneIdx === pivotIdx) {
              barOneStyle.backgroundColor = theme.palette.primary.dark;
            } else if (finalSort[barOneIdx] === parseInt(barOneStyle.height)) {
              barOneStyle.backgroundColor = theme.palette.secondary.dark;
            } else {
              barOneStyle.backgroundColor = theme.palette.custom.defaultBars;
            }
          }
          if (animations[i + 1][1] !== barTwoIdx) {
            if (barTwoIdx === pivotIdx) {
              barTwoStyle.backgroundColor = theme.palette.primary.dark;
            } else if (finalSort[barTwoIdx] === parseInt(barTwoStyle.height)) {
              barTwoStyle.backgroundColor = theme.palette.secondary.dark;
            } else {
              barTwoStyle.backgroundColor = theme.palette.custom.defaultBars;
            }
          }
          if (removePivot) {
            if (finalSort[pivotIdx] === parseInt(pivotStyle.height)) {
              pivotStyle.backgroundColor = theme.palette.secondary.dark;
            } else {
              pivotStyle.backgroundColor = theme.palette.custom.defaultBars;
            }
          }
        } else {
          barOneStyle.backgroundColor = theme.palette.secondary.dark;
          barTwoStyle.backgroundColor = theme.palette.secondary.dark;
          pivotStyle.backgroundColor = theme.palette.secondary.dark;
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

export default quickSort;