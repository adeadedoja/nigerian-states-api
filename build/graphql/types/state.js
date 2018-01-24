'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stateInputType = exports.stateType = undefined;

var _graphql = require('graphql');

var _Lga = require('../../models/Lga');

var _Lga2 = _interopRequireDefault(_Lga);

var _lga = require('./lga');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateType = exports.stateType = new _graphql.GraphQLObjectType({
  name: 'State',
  fields: function fields() {
    return {
      _id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
      },
      name: {
        type: _graphql.GraphQLString
      },
      geoPoliticalZone: {
        type: _graphql.GraphQLString
      },
      lgas: {
        type: new _graphql.GraphQLList(_lga.lgaType),
        resolve: function resolve(state) {
          var _id = state._id;

          return _Lga2.default.find({ stateId: _id }).sort({ name: 'asc' }).exec();
        }
      }
    };
  }
});

var stateInputType = exports.stateInputType = new _graphql.GraphQLInputObjectType({
  name: 'StateInput',
  description: 'Create New State',
  fields: function fields() {
    return {
      name: {
        type: _graphql.GraphQLString
      },
      geoPoliticalZone: {
        type: _graphql.GraphQLString
      }
    };
  }
});
//# sourceMappingURL=state.js.map