import { InputHTMLAttributes } from 'react';

interface FormInputProps {
  name: string;
  errors?: string[];
}

export default function Input({
  name,
  errors = [],
  ...rest
}: FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
  console.log(rest);
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="border-1 bg-transparent rounded-md w-full h-10 
          focus:outline-none ring-1 focus:ring-4 transition ring-neutral-200
           focus:ring-orange-500  placeholder:text-neutral-400"
        {...rest}
      />
      <span>
        {errors.map((error, index) => (
          <span key={index} className="text-red-500 font-medium">
            {error}
          </span>
        ))}
      </span>
    </div>
  );
}
