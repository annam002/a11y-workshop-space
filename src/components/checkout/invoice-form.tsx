"use client";

import { InputField } from "@/components/checkout/input-field";
import { FormEvent, useState } from "react";

export const InvoiceForm = () => {
  const [paymentMessage, setPaymentMessage] = useState("");
  const [paymentResultClass, setPaymentResultClass] = useState("");

  const submitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.currentTarget.Name.value;
    const planet = e.currentTarget.Planet.value;
    const settlement = e.currentTarget.Settlement.value;
    if (!name || !planet || !settlement) {
      setPaymentMessage("Error occurred!");
      setPaymentResultClass("text-red-500");
    } else {
      setPaymentMessage("Payment complete!");
      setPaymentResultClass("text-green-500");
    }
    return false;
  };
  return (
    <div className="w-max-[750px] flex flex-col items-start gap-4 rounded bg-gray-100 p-6 ">
      <div className="text-2xl">Invoice Data</div>
      <form onSubmit={submitData} className="flex flex-col gap-4">
        <InputField label="Name" />
        <InputField label="Planet" />
        <InputField label="Settlement" />
        <button
          type="submit"
          className="rounded border border-solid border-gray-800 bg-gray-800 px-4 py-2 text-white"
        >
          Pay
        </button>
        {paymentMessage && (
          <div className={paymentResultClass}>{paymentMessage}</div>
        )}
      </form>
    </div>
  );
};
