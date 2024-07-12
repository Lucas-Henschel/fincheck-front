import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...props}
        name={name}
        id={inputId}
        className="bg-white rounded-lg w-full border border-gray-500 px-3 h-[52px] text-gray-800"
      />

      <label
        htmlFor={inputId}
        className="absolute left-[13px] top-3.5 pointer-events-none text-gray-700"
      >
        { placeholder }
      </label>
    </div>
  )
}
