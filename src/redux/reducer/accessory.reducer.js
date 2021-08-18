import * as types from "../types/accessory.types";

const initialState = {
  accessories: null,
  loading: false,
  error: null,
  loadingCreate: false,
  errorCreate: null,
};

export const accessoryReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET
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
    // CREATE
    case types.CREATE_ACCESSORY_START:
      return {
        ...state,
        loadingCreate: true,
        errorCreate: null,
      };
    case types.CREATE_ACCESSORY_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loadingCreate: false,
        accessories: [...state.accessories, action.payload],
      };
    case types.CREATE_ACCESSORY_FAIL:
      return {
        ...state,
        loadingCreate: false,
        errorCreate: action.payload,
      };
    default:
      return state;
  }
};
