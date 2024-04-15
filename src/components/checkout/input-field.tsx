"use client";

export const InputField = ({ label }: { label: string }) => {
  return (
    <input
      type="text"
      name={label}
      placeholder={label}
      className="w-[400px] rounded border border-solid border-gray-500 p-2"
    />
  );
};
