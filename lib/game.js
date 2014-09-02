//var snake = require('./snake');
var canvas = require('./canvas');
var snake = require('./snake');
var _ = require('underscore');
var dom = require('./dom');

var settings = {};

var mainLoop = function(){
	snake.draw();

	setTimeout(function() {
	    dom.requestAnimationFrame.call(window, mainLoop);
	}, 1000 / settings.speed);
};

exports.reset = function() {
	canvas.clearCanvas(dom);
	_.extend(settings, {
					score: 0,
					speed: 10
	});
	snake.initialize();
	dom.requestAnimationFrame.call(window, mainLoop);
};

exports.getSettings = function (){
	return settings;
};

exports.mainLoop = mainLoop;