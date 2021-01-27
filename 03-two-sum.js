function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] + arr[j] === targetSum){
        return true;
      }
    }
  }
  return false;
}


function okayTwoSum1(arr, targetSum) {
  // Code goes here ...
}


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}

const arr = [0, 1, 5, 7];
console.log(badTwoSum(arr, 6)); // => should be true
console.log(badTwoSum(arr, 10));