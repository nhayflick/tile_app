'use strict';

var React = require('react/addons');
var TilesRow = require('./TilesRow');


require('styles/TilesGrid.less');

var TilesGrid = React.createClass({

  render: function () {
    var tileRows = this.props.tiles,
      tilesRowComponents = [];

    // Make Rows
    for (var i = 0; i < tileRows.length; i++) {
      tilesRowComponents.push(<TilesRow key={i} tiles={tileRows[i]} />);
    }

    return (
        <section className="TilesGrid">
          {tilesRowComponents}
        </section>
      );
  }

});

module.exports = TilesGrid; 

