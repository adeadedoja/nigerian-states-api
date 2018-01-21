import stateMutation from './state';
import lgaMutation from './lga';

export default {
  ...lgaMutation,
  ...stateMutation,
};

