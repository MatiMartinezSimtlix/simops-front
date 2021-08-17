import request from "graphql-request";
import * as types from "../types/specification.types";

const getSpecificationsStart = () => {
  return {
    type: types.GET_SPECIFICATIONS_START,
  };
};

const getSpecificationsSuccess = (specifications) => {
  return {
    type: types.GET_SPECIFICATIONS_SUCCESS,
    payload: specifications,
  };
};

const getSpecificationsFail = (error) => {
  return {
    type: types.GET_SPECIFICATIONS_FAIL,
    payload: error,
  };
};

export const fetchSpecifications = ({ query }) => {
  return async (dispatch) => {
    dispatch(getSpecificationsStart());
    await request("http://localhost:3000/inventory/graphql?", query)
      .then((response) =>
        dispatch(getSpecificationsSuccess(response.specifications))
      )
      .catch((error) => {
        dispatch(getSpecificationsFail(error));
      });
  };
};
