var _ = require('underscore');
var canvas = require('./canvas');

var snake = {};

var determineNextLocation = function(){
	var headX = _.last(snake.pieces).x;
	var headY = _.last(snake.pieces).y;
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
	return {x: headX, y: headY};
};

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

var move = function(){
	var newLocation = determineNextLocation();

	var tail = snake.pieces.shift();
	tail.x = newLocation.x;
	tail.y = newLocation.y;
	snake.pieces.push(tail);
};

exports.grow = function() {
	var tailX = _.first(snake.pieces).x;
	var tailY = _.first(snake.pieces).y;
	move();
	snake.pieces.unshift({
		x: tailX,
		y: tailY
	});
	snake.length++;
};

exports.isOnFood = function(food){
	var head = _.last(snake.pieces);
	return (head.x === food.x && head.y === food.y);
};

exports.detectCollision = function(canvasHeight, canvasWidth){
	var head = _.last(snake.pieces);
	if (head.x < 0 || head.x > canvasWidth){
		return true;
	}
	if (head.y < 0 || head.y > canvasHeight){
		return true;
	}
	for (var i = 0; i < snake.length - 1; i++){
		if (head.x === snake.pieces[i].x && head.y === snake.pieces[i].y) {
			return true;
		}
	}
	return false;
};

exports.snake = snake;
exports.move = move;