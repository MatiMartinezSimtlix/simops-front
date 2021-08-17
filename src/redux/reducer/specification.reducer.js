import * as types from "../types/specification.types";

const initialState = {
  specifications: null,
  loading: false,
  error: null,
};

export const specificationReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET
    case types.GET_SPECIFICATIONS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_SPECIFICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        specifications: action.payload,
      };
    case types.GET_SPECIFICATIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // CREATE
    case types.CREATE_SPECIFICATION_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.CREATE_SPECIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        specifications: [...state.specifications, action.payload],
      };
    case types.CREATE_SPECIFICATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
