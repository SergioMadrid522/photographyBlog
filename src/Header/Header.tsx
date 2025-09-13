import "./Header.css";
import MainPicture from "../assets/MainPhoto.webp";

type HeaderProps = {
  websiteName: string;
  slogan: string;
};
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
