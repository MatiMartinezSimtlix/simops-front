import { gql } from "graphql-request";

export const getItems = gql`
  query {
    items(isDeleted: { operator: EQ, value: false }) {
      id
      type
      simtlixCode
      state
      assignedCollaborator {
        id
      }
      requestedDate
      serialNumber
      specification {
        id
        brand
        model
        technicalDetails
      }
      warranty
      purchaseDate
      supplier
    }
  }
`;

export function createItemQuery({ specification, type }) {
  const query = gql`
  mutation {
    additem(input: {
      specification:{
        id: "${specification}"
      }
      type: ${type}
    }){
      id
      type
      state
      specification {
        id
        brand
        model
        technicalDetails
      }
    }
  }
  `;

  return query;
}
