'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/auth-events.js')

// add game events later

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pass').on('submit', authEvents.onChangePass)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // will be gameEvents
  $('#create-game').on('submit', authEvents.onCreateGame)
  $('#get-games').on('submit', authEvents.onGetGames)

  $('#get-game').on('submit', authEvents.onGetGame)

  $('.box').one('click', authEvents.onMove)

  // $('.box').toggle(
  //   authEvents.onMove,
  //   authEvents.onMove2
  // )

  // $('#0').on('click', authEvents.onMove)
  // $('#1').on('click', authEvents.onMove)
  // $('#2').on('click', authEvents.onMove)
  // $('#3').on('click', authEvents.onMove)
  // $('#4').on('click', authEvents.onMove)
  // $('#5').on('click', authEvents.onMove)
  // $('#6').on('click', authEvents.onMove)
  // $('#7').on('click', authEvents.onMove)
  // $('#8').on('click', authEvents.onMove)
})
