function quadraticBiggestFish(fishes) {
  let result = '';

  for (let i = 0; i < fishes.length; i++){
    console.log("i iteration", i);
    for (let j = 1; j < fishes.length; j++){
      console.log('j iteration', j);
      let fish1 = fishes[i];
      let fish2 = fishes[j];
      if (fish1 > fish2){
        result = fish1;
      } else {
        result = fish2;
      }

    }
  }
  return result;

}


function nlognBiggestFish(fishes) {
  fishes.sort((fish1, fish2) => fish1.length - fish2.length);
  return fishes[fishes.length - 1];

}


function linearBiggestFish(fishes) {
    let result = '';
    for (let i = 0; i < fishes.length; i++){
      let fish = fishes[i];
      if (fish.length > result.length){
        result = fish;
      }
    }
    return result;
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length; i++){
    const dir = tilesArray[i];
    if (dir === direction){
      return i;
    }
  }

}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  return tilesObj[direction];
}

const fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

//console.log(quadraticBiggestFish(fishies))
//console.log(nlognBiggestFish(fishes));
//onsole.log(linearBiggestFish(fishes))
tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
// console.log(slowDance('up', tilesArray));

console.log(fastDance('right', tilesObj));
