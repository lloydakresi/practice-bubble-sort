
function bubbleSort(arr) {
    let sorted;

    // Iterate through the array
    while(!sorted){
      sorted = true
      for (let i = 0; i < arr.length; i++){
      // If the current value is greater than its neighbor to the right
        // Swap those values
        if (arr[i] > arr[i + 1]){
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
          sorted = false;
          console.log(arr.join(","));
        }
      }
    // Do not move this console.log
    // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning
    }

  return arr;
}

module.exports = bubbleSort;
