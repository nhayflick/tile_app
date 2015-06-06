'use strict';

var TilesAppConstants = require('../constants/TilesAppConstants');
var TilesAppDispatcher = require('../dispatcher/TilesAppDispatcher');

var TilesGridActionCreators = {

  toggleTile: function(row, column) {
    TilesAppDispatcher.dispatch({
      actionType: TilesAppConstants.TOGGLE_TILE,
      row: row,
      column: column
    });
  },

  resetTiles: function() {
    TilesAppDispatcher.dispatch({
      actionType: TilesAppConstants.RESET_TILES
    });
  },

};

module.exports = TilesGridActionCreators; 
