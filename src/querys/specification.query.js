import { gql } from "graphql-request";

export const getSpecification = gql`
  query {
    specifications(isDeleted: { operator: EQ, value: false }) {
      id
      brand
      model
      technicalDetails
    }
  }
`;
