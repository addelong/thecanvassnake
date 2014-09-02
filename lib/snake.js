var _ = require('underscore');
var canvas = require('./canvas');

var snake = {};

exports.initialize = function(){
	_.extend(snake, {
						length: 5,
						direction: "right",
						pieces: []
					});
	for (var i = 0; i < snake.length; i++){
		snake.pieces.push({x:i, y:0});
	}
};

exports.draw = function() {
	_.each(snake.pieces, function(element){
		canvas.drawBox(element);
	});
};

exports.move = function(){

};

exports.getSnake = function(){
	return snake;
};