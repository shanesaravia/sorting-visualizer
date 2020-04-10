import { bubbleSort, selectionSort, insertionSort } from './algorithms';

const getBubbleSortAnimations = arr => {
  // Animations: [barOneIdx, barTwoIdx, swap, sorted]
  const animations = [];
  if (arr.length <= 1) return arr;
  bubbleSort(arr, animations)
  return animations;
}

const getSelectionSortAnimations = arr => {
  // Animations: [barOneIdx(min), barTwoIdx(current/iterator), prevMinIdx, swap(swap&complete)]
  const animations = [];
  if (arr.length <= 1) return arr;
  selectionSort(arr, animations)
  return animations;
}

const getInsertionSortAnimations = arr => {
  // Animations: []
  const animations = [];
  if (arr.length <= 1) return arr;
  insertionSort(arr, animations)
  return animations;
}

export {
  getBubbleSortAnimations,
  getSelectionSortAnimations,
  getInsertionSortAnimations
}