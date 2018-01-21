import {
  GraphQLNonNull,
} from 'graphql';

import { stateType, stateInputType } from '../../types/state';
import StateModel from '../../../models/State';

export default {
  type: stateType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(stateInputType),
    },
  },
  resolve(root, params) {
    const state = new StateModel(params.data);
    const newState = state.save();
    if (!newState) {
      throw new Error('Error Adding New State');
    }
    return newState;
  },
};
