import request from "graphql-request";
import * as types from "../types/collaborator.types";

const getCollaboratorsStart = () => {
  return {
    type: types.GET_COLLABORATORS_START,
  };
};

const getCollaboratorsSuccess = (collaborators) => {
  return {
    type: types.GET_COLLABORATORS_SUCCESS,
    payload: collaborators,
  };
};

const getCollaboratorsFail = (error) => {
  return {
    type: types.GET_COLLABORATORS_FAIL,
    payload: error,
  };
};

export const fetchCollaborators = ({ query }) => {
  return async (dispatch) => {
    dispatch(getCollaboratorsStart());
    await request("http://localhost:3000/inventory/graphql?", query)
      .then((response) => dispatch(getCollaboratorsSuccess(response.collaborators)))
      .catch((error) => {
        dispatch(getCollaboratorsFail(error));
      });
  };
};
