import Product from "../entities/Product";
import HttpClient from "../infra/HttpClient";
import CatalogGateway from "./CatalogGateway";

type Order = {
  orderOption: "name" | "price";
  direction: "asc" | "desc";
};

export default class CatalogHttpGateway implements CatalogGateway {
  constructor(
    readonly httpClient: HttpClient,
    readonly baseUrl: string,
  ) {}

  async getProducts(orderBy?: Order): Promise<any> {
    const direction = orderBy?.direction === "asc" ? "asc" : "desc";
    const orderOption = orderBy?.orderOption === "name" ? "name" : "price";
    const productsData = await this.httpClient.get(
      `${this.baseUrl}/products?orderBy=${orderOption}&order=${direction}`,
    );
    const products: Product[] = [];
    for (const productData of productsData) {
      products.push(
        new Product(
          productData.productId,
          productData.name,
          productData.image,
          productData.price,
          productData.description,
        ),
      );
    }
    return products;
  }
}
