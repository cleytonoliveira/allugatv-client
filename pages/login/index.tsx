import { useState } from "react";
import SignIn from "../components/login/SignIn";
import SignUp from "../components/login/SignUp";
import { MainPage } from "../styles/MainPage";

export default function Login() {
  const [login, setLogin] = useState(true);

  function changeSign() {
    setLogin(!login);
  }

  return (
    <MainPage>
      {login ? (
        <SignIn changeSign={changeSign} />
      ) : (
        <SignUp changeSign={changeSign} />
      )}
    </MainPage>
  );
}
