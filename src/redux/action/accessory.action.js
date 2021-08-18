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
    payload:  accessories,
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
      .then((response) => dispatch(getAccessorySuccess(response.Accessory)))
      .catch((error) => {
        dispatch(getAccessoryFail(error));
      });
  };
};