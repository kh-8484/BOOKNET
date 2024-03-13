import "../styles/components/button.scss";

interface ButtonProps {
  title: string;
  btn: "primary" | "secondary" | "loading";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  title,
  btn,
  type = "button",
  disabled,
  className,
}) => {
  return (
    <button
      className={`${className} ${btn}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
