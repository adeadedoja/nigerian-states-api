import {
  GraphQLList,
} from 'graphql';

import { stateType } from '../../types/state';
import StateModel from '../../../models/State';

export default {
  type: new GraphQLList(stateType),
  resolve() {
    const states = StateModel.find().sort({ name: 'asc' }).exec();
    if (!states) {
      throw new Error('Error Fetching States');
    }
    return states;
  },
};
