"use client";

export const InputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <label className="flex flex-col">
      {label}
      <input
        type="text"
        name={label}
        placeholder={placeholder}
        className="mt-1 w-48 rounded border border-solid border-gray-500 p-2 sm:w-60"
      />
    </label>
  );
};
