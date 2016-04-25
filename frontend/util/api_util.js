var ServerActions = require('../actions/server_actions');

var ApiUtil = {
  fetchBenches: function (bounds){
    $.ajax ({
      url: "/api/benches",
      data: { bounds: bounds },
      success: function (benches) {
        ServerActions.receiveAll(benches);
      }
    });
  }
};

module.exports = ApiUtil;
