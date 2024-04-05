"use client";

export const InputField = ({ label }: { label: string }) => {
  return (
    <input
      type="text"
      name={label}
      placeholder={label}
      className="w-48 rounded border border-solid border-gray-500 p-2 sm:w-60"
    />
  );
};
