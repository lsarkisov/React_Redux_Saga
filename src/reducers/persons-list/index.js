import * as types from "../../const/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_PERSONS_START:
      return {
        ...state,
        personsListFetchint: true,
      };
    case types.FETCH_PERSONS_SUCCESS:
      return {
        ...state,
        personsListFetchint: false,
        persons: JSON.parse(action.payload).data,
      };
    case types.FETCH_PERSONS_ERROR:
      return {
        ...state,
        personsListFetchint: false,
        persons: null,
        error: true,
      };

    default:
      return state;
  }
};
