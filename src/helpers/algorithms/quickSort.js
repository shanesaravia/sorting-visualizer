const partition = (arr, left, right, animations) => {
  let pivotIdx = Math.floor((right + left) / 2);
  let pivot = arr[pivotIdx]; //middle element
  let i = left; //left pointer
  let j = right; //right pointer
  
  while (i <= j) {
    while (arr[i] < pivot) {
      animations.push([i, j, false, pivotIdx, false, pivot])
      i++;
    }
    while (arr[j] > pivot) {
      animations.push([i, j, false, pivotIdx, false, pivot])
      j--;
    }
    if (i <= j) {
      animations.push([i, j, true, pivotIdx, false, pivot])
      // Swap two elements
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  animations.push([i-1, j+1, false, pivotIdx, true, pivot])
  return i;
}

const quickSort = (arr, left, right, animations) => {
  let pivotIndex;
  if (arr.length > 1) {
    pivotIndex = partition(arr, left, right, animations); //pivotIndex returned from partition
    if (left < pivotIndex - 1) { //more elements on the left side of the pivot
      quickSort(arr, left, pivotIndex - 1, animations);
    }
    if (pivotIndex < right) { //more elements on the right side of the pivot
      quickSort(arr, pivotIndex, right, animations);
    }
  }
  return arr;
}

export default quickSort;