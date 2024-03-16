import Button from "./Button/Button";

const AuthType = ({
  handleAuthType,
  type,
  className,
}: {
  handleAuthType: (type: string) => void;
  type: string;
  className: string;
}) => {
  return (
    <div className={`container ${className}`}>
      <Button
        title="Admin"
        btn={type == "ADMIN" ? "primary" : "secondary"}
        onClick={() => handleAuthType("ADMIN")}
        className="m-r-2"
      />
      <Button
        title="Player"
        btn={type == "PLAYER" ? "primary" : "secondary"}
        onClick={() => handleAuthType("PLAYER")}
      />
    </div>
  );
};

export default AuthType;
