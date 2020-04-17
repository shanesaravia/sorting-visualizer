const insertionSort = (arr, animations) => {
  // [barOne, barTwo, swap, sorted]
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    animations.push([i, j, false, false])
    while (j >= 0 && arr[j] > key) {
      animations.push([j + 1, j, true, true])
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    animations.push([j + 1, j + 1, false, true])
  }
  return arr;
}

export default insertionSort;