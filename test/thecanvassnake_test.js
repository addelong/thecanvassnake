/*global describe,it*/
'use strict';
var assert = require('assert'),
  thecanvassnake = require('../lib/thecanvassnake.js');

describe('thecanvassnake node module.', function() {
  it('must be awesome', function() {
    assert( thecanvassnake .awesome(), 'awesome');
  });
});
