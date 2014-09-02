var chai = require('chai');
var sinon = require('sinon');
var canvas = require('../lib/canvas.js');
var expect = chai.expect;
var domHelper = require('./domhelper.js');
domHelper.setup();
addEventListener = function(){}; // jshint ignore:line
var game = require('../lib/game.js');

var canvasStub = sinon.stub(canvas, 'clearCanvas');
sinon.stub(canvas, 'edges', function(){
	return {width: 500, height: 500};
});

describe('Resetting the game', function(){
	it('should initialize game settings', function(){
		game.reset({});
		expect(game.settings.score).to.equal(0);
		expect(game.settings.speed).to.equal(20);
	});
	it('should clear the canvas', function(){
		game.reset({});
		expect(canvasStub.clearCanvas).to.have.been.called;
	});
});