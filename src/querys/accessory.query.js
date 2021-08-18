import { gql } from "graphql-request";

export const getAccessories = gql`
  query {
    accessory {
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