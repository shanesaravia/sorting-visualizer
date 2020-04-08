import { bubbleSort, selectionSort } from './algorithms';

const getBubbleSortAnimations = arr => {
  // Animations: [barOneIdx, barTwoIdx, swap, sorted]
  const animations = [];
  if (arr.length <= 1) return arr;
  bubbleSort(arr, animations)
  return animations;
}

const getSelectionSortAnimations = arr => {
  // Animations: [swapIdx, minIdx, counterIdx, swap, sorted]
  const animations = [];
  if (arr.length <= 1) return arr;
  selectionSort(arr, animations)
  return animations;
}

export {
  getBubbleSortAnimations,
  getSelectionSortAnimations
}