import "../../App.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <div className="footer">
      <div>
        <Link to="/" className="logo" style={{ textDecoration: "none" }}>
          <FontAwesomeIcon icon={faTicket} size="3x" className="Section-Icon" />
          <div className="site-title">Link</div>
        </Link>
      </div>
    </div>
  );
}
