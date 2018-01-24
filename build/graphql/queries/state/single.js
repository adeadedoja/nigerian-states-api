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
  type: _state.stateType,
  args: {
    stateName: {
      name: 'stateName',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },
  resolve: function resolve(root, params) {
    return _State2.default.findOne({ name: params.stateName }).exec();
  }
};
//# sourceMappingURL=single.js.map