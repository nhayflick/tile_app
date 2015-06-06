'use strict';

describe('TilesGrid', function () {
  var React = require('react/addons');
  var TilesGrid, component;

  beforeEach(function () {
    TilesGrid = require('components/TilesGrid.js');
    component = React.createElement(TilesGrid);
  });

  it('should create a new instance of TilesGrid', function () {
    expect(component).toBeDefined();
  });
});
