import { useState } from "react";
import UserHttpGateway from "../../gateways/user/UserHttpGateway";
import AxiosAdapter from "../../infra/AxiosAdapter";
import { useRouter } from "next/router";
import { Button } from "../../styles/Button.style";
import { Input } from "../../styles/Input.style";

type LoginProps = {
  changeSign: () => void;
};

export default function SignIn({ changeSign }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const httpClient = new AxiosAdapter();
    const userGateway = new UserHttpGateway(
      httpClient,
      "http://localhost:3001/user",
    );
    userGateway
      .login(email, password)
      .then(() => {
        router.push("/");
      })
      .catch(() => {
        alert("Invalid email or password");
      });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    switch (event.target.id) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <Input
            id="email"
            type="email"
            onChange={handleChange}
            placeholder="Email Address"
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
        <Button type="submit">Sign In</Button>
      </form>
      <div>
        <h3>New user</h3>
        <Button onClick={changeSign}>REGISTER</Button>
      </div>
    </div>
  );
}
