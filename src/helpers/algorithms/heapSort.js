// create max heap
const heapify = (arr, size, i, animations) => {
  let max = i // initialize max as root
  let left = 2 * i + 1
  let right = 2 * i + 2

  // if left child is larger than root
  if (left < size && arr[left] > arr[max])
    max = left

  // if right child is larger than max
  if (right < size && arr[right] > arr[max])
    max = right

  // if max is not root
  if (max !== i) {
    // swap
    animations.push([i, max, true, false])
    let temp = arr[i]
    arr[i] = arr[max]
    arr[max] = temp

    // recursively heapify the affected sub-tree
    heapify(arr, size, max, animations)
  }
}

const heapSort = (arr, animations) => {
  let size = arr.length

  // build heapSort (rearrange array)
  for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
    heapify(arr, size, i, animations)

  // one by one extract an element from heapSort
  for (let i = size - 1; i >= 0; i--) {
    // move current root to end
    animations.push([0, i, true, true])
    let temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp

    // call max heapify on the reduced heapSort
    heapify(arr, i, 0, animations)
  }

  return arr;
}

export default heapSort;