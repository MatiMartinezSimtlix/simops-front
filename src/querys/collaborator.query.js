import { gql } from "graphql-request";

export const getCollaborators = gql`
  query {
    collaborators {
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
