import React, { useState } from "react";
import UserHttpGateway from "../../gateways/user/UserHttpGateway";
import AxiosAdapter from "../../infra/AxiosAdapter";
import User from "../../entities/User";
import { Button } from "../../styles/Button.style";
import { Input } from "../../styles/Input.style";

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
          <Input
            id="fullname"
            type="text"
            onChange={handleChange}
            placeholder="Full Name"
          />
        </label>
        <label htmlFor="email">
          Email
          <Input
            id="email"
            type="email"
            onChange={handleChange}
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          Password
          <Input
            id="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <Input
            id="confirmPassword"
            type="password"
            onChange={handleChange}
            placeholder="Confirm your Password"
          />
        </label>
        <Button type="submit">Sign Up</Button>
      </form>

      <div>
        <h3>Are you registered?</h3>
        <Button onClick={changeSign}>LOGIN</Button>
      </div>
    </div>
  );
}
