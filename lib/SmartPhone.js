var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
extend( SmartPhone.prototype, Phone.prototype);
extend( SmartPhone.prototype, Tablet.prototype);
extend( SmartPhone.prototype, GameConsole.prototype);
extend( SmartPhone.prototype, WebBrowser.prototype);

function extend(destination, source){
  for( var k in source ) {
    if( source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function SmartPhone( phoneNumber, systemName ) {
  Phone.call(this, phoneNumber);
  GameConsole.call( this, 'Smart Phone');

}


module.exports = SmartPhone;
