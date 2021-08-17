import * as types from "../types/collaborator.types";

const initialState = {
  collaborators: null,
  loading: false,
  error: null,
};

export const collaboratorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COLLABORATORS_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_COLLABORATORS_SUCCESS:
      return {
        ...state,
        loading: false,
        collaborators: action.payload,
      };
    case types.GET_COLLABORATORS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
