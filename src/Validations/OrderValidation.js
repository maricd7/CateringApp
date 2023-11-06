import * as Yup from "yup";

export const orderSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  number: Yup.number().required("Number is required"),
  cardNumber: Yup.string()
    .label("Card number")
    .max(16, "Card number must be exactly 16 characters")
    .required("Card number is required"),
  cvc: Yup.string()
    .label("CVC")
    .min(3, "CVC must be at least 3 characters")
    .max(4, "CVC must be at most 4 characters")
    .required("CVC is required"),
  address: Yup.string().required("Address is required"),
});