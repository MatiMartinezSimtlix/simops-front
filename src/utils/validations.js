import * as yup from "yup";

export const specificationSchema = yup.object().shape({
  brand: yup.string().required("Mandatory"),
  model: yup.string().required("Mandatory"),
  technicalDetails: yup.string().max(256, "Very long"),
});

export const toAvailableSchema = yup.object().shape({
  purchaseDate: yup.string().required("Mandatory"),
  simtlixCode: yup.string().required("Mandatory"),
  serialNumber: yup.string().required("Mandatory"),
});

export const toBrokenSchema = yup.object().shape({
  comments: yup.string().max(256, "To many characters").required("Mandatory"),
});

export const toAssignedSchema = yup.object().shape({
  assignedCollaboratorId: yup.object().required("Mandatory"),
  requestedDate: yup.string().required("Mandatory"),
});
