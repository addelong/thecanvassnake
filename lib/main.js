"use strict";

var dom = require('./dom');
var canvas = require('./canvas');
var game = require('./game');

dom.canvasElement.addEventListener('click', function() {game.reset(dom);});
canvas.scale(dom);
canvas.drawStartMenu(dom);

