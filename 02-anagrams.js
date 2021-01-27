function firstAnagram(str1, str2) {
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');

  for (let i = 0; i < str1Arr.length; i++){
    if (str2Arr.includes(str1Arr[i])){
      let index = str2Arr.indexOf(str1Arr[i]);
      str2Arr[index] = '';
    }
  };

  if (str2Arr.join('')) return false;
  else return true;
}
// time - O(n)


function secondAnagram(str1, str2) {
  let str1Arr = str1.split('').sort();
  let str2Arr = str2.split('').sort();

  for (let i = 0; i < str1Arr.length; i++){
    if (str1Arr[i] !== str2Arr[i]) return false;
  }
  return true;

}
// time - o(n)

function createObj(str){
  let strObj = {};
  for (let i = 0; i < str.length; i++){
    let letter = str[i];
    if (letter in strObj){
      strObj[letter] += 1;
    } else {
      strObj[letter] = 1;
    }
  }
  return strObj;
}

//O(n)
function thirdAnagram(str1, str2) {
  let str1Obj = createObj(str1);
  let str2Obj = createObj(str2);

  for (key in str1Obj){
    if (str2Obj[key] !== str1Obj[key]){
      return false;
    }
  } for (key in str2Obj){
    if (str2Obj[key] !== str1Obj[key]){
      return false;
    }
  } return true;

}

//O(n^2)
// function fourthAnagram(str1, str2) {
//   let str1Obj = createObj(str1);
  
//   for (let i = 0 ; i < str2.length; i++){

//   }
// }

str1 = 'elvis';
str2 = 'lives';
str3 = 'gizmo';
str4 = 'sally';

// console.log(firstAnagram(str1, str2));
// console.log(firstAnagram(str3, str4));

//console.log(secondAnagram(str1, str2));
//console.log(secondAnagram(str3, str4));
console.log(thirdAnagram(str1, str2))
console.log(thirdAnagram(str3, str4))
