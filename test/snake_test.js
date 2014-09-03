var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var snake = require('../lib/snake.js');
var canvas = require('../lib/canvas.js');
var _ = require('underscore');

sinon.stub(canvas, 'drawBox');

describe('The initial snake', function(){
	beforeEach(function(){
		snake.initialize();
	});
	it('should have length 5', function(){
		expect(snake.snake.length).to.equal(5);
	});
	it('should have direction set to right', function(){
		expect(snake.snake.direction).to.equal("right");
	});
	it('should have pieces populated with coordinates', function(){
		expect(_.first(snake.snake.pieces).x).to.equal(0);
		expect(_.first(snake.snake.pieces).y).to.equal(0);
		expect(_.last(snake.snake.pieces).x).to.equal(4);
		expect(_.last(snake.snake.pieces).y).to.equal(0);
	});
});

describe('Moving the snake', function(){
	var snakeLength = 0;
	var head;
	beforeEach(function(){
		snake.initialize();
		snakeLength = snake.snake.pieces.length;
		head = _.last(snake.snake.pieces);
	});
	it('should increase the y coordinate of the first piece if moving down', function(){
		snake.snake.direction = "down";
		snake.move();
		var newHead = _.last(snake.snake.pieces);
		expect(newHead.y).to.equal(++head.y);
	});
	it('should increase the x coordinate of the first piece if moving right', function(){
		snake.snake.direction = "right";
		snake.move();
		var newHead = _.last(snake.snake.pieces);
		expect(newHead.x).to.equal(++head.x);
	});
	it('should decrease the y coordinate of the first piece if moving up', function(){
		snake.snake.direction = "up";
		snake.move();
		var newHead = _.last(snake.snake.pieces);
		expect(newHead.y).to.equal(--head.y);
	});
	it('should decrease the x coordinate of the first piece if moving left', function(){
		snake.snake.direction = "left";
		snake.move();
		var newHead = _.last(snake.snake.pieces);
		expect(newHead.x).to.equal(--head.x);
	});
});

describe('Growing the snake', function(){
	var initialLength;
	beforeEach(function(){
		snake.initialize();
		initialLength = snake.snake.length;
	});
	it('should increase the length of the snake by 1', function(){
		snake.grow();
		expect(snake.snake.length).to.equal(initialLength + 1);
	});
	it('should add a piece to the tail of the snake', function(){
		var tailX = snake.snake.pieces[0].x;
		var tailY = snake.snake.pieces[0].y;
		var numberOfPieces = snake.snake.pieces.length;
		snake.grow();
		expect(snake.snake.pieces.length).to.equal(numberOfPieces + 1);
		expect(snake.snake.pieces[0].x).to.equal(tailX);
		expect(snake.snake.pieces[0].y).to.equal(tailY);
	});
});