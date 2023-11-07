import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik"; // Step 1
import * as Yup from "yup"; // Import Yup for schema validation
import { CartModal, CtaButton, Textarea } from "../common";
import { PaymentMethod } from "./PaymentMethod";
import { validationSchema } from "../../Validations/OrderValidation";
import { initialValues } from "../../Validations/InitialValues";

export const CheckoutMain = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [modal,setModal] = useState(false)

  const checkPayment = (isCash) => {
    if (isCash === "cash") {
      setPaymentMethod("cash");
    } else {
      setPaymentMethod("card");
    }
  };
  const validationSchema = Yup.object().shape({
    buyerName: Yup.string().required("Name is required"),
    number: Yup.number().required("Number is required"),
    address: Yup.string().required("Address is required"),
    cardNumber: paymentMethod === "card" ? Yup.number().required("Card Number is required") : Yup.number(),
    cvc: paymentMethod === "card" ? Yup.number().required("CVC is required") : Yup.number(),
  });
  const submitForm = (values) => {
    // console.log('submitForm called');
    setModal(true)
    setTimeout(()=>{
      setModal(false)
    },3000)
    // console.log(values);
    console.log('order finished')
  };

  return (
    <div className="w-96">
      {modal&& <CartModal href='/' text='Successful order!' btnText='Go back to Home page'/>}
      <h2 className="text-2xl font-bold text-blackTxt mb-4">Your Info</h2>
      <PaymentMethod checkPayment={checkPayment} />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        <Form>
          <Field
            className="field"
            type="text"
            name="buyerName"
            placeholder="Name"
          />
          <ErrorMessage className="error" name="buyerName" component="div" />

          <Field
            className="field"
            type="text"
            name="number"
            placeholder="Your Number"
          />
          <ErrorMessage className="error" name="number" component="div" />

          {paymentMethod === "cash" && (
            <>
              <Field
                className="field"
                type="text"
                name="address"
                placeholder="Address"
              />
              <ErrorMessage className="error" name="address" component="div" />
            </>
          )}

          {paymentMethod === "card" && (
            <>
              <Field
                className="field"
                type="text"
                name="cardNumber"
                placeholder="Card Number"
              />
             <ErrorMessage className="error" name="cardNumber" component="div" />

              <Field
                className="field"
                type="text"
                name="cvc"
                placeholder="CVC"
              />
                <ErrorMessage className="error" name="cvc" component="div" />
            </>
          )}


          <Field
            className="field"
            component="textarea"
            name="textarea"
            placeholder="Your Message (optional)"
          />
          <CtaButton type="submit" text="Finish Order" />
        </Form>
      </Formik>
    </div>
  );
};
