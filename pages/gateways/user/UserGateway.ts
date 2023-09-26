import User from "../../entities/User";

export default interface UserGateway {
  createUser(user: User): Promise<void>;
}
