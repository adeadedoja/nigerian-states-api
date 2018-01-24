'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lgaInputType = exports.lgaType = undefined;

var _graphql = require('graphql');

var lgaType = exports.lgaType = new _graphql.GraphQLObjectType({
  name: 'Lga',
  fields: function fields() {
    return {
      _id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
      },
      name: {
        type: _graphql.GraphQLString
      }
    };
  }
});

var lgaInputType = exports.lgaInputType = new _graphql.GraphQLInputObjectType({
  name: 'LgaInput',
  description: 'Create New Lga',
  fields: function fields() {
    return {
      name: {
        type: _graphql.GraphQLString
      },
      stateId: {
        type: _graphql.GraphQLString
      }
    };
  }
});
//# sourceMappingURL=lga.js.map