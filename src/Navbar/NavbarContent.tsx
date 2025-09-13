import type { NavbarContentProps } from "./types.ts";

function NavbarContent({ items, isOpen }: NavbarContentProps) {
  return (
    <div className={`navbar-content ${isOpen ? "open" : ""}`}>
      <span className="website-logo">
        <a href="/" rel="noreferrer">
            <span>FABIAN </span>
            <span>Gallery</span>
        </a>
      </span>
      <ul>
        {items.map((item, index) => (
            <span>
                <li key={index} >
                <a href={`#${item.href}`} rel="noreferrer">{item.label}</a>
                </li>
            </span>
        ))}
      </ul>
    </div>
  );
}

export default NavbarContent;