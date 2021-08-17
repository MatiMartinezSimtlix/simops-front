import { gql } from "graphql-request";

export const getItems = gql`
  query {
    items {
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
