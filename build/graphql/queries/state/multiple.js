'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _state = require('../../types/state');

var _State = require('../../../models/State');

var _State2 = _interopRequireDefault(_State);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: new _graphql.GraphQLList(_state.stateType),
  resolve: function resolve() {
    var states = _State2.default.find().sort({ name: 'asc' }).exec();
    if (!states) {
      throw new Error('Error Fetching States');
    }
    return states;
  }
};
//# sourceMappingURL=multiple.js.map