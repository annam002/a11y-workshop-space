"use client";

import { InputField } from "@/components/checkout/input-field";

export const InvoiceForm = () => {
  return (
    <div className="w-max-[750px] flex flex-col items-start gap-4">
      <div className="text-3xl">Invoice Data</div>
      <InputField label="Name" />
      <InputField label="Planet" />
      <InputField label="Settlement" />
      <button className="rounded border border-solid border-gray-800 bg-gray-800 px-4 py-2 text-white">
        Pay
      </button>
    </div>
  );
};
