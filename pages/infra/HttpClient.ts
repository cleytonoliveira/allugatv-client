export default interface HttpClient {
  get(endpoint: string): Promise<any>;
}
