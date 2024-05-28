import { SVGProps } from "react";
import cn from "classnames";

export type ButtonProps = {
  // Defines the component id -kebab casing
  id: string;
  // Defines button type (button, submit, reset)
  type?: "button" | "submit" | "reset";
  // Defines button text
  children: React.ReactNode;
  // Function to be executed on button click
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  // Indicates if the button is disabled
  disabled?: boolean;
  // Indicates button theme (primary, secondary, tertiary)
  theme: "primary" | "secondary";
  // Defines button icon
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  // Indicates if it's loading
  loading?: boolean;
  // Defines message to displayed when loading
  loadingMsg?: string;
};

const Button = ({
  id,
  type,
  children,
  onClick,
  disabled,
  theme,
  icon: IconComponent,
  loading,
  loadingMsg,
}: ButtonProps): JSX.Element => {
  const themeClasses = {
    primary: cn(
      "bg-secondary text-white hover:bg-tertiary disabled:text-white",
      {
        "disabled:bg-regular-grey": disabled,
        "disabled:bg-primary": loading,
      }
    ),

    secondary: `
      text-secondary
      bg-[#F7F1FD]
      disabled:bg-white disabled:border-regular-grey disabled:text-regular-grey
    `,
  }[theme];

  return (
    <button
      id={`button-${id}`}
      data-testid={`button-${id}`}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        themeClasses,
        `
          box-border 
          h-[36px]
          rounded-md 
          text-body-s font-medium 
          flex items-center justify-center 
          disabled:cursor-not-allowed
          transition duration-100
          w-full
        `,
        { "disabled:opacity-40": disabled }
      )}
    >
      {loading ? (
        <div className="flex justify-center items-center space-x-4">
          <div className="animate-pulse">{loadingMsg}</div>
          <div className="animate-spin w-4 h-4 border-2 border-r-[transparent] rounded-full" />
        </div>
      ) : (
        children
      )}

      {IconComponent && <IconComponent className="w-4 h-4 ml-4" />}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  theme: "primary",
};

export default Button;
