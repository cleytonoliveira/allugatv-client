export default interface HttpClient {
  get(endpoint: string): Promise<any>;
  post(endpoint: string, body: any): Promise<any>;
}
