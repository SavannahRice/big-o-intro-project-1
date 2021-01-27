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
  arr.sort();

  for (let i = 0; i < arr.length; i++){
    let currentNum = arr[i];
    // console.log(targetSum - currentNum);
    if(arr.includes(targetSum - currentNum) && arr.indexOf(targetSum - currentNum) !== i){
      return true;
    }
  }
  return false;
}

// function bSearch(array, target, low = 0, hi = array.length - 1){

//   let midPoint = Math.floor(array.length/2);
//   let left = array.slice(0,midPoint);
//   let right = array.slice(midPoint + 1);

//   if (array.length === 0 || array.length === 1){
//     return array;
//   }

//   if (array[midPoint] === target){
//     return midPoint;
//   } else if (target > array[midPoint]){
//     return bSearch(right, target);
//   } else if (target < array[midPoint]){
//     return bSearch(left, target, );
//   }

// }

// Recursive Index v2
function bSearch(nums, target, lo = 0, hi = nums.length - 1) {
  if (lo === hi && nums[lo] !== target) {
      return -1;
  }

  let midIdx = Math.floor((lo + hi) / 2);

  if (target < nums[midIdx]) {
      return recurBSearchIdxV2(nums, target, lo, midIdx);
  } else if (target > nums[midIdx]) {
      return recurBSearchIdxV2(nums, target, midIdx + 1, hi);
  } else {
      return midIdx;
  }
}

function okayTwoSum2(arr, targetSum) {

}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}

const arr = [0, 5, 1, 7]; // => [0,1,5,7]
// console.log(badTwoSum(arr, 6)); // => should be true
// console.log(badTwoSum(arr, 10));
console.log(okayTwoSum1(arr, 6));
console.log(okayTwoSum1(arr, 10));
