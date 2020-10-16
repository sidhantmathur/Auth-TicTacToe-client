'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

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

let turn = true

const turnFunction = function (event) {
  turn ? onMove1(event) : onMove2(event)
  turn = !turn
}

// https://stackoverflow.com/a/49813591 only solution to switching that worked for me

function onMove1 (event) {
  event.preventDefault()

  const form = event.target

  const formData = $(form).data().cellIndex

  const content = $(form).text()

  if (content === 'o') {
    console.log('cant do that')
  } else if (content === 'x') {
    console.log('cant do that')
  } else {
    // $(form).prop('disabled', true)
    $(form).text('x')
    // $(form).addClass('clicked')

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

  if (content === 'o') {
    console.log('cant do that')
  } else if (content === 'x') {
    console.log('cant do that')
  } else {
    // $(form).prop('disabled', true)
    $(form).text('o')
    // $(form).addClass('clicked')

    api.moveO(formData)
      .then(ui.onMoveOSuccess)
      .catch(ui.onMoveOError)
  }
}

module.exports = {
  onCreateGame,
  onGetGames,
  onGetGame,
  turnFunction
}
