"use strict";

var dom = require('./dom');
var canvas = require('./canvas');
var game = require('./game');

function startGame(){
	canvas.scale(dom);
	canvas.drawStartMenu(dom);
	dom.updateHighScore(0);
}

function changeBoardSize(boardSize){
	var pixels = 500;
	if (boardSize === 'small'){
		pixels = 400;
	}
	if (boardSize === 'large'){
		pixels = 600;
	}

	dom.canvasElement.width = pixels;
	dom.canvasElement.height = pixels;

	startGame();
}

dom.canvasElement.addEventListener('click', function() {game.reset(dom);});
dom.smallBoard.addEventListener('click', function() {changeBoardSize('small');});
dom.mediumBoard.addEventListener('click', function() {changeBoardSize('medium');});
dom.largeBoard.addEventListener('click', function() {changeBoardSize('large');});

startGame();
