var _ = require('underscore');

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
	_.extend(dom.context, {fillStyle : 'black'});
	dom.context.fillRect(0, 0, dom.canvasElement.width, dom.canvasElement.height);
};

var drawStartMenu = function(dom){
	clearCanvas(dom);
    _.extend(dom.context, {
    						fillStyle :'white',
    						textAlign: 'center',
    						font: (dom.canvasElement.height / 50 / dom.getScaleFactor()) + 'pt Helvetica'
    					  });   
    dom.context.fillText("Click to play! Space pauses, the arrow keys move the snake. Click again to reset.", 
    	dom.canvasElement.width / 4, dom.canvasElement.height / 10);
    dom.context.fillText("Have fun!", 
    	dom.canvasElement.width / 4, dom.canvasElement.height / 5);
};

exports.scale = scale;
exports.clearCanvas = clearCanvas;
exports.drawStartMenu = drawStartMenu;