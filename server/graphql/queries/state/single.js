import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import { stateType } from '../../types/state';
import StateModel from '../../../models/State';

export default {
  type: stateType,
  args: {
    stateName: {
      name: 'stateName',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, params) {
    return StateModel.findOne({ name: params.stateName }).exec();
  },
};
