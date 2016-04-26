var React = require('react');

var BenchForm = React.createClass({

  render: function() {
    return (
      <div>
        <form>
          <label>
            Description
            <input type="text" name="description" value="" />
          </label>
          <label>
            Number of seats
            <input type="text" name="seats" value="" />
          </label>
          <label>
            Latitude
            <input type="text" name="lat" value="" />
          </label>
          <label>
            Longitude
            <input type="text" name="lng" value="" />
          </label>
        </form>
      </div>
    );
  }

});

module.exports = BenchForm;
