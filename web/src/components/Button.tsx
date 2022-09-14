import { IconProps } from "phosphor-react";

interface ButtonProps {
  children: string;
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const Button = ({ children, icon: Icon }: ButtonProps) => {
  return (
    <button className="py-3 px-4 font-medium text-white rounded flex items-center gap-3 bg-violet-500 children-white hover:bg-violet-600 transition-colors ">
      {!!Icon && <Icon size={24} />}
      {children}
    </button>
  );
};
