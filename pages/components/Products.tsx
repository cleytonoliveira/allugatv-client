import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <main>
      <h1>Products</h1>
      <section>
        <ProductCard name="teste" image="teste" price={0} />
      </section>
    </main>
  );
}
