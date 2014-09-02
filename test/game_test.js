var chai = require('chai');
var sinon = require('sinon');
var canvas = require('../lib/canvas.js');
var expect = chai.expect;
var domHelper = require('./domhelper.js');
domHelper.setup();
addEventListener = function(){}; // jshint ignore:line
var game = require('../lib/game.js');

var canvasStub = sinon.stub(canvas, 'clearCanvas');

describe('The game', function(){
	it('should initialize game settings when reset', function(){
		game.reset({});
		expect(game.getSettings().score).to.equal(0);
		expect(game.getSettings().speed).to.equal(20);
	});
	it('should clear the canvas when reset', function(){
		game.reset({});
		expect(canvasStub.clearCanvas).to.have.been.called;
	});
});