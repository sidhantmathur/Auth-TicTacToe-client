'use strict'

const store = require('./../store')

const onSignUpSuccess = function (res) {
  console.log(res)
  $('#auth-display').text('You Signed Up ' + res.user.email)
  $('#sign-up').trigger('reset')
}

// consolidate these show/hide ids with a "hidden on sign in class"

const onSignInSuccess = function (res) {
  console.log(res)
  $('#auth-display').text('You Signed In ' + res.user.email)
  $('#sign-in').trigger('reset')

  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-pass').show()
  $('#sign-out').show()

  $('#create-game').show()
  $('#get-games').show()
  $('#get-game').show()
  $('#game').show()

  store.user = res.user
}

const onChangePassSuccess = function () {
  $('#auth-display').text('You Signed Out')
  $('#change-pass').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#auth-display').text('You Signed Out')
  $('#sign-in').trigger('reset')

  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-pass').hide()
  $('#sign-out').hide()

  $('#create-game').hide()
  $('#get-games').hide()
  $('#get-game').hide()
  $('#game').hide()
}

const onSignOutError = function (error) {
  $('#auth-display').text('Error Changing Password: ' + error.statusText + 'Status Code: ' + error.status)
  $('#sign-in').trigger('reset')
  console.log(error)
}

const onChangePassError = function (error) {
  $('#auth-display').text('Error Changing Password: ' + error.statusText + 'Status Code: ' + error.status)
  $('#sign-in').trigger('reset')
  console.log(error)
}

const onSignUpError = function (error) {
  $('#auth-display').text('Error Signing Up: ' + error.statusText + 'Status Code: ' + error.status)
  $('#sign-in').trigger('reset')
  console.log(error)
}

const onSignInError = function (error) {
  $('#auth-display').text('Error Signing In: ' + error.statusText + 'Status Code: ' + error.status)
  $('#sign-in').trigger('reset')
  console.log(error)
}

const onCreateGameSuccess = function (res) {
  $('#auth-display').text('game created! ...' + res)
  console.log(res)
  store.game = res.game
}

const onCreateGameError = function (res) {
  $('#auth-display').text('game create fail' + res)
  console.log('game create fail' + res)
}

const onGetGamesSuccess = function (res) {
  console.log(res)
  console.log(res.games)

  const display = $('#game-display')
  $(display).empty()
  // jQuery docs empty()
  res.games.forEach(games => {
    const list = document.createElement('li')
    $(list).text(games._id + ' ' + games.over + ' ' + games.__v)
    $(display).append(list)
  })
}

const onGetGamesError = function (res) {
  $('#auth-display').text('game not got!')
  console.log('create game error' + res.error)
}

const onGetGameSuccess = function (res) {
  $('#auth-display').text(res)
  console.log(res)
  console.log('Got One Game')

  // loop through array, and put x's and o's in each respective box

  const display = $('#game')
  $(display).empty()
  for (let i = 0; i < res.game.cells.length; i++) {
    console.log(res.game.cells[i])
    const boxes = document.createElement('div')
    $(boxes).addClass('box col-4')
    $(boxes).text(res.game.cells[i])
    $(display).append(boxes)
  }
}

const onGetGameError = function (res) {
  $('#auth-display').text('1 game not got!')
  console.log('1 create game error' + res.error)
}

const onMoveSuccess = function (res) {
  console.log(res.game.cells)
  console.log('made move')
  console.log(res)
}

const onMoveError = function (res) {
  console.log('move error')
  console.log(res)
}

const onMoveOSuccess = function (res) {
  console.log(res.game.cells)
  console.log('made move')
  console.log(res)
}

const onMoveOError = function (res) {
  console.log('move error')
  console.log(res)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePassSuccess,
  onSignOutSuccess,
  onSignOutError,
  onChangePassError,
  onSignUpError,
  onSignInError,
  onCreateGameSuccess,
  onCreateGameError,
  onGetGamesSuccess,
  onGetGamesError,
  onGetGameSuccess,
  onGetGameError,
  onMoveSuccess,
  onMoveError,
  onMoveOError,
  onMoveOSuccess
}
