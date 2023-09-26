import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AxiosAdapter from "../infra/AxiosAdapter";
import CatalogHttpGateway from "../gateways/catalog/CatalogHttpGateway";
import Product from "../entities/Product";
import Link from "next/link";
import { useCartContext } from "../contexts/CartContext";

export default function ProductDetails() {
  const router = useRouter();
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    image: "",
    price: 0,
  });
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    if (router.query.id) {
      const httpClient = new AxiosAdapter();
      const catalogGateway = new CatalogHttpGateway(
        httpClient,
        "http://localhost:3001/catalog",
      );
      const productId = router.query.id.toString();
      catalogGateway.getProduct(productId).then((product) => {
        setProduct(product);
      });
    }
  }, [router.query.id]);

  function handleSubscription() {
    setCart([...cart, product]);
  }

  return (
    <div>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>100% protection against qualified theft and robbery</p>
        <p>Free shipping</p>
        <p>{product.description}</p>
        <p>R$ {product.price}</p>
        <p>Subscription period: 12 months</p>
        <p>Delivery time: 10 business days</p>
        <Link href={"/cart"} onClick={handleSubscription}>
          <button>Subscription</button>
        </Link>
      </div>
    </div>
  );
}
