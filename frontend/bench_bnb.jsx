var ReactDOM = require('react-dom'),
    React = require('react'),
    Search = require('./components/search');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Search />, document.getElementById('content')
  );
});
