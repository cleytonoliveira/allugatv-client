import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Product from "../entities/Product";
import AxiosAdapter from "../infra/AxiosAdapter";
import CatalogHttpGateway from "../gateways/CatalogHttpGateway";

export default function Products() {
  const [productsData, setProductsData] = useState<Product[]>([]);

  useEffect(() => {
    const httpClient = new AxiosAdapter();
    const catalogGateway = new CatalogHttpGateway(
      httpClient,
      "http://localhost:3001/catalog",
    );
    catalogGateway.getProducts().then((products) => setProductsData(products));
  }, []);

  return (
    <main>
      <h1>Products</h1>
      <section>
        {productsData.map((product: Product, index: number) => (
          <Link key={index} href={`/product/${product.id}`}>
            <ProductCard
              name={product.name}
              image={product.image}
              price={product.price}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
