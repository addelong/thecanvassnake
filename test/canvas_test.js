var canvas = require('../lib/canvas.js');
var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;


describe('The canvas', function() {

	it('should be scaled if the pixel density is > 1', function() {
		var canvasElement = { width: 5, height: 5, style: {} };
		var context = {scale: function () {} };
		var stub = sinon.stub(context, "scale");
		canvas.scale(canvasElement, context, 2);

		expect(canvasElement.width).to.equal(10);
		expect(canvasElement.height).to.equal(10);
		expect(canvasElement.style.width).to.equal('5px');
		expect(canvasElement.style.height).to.equal('5px');
		expect(stub).to.have.been.called;
	});

	it('should make the canvas background black', function() {
		var canvasElement = { width: 5, height: 5};
		var context = {fillRect: function () {} };
		var stub = sinon.stub(context, "fillRect");
		canvas.fill(canvasElement, context);

		expect(context.fillStyle).to.equal("black");
		expect(stub.fillRect).to.have.been.called;
	});

});