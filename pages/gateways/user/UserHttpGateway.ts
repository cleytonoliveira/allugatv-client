import User from "../../entities/User";
import HttpClient from "../../infra/HttpClient";
import UserGateway from "./UserGateway";

export default class UserHttpGateway implements UserGateway {
  constructor(
    readonly httpClient: HttpClient,
    readonly baseUrl: string,
  ) {}

  async createUser(user: Omit<User, "id">): Promise<void> {
    await this.httpClient.post(`${this.baseUrl}/register`, user);
  }

  async login(email: string, password: string): Promise<User> {
    const response = await this.httpClient.post(`${this.baseUrl}/login`, {
      email,
      password,
    });

    return response.data;
  }
}
