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


function largestContiguousSubsum1(array) {
  const subArray = [];

  for(let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      if ( i === j ){
        subArray.push([array[i]]);
      } else {
        let subsubArray = [];
        for ( let k = i; k <= j; k++){
          subsubArray.push(array[k]);
        }
        subArray.push(subsubArray);
      }
    }
  }
}


function largestContiguousSubsum2(array) {
  // Code goes here ...
}


const list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
console.log(myMin2(list));  // =>  -5
