"use strict";

var game = require('./game');
var canvas = require('./canvas');
var dom = require('./dom');
var events = require('./events');

events.addListeners();
canvas.scale(dom);
game.setupGame();
