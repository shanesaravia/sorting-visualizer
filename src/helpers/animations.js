import { bubbleSort } from './algorithms';

const getBubbleSortAnimations = arr => {
  const animations = [];
  if (arr.length <= 1) return arr;
  bubbleSort(arr, animations)
  return animations;
}

export {
  getBubbleSortAnimations
}