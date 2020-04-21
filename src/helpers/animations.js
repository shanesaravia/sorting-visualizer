// import { bubbleSort, selectionSort, insertionSort, mergeSort } from './algorithms';
import { bubbleSort, selectionSort, insertionSort, mergeSort, heapSort } from './algorithms';

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
  // Animations: [barOneIdx, barTwoIdx, swap, sorted]
  const animations = [];
  if (arr.length <= 1) return arr;
  insertionSort(arr, animations);
  return animations;
}

const getMergeSortAnimations = arr => {
  // Animations: [barOneIdx, barTwoIdx, barTwoHeight, sorted]
  const animations = [];
  if (arr.length <= 1) return arr;
  const arrCopy = arr.slice();
  mergeSort(arr, 0, arr.length - 1, arrCopy, animations);
  return animations
}

const getHeapSortAnimations = arr => {
  // Animations: [barOneIdx, barTwoIdx, swap, sorted]
  const animations = [];
  if (arr.length <= 1) return arr;
  heapSort(arr, animations);
  return animations;
}

export {
  getBubbleSortAnimations,
  getSelectionSortAnimations,
  getInsertionSortAnimations,
  getMergeSortAnimations,
  getHeapSortAnimations
}