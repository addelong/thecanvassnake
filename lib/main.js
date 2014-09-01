/*jslint browser: true*/

"use strict";

function backingScale() {
    if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            return window.devicePixelRatio;
        }
    }
    return 1;
}

var canvas = require('./canvas');
var canvasElement = document.getElementById("canvas");
var context = canvasElement.getContext("2d");
var scaleFactor = backingScale();

canvas.scale(canvasElement, context, scaleFactor);
canvas.fill(canvasElement, context);