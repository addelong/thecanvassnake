var canvas = require('./canvas');
var snake = require('./snake');
var food = require('./food');
var _ = require('underscore');
var dom = require('./dom');

var settings = {};
var timer;

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
		settings.speed += 2;
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
	_.extend(settings, {
					score: 0,
					speed: 20
	});
	dom.updateScore(settings.score);
	snake.initialize();
	food.generateNewFood(canvas.edges().height, canvas.edges().width, snake.snake.pieces);
	if (timer){
		clearTimeout(timer);
	}
	dom.requestAnimationFrame(mainLoop);
};

exports.settings = settings;
exports.mainLoop = mainLoop;

addEventListener("keydown", function (e) {
    var direction = snake.snake.direction;
    if (e.keyCode === 37 && direction !== "right"){ direction = "left"; }
    if (e.keyCode === 38 && direction !== "down"){ direction = "up"; }
    if (e.keyCode === 39 && direction !== "left"){ direction = "right"; }
    if (e.keyCode === 40 && direction !== "up"){ direction = "down"; }
    snake.snake.direction = direction;
}, false);