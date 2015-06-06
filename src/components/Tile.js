'use strict';

var React = require('react/addons');


require('styles/Tile.less');

var Tile = React.createClass({

  render: function () {
    return (
        <div className="Tile">
          {this.props.tile}
        </div>
      );
  }
});

module.exports = Tile; 

