var snake = require('./snake');
var game = require('./game');
var canvas = require('./canvas');
var dom = require('./dom');

exports.addListeners = function(){
	addEventListener("keydown", function (e) {
		if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1){
			e.preventDefault();
		}

	    var direction = snake.snake.direction;
	    //arrow keys
	    if (e.keyCode === 37 && direction !== "right"){ direction = "left"; }
	    if (e.keyCode === 38 && direction !== "down"){ direction = "up"; }
	    if (e.keyCode === 39 && direction !== "left"){ direction = "right"; }
	    if (e.keyCode === 40 && direction !== "up"){ direction = "down"; }
	    snake.snake.direction = direction;

	    //space bar
	    if (e.keyCode === 32){
	    	game.togglePause();
	    }
	}, false);

	dom.canvasElement.addEventListener('click', function() {game.reset(dom);});
	
	dom.smallBoard.addEventListener('click', function() {
		dom.changeBoardSize('small');
		canvas.scale(dom);
		game.setupGame();
	});
	dom.mediumBoard.addEventListener('click', function() {
		dom.changeBoardSize('medium');
		canvas.scale(dom);
		game.setupGame();
	});
	dom.largeBoard.addEventListener('click', function() {
		dom.changeBoardSize('large');
		canvas.scale(dom);
		game.setupGame();
	});

	dom.easyDifficulty.addEventListener('click', function(){
		game.settings.difficulty = 1;
		game.settings.speed = 15;
		game.setupGame();
	});
	dom.normalDifficulty.addEventListener('click', function(){
		game.settings.difficulty = 2;
		game.settings.speed = 20;
		game.setupGame();
	});
	dom.hardDifficulty.addEventListener('click', function(){
		game.settings.difficulty = 5;
		game.settings.speed = 30;
		game.setupGame();
	});
};