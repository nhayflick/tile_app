'use strict';

var React = require('react/addons');
var Tile = require('./Tile');

require('styles/TilesRow.less');

var TilesRow = React.createClass({

  render: function () {
    var tiles = this.props.tiles,
      tileComponents = [];

    // Make Rows
    for (var i = 0; i < tiles.length; i++) {
      tileComponents.push(<Tile key={i} column={i} row={this.props.row} tile={tiles[i]} />);
    }

    return (
        <section className="TilesRow">
          {tileComponents}
        </section>
      );
  }

});

module.exports = TilesRow; 

