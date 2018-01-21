import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export const lgaType = new GraphQLObjectType({
  name: 'Lga',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
  }),
});


export const lgaInputType = new GraphQLInputObjectType({
  name: 'LgatInput',
  description: 'Create New Lga',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    stateId: {
      type: GraphQLString,
    },
  }),
});
