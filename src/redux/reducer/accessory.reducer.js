import * as types from "../types/accessory.types";

const initialState = {
  accessories: null,
  loading: false,
  error: null,
};

export const accessoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ACCESSORIES_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ACCESSORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        accessories: action.payload,
      };
    case types.GET_ACCESSORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};