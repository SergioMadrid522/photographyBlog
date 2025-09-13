import type {HamburgerButtonProps} from "./types.ts";

function HamburgerButton({ toggleMenu }: HamburgerButtonProps) {
  return (
    <button
      type="button"
      className="hamburger-btn"
      onClick={toggleMenu}>
      <span>
        <i className={"bi bi-list"}></i>
      </span>
    </button>
  );
}

export default HamburgerButton;