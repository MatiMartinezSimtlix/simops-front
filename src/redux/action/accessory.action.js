import request from "graphql-request";
import * as types from "../types/accessory.types";

const getAccessoryStart = () => {
  return {
    type: types.GET_ACCESSORIES_START,
  };
};

const getAccessorySuccess = (accessories) => {
  return {
    type: types.GET_ACCESSORIES_SUCCESS,
    payload: accessories,
  };
};

const getAccessoryFail = (error) => {
  return {
    type: types.GET_ACCESSORIES_FAIL,
    payload: error,
  };
};

export const fetchAccessory = ({ query }) => {
  return async (dispatch) => {
    dispatch(getAccessoryStart());
    await request("http://localhost:3000/inventory/graphql?", query)
      .then((response) => {
        dispatch(getAccessorySuccess(response.accessories));
      })
      .catch((error) => {
        dispatch(getAccessoryFail(error));
      });
  };
};

const createAccessoryStart = () => {
  return {
    type: types.CREATE_ACCESSORY_START,
  };
};

const createAccessorySuccess = (accessory) => {
  return {
    type: types.CREATE_ACCESSORY_SUCCESS,
    payload: accessory,
  };
};

const createAccessoryFail = (error) => {
  return {
    type: types.CREATE_ACCESSORY_FAIL,
    payload: error,
  };
};

export const createAccessory = ({ query }) => {
  return async (dispatch) => {
    dispatch(createAccessoryStart());
    await request("http://localhost:3000/inventory/graphql?", query)
      .then((response) =>
        dispatch(createAccessorySuccess(response.addaccessory))
      )
      .catch((error) => {
        dispatch(createAccessoryFail(error));
      });
  };
};
