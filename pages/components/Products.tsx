import { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import Product from "../entities/Product";
import AxiosAdapter from "../infra/AxiosAdapter";
import CatalogHttpGateway from "../gateways/catalog/CatalogHttpGateway";
import { Input } from "../styles/Input.style";
import { Section } from "../styles/Section.style";
import { MainPage } from "../styles/MainPage";
import { Select } from "../styles/Select.style";

type OrderBy = {
  orderOption: "price" | "name";
  direction: "asc" | "desc";
};

export default function Products() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [order, setOrder] = useState<OrderBy>();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const httpClient = new AxiosAdapter();
    const catalogGateway = new CatalogHttpGateway(
      httpClient,
      "http://localhost:3001/catalog",
    );
    catalogGateway.getProducts().then((products) => setProductsData(products));
  }, []);

  useEffect(() => {
    if (order) {
      const httpClient = new AxiosAdapter();
      const catalogGateway = new CatalogHttpGateway(
        httpClient,
        "http://localhost:3001/catalog",
      );
      catalogGateway
        .getProducts(order)
        .then((products) => setProductsData(products));
    }
  }, [order]);

  function handleOrderChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const order = event.target.value;
    switch (order) {
      case "low-to-high":
        setOrder({
          orderOption: "price",
          direction: "asc",
        });
        break;
      case "high-to-low":
        setOrder({
          orderOption: "price",
          direction: "desc",
        });
        break;
      case "a-to-z":
        setOrder({
          orderOption: "name",
          direction: "asc",
        });
        break;
      case "z-to-a":
        setOrder({
          orderOption: "name",
          direction: "desc",
        });
        break;
      default:
        setOrder(undefined);
        break;
    }
  }

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [productsData, searchTerm]);

  function handleSearchChange(term: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = term.target.value;
    setSearchTerm(searchTerm);
  }

  return (
    <MainPage>
      <Input type="text" placeholder="Search" onChange={handleSearchChange} />
      <Select name="order" id="order" onChange={handleOrderChange}>
        <option value="default">Sort by</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
        <option value="a-to-z">Name: A to Z</option>
        <option value="z-to-a">Name: Z to A</option>
      </Select>
      <Section>
        {filteredProducts.map((product: Product, index: number) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            id={product.id}
          />
        ))}
      </Section>
    </MainPage>
  );
}
