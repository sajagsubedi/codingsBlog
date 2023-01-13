import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header id="Header" className="Header">
      <div className="phoneVisible">
        <h1 className="headerTitle">
          <Link to="/">
            <BsCodeSlash />
            CodingsBlog
          </Link>
        </h1>
        <div
          className="menuToggle"
          onClick={() => {
            document.getElementById("Header").classList.toggle("HeaderActive");
          }}
        ></div>
      </div>
      <nav className="Navbar">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Categories</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <div className="IconsGroup">
          <a href="https://facebook.com" target="_blank">
            <FaFacebookSquare />
          </a>

          <a href="https://github.com/sajagsubedi" target="_blank">
            <BsGithub />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagramSquare />
          </a>
        </div>
      </nav>
    </header>
  );
}
