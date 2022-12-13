import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const favRef = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [favRef];
  const logoArr = [logoRef];
  useGsapDownStagger(liArr, 0.9);
  useGsapDownStagger(favArr, 1.6);
  useGsapDownStagger(logoArr, 1.3);

  return (
    <nav className="navbar wrapper">
      <ul className="links">
        <li ref={li1}>
          <Link to="/featured">Featured</Link>
        </li>
        <li ref={li2}>
          <Link to="/about">About</Link>
        </li>
        <li ref={li3}>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="logo" ref={logoRef}>
        <Link to="/">
          <img src="https://svgshare.com/i/oiq.svg" height="50px" />
        </Link>
      </div>
      <div className="favourite-link" ref={favRef}>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
