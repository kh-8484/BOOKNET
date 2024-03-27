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
    <div className={`${className}`}>
      <Button
        title="Player"
        btn={type == "PLAYER" ? "primary" : "secondary"}
        onClick={() => handleAuthType("PLAYER")}
        className="m-r-2"
      />
      <Button
        title="Admin"
        btn={type == "ADMIN" ? "primary" : "secondary"}
        onClick={() => handleAuthType("ADMIN")}
      />
    </div>
  );
};

export default AuthType;
