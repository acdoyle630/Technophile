var WebBrowser = require('./WebBrowser');
var GameConsole = require('./GameConsole');
extend(NintendoDS.prototype, WebBrowser.prototype);
extend(NintendoDS.prototype, GameConsole.prototype);

function extend(destination, source){
  for( var k in source ) {
    if( source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function NintendoDS( systemName ) {
  GameConsole.call(this, 'Nintendo DS');
}

module.exports = NintendoDS;
