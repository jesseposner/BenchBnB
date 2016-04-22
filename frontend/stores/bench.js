var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants');

var BenchStore = new Store(AppDispatcher);
var _benches = {};

BenchStore.all = function () {
  return Object.assign({}, _benches);
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      _benches = payload.benches;
      BenchStore.__emitChange();
      break;
  }
};

module.exports = BenchStore;
