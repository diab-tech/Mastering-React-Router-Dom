// src/pages/Login.tsx
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../Ui/Input";
import { useNavigate } from "react-router-dom";
import ErrorHandler from "../components/errors/ErrorHandler";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  function loginHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    try {
      if (!userName || !password) {
        throw new Error("Both fields are required.");
      }

      console.log("Logging in with:", { userName, password });
      navigate("/contribute");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  }

  function inputHandler(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    if (name === "password") {
      setPassword(value);
    } else if (name === "userName") {
      setUserName(value);
    }
  }

  if (error) {
    return <ErrorHandler message={error} />;
  }

  return (
    <form onSubmit={loginHandler}>
      <Input
        type="text"
        name="userName"
        id="Uname"
        label="User Name"
        value={userName}
        onChange={inputHandler}
      />
      <Input
        type="password"
        name="password"
        id="Upassword"
        label="Password"
        onChange={inputHandler}
        value={password}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
