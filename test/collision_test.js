var chai = require('chai');
var expect = chai.expect;
var snake = require('../lib/snake.js');

describe('Collision detection', function(){
	var head, snakeLength;
	beforeEach(function(){
		snake.initialize();
		snakeLength = snake.snake.length;
		head = snake.snake.pieces[snakeLength-1];
	});
	it('should return true if the snake has moved past the left edge', function(){
		head.x = -1;
		var collision = snake.detectCollision(500, 500);
		expect(collision).to.equal(true);
	});
	it('should return true if the snake has moved past the right edge', function(){
		head.x = 501;
		var collision = snake.detectCollision(500, 500);
		expect(collision).to.equal(true);
	});
	it('should return true if the snake has moved past the top edge', function(){
		head.y = -1;
		var collision = snake.detectCollision(500, 500);
		expect(collision).to.equal(true);
	});
	it('should return true if the snake has moved past the bottom edge', function(){
		head.y = 501;
		var collision = snake.detectCollision(500, 500);
		expect(collision).to.equal(true);
	});
	it('should return true if the snake has hit itself', function(){
		head.x = 3;
		var collision = snake.detectCollision(500, 500);
		expect(collision).to.equal(true);
	});
	it('should return false otherwise', function(){
		var collision = snake.detectCollision(500, 500);
		expect(collision).to.equal(false);
	});
});

describe('Checking if the snake is on the food', function(){
	it('should return true if the snake is on the food', function(){
		snake.initialize();
		var isOnFood = snake.isOnFood({x:4, y:0});
		expect(isOnFood).to.equal(true);
	});
	it('should return false if the snake is anywhere else', function(){
		snake.initialize();
		var isOnFood = snake.isOnFood({x:25, y:25});
		expect(isOnFood).to.equal(false);
	});
});