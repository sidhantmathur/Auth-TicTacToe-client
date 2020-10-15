'use strict'
const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: {
      credentials: {
        email: formData.auth.email,
        password: formData.auth.password,
        password_confirmation: formData.auth.confirmPassword
      }
    }
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: formData.auth.email,
        password: formData.auth.password
      }
    }
  })
}

const changePass = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      passwords: {
        old: formData.auth.oldPass,
        new: formData.auth.newPass
      }
    }
  })
}

const signOut = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const getGame = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.auth.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const move = function () {
  // const grid = document.querySelector('#game').indexNumber
  return $.ajax({
    url: config.apiUrl + '/games/' + '5f8887da9addbf00171e42bb',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    game: {
      cells: {
        index: '2', // grid
        value: 'x'
      },
      over: false
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePass,
  signOut,
  createGame,
  getGames,
  getGame,
  move
}
