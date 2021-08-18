import { gql } from "graphql-request";

export const getCollaborators = gql`
  query {
    collaborators(isDeleted:{operator:EQ, value:false}) {
      id
      collaboratorSimOpsId
      active
      collaboratorAccessories{
        id
      }
      collaboratorItems{
        id
      }
    }
  }
`;

export const getFullCollaborators = gql`
  query {
    collaborators(isDeleted:{operator:EQ, value:false}) {
      id
      active
      isDeleted
      collaboratorSimOpsId
      collaboratorAccessories {
        id
        accessory {
          id
          quantity
          type
          specification {
            id
            brand
            model
            technicalDetails
          }
        }
      }
      collaboratorItems {
        id
        type
        simtlixCode
        warranty
        isPartOfKit
        comments
        serialNumber
        requestedDate
        purchaseDate
        state
        specification {
          id
          brand
          model
          technicalDetails
        }
        assignedCollaborator {
          id
          collaboratorSimOpsId
        }
        supplier
      }
    }
  }
`