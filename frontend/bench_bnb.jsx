var ReactDOM = require('react-dom'),
    React = require('react'),
    Index = require('./components/index');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Index />, document.getElementById('content')
  );
});
