import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface CheckboxProps {
  name: string;
  styles?: string;
}

export const Checkbox = ({ name, styles }: CheckboxProps) => {
  return (
    <div className={`flex items-center gap-3 ${styles}`}>
      <CheckboxPrimitive.Root className="bg-zinc-900 w-6 h-6 rounded-md flex items-center justify-center">
        <CheckboxPrimitive.Indicator>
          <Check color="#34D399" size={20} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span>{name}</span>
    </div>
  );
};
