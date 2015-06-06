'use strict';

describe('Tile', function () {
  var React = require('react/addons');
  var Tile, component;

  beforeEach(function () {
    Tile = require('components/Tile.js');
    component = React.createElement(Tile);
  });

  it('should create a new instance of Tile', function () {
    expect(component).toBeDefined();
  });
});
