import { Button } from "./styles/Button.style";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>R$ {price}</p>
      <Button>Get Subscription</Button>
    </div>
  );
}
