'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var TilesAppDispatcher = require('../dispatcher/TilesAppDispatcher');
var TilesAppConstants = require('../constants/TilesAppConstants');
var CHANGE_EVENT = 'change';

var _tiles = [];

// Propogate Tiles
function createGrid() {
  for (var i = 0; i < TilesAppConstants.ROW_COUNT; i++) {
    var newRow = [];
    for (var j = 0; j < TilesAppConstants.COLUMN_COUNT; j++) {
      newRow.push(false);
    }
    _tiles.push(newRow);
  }
}

createGrid();

// Paul Irish Random HEX snippet:
// http://www.paulirish.com/2009/random-hex-color-code-snippets/
function makeRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

// Toggle tile between blank and colored
function toggleTile(row, column) {
  _tiles[row][column] =  _tiles[row][column] ? false : makeRandomColor();
}


var TilesGridStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getTiles: function() {
    if (!_tiles.length) {
      createGrid();
    }
    return _tiles;
  }

});

TilesGridStore.dispatchToken = TilesAppDispatcher.register(function(action) {


  switch(action.actionType) {
    case TilesAppConstants.TOGGLE_TILE:
      toggleTile(action.row, action.column);
      TilesGridStore.emitChange();
      break;
  }

});

module.exports = TilesGridStore; 
