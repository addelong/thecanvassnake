//var snake = require('./snake');
var canvas = require('./canvas');
var snake = require('./snake');
var _ = require('underscore');
var dom = require('./dom');

var settings = {};
var timer;

var mainLoop = function(){
	canvas.clearCanvas(dom);	
	snake.move();
	snake.draw();

	timer = setTimeout(function() {
	    dom.requestAnimationFrame.call(window, mainLoop);
	}, 1000 / settings.speed);
};

exports.reset = function() {
	canvas.clearCanvas(dom);
	_.extend(settings, {
					score: 0,
					speed: 20
	});
	snake.initialize();
	if (timer){
		clearTimeout(timer);
	}
	dom.requestAnimationFrame.call(window, mainLoop);
};

exports.getSettings = function (){
	return settings;
};

exports.mainLoop = mainLoop;

addEventListener("keydown", function (e) {
    var direction = snake.getSnake().direction;
    if (e.keyCode === 37 && direction !== "right"){ direction = "left"; }
    if (e.keyCode === 38 && direction !== "down"){ direction = "up"; }
    if (e.keyCode === 39 && direction !== "left"){ direction = "right"; }
    if (e.keyCode === 40 && direction !== "up"){ direction = "down"; }
    snake.getSnake().direction = direction;
}, false);