'use strict'

const store = require('./../store')
const win = require('./win')

const onSignUpSuccess = function (res) {
  $('.alert').show()
  $('#auth-display-text').text('You Signed Up ' + res.user.email)
  $('#sign-up').trigger('reset')
}

// consolidate these show/hide ids with a "hidden on sign in class"

const onSignInSuccess = function (res) {
  $('.alert').show()
  $('#auth-display-text').text('Sign In Successful ' + res.user.email)
  $('#welcome-user').text('Welcome ' + res.user.email)
  $('#sign-in').trigger('reset')

  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-pass').show()
  $('#sign-out').show()

  $('#collapse-btn-options').show()
  $('#collapse-btn-stats').show()

  $('#create-game').show()
  $('#get-games').show()
  $('#get-game').show()
  $('.card').show()

  store.user = res.user
}

const onChangePassSuccess = function () {
  $('#auth-display-text').text('You Signed Out')
  $('#change-pass').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#auth-display-text').text('You Signed Out')
  $('#welcome-user').text('')
  $('#sign-in').trigger('reset')

  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-pass').hide()
  $('#sign-out').hide()

  $('#collapse-btn-options').hide()
  $('#collapse-btn-stats').hide()

  $('#create-game').hide()
  $('#get-games').hide()
  $('#get-game').hide()
  $('#game').hide()
  $('.card').hide()
}

const onSignOutError = function (error) {
  $('#auth-display-text').text('Error Changing Password: ' + error.statusText + ' Status Code: ' + error.status)
  $('#sign-in').trigger('reset')
}

const onChangePassError = function (error) {
  $('#auth-display-text').text('Error Changing Password: ' + error.statusText + ' Status Code: ' + error.status)
  $('#sign-in').trigger('reset')
}

const onSignUpError = function (error) {
  $('.alert').show()
  $('#auth-display-text').text('Error Signing Up: ' + error.statusText + ' Status Code: ' + error.status)
  $('#sign-in').trigger('reset')
}

const onSignInError = function (error) {
  $('.alert').show()
  $('#auth-display-text').text('Error Signing In: ' + error.statusText + ' Status Code: ' + error.status)
  $('#sign-in').trigger('reset')
}

const onCreateGameSuccess = function (res) {
  $('#auth-display-text').text('Game Started!')
  store.game = res.game
  $('#game').show()
  $('.box').text('')
  $('.box').removeClass('clicked-x')
  $('.box').removeClass('clicked-o')
  $('.box').css('pointer-events', 'auto')
}

const onCreateGameError = function (res) {
  $('#auth-display-text').text('Error Starting Game: ' + res.error.statusText)
}

const onGetGamesSuccess = function (res) {
  const display = $('#games-list')
  $(display).empty()

  const totalGames = document.createElement('li')
  $(totalGames).addClass('list-group-item list-group-item-primary')
  $(totalGames).text("You've played " + res.games.length + ' games in total')
  $(display).prepend(totalGames)
  // jQuery docs empty()
  res.games.forEach(games => {
    const list = document.createElement('li')
    $(list).addClass('list-group-item')
    $(list).text('ID: ' + games._id + ' # of Moves: ' + games.__v)
    $(display).append(list)
  })
}

const onGetGamesError = function (res) {
  $('#auth-display-text').text('Error Getting Games: ' + res.error.statusText)
}

const onGetGameSuccess = function (res) {
  const display = $('#game-list')
  const list = document.createElement('li')
  $(list).addClass('list-group-item')
  $(list).text(res.game._id + ' ' + res.game.__v)
  $(display).append(list)
  // loop through array, and put x's and o's in each respective box

  // const display = $('#game')
  // $(display).empty()
  // for (let i = 0; i < res.game.cells.length; i++) {
  //   console.log(res.game.cells[i])
  //   const boxes = document.createElement('div')
  //   $(boxes).addClass('box col-4')
  //   $(boxes).text(res.game.cells[i])
  //   $(display).append(boxes)
  // }
}

const onGetGameError = function (res) {
  $('#auth-display-text').text('Get Game Error: ' + res.error.statusText)
}

const onMoveSuccess = function (res) {
  if (res.game.__v === 9) {
    $('#endGameMes').text('Nobody Wins, Game Tied')
    $('#gameEndModal').modal()
    $('.box').css('pointer-events', 'none')

    const log = document.getElementById('tab-log')
    const row = log.insertRow(0)
    const cell = row.insertCell(0)
    cell.innerHTML = 'Tie'
    $(cell).text('Tie')

    const oTie = $('#o-tie')
    const currCount = parseInt($(oTie).html())
    $(oTie).text(currCount + 1)
    const xTie = $('#x-tie')
    $(xTie).text(currCount + 1)
  }

  if (win.checkWin() === true) {
    $('#endGameMes').text('X Wins')
    $('#gameEndModal').modal()
    $('.box').css('pointer-events', 'none')
    const log = document.getElementById('tab-log')
    const row = log.insertRow(0)
    const cell = row.insertCell(0)
    cell.innerHTML = 'X'

    const xWin = $('#x-win')
    const currCount = parseInt($(xWin).html())
    $(xWin).text(currCount + 1)
  }
}

const onMoveError = function (res) {
  $('#auth-display-text').text('Move Error' + res.error.statusText)
}

const onMoveOSuccess = function (res) {
  if (res.game.__v === 9) {
    $('#endGameMes').text('Nobody Wins, Game Tied')
    $('#gameEndModal').modal()
    $('.box').css('pointer-events', 'none')

    const log = document.getElementById('tab-log')
    const row = log.insertRow(0)
    const cell = row.insertCell(0)
    cell.innerHTML = 'Tie'
    $(cell).text('Tie')

    const oTie = $('#o-tie')
    const currCount = parseInt($(oTie).html())
    $(oTie).text(currCount + 1)
    const xTie = $('#x-tie')
    $(xTie).text(currCount + 1)
  }

  if (win.checkWin2() === true) {
    $('#endGameMes').text('O Wins')
    $('#gameEndModal').modal()
    $('.box').css('pointer-events', 'none')
    const log = document.getElementById('tab-log')
    const row = log.insertRow(0)
    const cell = row.insertCell(0)
    cell.innerHTML = 'O'
    $(cell).text('O')

    const oWin = $('#o-win')
    const currCount = parseInt($(oWin).html())
    $(oWin).text(currCount + 1)
  }
}

const onMoveOError = function (res) {
  $('#auth-display-text').text('Move Error' + res.error.statusText)
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
