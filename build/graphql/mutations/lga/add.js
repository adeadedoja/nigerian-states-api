'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _lga = require('../../types/lga');

var _Lga = require('../../../models/Lga');

var _Lga2 = _interopRequireDefault(_Lga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _lga.lgaType,
  args: {
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_lga.lgaInputType)
    }
  },
  resolve: function resolve(root, params) {
    var lga = new _Lga2.default(params.data);
    var newLga = lga.save();
    if (!newLga) {
      throw new Error('Error Adding New Lga');
    }
    return newLga;
  }
};
//# sourceMappingURL=add.js.map