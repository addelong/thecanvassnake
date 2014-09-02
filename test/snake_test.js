var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var snake = require('../lib/snake.js');
var canvas = require('../lib/canvas.js');

sinon.stub(canvas, 'drawBox');

describe('The initial snake', function(){
	beforeEach(function(){
		snake.initialize();
	});
	it('should have length 5', function(){
		expect(snake.getSnake().length).to.equal(5);
	});
	it('should have direction set to right', function(){
		expect(snake.getSnake().direction).to.equal("right");
	});
	it('should have pieces populated with coordinates', function(){
		expect(snake.getSnake().pieces[0].x).to.equal(0);
		expect(snake.getSnake().pieces[0].y).to.equal(0);
		expect(snake.getSnake().pieces[4].x).to.equal(4);
		expect(snake.getSnake().pieces[4].y).to.equal(0);
	});
});

describe('Moving the snake', function(){
	var snakeLength = 0;
	var head;
	beforeEach(function(){
		snake.initialize();
		snakeLength = snake.getSnake().pieces.length;
		head = snake.getSnake().pieces[snakeLength-1];
	});
	it('should increase the y coordinate of the first piece if moving down', function(){
		snake.getSnake().direction = "down";
		snake.move();
		var newHead = snake.getSnake().pieces[snakeLength-1];
		expect(newHead.y).to.equal(++head.y);
	});
	it('should increase the x coordinate of the first piece if moving right', function(){
		snake.getSnake().direction = "right";
		snake.move();
		var newHead = snake.getSnake().pieces[snakeLength-1];
		expect(newHead.x).to.equal(++head.x);
	});
	it('should decrease the y coordinate of the first piece if moving up', function(){
		snake.getSnake().direction = "up";
		snake.move();
		var newHead = snake.getSnake().pieces[snakeLength-1];
		expect(newHead.y).to.equal(--head.y);
	});
	it('should decrease the x coordinate of the first piece if moving left', function(){
		snake.getSnake().direction = "left";
		snake.move();
		var newHead = snake.getSnake().pieces[snakeLength-1];
		expect(newHead.x).to.equal(--head.x);
	});
});

describe('Collision detection', function(){
	var head, snakeLength;
	beforeEach(function(){
		snake.initialize();
		snakeLength = snake.getSnake().pieces.length;
		head = snake.getSnake().pieces[snakeLength-1];
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