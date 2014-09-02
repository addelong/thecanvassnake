(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.scale = function(dom){
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

exports.fill = function(dom){
	dom.context.fillStyle = "black";
	dom.context.fillRect(0, 0, dom.canvasElement.width, dom.canvasElement.height);
};
},{}],2:[function(require,module,exports){
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

exports.requestAnimationFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame;

},{}],3:[function(require,module,exports){
"use strict";

var dom = require('./dom');
var canvas = require('./canvas');

canvas.scale(dom);
canvas.fill(dom);
},{"./canvas":1,"./dom":2}]},{},[3]);
