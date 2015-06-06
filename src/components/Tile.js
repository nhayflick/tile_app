'use strict';

var React = require('react/addons');
var TilesActions = require('../actions/TilesGridActionCreators');

require('styles/Tile.less');

var Tile = React.createClass({

  _onTileClick: function () {
    TilesActions.toggleTile(this.props.row, this.props.column);
  },

  render: function () {
    return (
        <div onClick={this._onTileClick} style={{'backgroundColor': this.props.tile}} className="Tile"></div>
      );
  }
});

module.exports = Tile; 

