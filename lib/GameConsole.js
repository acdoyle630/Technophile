
function GameConsole( systemName ) {
  this.systemName = systemName;
}
/*
function setName( systemName ){
  systemName = systemName;
  return systemName;
}*/

GameConsole.prototype.play = function( game ){
  return this.systemName + ' plays ' + game.title;
};

module.exports = GameConsole;

