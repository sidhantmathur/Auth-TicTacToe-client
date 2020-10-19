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
  $('#play-again').on('click', authEvents.onCreateGame)
  $('#get-games').on('submit', authEvents.onGetGames)

  $('#get-game').on('submit', authEvents.onGetGame)

  // $('.box').on('click', authEvents.onMove)

  $('.box').on('click', authEvents.turnFunction)

  // $('.box').one('click', authEvents.onBoxClick)
})
