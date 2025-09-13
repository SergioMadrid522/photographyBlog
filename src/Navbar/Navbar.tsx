//import logo from "../assets/Imagen1.jpg";
import { useState } from "react";
import { navItems } from "./data.ts";
import NavbarContent from "./NavbarContent";
import HamburgerButton from "./HamburgerButton";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="global-navbar">
      <HamburgerButton toggleMenu={toggleMenu} />
      <NavbarContent items={navItems} isOpen={menuOpen} />
    </nav>
  );
}

export default Navbar;
