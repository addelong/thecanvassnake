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
	_.each(snake.pieces, function(piece){
		canvas.drawBox(piece, 'white');
	});
};

exports.move = function(){
	var headX = snake.pieces[0].x;
	var headY = snake.pieces[0].y;
	if (snake.direction === "right"){
		headX++;
	}
	if (snake.direction === "left"){
		headX--;
	}
	if (snake.direction === "up"){
		headY--;
	}
	if (snake.direction === "down"){
		headY++;
	}

	var tail = snake.pieces.pop();
	tail.x = headX;
	tail.y = headY;
	snake.pieces.unshift(tail);
};

exports.getSnake = function(){
	return snake;
};