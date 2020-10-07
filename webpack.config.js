const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch','./assets/js/scripts.js'], // entrada de info
  output: {
    path: path.resolve(__dirname, './'), // onde no diretorio
    filename: 'main.js' // nome do arquivo.
  }
}