import Product from "../../entities/Product";

export default interface CatalogGateway {
  getProducts(): Promise<Product[]>;
  getProduct(productId: string): Promise<Product>;
}
