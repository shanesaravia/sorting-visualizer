// import { bubbleSort, selectionSort, insertionSort, mergeSort } from './algorithms';
import { bubbleSort, selectionSort, insertionSort, mergeSort } from './algorithms';

const getBubbleSortAnimations = arr => {
  // Animations: [barOneIdx, barTwoIdx, swap, sorted]
  const animations = [];
  if (arr.length <= 1) return arr;
  bubbleSort(arr, animations);
  return animations;
}

const getSelectionSortAnimations = arr => {
  // Animations: [barOneIdx(min), barTwoIdx(current/iterator), prevMinIdx, swap(swap&complete)]
  const animations = [];
  if (arr.length <= 1) return arr;
  selectionSort(arr, animations);
  return animations;
}

const getInsertionSortAnimations = arr => {
  // Animations: [barOne, barTwo, swap, sorted]
  const animations = [];
  if (arr.length <= 1) return arr;
  insertionSort(arr, animations);
  return animations;
}

const getMergeSortAnimations = arr => {
  // Animations: []
  const animations = [];
  if (arr.length <= 1) return arr;
  // mergeSort(arr, animations);
  // console.log('animations: ', animations);
  const arrCopy = arr.slice();
  mergeSort(arr, 0, arr.length - 1, arrCopy, animations);
  // console.log('animations: ', animations)
  return animations
}

export {
  getBubbleSortAnimations,
  getSelectionSortAnimations,
  getInsertionSortAnimations,
  getMergeSortAnimations
}