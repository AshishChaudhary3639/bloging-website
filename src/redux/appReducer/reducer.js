import * as types from "./actionsType";
const init = {
  posts: [],
  loading: false,
  error: false,
};
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.POST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: payload,
      };

    case types.POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export { reducer };
