import { gql } from "graphql-request";

export const getAccessories = gql`
  query {
    accessories(isDeleted: {operator: EQ, value: false}) {
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

export function createAccesoryQuery({ specification, type, quantity }) {
  const query = gql`
  mutation {
    addaccessory(
      input: {
        type: ${type},
        quantity: ${quantity},
        specification: {
          id: "${specification}"
        },
      }
    )
    {
      type,
      quantity,
      specification{
        id,
        brand,
        model
      }
    }
  }
  `;

  return query;
}
