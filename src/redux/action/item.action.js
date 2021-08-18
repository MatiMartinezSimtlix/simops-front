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
      .then((response) => {
        dispatch(getItemsSuccess(response.items));
      })
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

const changeStateStart = () => {
  return {
    type: types.CHANGE_STATE_START,
  };
};

const changeStateSuccess = (item) => {
  return {
    type: types.CHANGE_STATE_SUCCESS,
    payload: item,
  };
};

const changeStateFail = (error) => {
  return {
    type: types.CHANGE_STATE_FAIL,
    payload: error,
  };
};

export const changeState = ({ query }) => {
  console.log(query);
  return async (dispatch) => {
    dispatch(changeStateStart());
    await request("http://localhost:3000/inventory/graphql?", query)
      .then((response) => {
        console.log("respuesta", response);
        if (response.COMING_to_AVAILABLE_item) {
          dispatch(changeStateSuccess(response.COMING_to_AVAILABLE_item));
        }
        if (response.AVAILABLE_to_NOT_ASSIGNABLE_item) {
          dispatch(
            changeStateSuccess(response.AVAILABLE_to_NOT_ASSIGNABLE_item)
          );
        }
        if (response.AVAILABLE_to_BROKEN_item) {
          dispatch(changeStateSuccess(response.AVAILABLE_to_BROKEN_item));
        }
        if (response.AVAILABLE_to_BOOKED_item) {
          dispatch(changeStateSuccess(response.AVAILABLE_to_BOOKED_item));
        }
        if (response.AVAILABLE_to_ASSIGNED_item) {
          dispatch(changeStateSuccess(response.AVAILABLE_to_ASSIGNED_item));
        }
        if (response.BOOKED_to_ASSIGNED_item) {
          dispatch(changeStateSuccess(response.BOOKED_to_ASSIGNED_item));
        }
        if (response.ASSIGNED_to_AVAILABLE_item) {
          dispatch(changeStateSuccess(response.ASSIGNED_to_AVAILABLE_item));
        }
        if (response.ASSIGNED_to_BROKEN_item) {
          dispatch(changeStateSuccess(response.ASSIGNED_to_BROKEN_item));
        }
        if (response.BROKEN_to_AVAILABLE_item) {
          dispatch(changeStateSuccess(response.BROKEN_to_AVAILABLE_item));
        }
        if (response.BROKEN_to_NOT_ASSIGNABLE_item) {
          dispatch(changeStateSuccess(response.BROKEN_to_NOT_ASSIGNABLE_item));
        }
      })
      .catch((error) => {
        dispatch(changeStateFail(error));
      });
  };
};
