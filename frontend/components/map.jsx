/* globals google */

var React = require('react'),
    ClientActions = require('../actions/client_actions'),
    BenchStore = require('../stores/bench');

var MapComp = React.createClass({
  componentDidMount: function() {
    this.removeToken = BenchStore.addListener(this._onChange);

    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 10
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', function() {
      var bounds = {
        northEast: {
          lat: this.map.getBounds().getNorthEast().lat(),
          lng: this.map.getBounds().getNorthEast().lng()
        },
        southWest: {
          lat: this.map.getBounds().getSouthWest().lat(),
          lng: this.map.getBounds().getSouthWest().lng()
        }
      };

      ClientActions.fetchBenches(bounds);
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.removeToken.remove();
  },

  _onChange: function () {
    Object.keys(BenchStore.all()).forEach(function (id) {
      new google.maps.Marker({
        position: {
          lat: BenchStore.all()[id].lat,
          lng: BenchStore.all()[id].lng
        },
        map: this.map,
        title: BenchStore.all()[id].description
      });
    }.bind(this));
  },

  render: function() {
    return (
      <div className="map" ref="map" />
    );
  }
});

module.exports = MapComp;
