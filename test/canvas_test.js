var canvas = require('../lib/canvas.js');
var chai = require('chai');
var sinon = require('sinon');
var _ = require('underscore');
var expect = chai.expect;

var dom = {};

describe('The canvas', function() {
	beforeEach(function(){
		_.extend(dom, {
						canvasElement: { width: 5, height: 5, style: {} },
						context: { 
									scale: function () {},
						  		 	fillRect: function () {},
						  		 	fillText: function () {} 
						  		 },
						getScaleFactor: function () {return 2;}
					});
	});
	it('should be scaled if the pixel density is > 1', function() {
		var stub = sinon.stub(dom.context, "scale");
		canvas.scale(dom);

		expect(dom.canvasElement.width).to.equal(10);
		expect(dom.canvasElement.height).to.equal(10);
		expect(dom.canvasElement.style.width).to.equal('5px');
		expect(dom.canvasElement.style.height).to.equal('5px');
		expect(stub).to.have.been.called;
	});

	it('should be able to draw the start menu', function() {
		var fillRectStub = sinon.stub(dom.context, "fillRect");
		var fillTextStub = sinon.stub(dom.context, "fillText");
		canvas.drawStartMenu(dom);

		expect(fillRectStub).to.have.been.called;
		expect(fillTextStub).to.have.been.called;
	});

});