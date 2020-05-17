const insertionSort = (arr, animations) => {
  // [barOne, barTwo, swap, sorted]
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let swapping = false
    let key = arr[i];
    let j = i - 1;
    // animations.push([i, j, false, false])
    animations.push([j, i, false, false])
    while (j >= 0 && arr[j] > key) {
      swapping = true;
      // animations.push([j + 1, j, true, false])
      animations.push([j, j + 1, true, false])
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    if (swapping) {
      animations.push([j + 1, j + 2 || arr.length, false, true])
    } else {
      animations.push([j, j + 1, false, true])
    }
  }
  return arr;
}

export default insertionSort;