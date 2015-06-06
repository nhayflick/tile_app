'use strict';

describe('TilesApp', function () {
  var React = require('react/addons');
  var TilesApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TilesApp = require('components/TilesApp.js');
    component = React.createElement(TilesApp);
  });

  it('should create a new instance of TilesApp', function () {
    expect(component).toBeDefined();
  });
});
