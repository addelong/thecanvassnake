"use strict";

var game = require('./game');
var events = require('./events');

events.addListeners();
game.setupGame();
