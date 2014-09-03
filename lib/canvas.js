var _ = require('underscore');

var boxSize = 10;

var scale = function(dom){
	var scaleFactor = dom.getScaleFactor();
	if (scaleFactor > 1) {
		var oldWidth = dom.canvasElement.width;
		var oldHeight = dom.canvasElement.height;
	    dom.canvasElement.width = dom.canvasElement.width * scaleFactor;
	    dom.canvasElement.height = dom.canvasElement.height * scaleFactor;
	    dom.canvasElement.style.width = oldWidth + 'px';
	    dom.canvasElement.style.height = oldHeight + 'px';
	    dom.context.scale(scaleFactor, scaleFactor);
	}
};

var clearCanvas = function(dom){
	dom.context.fillStyle = 'black';
	dom.context.fillRect(0, 0, dom.canvasElement.width, dom.canvasElement.height);
};

var drawStartMenu = function(dom){
	var scaleFactor = dom.getScaleFactor();
	clearCanvas(dom);
    _.extend(dom.context, {
    						fillStyle :'white',
    						textAlign: 'center',
    						font: (dom.canvasElement.height / 50 / scaleFactor) + 'pt Helvetica'
    					  });   
    dom.context.fillText("Click to play!", 
    	dom.canvasElement.width / 2 / scaleFactor, dom.canvasElement.height / 5 / scaleFactor);
    dom.context.fillText("Space pauses, the arrow keys move the snake. Click again to reset.",
    	dom.canvasElement.width / 2 / scaleFactor, dom.canvasElement.height / 4 / scaleFactor);
    dom.context.fillText("Have fun!", 
    	dom.canvasElement.width / 2 / scaleFactor, dom.canvasElement.height / 3 / scaleFactor);
};

exports.drawBox = function(coordinates, color){
	var dom = require('./dom');
	dom.context.fillStyle = color;
	dom.context.fillRect(coordinates.x*boxSize, coordinates.y*boxSize, boxSize, boxSize);
};

exports.edges = function(){
	var dom = require('./dom');
	var scaleFactor = dom.getScaleFactor();
	return {
		width: dom.canvasElement.width / scaleFactor / boxSize,
		height: dom.canvasElement.height / scaleFactor / boxSize
	};
};

exports.scale = scale;
exports.clearCanvas = clearCanvas;
exports.drawStartMenu = drawStartMenu;