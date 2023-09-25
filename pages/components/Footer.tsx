import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <h3>Allugatv</h3>
      <div>
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <p>© 2023 All rights reserved</p>
    </footer>
  );
}
