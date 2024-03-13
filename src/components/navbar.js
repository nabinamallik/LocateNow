import "./navbar.css"
import { Link } from "react-router-dom"
function Navbar() {

  return (
    <header class="header">
    <h1 className="logo"><a href="#">LocateNow</a></h1>
      <ul className="main-nav">
        <li><a href="#">Profile</a></li>
        <li><a href="#">About</a></li>
        <li><input id="input" type="text" placeholder="Search"/></li>
        <li>
          <a id="login"><Link to='/login'>Logout</Link></a>
          </li>
      </ul>
    </header> 

  )
}

export default Navbar