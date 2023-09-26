import React, { useState } from "react";
import UserHttpGateway from "../../gateways/user/UserHttpGateway";
import AxiosAdapter from "../../infra/AxiosAdapter";
import User from "../../entities/User";

type LoginProps = {
  changeSign: () => void;
};

export default function SignUp({ changeSign }: LoginProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const httpClient = new AxiosAdapter();
    const userGateway = new UserHttpGateway(
      httpClient,
      "http://localhost:3001/user",
    );
    const user = new User(0, name, email, password);
    userGateway.createUser(user).then(() => {
      changeSign();
    });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    switch (event.target.id) {
      case "fullname":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="fullname">
          Full Name
          <input id="fullname" type="text" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" type="email" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password
          <input id="password" type="password" onChange={handleChange} />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input id="confirmPassword" type="password" onChange={handleChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>

      <div>
        <h3>Are you registered?</h3>
        <button onClick={changeSign}>LOGIN</button>
      </div>
    </div>
  );
}
