/*jslint browser: true*/

exports.canvasElement = document.getElementById("canvas");

exports.context = document.getElementById("canvas").getContext("2d");

exports.getScaleFactor = function() {
	if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            return window.devicePixelRatio;
        }
    }
    return 1;
};

exports.requestAnimationFrame = function(callback){
	var animationFrame = window.requestAnimationFrame ||
					      window.webkitRequestAnimationFrame ||
					      window.mozRequestAnimationFrame;
	animationFrame.call(window, callback);
};
