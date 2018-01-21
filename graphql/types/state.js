import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import LgaModel from '../../models/Lga';
import { lgaType } from './lga';

export const stateType = new GraphQLObjectType({
  name: 'State',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    geoPoliticalZone: {
      type: GraphQLString,
    },
    lgas: {
      type: new GraphQLList(lgaType),
      resolve(state) {
        const { _id } = state;
        return LgaModel.find({ stateId: _id }).exec();
      },
    },
  }),
});


export const postInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  description: 'Create New Post',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    geoPoliticalZone: {
      type: GraphQLString,
    },
  }),
});
