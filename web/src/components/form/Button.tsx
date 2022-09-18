import { IconProps } from "phosphor-react";
import { ButtonHTMLAttributes, forwardRef, LegacyRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stylesButton?: string;
  children: string;
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, stylesButton, icon: Icon, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`py-3 px-4 font-bold text-white rounded  flex items-center gap-3 children-white transition-colors ${stylesButton}`}
        {...rest}
      >
        {!!Icon && <Icon size={24} />}
        {children}
      </button>
    );
  }
);
