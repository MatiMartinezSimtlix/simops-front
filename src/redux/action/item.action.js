import request from "graphql-request";
import * as types from "../types/item.types";

const getItemsStart = () => {
  return {
    type: types.GET_ITEMS_START,
  };
};

const getItemsSuccess = (items) => {
  return {
    type: types.GET_ITEMS_SUCCESS,
    payload: items,
  };
};

const getItemsFail = (error) => {
  return {
    type: types.GET_ITEMS_FAIL,
    payload: error,
  };
};

export const fetchItems = ({ query }) => {
  return async (dispatch) => {
    dispatch(getItemsStart());
    await request("http://localhost:3000/inventory/graphql?", query)
      .then((response) => dispatch(getItemsSuccess(response.items)))
      .catch((error) => {
        dispatch(getItemsFail(error));
      });
  };
};
