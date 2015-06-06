'use strict';

describe('TilesRow', function () {
  var React = require('react/addons');
  var TilesRow, component;

  beforeEach(function () {
    TilesRow = require('components/TilesRow.js');
    component = React.createElement(TilesRow);
  });

  it('should create a new instance of TilesRow', function () {
    expect(component).toBeDefined();
  });
});
