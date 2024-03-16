import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <h1 className="logo"><Link  className="link" to="/home">LocateNow</Link></h1>
      <ul className="main-nav">
        <li><Link className="link" to="/profile">Profile</Link></li>
        <li><Link className="link" to="/about">About</Link></li>
        <li><input id="input" type="text" placeholder="Search" /></li>
        <li>
          <Link className="link" to='/'>Logout</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
