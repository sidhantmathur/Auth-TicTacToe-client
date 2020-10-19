'use strict'

const store = require('./../store')
const win = require('./win')

const onSignUpSuccess = function (res) {
  console.log(res)
  $('#auth-display').text('You Signed Up ' + res.user.email)
  $('#sign-up').trigger('reset')
}

// consolidate these show/hide ids with a "hidden on sign in class"

const onSignInSuccess = function (res) {
  console.log(res)
  $('#auth-display').text('You Signed In ' + res.user.email)
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

  store.user = res.user
}

const onChangePassSuccess = function () {
  $('#auth-display').text('You Signed Out')
  $('#change-pass').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#auth-display').text('You Signed Out')
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
}

const onSignOutError = function (error) {
  $('#auth-display').text('Error Changing Password: ' + error.statusText + ' Status Code: ' + error.status)
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
  $('#auth-display').text('game created! ...')
  console.log(res)
  store.game = res.game
  $('#game').show()
  $('.box').text('')
  $('.box').removeClass('clicked-x')
  $('.box').removeClass('clicked-o')
  $('.box').css('pointer-events', 'auto')
}

const onCreateGameError = function (res) {
  $('#auth-display').text('game create fail')
  console.log('game create fail' + res)
}

const onGetGamesSuccess = function (res) {
  console.log(res)
  console.log(res.games)

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
    $(list).text(games._id + ' ' + games.__v)
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
  $('#auth-display').text('1 game not got!')
  console.log('1 create game error' + res.error)
}

const onMoveSuccess = function (res) {
  console.log(res.game.cells)
  console.log('made move')
  console.log(res)

  if (res.game.__v === 9) {
    console.log('game tied')
    $('#endGameMes').text('Nobody Wins, Game Tied')
    $('#gameEndModal').modal()
    $('.box').css('pointer-events', 'none')

    const log = document.getElementById('tab-log')
    const row = log.insertRow(0)
    const cell = row.insertCell(0)
    cell.innerHTML = 'Tie'
    $(cell).text('Tie')

    const oWin = $('#o-tie')
    const currCount = parseInt($(oWin).html())
    $(oWin).text(currCount + 1)

    const xWin = $('#x-tie')
    const currCount2 = parseInt($(xWin).html())
    $(xWin).text(currCount2 + 1)
  }

  if (win.checkWin() === true) {
    console.log('X Won!')
    $('#endGameMes').text('X Wins')
    $('#gameEndModal').modal()
    $('.box').css('pointer-events', 'none')
    const log = document.getElementById('tab-log')
    const row = log.insertRow(0)
    const cell = row.insertCell(0)
    cell.innerHTML = 'X'

    const oWin = $('#x-win')
    const currCount = parseInt($(oWin).html())
    $(oWin).text(currCount + 1)
  } else {
    console.log('checked x for win')
  }
}

const onMoveError = function (res) {
  console.log('move error')
  console.log(res)
}

const onMoveOSuccess = function (res) {
  console.log(res.game.cells)
  console.log('made move')
  console.log(res)

  if (res.game.__v === 9) {
    console.log('game tied')
    $('#endGameMes').text('Nobody Wins, Game Tied')
    $('#gameEndModal').modal()
    $('.box').css('pointer-events', 'none')

    const log = document.getElementById('tab-log')
    const row = log.insertRow(0)
    const cell = row.insertCell(0)
    cell.innerHTML = 'Tie'
    $(cell).text('Tie')

    const oWin = $('#o-tie')
    const currCount = parseInt($(oWin).html())
    $(oWin).text(currCount + 1)

    const xWin = $('#x-tie')
    const currCount2 = parseInt($(xWin).html())
    $(xWin).text(currCount2 + 1)
  }

  if (win.checkWin2() === true) {
    console.log('O Won!')
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
  } else {
    console.log('checked o for win')
  }
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
