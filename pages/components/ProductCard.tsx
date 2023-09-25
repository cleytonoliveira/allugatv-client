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
      <button>Get Subscription</button>
    </div>
  );
}
