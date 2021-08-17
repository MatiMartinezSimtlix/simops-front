import { gql } from "graphql-request";

export const getSpecificationQuery = gql`
  query {
    specifications(isDeleted: { operator: EQ, value: false }) {
      id
      brand
      model
      technicalDetails
    }
  }
`;

export function createSpecificationQuery({ brand, model, technicalDetails }) {
  const query = gql`
      mutation {
        addspecification(
          input: { brand: "${brand}", model: "${model}", technicalDetails: "${technicalDetails}" }
        ) {
          id
          brand
          model
          technicalDetails
        }
      }
  `;

  return query;
}
