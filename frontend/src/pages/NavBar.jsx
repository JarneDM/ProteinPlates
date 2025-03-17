import { Link } from "react-router-dom";
import logo from "../assets/PP-logo-S.png";
import AddLogo from "../assets/addWhite.png";
import "../../public/css/NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li id="logo">
          <Link className="nav-el" to={"/"}>
            <img src={logo} height="15px" alt="sentence logo" />
          </Link>
        </li>
        <li>
          <Link className="nav-el" to={"/pages/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="nav-el" to={"/pages/bulk"}>
            Bulk
          </Link>
        </li>
        <li>
          <Link className="nav-el" to={"/pages/snacks"}>
            Snacks
          </Link>
        </li>
        <li>
          <Link className="nav-el" to={"/pages/cut"}>
            Cut
          </Link>
        </li>
        <li>
          <Link className="nav-el" to={"/pages/AddRecipe"}>
            <img className="addlogo" src={AddLogo} alt="Add" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
