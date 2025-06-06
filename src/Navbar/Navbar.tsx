import './Navbar.css';

type NavbarContentProps = {
  items: NavItem[];
};

function NavbarContent({ items }: NavbarContentProps) {
  return (
    <div className='navbar-content'>
      <span className='website-logo'>
        <a href="/"><img src="/" alt="Fabian Gallery Logo" /></a>
      </span>
      <ul>
        {
          items.map((item, index) => (
            <li key={index} className='active'>
                <a href={item.href}>{item.label}</a>
            </li>
            )
          )
        }
      </ul>
    </div>
  );
}

type NavItem = {
  label: string;
  href: string;
};
function Navbar() {
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'My fave Shots', href: '#faves' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About me', href: '#about' },
    { label: 'Contact me', href: '#contact' }
  ];

  return (
    <nav className='principal-navbar'>
      <NavbarContent items={navItems} />
    </nav>
  );
}

export default Navbar;
