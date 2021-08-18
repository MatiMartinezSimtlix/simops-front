import * as types from "../types/item.types";

const initialState = {
  items: null,
  loading: false,
  error: null,
  loadingChange: false,
  errorChange: null,
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET
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
    // CREATE
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
    // CHANGE
    case types.CHANGE_STATE_START:
      return {
        ...state,
        loadingChange: true,
      };
    case types.CHANGE_STATE_SUCCESS:
      let filterItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        loadingChange: false,
        items: [action.payload, ...filterItems],
      };
    case types.CHANGE_STATE_FAIL:
      return {
        ...state,
        loadingChange: false,
        errorChange: action.payload,
      };
    default:
      return state;
  }
};
