const bubbleSort = (arr, animations) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let data = [];
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        data = [j, j + 1, true];
      } else if (j <= len - (i + 2)) {
        data = [j, j + 1, false];
      } else {
        continue;
      }
      // Assign sorted if item is sorted
      if (j + 1 === len - (i + 1)) {
        data.push(true);
      } else {
        data.push(false);
      }
      animations.push(data);
    }
  }
  return arr;
};

export default bubbleSort;