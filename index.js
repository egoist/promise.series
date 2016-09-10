'use strict'

module.exports = function (tasks) {
  if (!Array.isArray(tasks)) {
    return Promise.reject(new TypeError('promise-series only accepts an array of functions'))
  }
  return tasks.reduce(function (current, next) {
    return current.then(next)
  }, Promise.resolve())
}
