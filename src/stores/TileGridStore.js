'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var TilesAppDispatcher = require('../dispatcher/TilesAppDispatcher');
var TileAppConstants = require('../constants/TileAppConstants');
var CHANGE_EVENT = 'change';

var _tiles = [];

// Propogate Tiles
function createGrid() {
  for (var i = 0; i < TileAppConstants.ROW_COUNT; i++) {
    var newRow = [];
    for (var i = 0; i < TileAppConstants.COLUMN_COUNT; i++) {
      newRow.push(false);
    };
    _tiles.push(newRow);
  };
}

// Toggle tile between blank and colored
function toggleTile(row, column) {
  _tiles[row][column] =  _tiles[row][column] ? false : makeRandomColor();
}

// Paul Irish Random HEX snippet:
// http://www.paulirish.com/2009/random-hex-color-code-snippets/
function makeRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

var TileGridStore = assign({}, EventEmitter.prototype, {
  getTiles: function() {
    if (!_tiles.length) {
      createGrid();
    }
    return _tiles;
  }
});

TileGridStore.dispatchToken = TilesAppDispatcher.register(function(action) {

  switch(action.type) {
    case TileAppConstants.TOGGLE_TILE:
      toggleTile(action.row, action.column);
      break;
  }

});

module.exports = TileGridStore; 
