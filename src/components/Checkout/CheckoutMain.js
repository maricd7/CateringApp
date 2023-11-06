import React, { useState } from "react";
import { CtaButton, Input, InvalidInput, Textarea } from "../common";
import { PaymentMethod } from "./PaymentMethod";
import { orderSchema } from "../../Validations/OrderValidation";
export const CheckoutMain = () => {
  const [cash, setCash] = useState(true);
  const [card, setCard] = useState(false);

  const checkPayment = (cash, card) => {
    if (cash) {
      setCash(true);
      setCard(false);
    } else {
      setCard(true);
      setCash(false);
    }
  };

  const createUserCard = async (e) => {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      number: e.target[1].value,
      cardNumber: e.target[2].value,
      cvc: e.target[3].value,
      address: e.target[4].value,
    };
    console.log(formData);
    const isValid = await orderSchema.isValid(formData);
    console.log(isValid);
  };
  const createUserCash = async (e) => {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      number: e.target[1].value,
      address: e.target[2].value,
    };
    console.log(formData);
    const isValid = await orderSchema.pick(['name', 'number', 'address']).isValid(formData);
  };


  return (
    <div className="w-96">
      <h2 className="text-2xl font-bold text-blackTxt mb-4">Your Info</h2>
      <PaymentMethod checkPayment={checkPayment} />
      {card && (
        <form onSubmit={createUserCard}>
          <Input text="Name" />
          <Input text="Your Number" />

          <div className="flex gap-4">
            <Input text="Card Number" /> <Input text="CVC" />
          </div>

          <Input text="Address" />
          <Textarea text="Your Message (optional)" />
          <CtaButton type="submit" text="Finish Order" />
        </form>
      )}
      {cash && (
        <form onSubmit={createUserCash}>
        <Input text="Name" />
        <Input text="Your Number" />
        <Input text="Address" />
        <Textarea text="Your Message (optional)" />
        <CtaButton type="submit" text="Finish Order" />
      </form>
      )}
    </div>
  );
};
