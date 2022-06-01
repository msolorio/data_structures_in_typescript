const util = require('util')

// console.logs a deeply nested object to the console
const deepLog = function (obj) {
  console.log(util.inspect(obj, {
    showHidden: false,
    depth: null,
    colors: true
  }))
}

module.exports = deepLog
