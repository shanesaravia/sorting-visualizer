const mergeSort = (
  arr,
  startIdx,
  endIdx,
  arrCopy,
  animations,
) => {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSort(arrCopy, startIdx, middleIdx, arr, animations);
  mergeSort(arrCopy, middleIdx + 1, endIdx, arr, animations);
  return merge(arr, startIdx, middleIdx, endIdx, arrCopy, animations);
}

const merge = (
  arr,
  startIdx,
  middleIdx,
  endIdx,
  arrCopy,
  animations
) => {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  let swapArr = [];
  let sorted = false;
  if (startIdx === 0 && endIdx === arrCopy.length-1) {
    sorted = true;
  }
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j, null, false]);
    if (arrCopy[i] <= arrCopy[j]) {
      swapArr.push([k, null, arrCopy[i], sorted]);
      arr[k++] = arrCopy[i++];
    } else {
      swapArr.push([k, null, arrCopy[j], sorted]);
      arr[k++] = arrCopy[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i, null, false]);
    swapArr.push([k, null, arrCopy[i], sorted]);
    arr[k++] = arrCopy[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j, null, false]);
    swapArr.push([k, null, arrCopy[j], sorted]);
    arr[k++] = arrCopy[j++];
  }
  animations.push(...swapArr);
  return arr;
}

export default mergeSort;