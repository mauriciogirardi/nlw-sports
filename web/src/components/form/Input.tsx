import { InputHTMLAttributes, useRef, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
}

export const Input = ({ label, htmlFor, ...rest }: InputProps) => {
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputBlur = () => {
    setIsFilled(!!inputRef.current?.value);
  };

  const addStylesIsFilled = isFilled ? " border-violet-400 border-2" : "";

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={htmlFor} className="font-semibold">
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        onBlur={handleInputBlur}
        className={`h-12 rounded-lg px-3 bg-zinc-900 w-full placeholder:text-zinc-500 ${addStylesIsFilled}`}
        {...rest}
      />
    </div>
  );
};
