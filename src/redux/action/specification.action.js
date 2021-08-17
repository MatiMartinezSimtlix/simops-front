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

const createSpecificationStart = () => {
  return {
    type: types.CREATE_SPECIFICATION_START,
  };
};

const createSpecificationSuccess = (specification) => {
  return {
    type: types.CREATE_SPECIFICATION_SUCCESS,
    payload: specification,
  };
};

const createSpecificationFail = (error) => {
  return {
    type: types.CREATE_SPECIFICATION_FAIL,
    payload: error,
  };
};

export const createSpecification = ({ query }) => {
  return async (dispatch) => {
    dispatch(createSpecificationStart());
    await request("http://localhost:3000/inventory/graphql?", query)
      .then((response) => {
        dispatch(createSpecificationSuccess(response.addspecification));
      })
      .catch((error) => {
        dispatch(createSpecificationFail(error));
      });
  };
};
