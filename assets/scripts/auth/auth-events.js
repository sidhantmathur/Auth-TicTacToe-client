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

const onCreateGame = function (event) {
  event.preventDefault()

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
    .catch(ui.ongetGamesError)
}

const onGetGame = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.getGame(formData)
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameError)
}

// this function does a lot of work
const onMove = function (event) {
  event.preventDefault()

  const form = event.target

  const formData = $(form).data().cellIndex

  const content = $(form).text()

  if (content === 'o') {
    console.log('cant do that')
  } else if (content === 'x') {
    console.log('cant do that')
  } else {
    $(form).prop('disabled', true)
    $(form).text('x')
    $(form).addClass('clicked')

    api.move(formData)
      .then(ui.onMoveSuccess)
      .catch(ui.onMoveError)
  }
}

const onMoveO = function (event) {
  event.preventDefault()

  const form = event.target

  const formData = $(form).data().cellIndex

  const content = $(form).text()

  if (content === 'o') {
    console.log('cant do that')
  } else if (content === 'x') {
    console.log('cant do that')
  } else {
    $(form).prop('disabled', true)
    $(form).text('o')
    $(form).addClass('clicked')

    api.moveO(formData)
      .then(ui.onMoveOSuccess)
      .catch(ui.onMoveOError)
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut,
  onCreateGame,
  onGetGames,
  onGetGame,
  onMove,
  onMoveO
}
