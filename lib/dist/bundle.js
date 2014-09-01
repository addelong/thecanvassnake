(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*jslint browser: true*/

function backingScale() {
    if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            return window.devicePixelRatio;
        }
    }
    return 1;
}

exports.initialize = function() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var scaleFactor = backingScale();

	if (scaleFactor > 1) {
		var oldWidth = canvas.width;
		var oldHeight = canvas.height;
	    canvas.width = canvas.width * scaleFactor;
	    canvas.height = canvas.height * scaleFactor;
	    canvas.style.width = oldWidth + 'px';
	    canvas.style.height = oldHeight + 'px';
	    context.scale(scaleFactor, scaleFactor);
	}
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);
};
},{}],2:[function(require,module,exports){
"use strict";

var canvas = require('./canvas');
canvas.initialize();

console.log("ASDLJKADSFLKFASDLKJAFS");
},{"./canvas":1}]},{},[2]);
