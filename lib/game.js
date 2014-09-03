var canvas = require('./canvas');
var snake = require('./snake');
var food = require('./food');
var _ = require('underscore');
var dom = require('./dom');

var settings = {};
var timer;
var paused = false;

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
    	if (paused){
    		paused = false;
    		dom.requestAnimationFrame(mainLoop);
    	}
    	else{
    		paused = true;
    		clearTimeout(timer);
    	}
    }
}, false);