import * as types from "../types/item.types";

const initialState = {
  items: null,
  loading: false,
  error: null,
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEMS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case types.GET_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.CREATE_ITEM_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.CREATE_ITEM_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };
    case types.CREATE_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
