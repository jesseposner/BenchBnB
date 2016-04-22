var React = require('react'),
    ClientActions = require('../actions/client_actions'),
    BenchStore = require('../stores/bench');

var Index = React.createClass({
  getInitialState: function() {
    return {
      benches: "loading ..."
    };
  },

  componentDidMount: function () {
    this.removeToken = BenchStore.addListener(this._onChange);
    ClientActions.fetchBenches();
  },

  componentWillUnmount: function () {
    this.removeToken.remove();
  },

  _onChange: function () {
    this.setState({
      benches: BenchStore.all()
    });
  },

  render: function () {
    return (
      <div>
      </div>
    );
  }

});

module.exports = Index;
