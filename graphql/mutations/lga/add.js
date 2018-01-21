import {
  GraphQLNonNull,
} from 'graphql';

import { lgaType, lgaInputType } from '../../types/lga';
import LgaModel from '../../../models/Lga';

export default {
  type: lgaType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(lgaInputType),
    },
  },
  resolve(root, params) {
    const lga = new LgaModel(params.data);
    const newLga = lga.save();
    if (!newLga) {
      throw new Error('Error Adding New Lga');
    }
    return newLga;
  },
};
