import Link from "next/link";
import { Button } from "../styles/Button.style";
import { Card } from "../styles/Card.style";
import { Image } from "../styles/Image.style";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  id: number;
}

export default function ProductCard({
  image,
  name,
  price,
  id,
}: ProductCardProps) {
  return (
    <Card>
      <Link href={`/product/${id}`}>
        <Image src={image} alt={name} />
        <h2>{name}</h2>
        <p>R$ {price}</p>
        <Button>Get Subscription</Button>
      </Link>
    </Card>
  );
}
