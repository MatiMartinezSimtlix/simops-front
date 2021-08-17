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

const createItemStart = () => {
  return {
    type: types.CREATE_ITEM_START,
  };
};

const createItemSuccess = (item) => {
  return {
    type: types.CREATE_ITEM_SUCCESS,
    payload: item,
  };
};

const createItemFail = (error) => {
  return {
    type: types.CREATE_ITEM_FAIL,
    payload: error,
  };
};

export const createItem = ({ query }) => {
  return async (dispatch) => {
    dispatch(createItemStart());
    await request("http://localhost:3000/inventory/graphql?", query)
      .then((response) => dispatch(createItemSuccess(response.additem)))
      .catch((error) => {
        dispatch(createItemFail(error));
      });
  };
};
