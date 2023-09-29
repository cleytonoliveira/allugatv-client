import Link from "next/link";
import { useCartContext } from "../contexts/CartContext";
import { Button } from "../styles/Button.style";
import { MainPage } from "../styles/MainPage";

export default function Cart() {
  const { cart } = useCartContext();

  return (
    <MainPage>
      <h1>Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <span>R$ {product.price}</span>
        </div>
      ))}
      <Link href="/checkout">
        <Button>Checkout</Button>
      </Link>
    </MainPage>
  );
}
