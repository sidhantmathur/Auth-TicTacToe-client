'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpError)
}

const onSignIn = function (event) {
  event.preventDefault()

  // turn = true
  // console.log('login inside ' + turn)

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInError)
}

const onChangePass = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePass(formData)
    .then(ui.onChangePassSuccess)
    .catch(ui.onChangePassError)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutError)
}

let start = false

let turn = true

const onCreateGame = function (event) {
  event.preventDefault()

  if (start === true) {
    turn = false
  } else if (start === false) {
    turn = true
  }
  start = !start
  // console.log(start)

  const form = event.target
  const formData = getFormFields(form)
  api.createGame(formData)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameError)
}

const onGetGames = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.getGames(formData)
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesError)
}

const onGetGame = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.getGame(formData)
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameError)
}
// function to switch turns between x and o

const turnFunction = function (event) {
  // $(this).off(event)
  event.preventDefault()
  const form = event.target
  $(form).css('pointer-events', 'none')

  // turn ? onMove1(event) : onMove2(event)

  if (turn === true) {
    onMove1(event)
  } if (turn === false) {
    onMove2(event)
  }

  turn = !turn
}

// https://stackoverflow.com/a/49813591 only solution to switching that worked for me

// in this case, formData is the cellIndex of the board position we clicked. Event.target is the thing we clicked.

function onMove1 (event) {
  event.preventDefault()
  const form = event.target
  const formData = $(form).data().cellIndex
  const content = $(form).text()

  // prevent clicks on clicked positions (though unneccesary now, may be relevant with AI player and no click event)
  if (content === 'o' || content === 'x') {
    $('#auth-display-text').text('Illegal Move')
  } else {
    // $(form).prop('disabled', true)
    $(form).text('x')
    $(form).addClass('clicked-x')

    api.move(formData)
      .then(ui.onMoveSuccess)
      .catch(ui.onMoveError)
  }
}

function onMove2 (event) {
  event.preventDefault()
  const form = event.target
  const formData = $(form).data().cellIndex
  const content = $(form).text()

  if (content === 'o' || content === 'x') {
    $('#auth-display-text').text('Illegal Move')
  } else {
    // $(form).prop('disabled', true)
    $(form).text('o')
    $(form).addClass('clicked-o')

    api.moveO(formData)
      .then(ui.onMoveOSuccess)
      .catch(ui.onMoveOError)
  }
}

function ai (event) {
  event.preventDefault()
  const nrand = Math.floor(Math.random() * 9)
  const n = nrand.toString()
  document.getElementById(n).click()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut,
  onCreateGame,
  onGetGames,
  onGetGame,
  turnFunction,
  ai
}
