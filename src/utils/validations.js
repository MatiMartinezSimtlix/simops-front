import * as yup from "yup";

export const specificationSchema = yup.object().shape({
  brand: yup.string().required("Mandatory"),
  model: yup.string().required("Mandatory"),
  technicalDetails: yup.string().max(256, "Very long"),
});
