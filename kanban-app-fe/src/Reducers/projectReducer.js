import { GET_PROJECT } from '../Actions/Types';

const initialState = {
  projects: [],
  project: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };

    default:
      return state;
  }
};
