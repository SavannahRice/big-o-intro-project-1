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


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}

str1 = 'elvis';
str2 = 'lives';
str3 = 'gizmo';
str4 = 'sally';

// console.log(firstAnagram(str1, str2));
// console.log(firstAnagram(str3, str4));

console.log(secondAnagram(str1, str2));
console.log(secondAnagram(str3, str4));
