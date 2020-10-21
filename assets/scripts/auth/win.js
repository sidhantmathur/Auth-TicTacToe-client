'use strict'

const checkWin = function () {
  // winning positions arrays within array
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
  // init game board cell indexes array
  const arr1 = []
  // init clicked cell indexes array
  const arr3 = []

  // const arr4 = []

  for (let i = 0; i < boxes.length; i++) {
    const boxCell = boxes[i].dataset.cellIndex
    arr1.push(boxCell)
  }

  for (let i = 0; i < clickX.length; i++) {
    const xCell = clickX[i].dataset.cellIndex
    arr3.push(xCell)
  }

  // const box0 = $(boxes[0]).text()
  // const box1 = $(boxes[1]).text()
  // const box2 = $(boxes[2]).text()
  // const box3 = $(boxes[3]).text()
  // const box4 = $(boxes[4]).text()
  // const box5 = $(boxes[5]).text()
  // const box6 = $(boxes[6]).text()
  // const box7 = $(boxes[7]).text()
  // const box8 = $(boxes[8]).text()

  // if (box0 === box1 === box2) {
  //   return true
  // } else if (box3 === box4 === box5) {
  //   return true
  // } else if (box6 === box7 === box8) {
  //   return true
  // } else if (box0 === box3 === box6) {
  //   return true
  // } else if (box1 === box4 === box7) {
  //   return true
  // } else if (box2 === box5 === box8) {
  //   return true
  // } else if (box0 === box4 === box8) {
  //   return true
  // } else if (box2 === box4 === box6) {
  //   return true
  // } else {
  //   return false
  // }

  // for (let i = 0; i < arr2.length; i++) {
  //   arr2[i].every(function (val) {
  //     arr4.push(arr3.indexOf(val) !== -1)
  //     console.log(arr4)
  //   })
  // }

  // if (arr4.includes(true)) {
  //   console.log(arr4)
  //   return true
  // } else {
  //   return false
  // }

  // push for loop results to array, then use javascript to check array for any false/trues

  // compare win conditions arrays to clicked arrays

  const success0 = arr2[0].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success1 = arr2[1].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success2 = arr2[2].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success3 = arr2[3].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success4 = arr2[4].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success5 = arr2[5].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success6 = arr2[6].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success7 = arr2[7].every(function (val) {
    return arr3.indexOf(val) !== -1
  })

  // console.log(success0)
  // console.log(success1)
  // console.log(success2)
  // console.log(success3)
  // console.log(success4)
  // console.log(success5)
  // console.log(success6)
  // console.log(success7)

  if (
    success0 || success1 || success2 ||
        success3 || success4 || success5 ||
        success6 || success7
  ) {
    return true
  } else {
    return false
  }
}

const checkWin2 = function () {
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
  const clickX = $('.clicked-o')
  const arr1 = []
  const arr3 = []

  for (let i = 0; i < boxes.length; i++) {
    const boxCell = boxes[i].dataset.cellIndex
    arr1.push(boxCell)
  }

  for (let i = 0; i < clickX.length; i++) {
    const xCell = clickX[i].dataset.cellIndex
    arr3.push(xCell)
  }

  const success0 = arr2[0].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success1 = arr2[1].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success2 = arr2[2].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success3 = arr2[3].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success4 = arr2[4].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success5 = arr2[5].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success6 = arr2[6].every(function (val) {
    return arr3.indexOf(val) !== -1
  })
  const success7 = arr2[7].every(function (val) {
    return arr3.indexOf(val) !== -1
  })

  if (
    success0 || success1 || success2 ||
        success3 || success4 || success5 ||
        success6 || success7
  ) {
    return true
  } else {
    return false
  }
}

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
const arr3 = []

for (let i = 0; i < boxes.length; i++) {
  const boxCell = boxes[i].dataset.cellIndex
  arr1.push(boxCell)
}

for (let i = 0; i < clickX.length; i++) {
  const xCell = clickX[i].dataset.cellIndex
  arr3.push(xCell)
}

// for (let i = 0; i < arr2.length; i++) {
//     const success = arr2[i].every(function (val) {
//         return arr3.indexOf(val) !== -1
//     })
// }

// function winCheck () {
//     for (let i = 0; i < arr2.length; i++) {
//         const success = arr2[i].every(function (val) {
//             return arr3.indexOf(val) !== -1
//             console.log(success);
//         })
//     }
// }

// winCheck()

const success0 = arr2[0].every(function (val) {
  return arr3.indexOf(val) !== -1
})

const success1 = arr2[1].every(function (val) {
  return arr3.indexOf(val) !== -1
})

const success2 = arr2[2].every(function (val) {
  return arr3.indexOf(val) !== -1
})

const success3 = arr2[3].every(function (val) {
  return arr3.indexOf(val) !== -1
})

const success4 = arr2[4].every(function (val) {
  return arr3.indexOf(val) !== -1
})

const success5 = arr2[5].every(function (val) {
  return arr3.indexOf(val) !== -1
})

const success6 = arr2[6].every(function (val) {
  return arr3.indexOf(val) !== -1
})

const success7 = arr2[7].every(function (val) {
  return arr3.indexOf(val) !== -1
})

function winCheck () {
  if (
    success0 || success1 || success2 ||
      success3 || success4 || success5 ||
      success6 || success7
  ) {
    return true
  } else {
    return false
  }
}

winCheck()

// function getWinner() {
//   let winner = null
//   arr2.forEach(function (combo, index) {
//     if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]]
//   })
//   return winner ? winner : board.includes('') ? null : 'T'
// };

// getWinner()

// for (let i = 0; i < boxes.length; i++) {
//   const stuff = boxes[i].dataset.cellIndex
//   arr1.push(stuff)
// }

// function playerWins (clickX) {
//   return arr2.some((threeInARow) => threeInARow.every(function (param) {
//     return boxes[param] === clickX
//   }))
// }

// playerWins(clickX)

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

module.exports = {
  checkWin,
  checkWin2
}
