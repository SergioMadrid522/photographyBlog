import type { HeaderProps } from "./type.ts";

import MainPicture from "../assets/MainPhoto.webp";

import "./Header.css";

function Header(props: HeaderProps) {
  const { websiteName, slogan } = props;
  return (
    <header>
      <div className="main-pic">
        <img src={MainPicture} alt="Main picture" loading="lazy" />
      </div>
      <div className="catch-phrase">
        <h1>{websiteName}</h1>
        <p>{slogan}</p>
      </div>
    </header>
  );
}

export default Header;