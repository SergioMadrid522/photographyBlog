import { useState } from "react";
import type {
  HamburgerButtonProps,
  NavbarContentProps,
  NavItem,
} from "./types";

import "./Navbar.css";

function HamburgerButton({ toggleMenu }: HamburgerButtonProps) {
  return (
    <button type="button" className="hamburger-btn" onClick={toggleMenu}>
      <span>
        <i className={"bi bi-list"}></i>
      </span>
    </button>
  );
}
function NavbarContent({ items, isOpen }: NavbarContentProps) {
  return (
    <div className={`navbar-content ${isOpen ? "open" : ""}`}>
      <span className="website-logo">
        <a href="/">
          <img src="/" alt="Fabian Gallery Logo" />
        </a>
      </span>
      <ul>
        {items.map((item, index) => (
          <span>
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          </span>
        ))}
      </ul>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "My fave Shots", href: "#faves" },
    { label: "Gallery", href: "#gallery" },
    { label: "About me", href: "#about" },
    { label: "Contact me", href: "#contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="global-navbar">
      <HamburgerButton toggleMenu={toggleMenu} />
      <NavbarContent items={navItems} isOpen={menuOpen} />
    </nav>
  );
}

export default Navbar;
