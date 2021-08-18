import { gql } from "graphql-request";

export const getAccessories = gql`
  query {
    accessories(isDeleted: { operator: EQ, value: false }) {
      id
      quantity
      type
      specification {
        brand
        model
        technicalDetails
      }
      collaborators {
        id
        collaborator {
          id
          active
          collaboratorSimOpsId
        }
      }
    }
  }
`;

export function createAccessoryQuery({ quantity, type, specification }) {
  const query = gql`
  mutation {
    addaccessory(
      input: {
        quantity: ${quantity}
        type: ${type}
        ${
          specification
            ? `specification: {
          id: "${specification}
        }`
            : ""
        }
      }
    )
    {
      id
      type
      quantity
      specification{
        id
        brand
        model
        technicalDetails
      }
      collaborators {
        id
        collaborator {
          id
          active
          collaboratorSimOpsId
        }
      }
    }
  }
  `;

  return query;
}
