var ApiUtil = {
  fetchBenches: function(){
    $.ajax ({
      url: "/api/benches",
      success: function (result) {
        console.log(result);
      }
    });
  }
};

module.exports = ApiUtil;
