import { useState } from "react";
import SignIn from "../components/login/SignIn";
import SignUp from "../components/login/SignUp";

export default function Login() {
  const [login, setLogin] = useState(true);

  function changeSign() {
    setLogin(!login);
  }

  return (
    <div>
      {login ? (
        <SignIn changeSign={changeSign} />
      ) : (
        <SignUp changeSign={changeSign} />
      )}
    </div>
  );
}
