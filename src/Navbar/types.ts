export type HamburgerButtonProps = {
  toggleMenu: () => void;
};

export type NavbarContentProps = {
  items: NavItem[];
  isOpen: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};
