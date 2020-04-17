const selectionSort = (arr, animations) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        animations.push([j, j, min, false]);
        min = j;
      } else {
        animations.push([min, j, null, false]);
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
    animations.push([min, i, null, true])
  }
  return arr;
}

export default selectionSort;