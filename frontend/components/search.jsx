var React = require('react'),
    MapComp = require('./map'),
    Index = require('./index');

var Search = React.createClass({

  render: function() {
    return (
      <div>
        <MapComp />
        <Index />
      </div>
    );
  }

});

module.exports = Search;
