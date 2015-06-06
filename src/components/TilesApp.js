'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var TilesGridStore = require('../stores/TilesGridStore');
var TilesActions = require('../actions/TilesGridActionCreators');
var TilesGrid = require('./TilesGrid');


// CSS
require('normalize.css');
require('../styles/main.css');

var TilesApp = React.createClass({

  getInitialState: function() {
    return this.getTilesState();
  },

  componentDidMount: function() {
    TilesGridStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    TilesGridStore.removeChangeListener(this.onChange);
  },

  getTilesState: function() {
    return {
      tiles: TilesGridStore.getTiles()
    };
  },

  onChange: function() {
    this.setState(this.getTilesState());
  },

  render: function() {
    return (
      <div className='main'>
        <h1>Tiles App</h1>
        <TilesGrid tiles={this.state.tiles}/>
        <button onClick={this._onResetTiles}>Reset Tiles</button>
      </div>
    );
  },

  _onResetTiles: function () {
    TilesActions.resetTiles();
  }

});

module.exports = TilesApp;
