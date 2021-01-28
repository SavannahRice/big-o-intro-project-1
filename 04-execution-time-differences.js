function myMin1a(list) {
  return Math.min(...list)
}


function myMin1b(list) {
  // Code goes here ...
}


function myMin2(list) {
  let min = list[0];

  for(let i = 1; i < list.length; i++){
    if (list[i] < min)  min = list[i];
  }
  return min;
}

function addArr(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i]
  }
  return sum;
}

function largestContiguousSubsum1(array) {
  const subArray = [];

  for(let i = 0; i < array.length; i++){ //n
    for (let j = i; j < array.length; j++){ //n
      if ( i === j ){
        subArray.push([array[i]]);
      } else {
        let subsubArray = [];
        for ( let k = i; k <= j; k++){ //
          subsubArray.push(array[k]);
        }
        subArray.push(subsubArray);
      }
    }
  }
  const sumArray = [];
  for (let l = 0; l < subArray.length; l++){
    let sum = addArr(subArray[l]);
    sumArray.push(sum);

  }
  return Math.max(...sumArray);
}


function largestContiguousSubsum2(array) {
  let largestSum = Math.max(...array);
  let sum = 0;
  for (let i = 0 ; i < array.length; i++){
   

    if (array[i] < 0) {
      sum = 0;
    } else {
      sum += array[i]
    }
    if (sum > largestSum){
      largestSum = sum;
    }


  }
  return largestSum;
}


const list = [ 100, 3, 5, -10, 18, 14 ]; // [1, 3, -5, 10, 14] 18 
console.log(largestContiguousSubsum2(list));  // =>  -5
