'use strict'

const arr2 = [
  ['0', '1', '2'],
  ['3', '4', '5'],
  ['6', '7', '8'],
  ['0', '3', '6'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['0', '4', '8'],
  ['2', '4', '6']
]

const boxes = $('.box')
const clickX = $('.clicked-x')
const arr1 = []
for (let i = 0; i < boxes.length; i++) {
  const stuff = boxes[i].dataset.cellIndex
  arr1.push(stuff)
}

function playerWins (clickX) {
  return arr2.some((threeInARow) => threeInARow.every(function (param) {
    return boxes[param] === clickX
  }))
}

playerWins(clickX)

// for (let i = 0; i < boxes.length; i++) {
//   const stuff = boxes[i].dataset.cellIndex
//   arr1.push(stuff)
//   // console.log(arr1)

//   // everything with length of 3 truth
//   const success1 = arr1.every((val) => arr2[0].indexOf(val) !== -1)
//   const success2 = arr1.every((val) => arr2[1].indexOf(val) !== -1)
//   const success3 = arr1.every((val) => arr2[2].indexOf(val) !== -1)
//   const success4 = arr1.every((val) => arr2[3].indexOf(val) !== -1)
//   const success5 = arr1.every((val) => arr2[4].indexOf(val) !== -1)
//   const success6 = arr1.every((val) => arr2[5].indexOf(val) !== -1)
//   const success7 = arr1.every((val) => arr2[6].indexOf(val) !== -1)
//   const success8 = arr1.every((val) => arr2[7].indexOf(val) !== -1)
//   console.log('1' + success1)
//   console.log('2' + success2)
//   console.log('3' + success3)
//   console.log('4' + success4)
//   console.log('5' + success5)
//   console.log('6' + success6)
//   console.log('7' + success7)
//   console.log('8' + success8)

// //   for (let i = 0; i < arr2.length; i++) {
// //     const success = arr1.every((val) => arr2[i].indexOf(val) !== -1)
// //     console.log(success)
// //   }
// }

// https://stackoverflow.com/a/9204307
// .every native solution

// var success = array_a.every(function(val) {
//     return array_b.indexOf(val) !== -1;
// });

// use construntor to make array of all boxes with their inner valeus?

// [12, 54, 18, 130, 44].every(x => x >= 10); // true

// if .box value = x then
// if .box value = o then

// Array.prototype.some()
// Array.prototype.every()
// https://forum.freecodecamp.org/t/tic-tac-toe-win-conditions/188792/3
