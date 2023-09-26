import axios from "axios";
import HttpClient from "./HttpClient";

export default class AxiosAdapter implements HttpClient {
  async get(endpoint: string): Promise<any> {
    const response = await axios.get(endpoint);
    return response.data;
  }

  async post(endpoint: string, body: any): Promise<any> {
    const response = await axios.post(endpoint, body);
    return response.data;
  }
}
