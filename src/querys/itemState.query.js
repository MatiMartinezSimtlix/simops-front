import { gql } from "graphql-request";

export function customItemQuery({
  mutation,
  id,
  type,
  simtlixCode,
  isPartOfKit,
  comments,
  serialNumber,
  requestedDate,
  purchaseDate,
}) {
  const query = gql`
    mutation {
        ${mutation}(input: {
          id: "${id}"
          ${type ? `type: "${type}"` : ""}
          ${simtlixCode ? `simtlixCode: "${simtlixCode}"` : ""}
          ${isPartOfKit ? `isPartOfKit: "${isPartOfKit}"` : ""}
          ${comments ? `comments: "${comments}"` : ""}
          ${serialNumber ? `serialNumber: "${serialNumber}"` : ""}
          ${requestedDate ? `requestedDate: ${requestedDate}` : ""}
          ${purchaseDate ? `purchaseDate: "${purchaseDate}"` : ""}
        }){
          id
          type
          simtlixCode
          isPartOfKit
          comments
          serialNumber
          requestedDate
          purchaseDate
          assignedCollaborator {
            id
            collaboratorSimOpsId
          }
          specification {
            id
            brand
            model
            technicalDetails
          }
          supplier
          state
        }
      }
    `;

  return query;
}
