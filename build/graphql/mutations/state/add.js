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
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_state.stateInputType)
    }
  },
  resolve: function resolve(root, params) {
    var state = new _State2.default(params.data);
    var newState = state.save();
    if (!newState) {
      throw new Error('Error Adding New State');
    }
    return newState;
  }
};
//# sourceMappingURL=add.js.map