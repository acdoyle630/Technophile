var Watch = require('./Watch');
var Tablet = require('./Tablet');
extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

function extend(destination, source){
  for( var k in source ) {
    if( source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function SmartWatch( bodyPart ) {
  Watch.call(this, bodyPart);
}

module.exports = SmartWatch;

