var canvas = require('./canvas');
var snake = require('./snake');
var food = require('./food');
var dom = require('./dom');

var settings = {difficulty: 2, speed: 20};
var timer;
var paused = false;

function clearTimer(){
	if (timer){
		clearTimeout(timer);
	}
}

var mainLoop = function(){
	canvas.clearCanvas(dom);	
	snake.move();
	snake.draw();

	if (snake.detectCollision(canvas.edges().height, canvas.edges().width)){
		canvas.drawStartMenu(dom);
		return;
	}

	if (snake.isOnFood(food.food)){
		food.generateNewFood(canvas.edges().height, canvas.edges().width, snake.snake.pieces);
		settings.speed += settings.difficulty;
		snake.grow();
		settings.score++;
		dom.updateScore(settings.score);
	}

	canvas.drawBox(food.food, 'white');

	timer = setTimeout(function() {
	    dom.requestAnimationFrame(mainLoop);
	}, 1000 / settings.speed);
};

exports.reset = function() {
	canvas.clearCanvas(dom);
	settings.score = 0;
	dom.updateScore(settings.score);
	snake.initialize();
	food.generateNewFood(canvas.edges().height, canvas.edges().width, snake.snake.pieces);
	clearTimer();
	dom.requestAnimationFrame(mainLoop);
};

exports.togglePause = function() {
	if (paused){
		paused = false;
		dom.requestAnimationFrame(mainLoop);
	}
	else{
		paused = true;
		clearTimer();
	}
};

exports.setupGame = function(){
	clearTimer();
	canvas.drawStartMenu(dom);
	dom.updateHighScore(0);
};

exports.settings = settings;