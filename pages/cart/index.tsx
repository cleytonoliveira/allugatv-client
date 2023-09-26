import Link from "next/link";
import { useCartContext } from "../contexts/CartContext";

export default function Cart() {
  const { cart } = useCartContext();

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <span>R$ {product.price}</span>
        </div>
      ))}
      <Link href="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}
