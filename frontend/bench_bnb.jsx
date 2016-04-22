var ReactDOM = require('react-dom'),
    React = require('react'),
    MapComp = require('./components/map');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <MapComp />, document.getElementById('content')
  );
});
