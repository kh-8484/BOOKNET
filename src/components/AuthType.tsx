import Button from "./Button";

const AuthType = ({
  handleAuthType,
  type,
}: {
  handleAuthType: (type: string) => void;
  type: string;
}) => {
  return (
    <div className="container">
      <Button
        title="Admin"
        btn={type == "ADMIN" ? "primary" : "secondary"}
        onClick={() => handleAuthType("ADMIN")}
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
