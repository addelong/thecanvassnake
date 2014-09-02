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
	beforeEach(function(){
		snake.initialize();
	});
	it('should increase the y coordinate of the first piece if moving down', function(){
		snake.getSnake().direction = "down";
		var headY = snake.getSnake().pieces[0].y;
		snake.move();
		expect(snake.getSnake().pieces[0].y).to.equal(++headY);
	});
	it('should increase the x coordinate of the first piece if moving right', function(){
		snake.getSnake().direction = "right";
		var headX = snake.getSnake().pieces[0].x;
		snake.move();
		expect(snake.getSnake().pieces[0].x).to.equal(++headX);
	});
	it('should decrease the y coordinate of the first piece if moving up', function(){
		snake.getSnake().direction = "up";
		var headY = snake.getSnake().pieces[0].y;
		snake.move();
		expect(snake.getSnake().pieces[0].y).to.equal(--headY);
	});
	it('should decrease the x coordinate of the first piece if moving left', function(){
		snake.getSnake().direction = "left";
		var headX = snake.getSnake().pieces[0].x;
		snake.move();
		expect(snake.getSnake().pieces[0].x).to.equal(--headX);
	});
});