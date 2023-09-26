import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <header>
      <nav>
        <Link href="/">
          <h3>Allugatv</h3>
        </Link>
        <Link href="/">Shop</Link>
        <ul>
          <li>
            <Link href="/login">
              <FontAwesomeIcon icon={faUser} size="xl" />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <FontAwesomeIcon icon={faShoppingBag} size="xl" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
