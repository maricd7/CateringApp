import * as yup from "yup";

const orderSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required,
  cardNumber: yup.string().label("Card number").max(16).required(),
  cvc: yup.string().label("CVC").min(3).max(4).required(),
  address: yup.string().required(),
});
