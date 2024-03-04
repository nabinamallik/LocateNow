
import "./navbar.css"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <header class="header">
    <h1 class="logo"><a href="#">LocateNow</a></h1>
      <ul class="main-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li>
          <a id="login">Login</a>
          </li>
      </ul>
    </header> 

  )
}

export default Navbar