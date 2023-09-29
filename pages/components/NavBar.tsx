import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../styles/Header.style";
import { Menu } from "../styles/Menu.style";

export default function NavBar() {
  return (
    <Header>
      <Menu>
        <Link href="/">
          <h3>AllugaTv</h3>
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
      </Menu>
    </Header>
  );
}
