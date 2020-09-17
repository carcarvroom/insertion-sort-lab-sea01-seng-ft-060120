function findMinAndRemove(array){
  let min = array[0]
  let index = 0
  for (let i = 1; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i]
      index = i
    }
  }
  array.splice(index, 1)
  return min
}

function selectionSort(array){
  let arrayMin
  let sortedArray = []
  while (array.length !== 0) {
    arrayMin = findMinAndRemove(array)
    sortedArray.push(arrayMin)
  }
  return sortedArray
}
